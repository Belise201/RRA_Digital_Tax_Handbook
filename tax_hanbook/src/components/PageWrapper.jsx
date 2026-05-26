import { useRef, useCallback, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { usePageContent } from '../hooks/usePageContent';
import AdminEditBar from './AdminEditBar';
import { sanitizeHandbookHtml } from '../utils/sanitizeHandbookHtml';
import './PageWrapper.css';

const CMS_OVERRIDE_DISABLED_PATHS = new Set([
  '/faq',
  '/profile',
  '/',
  // FAQ summary pages use React accordion — CMS override would break expandable questions
  '/registration-summary',
  '/domestic-e-tax',
  '/pit-cit-sum',
  '/paye-sum',
  '/vat-sum',
  '/eis-sum',
  '/excise-sum',
  '/wht-sum',
  '/customs-sum',
  '/paying-sum',
  '/obligations',
  '/decentralised-entities',
  '/deregistration',
]);

const PAGE_TITLES = {
  '/':                           'Home',
  '/introduction':               'Introduction',
  '/foreword':                   'Foreword',
  '/rra-info':                   'RRA Contact Details',
  '/definitions':                'Definitions',
  '/acronyms':                   'Acronyms',
  '/laws-rulings':               'Laws, Orders & Rulings',
  '/obligations':                'Obligations & Bookkeeping',
  '/decentralised-entities':     'Decentralised Entities Taxes & Fees',
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
  '/deregistration':             'De-Registration',
  '/faq':                        'Submit a new question',
  '/profile':                    'Your account',
};

const cleanRenderedHTML = (html) => sanitizeHandbookHtml(html);

const PageWrapper = ({ children }) => {
  const location           = useLocation();
  const { user, isAdmin }  = useAuth();
  const pagePath           = location.pathname;
  const pageTitle          = PAGE_TITLES[pagePath] || pagePath;
  const contentRef         = useRef(null);

  const cmsOverrideDisabled = CMS_OVERRIDE_DISABLED_PATHS.has(pagePath);
  const { data, loading, refetch } = usePageContent(pagePath);

  const adminView   = Boolean(user && isAdmin());
  const isHidden    = data && !data.active;

  const showLiveOverride =
    !cmsOverrideDisabled && Boolean(data?.active && data?.content?.trim());

  // ── Smooth-scroll to hash after CMS content loads ─────────────────────────
  useEffect(() => {
    if (loading || showLiveOverride) return;
    if (location.hash !== '#community-faq-section') return;
    const tid = window.setTimeout(() => {
      document.getElementById('community-faq-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => window.clearTimeout(tid);
  }, [loading, showLiveOverride, location.pathname, location.hash]);

  // ── Admin helper: capture page HTML for the editor ────────────────────────
  const getPageHTML = useCallback(() => {
    if (data?.content?.trim()) return data.content;
    if (contentRef.current) return cleanRenderedHTML(contentRef.current.innerHTML);
    return '';
  }, [data?.content]);

  if (loading) return <>{children}</>;

  if (isHidden && !adminView) {
    const target = pagePath === '/' ? '/introduction' : '/';
    return <Navigate to={target} replace />;
  }

  return (
    <>
      {adminView && (
        <AdminEditBar
          pagePath={pagePath}
          pageTitle={pageTitle}
          pageData={data}
          allowHtmlOverride={!cmsOverrideDisabled}
          onSaved={refetch}
          getPageHTML={getPageHTML}
        />
      )}

      {isHidden && adminView && (
        <div className="pw-hidden-banner">
          <AlertTriangle size={14} />
          This page is hidden from the public. Only you (admin) can see it.
        </div>
      )}

      <div hidden={showLiveOverride} style={showLiveOverride ? { display: 'none' } : undefined}>
        <div ref={showLiveOverride ? undefined : contentRef}>{children}</div>
      </div>
      {showLiveOverride && (
        <div
          ref={contentRef}
          className="pw-override__body"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      )}
    </>
  );
};

export default PageWrapper;
