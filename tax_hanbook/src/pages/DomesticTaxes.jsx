import { Navigate } from 'react-router-dom';

/**
 * Q&A for this topic lives under FAQs only. Old path redirects for bookmarks and search.
 */
const DomesticTaxes = () => <Navigate to="/faq#faq-domestic-taxes" replace />;

export default DomesticTaxes;
