import { Shield } from 'lucide-react';

const Audits = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Shield size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Audits</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* What is an Audit Section */}
        <section className="content-section">
          <h2>What is an audit?</h2>
          <p className="content-paragraph">
            An audit is one of the methods RRA uses to ensure that taxpayers are correctly declaring and paying their taxes. Audits involve RRA checking the relevant documents concerning a taxpayer's tax obligations for any tax period(s) within the past five years.
          </p>
          <p className="content-paragraph">
            If there is evidence of non-compliance, the taxpayer will be issued with an assessment notice. This contains details of the offence(s), and the unpaid tax due, as well as additional penalties or fines that must be paid.
          </p>
          <p className="content-paragraph">
            It is important to note that being selected for an audit does not necessarily mean that RRA suspects the taxpayer of non-compliance. Instead, RRA wishes to check a taxpayer's declarations and payments in more detail, to encourage a high level of compliance across all taxpayers.
          </p>
          <p className="content-paragraph">
            The processes for audits are similar for domestic taxes, Local Government Taxes (LGT) and fees, and for Post-Clearance Audits (PCAs) regarding customs duties.
          </p>
        </section>

        {/* Types of Audits Section */}
        <section className="content-section">
          <h2>What are the different types of audits?</h2>
          <p className="content-paragraph">
            There are three main types of audits:
          </p>
          <ul className="content-list">
            <li>Comprehensive audit;</li>
            <li>Issue-oriented audit;</li>
            <li>Desk audit;</li>
            <li>Transfer pricing audit;</li>
            <li>Refund audit</li>
          </ul>
          <p className="content-paragraph">
            Comprehensive audits are more in-depth and time-intensive. These are usually conducted by RRA staff whilst visiting the taxpayer's business premises and reviewing all relevant documents.
          </p>
          <p className="content-paragraph">
            Issue-oriented audits are usually focussed on a single tax type, single aspect or single tax period. Issue audits may be desk-based or involve visits to the taxpayer's business premises.
          </p>
          <p className="content-paragraph">
            Desk audits are conducted by RRA staff using information that has already been submitted to RRA. Transfer pricing audit focuses on related party transactions.
          </p>
          <p className="content-paragraph">
            Refund audits are a type of issue audit, focused on tax declarations claiming refunds from RRA.
          </p>
        </section>

        {/* Audit Notification Section */}
        <section className="content-section">
          <h2>When are taxpayers informed about audits?</h2>
          <p className="content-paragraph">
            In the case of desk audits, taxpayers may not be informed about the audit unless a specific problem is identified. Taxpayers will always be invited to offer explanations before being issued with assessment notices.
          </p>
          <p className="content-paragraph">
            In the case of issue audits, taxpayers will be notified at least three working days beforehand. The postponement of such an issue-oriented audit cannot exceed seven (7) working days.
          </p>
          <p className="content-paragraph">
            In the case of comprehensive audits, taxpayers will be notified at least seven working days beforehand. If the taxpayer is not ready, they may write to RRA requesting an extension, up to a maximum of thirty days.
          </p>
          <p className="content-paragraph">
            Taxpayers will be informed of what is required of them, the documents required by RRA, their rights, the anticipated timeframe, and the process of the audit during the notification of the audit or the initial meeting.
          </p>
          <p className="content-paragraph">
            Any unpaid taxes or additional penalties or fines must be paid within seven days of receipt of the assessment notice.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Audits;
