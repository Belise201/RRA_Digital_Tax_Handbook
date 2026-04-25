import { Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const Certificates = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Award size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs)</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Types of Certificates Section */}
        <section className="content-section">
          <h2>What are the different certificates available from RRA?</h2>
          <p className="content-paragraph">
            There are six main types of certificates available from RRA. These are:
          </p>
          <ul className="content-list">
            <li>Value Added Tax (VAT) certificate</li>
            <li>Tax Clearance Certificates (TCCs)</li>
            <li>Compliance Certificate (Quitus Fiscal)</li>
            <li>Foreign Tax Credit certificate</li>
            <li>Trading License Tax certificate</li>
            <li>Electronic Billing Machine (EBM) Certificate</li>
          </ul>
          <p className="content-paragraph">
            The Foreign Tax Credit certificate is available for taxpayers to prove that they have paid taxes in Rwanda. The Foreign Tax Credit certificate must be requested from RRA offices, and is processed on a case-by-case basis.
          </p>
          <p className="content-paragraph">
            The Trading License Tax certificate is discussed in more detail <Link to="/trading-license-tax" className="content-link">(check on Trading License Tax)</Link> for more details.
          </p>
          <p className="content-paragraph">
            The remaining four types of certificates are discussed in this chapter below.
          </p>
        </section>

        {/* VAT Certificate Section */}
        <section className="content-section">
          <h2>What is Value Added Tax (VAT) certificates?</h2>
          <p className="content-paragraph">
            VAT certificates certify that the taxpayer is registered for VAT. All VAT registered taxpayers are required to clearly display the VAT registration certificate in plain view at their main place of business. <Link to="/vat-explanation" className="content-link">(check on Explanation of VAT)</Link> for the details of registering for VAT and the obligations of VAT-registered taxpayers.
          </p>
          <p className="content-paragraph">
            VAT certificates are available free of charge. They can be obtained through three channels:
          </p>
          <ul className="content-list">
            <li>The Rwanda Development Board (RDB) system during business registration, <Link to="/registration-guide" className="content-link">(check on Step-by-Step Guide to Business Registration)</Link>.</li>
            <li>Through the E-Tax homepage, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for details on logging into E-Tax. After clicking on 'TCC Request', the process is the same as described <Link to="/certificates" className="content-link">(check on Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs))</Link> below.</li>
            <li>Through the RRA website, <Link to="/certificates" className="content-link">(check on Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs))</Link> below for more details.</li>
          </ul>
        </section>

        {/* EBM Certificate Section */}
        <section className="content-section">
          <h2>What is Electronic Billing Machine (EBM) Certificate?</h2>
          <p className="content-paragraph">
            It is a document certifying that a taxpayer adopted and uses an RRA certified electronic billing machine.
          </p>
          <p className="content-paragraph">
            EBM Certificate is obtained by writing to the Assistant Commissioner in charge of Tax Control and Operational Support Division. The letter should indicate:
          </p>
          <ul className="content-list">
            <li>Taxpayer name;</li>
            <li>Taxpayer Identification Number (TIN);</li>
            <li>Reason of requesting</li>
          </ul>
        </section>

        {/* Compliance Certificate Section */}
        <section className="content-section">
          <h2>What is Compliance Certificate (Quitus Fiscal)?</h2>
          <p className="content-paragraph">
            Compliance Certificate (Quitus Fiscal) is a privileged status available, upon request, to taxpayers who have a good compliance record with RRA. Compliance Certificate (Quitus Fiscal) is proof of this status. There are two types of Quitus Fiscal, for withholding tax on public tenders of 3% (WHT 3%) and for withholding tax on imports of 5% and public tenders of 3% (WHT 5% & 3%). For more details on the interaction of Compliance Certificate (Quitus Fiscal) on WHT 3% and WHT 5% & 3%, <Link to="/withholding-taxes-explanation" className="content-link">(check on Explanation of Withholding Taxes)</Link> and <Link to="/importing-moto-vehicle" className="content-link">(check on Importing Motor Vehicles)</Link> respectively.
          </p>
          <p className="content-paragraph">
            Taxpayers with Compliance Certificate (Quitus Fiscal) are not required to pay WHT 5%, or have WHT 3% withheld and paid on their behalf, depending upon the type of Compliance Certificate (Quitus Fiscal). This does not reduce the overall tax payable by the taxpayer, as any income from imports or public tenders are required to be declared in the annual Income Tax (PIT or CIT) declarations. However, Compliance Certificate (Quitus Fiscal) benefit their cash flow as the taxes do not have to be paid up front.
          </p>
          <p className="content-paragraph">
            The cost of applying for Compliance Certificate (Quitus Fiscal) is FRW 10,000. The process of applying for Compliance Certificate (Quitus Fiscal) is described below.
          </p>
          <p className="content-paragraph">
            There is a distinction between Compliance Certificate (Quitus Fiscal) and Tax Clearance Certificate, as described below.
          </p>
        </section>

        {/* TCC Section */}
        <section className="content-section">
          <h2>What are Tax Clearance Certificates (TCCs)?</h2>
          <p className="content-paragraph">
            Tax Clearance Certificates (TCCs) are available, upon online request through E-Tax, to prove that taxpayers have no unpaid arrears with RRA. This may be needed in order to bid for public tenders, apply for bank loans or a range of other reasons.
          </p>
          <p className="content-paragraph">
            The cost of applying for TCCs is FRW 5,000. The process of applying for TCCs is described below.
          </p>
        </section>

        {/* Application Process Section */}
        <section className="content-section">
          <h2>What is the process of applying for and obtaining Certificates?</h2>
          <p className="content-paragraph">
            Certificates can be obtained through RRA website for non-business individuals (Tax Clearance Certificate – TCC only), and through E-Tax for businesses.
          </p>
          <p className="content-paragraph">
            TIN holders wishing to apply and obtain Tax Clearance Certificates (TCCs) should first visit the RRA website at: <a href="http://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">http://www.rra.gov.rw</a> and log in into E-tax, click on 'TCC Quitus & other application', then click on 'Apply here'. This loads the following screen, the Certificates portal.
          </p>
          <p className="content-paragraph">
            The taxpayer can submit the request for the listed certificates, check the progress, and download the certificate.
          </p>
          <div className="certificate-image-container" style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            <ImageModal src="./images/certificate_01.png" alt="Certificates portal screen">
              <img src="./images/certificate_01.png" alt="Certificates portal screen" style={{ maxWidth: '500px', maxHeight: '355px', width: 'auto', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Business taxpayers wishing to apply and obtain VAT Certificate, Compliance Certificate (Quitus Fiscal), Withholding Certificate, and Tax Clearance Certificate (TCC) should login into RRA E-Tax and click on 'TCC, Quitus & Other applications'. This menu displays three options: 'Apply here', 'View request', 'Tax arrears' as per below screen:
          </p>
          <div className="certificate-image-container" style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            <ImageModal src="./images/certificate_02.png" alt="TCC Quitus & Other applications menu">
              <img src="./images/certificate_02.png" alt="TCC Quitus & Other applications menu" style={{ maxWidth: '500px', maxHeight: '355px', width: 'auto', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            The 'Apply here' allows to send a certificate request to RRA. Available certificate types are displayed in the following screen:
          </p>
          <div className="certificate-image-container" style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            <ImageModal src="./images/certificate_03.png" alt="Available certificate types screen">
              <img src="./images/certificate_03.png" alt="Available certificate types screen" style={{ maxWidth: '500px', maxHeight: '355px', width: 'auto', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            If the taxpayer selects 'QUITUS', they must also select '3%' or '5% & 3%' from the 'Quitus Certificate Type' drop-down menu. This refers to the type of Withholding Tax from which they wish to be exempted, <Link to="/withholding-taxes-explanation" className="content-link">(check on Explanation of Withholding Taxes)</Link> for details. Additional required documents and in the following screen:
          </p>
          <div className="certificate-image-container" style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            <ImageModal src="./images/certificate_04.png" alt="QUITUS additional documents screen">
              <img src="./images/certificate_04.png" alt="QUITUS additional documents screen" style={{ maxWidth: '500px', maxHeight: '355px', width: 'auto', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            If the taxpayer selects 'VAT', no other selection is required. If the taxpayer selects 'TCC', the system allows to type remarks/comment. If the taxpayer selects 'Withholding Certificate', the system requires additional information as per below screen:
          </p>
          <div className="certificate-image-container" style={{ margin: '1.5rem 0', textAlign: 'center' }}>
            <ImageModal src="./images/certificate_05.png" alt="Withholding Certificate additional information screen">
              <img src="./images/certificate_05.png" alt="Withholding Certificate additional information screen" style={{ maxWidth: '500px', maxHeight: '355px', width: 'auto', height: 'auto', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            After all required information has been entered for any certificate, click 'Submit' to confirm the certificate application. Note that the system generates acknowledgement receipt for 'TCC' and 'Compliance Certificate (Quitus Fiscal)' indicating the cost to be paid as processing fees mentioned above.
          </p>
          <p className="content-paragraph">
            The 'View Requests' allows taxpayers to check the status of the submitted request. 'Tax Arrears' displays arrears details if any. It is advised to check tax arrears before applying for TCC and Compliance Certificate (Quitus Fiscal).
          </p>
        </section>
      </div>
    </div>
  );
};

export default Certificates;
