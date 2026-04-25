import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const ElectronicInvoicingSystemExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Electronic Invoicing System</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is the Electronic Invoicing System?</h2>
                    <p className="content-paragraph">
                        The Electronic Invoicing System (EIS) formerly known as EBM (Electronic Billing Machine) refers to various methods of printing RRA certified invoices and sending sales data to RRA in real-time. EIS is not a type of tax, but helps to improve bookkeeping and Value Added Tax (VAT) collection. EIS invoices are required to be provided to buyers for every sales transaction by every registered taxpayer (EBM for all).
                    </p>
                    <p className="content-paragraph">
                        EIS will be used to refer to electronic billing machines (EBMs) as well as software used to print RRA certified invoices (such as VSDC). There are two versions of EBMs. The new EBM version 2.1 (EBM 2.1) and EBM 2.0, both in a form of software now available for taxpayers to install onto desktop or laptop computers, <Link to="/electronic-invoicing-system-explanation">(check on Explanation of Electronic Invoicing System)</Link> for more details. VSDC can be incorporated with privately provided billing systems.
                    </p>
                    <p className="content-paragraph">
                        EISs have proven benefits to tax administration and RRA is committed to increasing and enforcing the uptake and use of EISs. EISs have also been introduced in many other countries around the world and are a key priority in RRA's vision of becoming "a model revenue administration optimally financing national needs".
                    </p>
                    <p className="content-paragraph">
                        Taxpayers are encouraged to take advantage of the functionality provided in EBM 2.1. The advantages of EBM 2.1 are outlined later in this section.
                    </p>
                    <p className="content-paragraph">
                        This Tax Handbook will focus on EBM 2.1 which is the latest version.
                    </p>
                    <p className="content-paragraph">
                        For any questions regarding EIS/EBMs, contact the Tax Control and Operational Support Division within RRA directly by calling 078818 5702.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the benefits of EIS/EBMs?</h2>
                    <p className="content-paragraph">
                        There are numerous benefits of EIS/EBMs, both to compliant taxpayers and to the tax administration. These benefits to the taxpayer, to RRA and to Rwanda include:
                    </p>
                    <ul className="content-list">
                        <li>EIS/EBM sales data can be copied and pasted into the 'Sales' tab when completing the VAT annexures, making it quicker and easier for taxpayers to declare and pay VAT, <Link to="/vat-declaration">(check on Declaring VAT)</Link> for more details on this process.</li>
                        <li>Improving bookkeeping and stocktaking for taxpayers through using EIS/EBMs to record the exact items and prices being sold.</li>
                        <li>Simplifying the audit process, reducing the time and interruption of taxpayer's daily operations</li>
                        <li>Reducing the potential for tax evasion, ensuring that taxpayers can compete fairly, and increasing the tax revenues for public spending.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Which taxpayers must have EIS/EBMs?</h2>
                    <p className="content-paragraph">
                        All registered taxpayers are required to have and use EIS/EBM at each of their sales locations.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are various types of EBM2.1 Solutions?</h2>
                    <p className="content-paragraph">
                        EBM 2.1 as an upgraded EIS version is available with various solutions where taxpayers may choose the solution that fit best their business operations and sizes. And each solution is available for free of charge.
                    </p>
                    <ul className="content-list">
                        <li><strong>EBM Mobile Application:</strong> This is solution for micro and small non-VAT registered taxpayers with turnover less than twenty million by the time of application and is installed in smart phone with latest android version and with internal storage capacity from 8GB and above.</li>
                        <li><strong>EBM2.1 Client Software:</strong> EBM2.1 Client Software is for large, medium, small or micro taxpayers either VAT registered or not. Taxpayer must possess a computing device (Desktop, laptop, tablet or POS, PDA) with latest windows version from 10.0.17 and above or android version 8.0 and above. The IOS and MacOS devices are not compatible with the current EBM software.</li>
                        <li><strong>Online EBM:</strong> This is a Web based invoicing solution for micro and small both VAT and non-VAT registered taxpayers selling only services and with turnover less than twenty million by the time of application.</li>
                        <li><strong>VSDC: Virtual Sales Data Controller:</strong> VSDC: is for taxpayers having their own private invoicing that adopts both online offline mode and after being certified by RRA, these systems are integrate with EBM system to issue certified sales invoices.</li>
                        <li><strong>OSDC: Online Sales Data Controller:</strong> OSDC: Online sales data controller is for taxpayers having their own private invoicing that works only if connected on internet and after being certified by RRA, these systems are integrate with EBM system to issue certified sales invoices.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>How can taxpayers obtain EBM 2.1?</h2>
                    <p className="content-paragraph">
                        Taxpayers requesting EBM 2.1 must submit an application form, which can be found at https://myrra.rra.gov.rw/basic/login/indexLogin and follow the steps of Login (existing myRRA user) and Sign Up (new MyRRA user).
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 1:</strong> Once a taxpayer gets a username (TIN) and password, he/she logs in into myRRA as per the following screen:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/my_rra_02.png" alt="MyRRA Login Screen">
                            <img
                                src="/images/my_rra_02.png"
                                alt="MyRRA Login Screen"
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
                        <strong>Step 2:</strong> Click on LOGIN, enter the TIN and password;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 3:</strong> Click service request button on the top right corner, then click EBM2.1 button;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 4:</strong> Fill service information and attach the required documents then click Send button;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 5:</strong> Processing of application by RRA staff;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 6:</strong> If the application is accepted, click 'Registration' button and fill the following key information:
                    </p>
                    <ul className="content-list">
                        <li>Serial No (Windows OS machine you can run this command: wmic bios get serial number in cmd command interface);</li>
                        <li>Model No (For example, HP Envy, Dell etc);</li>
                        <li>EBM Client Software: For windows OS users choose, EBM2.1 Installer. If you are intending to use Tablet, choose EBM2.1 Tablet (Android).</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Step 7:</strong> Download the setup of EBM2.1 software as shown below:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/eis_explanation_01.png" alt="EBM2.1 Software Download">
                            <img
                                src="/images/eis_explanation_01.png"
                                alt="EBM2.1 Software Download"
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
                        The software is automatically downloaded.
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 8:</strong> Unzip the file once the software is downloaded
                    </p>
                    <ul className="content-list">
                        <li>Right click on the file and then click Extract All;</li>
                        <li>Click Extract;</li>
                        <li>Double clicking EBM2xWPFSetupPRODUCTIONV23 file;</li>
                        <li>Click Next, then Install and Ok</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Step 9:</strong> Click Confirm and wait for 30 seconds;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 10:</strong> Click Initialize button;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 11:</strong> Click on EBM 2.1 icon shortcut to start using EBM;
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 12:</strong> Create the user accounts by providing User Id (TIN) and default password (rra123), then click Login Button
                    </p>
                </section>

                <section className="content-section">
                    <h2>What do I require to obtain EBM 2.1?</h2>
                    <p className="content-paragraph">
                        If you would like to obtain EBM 2.1, bring to RRA Headquarters:
                    </p>
                    <ul className="content-list">
                        <li>RDB Business Registration Certificate</li>
                        <li>VAT Registration Certificate for VAT registered taxpayers</li>
                        <li>If you are the owner of the company, your National ID or Passport</li>
                        <li>If you are not the owner of the company, the Power of Attorney and National or Passport of the Owner</li>
                    </ul>
                    <p className="content-paragraph">
                        Taxpayers will have EBM 2.1 installed on their machine. In addition, the user must first be trained how to use EBM 2.1.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the advantages of EBM Version 2.1 (EBM 2.1)?</h2>
                    <p className="content-paragraph">
                        The advantages of EBM 2.1 include:
                    </p>
                    <ul className="content-list">
                        <li>Extracting data automatically from suppliers also with EBM 2.1 and Customs, allowing the taxpayer to also copy and paste into the 'Purchases' and 'VAT Importation' tabs when completing the VAT annexures, making it quicker and easier for taxpayers to declare and pay VAT.</li>
                        <li>Providing the taxpayer with greater information over their own stock and supply chain;</li>
                        <li>When an EBM 2.1 taxpayer makes a purchase with another domestic retailer and receives an EBM 2.1 invoice, this purchase will automatically be loaded to the buyer's EBM 2.1 as a purchase;</li>
                        <li>When an EBM 2.1 taxpayer declares an import at customs, using the same TIN supplied for EBM 2.1, this import will automatically be loaded to the importer's EBM 2.1 as a purchase;</li>
                        <li>RRA provides free remote technical support for EBM 2.1. The 'Team View'/'Any Desk' function allowing the taxpayer and RRA to work remotely together to fix any problems, without needing to visit RRA offices.</li>
                        <li>Multiple EBM 2.1 user accounts can be created for one enterprise. These accounts can be created with different user access rights, as required;</li>
                        <li>EBM 2.1 can be connected to the taxpayer's existing internet connection.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>How can taxpayers copy sales data into the VAT Sales Annexure?</h2>
                    <p className="content-paragraph">
                        One of the advantages to using EBMs is that a monthly report containing all sales is available to be accessed online, and can be copied and pasted directly into the Sales tab of the VAT annexure when declaring. This reduces the time taken to complete the VAT annexures.
                    </p>
                    <p className="content-paragraph">
                        To view and download the EBM monthly reports, visit: https://ebm2.rra.gov.rw/ follow the link and login to the EBM back office using the username (TIN) and password. If a taxpayer does not know their EBM back-office password, they should call the RRA call centre on 3004.
                    </p>
                    <p className="content-paragraph">
                        Once logged in, the taxpayer can click 'VAT Annexure', select the relevant month, and click 'Excel Download'. This can then be copied and pasted into the sales tab of the VAT annexures, <Link to="/vat-declaration">(check on Declaring VAT)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Where can I find information about EBM 2.1 usage?</h2>
                    <p className="content-paragraph">
                        A client manual on the use of EBM 2.1 is available in the EBM section of the 'Domestic Tax Services' page on the RRA website at https://www.rra.gov.rw/en/ebm-electronic-billing-machine
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is a Virtual Sales Data Controller (VSDC)?</h2>
                    <p className="content-paragraph">
                        A VSDC can be used to integrate local sales management systems/private billing system with the requirements of EBM 2.1.
                    </p>
                    <p className="content-paragraph">
                        Businesses can then continue to use their own retail management software package, while complying with the modalities of EBM requirements.
                    </p>
                    <p className="content-paragraph">
                        A client manual on the use of VSDC is available in the EBM section of the 'Domestic Tax Services' page on the RRA website at https://www.rra.gov.rw/en/ebm-electronic-billing-machine
                    </p>
                    <p className="content-paragraph">
                        For further information and training on EBM 2.1, please visit the RRA EBM 2.1 training centre at RRA HQ.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How do taxpayers use EBMs to provide EBM invoices?</h2>
                    <p className="content-paragraph">
                        EBMs must be used to produce EBM invoices for every sales transaction, whether business to business, business to government or businesses to final consumers.
                    </p>
                    <p className="content-paragraph">
                        The typical process for using original EBMs involves entering the quantity, price, and code of each item being sold. For sales to other businesses, the taxpayer must enter the client's TIN and the purchase code provided by the client to protect their TIN. For non-business clients, the taxpayer should enter the client's phone number instead.
                    </p>
                    <p className="content-paragraph">
                        Once all items in a transaction have been entered, the taxpayer must print the EBM invoice and provide it to the consumer. Alternatively, at the end of the business day, the taxpayer can print a daily report of all EBM invoices.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is purchase code and how to request it?</h2>
                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Purchase code is used for buyer TIN protection</h3>
                    <p className="content-paragraph">
                        This feature was introduced by RRA to protect buyers' TINs as a security measure in the EBM system and to prevent misuse of buyer TINs. Therefore, no registered taxpayer is allowed to make purchases for resale purposes without a purchase code issued by the RRA system.
                    </p>
                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Process to request purchase code</h3>
                    <p className="content-paragraph">
                        <strong>Through USSD *800#</strong>
                    </p>
                    <p className="content-paragraph">
                        These are some steps to be followed by the buyer for purchase code generation:
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 1:</strong> The buyer dials *800# in the calling menu of the telephone and press YES.
                    </p>
                    <div style={{ margin: '1rem 0', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <p style={{ margin: 0 }}>Welcome to M-declaration</p>
                        <p style={{ margin: '0.5rem 0' }}>Select language</p>
                        <p style={{ margin: 0 }}>1. English</p>
                        <p style={{ margin: 0 }}>2. Kinyarwanda</p>
                        <p style={{ margin: 0 }}>3. Press o to exit</p>
                    </div>
                    <p className="content-paragraph">
                        <strong>Step 2:</strong> Select 4 and press SEND to access EBM service
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 3:</strong> Select 2 to request code for purchase
                    </p>
                    <div style={{ margin: '1rem 0', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <p style={{ margin: 0 }}>Under purchase code request:</p>
                        <p style={{ margin: '0.5rem 0' }}>o Enter Buyer TIN: ex: 1222***</p>
                        <p style={{ margin: 0 }}>o Press * to main menu</p>
                        <p style={{ margin: 0 }}>o Press 00 to exit</p>
                    </div>
                    <p className="content-paragraph">
                        <strong>Step 4:</strong> Enter the Seller TIN in the space provided
                    </p>
                    <div style={{ margin: '1rem 0', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <p style={{ margin: 0 }}>o Enter Seller TIN: ex: 1222***</p>
                        <p style={{ margin: 0 }}>o Press * to main menu</p>
                        <p style={{ margin: 0 }}>o Press 00 to exit</p>
                    </div>
                    <p className="content-paragraph">
                        <strong>Step 5:</strong> Type 1 to confirm that the information provided is true and you need the purchase code
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 6:</strong> Receive the SMS containing the requested purchase code
                    </p>
                    <p className="content-paragraph">
                        Therefore, the received purchase code is given to the seller to generate invoice to buyer's TIN
                    </p>
                    <p className="content-paragraph">
                        <strong>Through MyRRA</strong>
                    </p>
                    <p className="content-paragraph">
                        https://myrra.rra.gov.rw/main/service/indexPurchaseInitiation
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 1:</strong> Access MyRRA portal
                    </p>
                    <ul className="content-list">
                        <li>Under the login page, click on button name [Click here to request purchase code]</li>
                        <li>User is redirected to purchase code request page</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Step 2:</strong> Fill in the following information
                    </p>
                    <ul className="content-list">
                        <li>Enter Phone Authorized by Buyer</li>
                        <li>Enter Buyer TIN</li>
                        <li>Enter Seller TIN</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Step 3:</strong> Click on 'Get Purchase Code' button
                    </p>
                    <ul className="content-list">
                        <li>System validates the information provided and generate purchase code if validation succeeded</li>
                        <li>Buyer get SMS containing the requested purchase code on the registered phone provided</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What if the taxpayer enters an EBM invoice incorrectly, or wishes to cancel/refund or discount a transaction?</h2>
                    <p className="content-paragraph">
                        If a taxpayer wishes to issue a refund or makes a mistake when entering a transaction, they can cancel the entire invoice if it has already been approved. If the invoice is still pending approval, the taxpayer can adjust it by removing specific items, changing quantities, or cancelling it entirely. Additionally, any discounts should be entered during the sale registration process, before the invoice is approved.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What should taxpayers do if the EBM is not working?</h2>
                    <p className="content-paragraph">
                        If the EBM is not working for any reason, the taxpayer must notify RRA, issue handwritten invoices to consumers, and retain duplicates. Once the EBM is functional again, all handwritten invoices must be entered into the system. Further actions depend on the nature of the issue, as explained below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What should taxpayers do if the machine with EBM installed is stolen?</h2>
                    <p className="content-paragraph">
                        If a machine with EBM installed is stolen or damaged due to a force majeure event (unforeseeable circumstances), the taxpayer must notify RRA in writing within six (6) hours. The notification must be accompanied by official proof from a competent authority confirming that the device where EBM 2.1 was installed was stolen.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ElectronicInvoicingSystemExplanation;

