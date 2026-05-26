/**
 * Formal RRA-style admin PDF (header, report details, tables, signature block).
 * Uses jsPDF + jspdf-autotable (dynamic import).
 */

const MM = (v) => v;

/** @param {string} path relative to Vite base, e.g. "images/rra-logo.png" */
function assetHref(path) {
  const raw = import.meta.env.BASE_URL || '/';
  const base = raw.endsWith('/') ? raw : `${raw}/`;
  const p = path.startsWith('/') ? path.slice(1) : path;
  return new URL(p, window.location.origin + base).href;
}

async function tryFetchImageDataUrl(paths) {
  for (const p of paths) {
    try {
      const res = await fetch(assetHref(p), { cache: 'force-cache' });
      if (!res.ok) continue;
      const blob = await res.blob();

      const dataUrl = await new Promise((resolve, reject) => {
        const blobUrl = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(blobUrl);
          const w = img.naturalWidth  || 400;
          const h = img.naturalHeight || 400;
          const canvas = document.createElement('canvas');
          canvas.width  = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);

          const id = ctx.getImageData(0, 0, w, h);
          const d  = id.data;

          // Flood-fill background removal starting from all 4 corners.
          // Only connected pixels whose colour is within `tol` of the corner
          // pixel are erased — so internal logo colours (even similar blues)
          // stay intact because they are not reachable from the edges.
          const tol     = 32;
          const visited = new Uint8Array(w * h);

          function floodFill(sx, sy) {
            const si = (sy * w + sx) * 4;
            if (d[si + 3] === 0) return;
            const [br, bg, bb] = [d[si], d[si + 1], d[si + 2]];
            const stack = [sy * w + sx];
            while (stack.length) {
              const pos = stack.pop();
              if (visited[pos]) continue;
              visited[pos] = 1;
              const i = pos * 4;
              if (d[i + 3] === 0) continue;
              if (
                Math.abs(d[i]     - br) > tol ||
                Math.abs(d[i + 1] - bg) > tol ||
                Math.abs(d[i + 2] - bb) > tol
              ) continue;
              d[i + 3] = 0; // erase this background pixel
              const x = pos % w;
              const y = Math.floor(pos / w);
              if (x > 0)     stack.push(pos - 1);
              if (x < w - 1) stack.push(pos + 1);
              if (y > 0)     stack.push(pos - w);
              if (y < h - 1) stack.push(pos + w);
            }
          }

          // Seed from every corner so all background edges are caught
          floodFill(0,     0);
          floodFill(w - 1, 0);
          floodFill(0,     h - 1);
          floodFill(w - 1, h - 1);

          ctx.putImageData(id, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        img.onerror = () => { URL.revokeObjectURL(blobUrl); reject(new Error('img')); };
        img.src = blobUrl;
      });

      if (typeof dataUrl === 'string' && dataUrl.startsWith('data:')) return dataUrl;
    } catch {
      /* try next */
    }
  }
  return null;
}

export function formatReportDate(d) {
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function parseInputDateStart(iso) {
  if (!iso) return null;
  const [y, m, day] = iso.split('-').map(Number);
  if (!y || !m || !day) return null;
  return new Date(y, m - 1, day, 0, 0, 0, 0);
}

export function parseInputDateEnd(iso) {
  if (!iso) return null;
  const [y, m, day] = iso.split('-').map(Number);
  if (!y || !m || !day) return null;
  return new Date(y, m - 1, day, 23, 59, 59, 999);
}

export function filterAuditLogs(logs, start, end, adminEmail) {
  return (logs || []).filter((l) => {
    const t = l.createdAt ? new Date(l.createdAt).getTime() : 0;
    if (start && t < start.getTime()) return false;
    if (end && t > end.getTime()) return false;
    if (adminEmail && String(l.adminEmail || '') !== String(adminEmail)) return false;
    return true;
  });
}

export function filterUsersByCreated(users, start, end) {
  return (users || []).filter((u) => {
    if (!u.createdAt) {
      if (start || end) return false;
      return true;
    }
    const t = new Date(u.createdAt).getTime();
    if (start && t < start.getTime()) return false;
    if (end && t > end.getTime()) return false;
    return true;
  });
}

export function filterDailyViews(stats, start, end) {
  return (stats || []).filter((row) => {
    if (!row.date) return false;
    const d = new Date(row.date + 'T12:00:00');
    const t = d.getTime();
    if (start && t < start.getTime()) return false;
    if (end && t > end.getTime()) return false;
    return true;
  });
}

/**
 * @param {object} opts
 * @param {string} opts.fileName
 * @param {string} opts.organizationName
 * @param {string[]} opts.headerLines — left column under logo (uppercase lines)
 * @param {string[]} opts.contactRight — right-aligned address lines
 * @param {string} opts.reportTitle — main centered title
 * @param {string} opts.reportPeriodText
 * @param {string} opts.preparedBy
 * @param {string} opts.dateGeneratedText
 * @param {string} opts.signatureDateText
 * @param {string} opts.footerGeneratedBy
 * @param {{ label: string, value: string }[]} opts.reportDetailRows
 * @param {{ sectionTitle?: string, head: string[][], body: string[][] }[]} opts.tables
 */
export async function generateAdminFormalPdf(opts) {
  const [{ jsPDF }, { default: autoTable }] = await Promise.all([
    import('jspdf'),
    import('jspdf-autotable'),
  ]);

  const doc = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = MM(14);
  const blue = [0, 102, 179];
  const orange = [230, 126, 34];
  const green = [39, 160, 90];
  const textDark = [33, 37, 41];

  let y = MM(10);

  // ── Header: logo left, org name centre-left, contact right ──────────────
  // Try the standalone splash icon first (no text baked in), fall back to full logo.
  const logoDataUrl = await tryFetchImageDataUrl(['rra-icon.png', 'images/rra-logo.png']);
  const logoW = MM(22);
  const logoH = MM(22);
  if (logoDataUrl) {
    try {
      doc.addImage(logoDataUrl, 'PNG', margin, y, logoW, logoH, undefined, 'FAST');
    } catch {
      /* ignore */
    }
  }

  // Organisation name block — to the right of the splash icon
  const textX = margin + logoW + MM(4);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...blue);
  doc.text('RWANDA REVENUE AUTHORITY', textX, y + MM(13));

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(90, 90, 90);
  doc.text('TAXES FOR GROWTH AND DEVELOPMENT', textX, y + MM(18));

  // Contact block — right-aligned, vertically centred against logo height
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(60, 60, 60);
  const contact = opts.contactRight || [];
  const lineH = 4.5;
  const blockH = contact.length * lineH;
  let cy = y + (logoH - blockH) / 2 + lineH * 0.8;
  contact.forEach((line) => {
    const w = doc.getTextWidth(line);
    doc.text(line, pageW - margin - w, cy);
    cy += lineH;
  });

  y += logoH + MM(4);
  doc.setDrawColor(...blue);
  doc.setLineWidth(0.6);
  doc.line(margin, y, pageW - margin, y);
  y += 1.2;
  doc.setDrawColor(...orange);
  doc.setLineWidth(0.35);
  doc.line(margin, y, pageW - margin, y);
  y += 5;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...blue);
  doc.text('REPORT DETAILS', margin, y);
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  (opts.reportDetailRows || []).forEach((row) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${row.label}`, margin, y);
    doc.setFont('helvetica', 'normal');
    const lw = doc.getTextWidth(`${row.label} `);
    const val = String(row.value ?? '');
    const split = doc.splitTextToSize(val, pageW - margin - lw - margin);
    doc.text(split, margin + lw + 1, y);
    y += Math.max(5, 4 + (split.length - 1) * 4.2);
  });

  y += 2;
  doc.setDrawColor(...green);
  doc.setLineWidth(0.45);
  doc.line(margin, y, pageW - margin, y);
  y += 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(...blue);
  const title = opts.reportTitle || 'Report';
  doc.text(title, pageW / 2, y, { align: 'center' });
  y += 10;

  const tableColor = {
    headFill: [240, 248, 255],
    headText: [0, 51, 102],
    lineColor: [60, 60, 60],
  };

  const tables = opts.tables || [];
  tables.forEach((tbl, idx) => {
    if (tbl.sectionTitle) {
      if (y > pageH - 40) {
        doc.addPage();
        y = margin + 6;
      }
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(...blue);
      doc.text(tbl.sectionTitle, margin, y);
      y += 6;
    }
    const body = tbl.body || [];
    if (!body.length && !tbl.head?.length) return;

    autoTable(doc, {
      startY: y,
      head: tbl.head?.length ? tbl.head : undefined,
      body: body.length ? body : [['—', 'No data for the selected filters.']],
      theme: 'grid',
      styles: {
        fontSize: 8,
        cellPadding: 2.5,
        lineColor: tableColor.lineColor,
        lineWidth: 0.1,
        valign: 'middle',
      },
      headStyles: {
        fillColor: tableColor.headFill,
        textColor: tableColor.headText,
        fontStyle: 'bold',
        halign: 'center',
      },
      bodyStyles: { textColor: textDark },
      margin: { left: margin, right: margin },
    });
    y = doc.lastAutoTable.finalY + (idx < tables.length - 1 ? 8 : 10);
    if (y > pageH - 35) {
      doc.addPage();
      y = margin + 6;
    }
  });

  if (y > pageH - 42) {
    doc.addPage();
    y = margin + 8;
  } else {
    y += 6;
  }

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...textDark);
  doc.text('Prepared by:', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.text(opts.preparedBy || '—', margin + 28, y);
  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.text('Signature:', margin, y);
  doc.setDrawColor(40, 40, 40);
  doc.setLineWidth(0.25);
  doc.line(margin + 22, y - 0.8, margin + 85, y - 0.8);
  y += 6;
  doc.text('Date:', margin, y);
  doc.text(opts.signatureDateText || opts.dateGeneratedText || '—', margin + 18, y);
  y += 10;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  const foot = opts.footerGeneratedBy || 'Generated by Tax Handbook Admin';
  doc.text(foot, pageW / 2, pageH - 12, { align: 'center' });

  doc.save(opts.fileName || 'report.pdf');
}
