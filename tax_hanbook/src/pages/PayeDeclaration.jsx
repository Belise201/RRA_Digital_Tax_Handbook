import React from 'react';
import { FileText } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const PayeDeclaration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Declaring PAYE</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph">
            The process for declaring PAYE is different to the process for declaring other domestic taxes as this tax is declared in the RSSB system called ISHEMA. In this system, a process of declaring PAYE, Pension, Maternity scheme, Medial scheme, and Community Based Health Insurance (CBHI) is using a single declaration at the end of which, a taxpayer gets acknowledgment receipts of each of the contribution and tax above. This because all of them are based on the employee remuneration by employer.
          </p>
          <p className="content-paragraph">
            The process for declaring PAYE, Pension, Medical, Maternity and CBHI is as follow:
          </p>
          <p className="content-paragraph">
            Using any internet browser, go to www.ishema.rssb.rw and input personal phone number then click on login.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_01.png" alt="ISHEMA Login">
              <img
                src="/images/declare_paye_01.png"
                alt="ISHEMA Login"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Enter Company's TIN and Confirm Company Details: provide company's Tax Identification Number (TIN) and verify the details. Please ensure that the TIN entered is accurate and matches the official records. Provide Personal Information: provide personal information, including full name, email address, and phone number. Additionally, enter the password you currently use to log in to RRA's e-Tax system.
          </p>
          <p className="content-paragraph">
            Note that Steps above are one-time processes during initial registration. For subsequent logins, you will only be required to provide your phone number to access the platform.
          </p>
          <p className="content-paragraph">
            Login: To log in, a One-Time Password (OTP) is needed. To generate the OTP, simply dial *876*4044# on the registered phone. Enter the prompted code, and log in Ishema successfully. Enter this code when prompted, and you will be able to log in successfully.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_02.png" alt="ISHEMA Dashboard">
              <img
                src="/images/declare_paye_02.png"
                alt="ISHEMA Dashboard"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            On the first page of the platform, you will have access to various activities, including:
          </p>
          <ul className="content-list">
            <li>View your company's information: You can review and manage the details of the company, as well as add additional users to the company's account.</li>
            <li>Check your compliance status: easily monitor the taxpayer compliance status and track declaration history. This helps to staying informed about the tax obligations and ensure timely filings.</li>
            <li>File declarations: The platform allows taxpayer to conveniently file a declaration, making the process efficient and streamlined. A taxpayer can submit tax-related information and document with ease.</li>
          </ul>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_03.png" alt="ISHEMA File Declaration">
              <img
                src="/images/declare_paye_03.png"
                alt="ISHEMA File Declaration"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            If this is your first time using the ISHEMA system, kindly download the provided Excel template file (Unified annexure). Populate the file with your employees' salary details.
          </p>
          <p className="content-paragraph">
            Once completed, select "Choose a file from your computer" and upload the Excel file into the system.
          </p>
          <p className="content-paragraph">
            Select the desired month for filing
          </p>
          <p className="content-paragraph">
            There are two methods to file a declaration:
          </p>
          <ul className="content-list">
            <li>Click on the "File declaration" button and select the desired month for filing.</li>
            <li>Alternatively, you can directly click on the specific month from the screen displayed below to proceed with the declaration.</li>
          </ul>
          <p className="content-paragraph">
            Upon uploading the file, the system will validate provided data. In case of accurate data, the system will display "success". Click "Next" to continue. If any errors are detected in the data, they will be shown on the screen, rectify them by revisiting the Excel file. You will need to correct the errors before re-uploading the file to proceed further.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_04.png" alt="ISHEMA Review Amounts">
              <img
                src="/images/declare_paye_04.png"
                alt="ISHEMA Review Amounts"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Review and verify the pre-calculated amounts displayed by the system. These amounts represent the total payment for each scheme. Click "Next" to confirm and proceed.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_05.png" alt="ISHEMA Confirm Declaration">
              <img
                src="/images/declare_paye_05.png"
                alt="ISHEMA Confirm Declaration"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Read the message below attentively and ensure that the salary data provided for your employees is true and accurate. If you confirm its accuracy, click "Confirm" to continue.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_06.png" alt="ISHEMA Declaration Success">
              <img
                src="/images/declare_paye_06.png"
                alt="ISHEMA Declaration Success"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            You successfully filed a declaration. Print the acknowledgment receipt for your records or click "View Details" to access additional information about your declaration.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_07.png" alt="ISHEMA Acknowledgment Receipt">
              <img
                src="/images/declare_paye_07.png"
                alt="ISHEMA Acknowledgment Receipt"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Note that after, declaration, a taxpayer can, immediately or after a given time, proceed with a revision. A revision is initiated by clicking on 'Revision Declaration as is shown in the following image.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/declare_paye_08.png" alt="ISHEMA Revision Declaration">
              <img
                src="/images/declare_paye_08.png"
                alt="ISHEMA Revision Declaration"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
        </section>

        <section className="content-section">
          <h2>Unified Annexures</h2>
          <p className="content-paragraph">
            A unified annexure for PAYE, Pension, Maternity, Medial and CBHI has only one tab for a tax period. It is needed to be completed and uploaded as Excel contrary to the annexure of E-tax that need to be downloaded, validated and saved, then uploaded in E-tax.
          </p>
          <ul className="content-list">
            <li>Family Name: Enter the employee's name.</li>
            <li>Another name: Enter the employee's other name.</li>
            <li>RSSB Number: Enter the employee's Social Security Number (SSN) from RSSB.</li>
            <li>NID or Passport: Enter the employee's National Identity Document (ID) number or employee passport number.</li>
            <li>Employee Category:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>P = Permanent,</li>
                <li>C = Casual,</li>
                <li>E = Exempted,</li>
                <li>S = Second Employer</li>
              </ul>
            </li>
            <li>Is Employee A Rama Member?
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Employee Pays Pension?
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Employee Pays Mat Leave?
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Employee Pays CBHI?
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Y = Yes,</li>
                <li>N = No</li>
              </ul>
            </li>
            <li>Basic Salary: Enter the basic salary of the employee in Rwandan francs during the tax period.</li>
            <li>Benefit in Kind Transport – If the employee benefits from access to and use of a motor vehicle provided by the employer during the tax period, enter 10% of the taxable income in FRW, excluding other benefits in kind.</li>
            <li>Benefit in Kind House – If the employee benefits from accommodation provided by the employer during the tax period, enter 20% of the taxable income in FRW, excluding other benefits in kind.</li>
            <li>Benefit in Kind Others – If the employee benefits from any benefits in kind from the employer other than transport or accommodation during the tax period, these are entered at market value in FRW.</li>
            <li>Lump sum Transport: Amount Lump sum allowance.</li>
            <li>Other Medical Deductions: Fill the amount if any.</li>
            <li>Terminal Benefit End Contract: Fill the amount if any.</li>
            <li>Retirement Benefits: Fill the amount if any.</li>
            <li>Ejo-Heza Contribution: Fill the amount if any.</li>
            <li>Other Pension Funds: Fill the amount if any.</li>
          </ul>
          <p className="content-paragraph">
            The system itself computes all component of tax and contributions based on legal provision. Upon filing in Ishema, the filed information and payment, if made, are automatically sent to E-tax.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PayeDeclaration;
