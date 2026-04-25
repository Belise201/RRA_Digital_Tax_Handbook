import { Monitor } from 'lucide-react';

const OnlineRequests = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Monitor size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Online Requests</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph">
            Taxpayer can access various services through the online requests menu in the e-tax system. These include:
          </p>
          <ul className="content-list">
            <li>CIT/PIT requests: Services related to Income tax Filling and Payment;</li>
            <li>VAT/PAYE filling frequency change: Request to change the filing frequency from quarterly to monthly for VAT or PAYE;</li>
            <li>Requests for revision downwards: Submit a request to reduce previously declared tax;</li>
            <li>Document generation: Allows taxpayers to generate a document number when one is missing for a given declaration period;</li>
            <li>Business closure: Submit a request to close a business entirely or close a specific tax type;</li>
            <li>Instalment Payment Request: For taxpayers with tax arrears, this service allows them to request payment in instalments.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OnlineRequests;
