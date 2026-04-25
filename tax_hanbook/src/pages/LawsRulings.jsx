import { ExternalLink, FileText, Scale } from 'lucide-react';

const LawsRulings = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Scale size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Laws, Ministerial Orders and Rulings</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Where are the laws, ministerial orders and rulings governing tax administration published?</h2>
          <p className="content-paragraph">
            All laws, ministerial orders, Commissioner General (CG) rulings, public rulings and ruling cases governing tax administration are available on the RRA website at:
          </p>
          <p className="content-paragraph">
            <a
              href="https://www.rra.gov.rw/en/laws-policies-and-rulings"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--primary)', textDecoration: 'underline' }}
            >
              https://www.rra.gov.rw/en/laws-policies-and-rulings
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>How can taxpayers ask for rulings if anything is unclear?</h2>
          <p className="content-paragraph">
            If there are any aspects that are unclear, or not covered, by the existing laws, ministerial orders or previous rulings then taxpayers may ask for an official clarification or ruling to be made by RRA.
          </p>
          <p className="content-paragraph">
            In order to request a ruling, taxpayers must write a letter addressed to the Commissioner General of RRA. This letter should:
          </p>
          <ul className="content-list">
            <li>Identify the taxpayer's name and TIN.</li>
            <li>Identify the relevant sections of laws, ministerial orders or previous rulings.</li>
            <li>State the reason(s) that a ruling is required.</li>
          </ul>
          <p className="content-paragraph">
            RRA will consider the request and inform the taxpayer of the official ruling directly. In the event that the ruling is considered to be useful to taxpayers more generally, this will also be published as an official ruling on the RRA website on the link above.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LawsRulings;
