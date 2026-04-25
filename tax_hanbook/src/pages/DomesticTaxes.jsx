import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DomesticTaxes = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Explanation of Domestic Taxes and E-Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">


        <section className="content-section">
          <h2>What are domestic taxes?</h2>
          <p className="content-paragraph">
            Domestic taxes include the following tax types which can each be declared in a similar manner using E-Tax:
          </p>
          <ul className="content-list">
            <li>Income Tax, including:
              <ul className="content-sublist">
                <li>Personal Income Tax (PIT)</li>
                <li>Corporate Income Tax (CIT)</li>
              </ul>
            </li>
            <li>Pay As You Earn (PAYE)</li>
            <li>Value Added Tax (VAT)</li>
            <li>Excise Duty</li>
            <li>Withholding Taxes (WHT),</li>
            <li>Gaming Tax</li>
            <li>Mining Royalty Tax</li>
            <li>Capital Gains Tax</li>
            <li>Road Maintenance Levy</li>
            <li>Tourism Tax</li>
          </ul>
          <p className="content-paragraph">
            Domestic taxes progressively tax income (PIT, CIT, PAYE and Capital Gains Tax), ensure compliance (WHT), efficiently tax consumption (VAT), deter consumption with negative social impacts (Excise Duty and Gaming Tax), and ensure that all Rwandans share the benefit from the country's natural resources (Mining Royalty Tax).
          </p>
          <p className="content-paragraph">
            For more details on the rates and bases of each domestic tax, see their respective chapters in this Tax Handbook.
          </p>
        </section>

        <section className="content-section">
          <h2>What is E-Tax?</h2>
          <p className="content-paragraph">
            E-Tax is a module-based system to manage domestic taxes operations. This includes an online portal through which all domestic tax types can be declared. RRA has developed the E-Tax system to make it easier for taxpayers to declare and pay domestic taxes. This Tax Handbook aims to provide all the information necessary for taxpayers to be able declare online.
          </p>
        </section>

        <section className="content-section">
          <h2>What is M-Declaration?</h2>
          <p className="content-paragraph">
            In certain cases, Income Tax can also be declared on mobile phones using M-Declaration, <Link to="/m-declaration-flat-lump-iqp" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details on declaring Income Tax using M-Declaration.
          </p>
          <p className="content-paragraph">
            However, the majority of domestic taxes can only be declared using E-Tax. Therefore, this chapter focuses on the E-Tax process.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the benefits of declaring online using E-Tax or on mobile phones using M-Declaration?</h2>
          <p className="content-paragraph">The advantages of declaring online or on mobile phones include being able to:</p>
          <ul className="content-list">
            <li>Declare taxes anytime, from anywhere.</li>
            <li>Avoid travel costs of visiting RRA offices.</li>
            <li>Avoid queuing times at RRA offices.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>How do taxpayers register and login to E-Tax?</h2>
          <p className="content-paragraph">
            Access the E-Tax website at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a> or through the RRA website <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://www.rra.gov.rw</a> and click 'Pay Domestic taxes here' on the right of the screen.
          </p>
          <p className="content-paragraph">
            Taxpayers are automatically registered for E-Tax when their business is registered with RDB. To login for the first time, taxpayers login through sign up. The system requires taxpayer to fill in 'TIN' and 'Phone Number' to authenticate the taxpayer who wants to sign up. If the information is the same as the information provided during registration, the system sends the password by SMS and email using the contact details given when register. The taxpayer uses these credentials to 'Sign up'.
          </p>
          <p className="content-paragraph">
            Once logged in, the E-Tax password can be changed by the taxpayer by clicking 'Get Password?' on the left of the E-Tax home screen.
          </p>
        </section>

        <section className="content-section">
          <h2>What if taxpayers do not know their TIN?</h2>
          <p className="content-paragraph">
            If a taxpayer does not know their TIN, they can visit RRA offices or call the RRA call centre toll-free on 3004.
          </p>
          <p className="content-paragraph">
            In addition, if an individual taxpayer (i.e., not a company) does not know their TIN, they can visit the RRA website or uses below link: <a href="https://etax.rra.gov.rw/nidAssignedTIN/" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw/nidAssignedTIN/</a> and click 'Search for TIN using National ID' as per the following screen:
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/e_tax_01.png" alt="E-Tax TIN Search Screen">
              <img
                src="/images/e_tax_01.png"
                alt="E-Tax TIN Search Screen"
                style={{
                  maxWidth: '500px',
                  maxHeight: '355px',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            This leads to the following screen asking whether the taxpayer registered their TIN using a Rwandan National ID or a Passport. After clicking on the relevant choice, the National ID or Passport Number can be entered, and the associated TIN is displayed by clicking 'Show TIN'.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/e_tax_02.png" alt="E-Tax TIN Search Result Screen">
              <img
                src="/images/e_tax_02.png"
                alt="E-Tax TIN Search Result Screen"
                style={{
                  maxWidth: '500px',
                  maxHeight: '355px',
                  width: 'auto',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
        </section>

        <section className="content-section">
          <h2>What are the common problems when using E-Tax?</h2>
          <p className="content-paragraph">
            There are three main types of problems faced by taxpayers when using E-Tax, this concern: annexures not validating, particular tax types or tax periods not being available on the 'Document Details' screen or declarations not submitting. Potential solutions to these problems are discussed in turn below.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the causes of an annexure not validating?</h2>
          <p className="content-paragraph">When completing annexures, ensure to:</p>
          <ul className="content-list">
            <li>'enable content' after opening the spreadsheet.</li>
            <li>use the required date format (dd/mm/yyyy) for the dates entered and the computer's settings.</li>
            <li>avoid blank cells for rows that have been started</li>
            <li>try using a Windows computer instead of a Mac.</li>
            <li>click to 'Validate' and save the annexure.</li>
          </ul>
          <p className="content-paragraph"><Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details on solving these problems.</p>
        </section>

        <section className="content-section">
          <h2>What if the particular tax type or tax period is not available for declaration?</h2>
          <p className="content-paragraph">
            If the tax type and tax period for the relevant declaration is not available on the 'Document Details' screen, the taxpayer can request for it by calling the RRA call centre toll-free or visiting RRA offices.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the causes of a declaration not submitting?</h2>
          <p className="content-paragraph">
            When submitting declarations: the annexures must be uploaded, its information equals to the declaration form information, and all certified by clicking in certifying box.
          </p>
          <p className="content-paragraph">
            If the declaration and annexures information are not equal, either the declaration or the annexures must then be changed until they are equal and accurate, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for details.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DomesticTaxes;
