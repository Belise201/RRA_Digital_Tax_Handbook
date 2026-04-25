import { RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Refunds = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <RotateCcw size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Refunds/Tax credits</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Types of Refunds Section */}
        <section className="content-section">
          <h2>What are the different types of refunds/tax credits?</h2>
          <p className="content-paragraph">
            There are situations where it is possible for taxpayers to have overpaid the amount of taxes due, and require refunds/tax credits. These situations occur most frequently for:
          </p>
          <ul className="content-list">
            <li>VAT – where the VAT paid on inputs exceeds the output VAT, particularly in the case of zero-rated products and exports.</li>
            <li>Income Tax – where the Instalment Quarterly Prepayments paid by the taxpayer and the Withholding Taxes withheld and paid on behalf of the taxpayer exceed the Income Tax due.</li>
            <li>Audits – where the result of an audit finds that the taxpayer has over declared and over paid.</li>
            <li>Appeals – where the taxpayer pays the taxes due, and is subsequently successful in their appeal.</li>
            <li>Any accidental overpayment.</li>
          </ul>
          <p className="content-paragraph">
            There is also a special allowance of VAT Refunds for Privileged Persons, <Link to="/refunds">(check on Refunds/Tax Credits)</Link> for more details.
          </p>
        </section>

        {/* Refund Process Section */}
        <section className="content-section">
          <h2>What is the process for taxpayers to receive refunds?</h2>
          <p className="content-paragraph">
            In the case of VAT refunds, the refund process requires no initial action from the taxpayer. For higher value refunds, the claims are refunded to the taxpayer's bank account. For lower value refunds, the claims may be deducted against future payments. <Link to="/refunds">(check on Refunds/Tax Credits)</Link> for more details on VAT refunds.
          </p>
          <p className="content-paragraph">
            In the case of refunds/tax credits due to successful appeals, the refund/tax credits process requires no additional action from the taxpayer.
          </p>
          <p className="content-paragraph">
            For all tax credits, the taxpayer must write a letter addressed to the tax administration. This means either addressed to the 'Assistant Commissioner in charge of Filing and Payment Monitoring Division in case of tax credits resulting from taxpayers' self-assessment', or the 'Assistant Commissioner in charge of Debt Management Division' for tax credits resulting from tax administration assessments. This letter should:
          </p>
          <ul className="content-list">
            <li>Identify the taxpayer's name and TIN.</li>
            <li>Identify the tax period and tax type(s) concerned.</li>
            <li>State the reason(s) for the refund request.</li>
            <li>State the amount of refund claimed.</li>
            <li>Be signed by the taxpayer or legal representative.</li>
          </ul>
          <p className="content-paragraph">
            RRA will provide the taxpayer with a Refund/tax credit Claim Notification reply, informing them whether their refund/tax credit claim has been accepted, adjusted or rejected and the reason for this decision. Tax credit is used to pay current or future liability.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Refunds;
