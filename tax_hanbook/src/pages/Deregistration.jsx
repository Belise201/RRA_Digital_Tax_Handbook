import React from 'react';
import { FileText } from 'lucide-react';

const Deregistration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">De-Registration</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What documents are needed for de-registration?</h2>
          <p className="content-paragraph">
            In the cases of both de-registration of a specific tax type and full de-registration, RRA may request any documents of proof as necessary. The documents that are required may differ depending upon the nature of the request.
          </p>
        </section>

        <section className="content-section">
          <h2>When can a taxpayer de-register for a specific tax type?</h2>
          <p className="content-paragraph">
            The process to apply for Dormancy of one or more tax types but having other tax account (s) open:
          </p>
          <ul className="content-list">
            <li>Go to <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>www.rra.gov.rw</a></li>
            <li>Click on "Declare Domestic Taxes here"</li>
            <li>Fill in your TIN and password and click on sign in if you already have an account in E-Tax</li>
            <li>Once logged in click on "online requests"</li>
            <li>Select "Business closure" and a page will appear showing either the presence or absence of tax arrears</li>
            <li>On the displayed page, choose "closure of one tax account"</li>
            <li>Select your preferred method of receiving the OTP: either via phone or email</li>
            <li>Fill in the OTP and click on verify</li>
            <li>Click the submit button and confirm your request.</li>
            <li>Upon successful deactivation, you'll receive a confirmation message.</li>
            <li>Click on "download letter" to obtain your confirmation letter.</li>
          </ul>
          <p className="content-paragraph">
            There are certain controls in the automation process:
          </p>
          <p className="content-paragraph">
            When a taxpayer wishes to close only the VAT or Income Tax account under their TIN while keeping other tax accounts active, this action cannot be done online. In such cases, the taxpayer must write a letter to the Assistant Commissioner in charge of the Registration, Filing, Payment, and Monitoring Division, explaining the reason for the request. The letter should be submitted through the e-Correspondence platform. The registration officer will then review and analyse the request.
          </p>
        </section>

        <section className="content-section">
          <h2>When can a taxpayer fully de-register?</h2>
          <p className="content-paragraph">
            A taxpayer, or concerned parties, may request for full de-registration if the taxpayer has:
          </p>
          <ul className="content-list">
            <li>Permanently ceased all business activities</li>
            <li>Permanently departed Rwanda</li>
            <li>Deceased</li>
          </ul>
          <p className="content-paragraph">
            It is important to note that tax declarations must continue to be submitted until the taxpayer receives confirmation that the Rwanda Revenue Authority (RRA) has approved the de-registration. Additionally, a taxpayer cannot be de-registered if there are any outstanding tax arrears. However, in the event of a taxpayer's death, RRA may make certain considerations on a case-by-case basis.
          </p>
        </section>

        <section className="content-section">
          <h2>How can a taxpayer fully de-register?</h2>
          <ul className="content-list">
            <li>Go to <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>www.rra.gov.rw</a></li>
            <li>Click on "Declare Domestic Taxes here"</li>
            <li>Fill in your TIN and password and click on sign in if you already have an account in E-Tax (If you don't have an account in E-Tax, click "sign up." Enter your TIN and the telephone number you used for TIN registration. Submit to get your password for system access).</li>
            <li>Once logged in click on "online requests".</li>
            <li>Select "Business closure" and a page will appear showing either the presence or absence of tax arrears.</li>
            <li>On the displayed page, choose "Business closure".</li>
            <li>Choose one of the reasons for TIN deactivation. (Note that De-registration reason is only applicable when requested by someone representing a deceased TIN holder or for businesses undergoing liquidation or dissolution).</li>
            <li>Select your preferred method of receiving the OTP: either via phone or email.</li>
            <li>Fill in the OTP and click on verify.</li>
            <li>Click the submit button and confirm your request.</li>
            <li>Upon successful deactivation, you'll receive a confirmation message.</li>
            <li>Click on "download letter" to obtain your confirmation letter.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Deregistration;
