import { Award } from 'lucide-react';

const VATReward = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Award size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">VAT Reward</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Why VAT Reward Section */}
        <section className="content-section">
          <h2>Why VAT Reward?</h2>
          <p className="content-paragraph">
            This scheme was established by tax law to address the following concerns at the level of final consumer:
          </p>
          <ul className="content-list">
            <li>Non-compliance with the issuance of EBM invoice</li>
            <li>Issuance of invoice with incorrect price value (under-pricing)</li>
            <li>Low culture of invoice demand amongst consumers</li>
            <li>Lack of incentives to final consumers</li>
            <li>Limited information of consumer contribution</li>
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className="content-section">
          <h2>Who is eligible for VAT Reward?</h2>
          <p className="content-paragraph">
            Individuals who fulfil the following:
          </p>
          <ul className="content-list">
            <li>Being registered in the VAT reward system;</li>
            <li>Having received an EBM invoice from a VAT registered taxpayer indicating her or his recorded mobile telephone number;</li>
          </ul>
          <p className="content-paragraph">
            A final consumer who makes a payment and requests an invoice but does not receive one must declare this in the system as prescribed by the tax administration.
          </p>
        </section>

        {/* Registration Process Section */}
        <section className="content-section">
          <h2>How to register for VAT Reward?</h2>
          <p className="content-paragraph">
            Using USSD technology, dial *800#, select your preferred language, then follow these steps:
          </p>
          <ol className="content-list" style={{ listStyleType: 'decimal', paddingLeft: '1.5rem' }}>
            <li>Choose option 4 – EBM Services</li>
            <li>Select option 1 – VAT Reward Services</li>
            <li>Choose option 1 – VAT Reward Registration</li>
            <li>Enter the requested information: your National ID number and the mobile phone number where the reward should be sent.</li>
          </ol>
        </section>

        {/* Reward Rate Section */}
        <section className="content-section">
          <h2>What is the rate of VAT Reward?</h2>
          <p className="content-paragraph">
            A final consumer is rewarded 10% of the VAT amount as shown on the EBM invoice issued.
          </p>
        </section>

        {/* Disbursement Section */}
        <section className="content-section">
          <h2>When VAT Reward is disbursed?</h2>
          <p className="content-paragraph">
            The VAT reward is deposited to the mobile money or bank account designated by the last consumer on quarterly basis, within 15 days following the declaration period of that quarter.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VATReward;
