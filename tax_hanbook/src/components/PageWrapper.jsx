import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { usePageContent } from '../hooks/usePageContent';
import AdminEditBar from './AdminEditBar';
import './PageWrapper.css';

// Map common paths to readable titles
const PAGE_TITLES = {
  '/':                           'Home',
  '/introduction':               'Introduction',
  '/foreword':                   'Foreword',
  '/rra-info':                   'RRA Contact Details',
  '/definitions':                'Definitions',
  '/acronyms':                   'Acronyms',
  '/laws-rulings':               'Laws, Orders & Rulings',
  '/obligations':                'Obligations & Bookkeeping',
  '/audits':                     'Audits',
  '/refunds':                    'Refunds / Tax Credits',
  '/appeals':                    'Appeals',
  '/debt-management':            'Debt Management',
  '/certificates':               'Certificates',
  '/vds':                        'Voluntary Disclosure Scheme',
  '/vat-reward':                 'VAT Reward',
  '/communicate-rra':            'Communicate to RRA',
  '/online-requests':            'Online Requests',
  '/exchange-info':              'Exchange of Information',
  '/motor-vehicle':              'Motor Vehicle',
  '/myrra':                      'MyRRA',
  '/registration':               'Registration',
  '/registration-explanation':   'Explanation of Registration',
  '/registration-guide':         'Registration Guide',
  '/domestic-taxes':             'Domestic Taxes & E-Tax',
  '/income-tax-explanation':     'Income Tax (PIT & CIT)',
  '/paye-explanation':           'PAYE',
  '/paye-declaration':           'Declaring PAYE',
  '/vat-explanation':            'Value Added Tax (VAT)',
  '/vat-declaration':            'Declaring VAT',
  '/vat':                        'VAT',
  '/excise-explanation':         'Excise Duty',
  '/excise-declaration':         'Declaring Excise Duty',
  '/withholding-taxes-explanation': 'Withholding Taxes',
  '/withholding-taxes-declaration': 'Declaring Withholding Taxes',
  '/gaming-tax-explanation':     'Gaming Taxes',
  '/mining-royalty-explanation': 'Mining Royalty',
  '/capital-gains-tax-explanation': 'Capital Gains Tax',
  '/customs-explanation':        'Customs',
  '/paying-taxes':               'Paying Taxes',
};

/**
 * Strip SVG icons, data-react attributes, and inline event handlers from raw
 * rendered HTML so the editor starts with clean, human-readable markup.
 */
const cleanRenderedHTML = (html) => {
  const div = document.createElement('div');
  div.innerHTML = html;
  // Remove icon SVGs and any script/style nodes
  div.querySelectorAll('svg, script, style, noscript').forEach(el => el.remove());
  // Remove data-* and aria-* attributes that clutter the editor
  div.querySelectorAll('*').forEach(el => {
    [...el.attributes].forEach(attr => {
      if (attr.name.startsWith('data-') || attr.name.startsWith('aria-') || attr.name === 'class') {
        el.removeAttribute(attr.name);
      }
    });
  });
  return div.innerHTML;
};

const PageWrapper = ({ children }) => {
  const location           = useLocation();
  const { user, isAdmin }  = useAuth();
  const pagePath           = location.pathname;
  const pageTitle          = PAGE_TITLES[pagePath] || pagePath;
  const contentRef         = useRef(null);   // ref on the rendered content

  const { data, loading, refetch } = usePageContent(pagePath);

  // While fetching, render the static page without any flash
  if (loading) return <>{children}</>;

  const adminView   = user && isAdmin();
  const isHidden    = data && !data.active;
  const hasOverride = data && data.active && data.content && data.content.trim();

  // Non-admin visiting a hidden page
  if (isHidden && !adminView) {
    return (
      <div className="pw-unavailable">
        <AlertTriangle size={48} className="pw-unavailable__icon" />
        <h2>Page Unavailable</h2>
        <p>This page has been temporarily removed by an administrator.</p>
      </div>
    );
  }

  /**
   * Called by AdminEditBar when the editor opens.
   * Returns the current content (saved override if it exists, otherwise the
   * live rendered DOM HTML) so the admin can edit what's already there.
   */
  const getPageHTML = () => {
    if (data?.content?.trim()) return data.content;
    if (contentRef.current) return cleanRenderedHTML(contentRef.current.innerHTML);
    return '';
  };

  return (
    <>
      {/* Admin toolbar — rendered FIRST so it appears above the page content */}
      {adminView && (
        <AdminEditBar
          pagePath={pagePath}
          pageTitle={pageTitle}
          pageData={data}
          onSaved={refetch}
          getPageHTML={getPageHTML}
        />
      )}

      {/* Admin viewing a hidden page — warn them */}
      {isHidden && adminView && (
        <div className="pw-hidden-banner">
          <AlertTriangle size={14} />
          This page is hidden from the public. Only you (admin) can see it.
        </div>
      )}

      {/*
        If the admin has saved an override, it replaces the static page for
        ALL visitors — no badge or label, content appears naturally.
        Otherwise the original static React component renders as normal.
      */}
      <div ref={contentRef}>
        {hasOverride ? (
          <div className="pw-override__body"
               dangerouslySetInnerHTML={{ __html: data.content }} />
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default PageWrapper;
