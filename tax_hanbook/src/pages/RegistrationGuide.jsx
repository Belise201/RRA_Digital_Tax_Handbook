import { ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const RegistrationGuide = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <ClipboardList size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Step-by-Step Guide to Business Registration</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Step 1: Register on the RDB business registration system</h2>
                    <p className="content-paragraph">
                        Access the RDB business registration system at <a href="https://brs.rdb.rw/busregonline" target="_blank" rel="noopener noreferrer" className="content-link">https://brs.rdb.rw/busregonline</a>
                    </p>
                    <p className="content-paragraph">
                        The RDB business registration login page is shown below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_03.png" alt="RDB Business Registration Login Page">
                            <img
                                src="/images/Registration_03.png"
                                alt="RDB Business Registration Login Page"
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
                        New users must first register an account by clicking on 'Register Here'. This leads to the 'Create New Online User' screen. Enter the required personal details and click submit to register an account.
                    </p>
                    <p className="content-paragraph">
                        The RDB system will then send an email to the given email address containing a website link. Click on the link provided to validate and activate this account.
                    </p>
                    <p className="content-paragraph">
                        Once the account has been activated, return to the RDB business registration system and enter the chosen login details to begin the business registration process.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 2: Choose the business category to be registered</h2>
                    <p className="content-paragraph">
                        Once logged in, an initial message advises that if the company already has a unique Taxpayer Identification Number (TIN), then do not use this system to register.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_04.png" alt="RDB Initial Message Screen">
                            <img
                                src="/images/Registration_04.png"
                                alt="RDB Initial Message Screen"
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
                        If the company does not yet have a TIN, click OK to continue to the business registration system screen below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_05.png" alt="RDB Business Registration System Screen">
                            <img
                                src="/images/Registration_05.png"
                                alt="RDB Business Registration System Screen"
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
                        The business registration system first requires selection of the type of business being registered. <Link to="/registration-guide">(check on Registration Guide)</Link> for more details.
                    </p>
                    <p className="content-paragraph">
                        Note that the 'Name Reservation' option does not register a business, but can be used to reserve a business name for registration in the future.
                    </p>
                    <p className="content-paragraph">
                        For each of the categories, 'Your Position' within the business must be noted. In addition, 'Domestic' requires a choice of 'Company Category' which can be public or private and 'Type'. For more details on each of these business types, <Link to="/registration-guide">(check on Registration Guide)</Link>.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 3: Complete the business registration application</h2>
                    <p className="content-paragraph">
                        Depending upon the business type selected, the details that must be completed differ slightly. The screen below shows the tabs after selecting a domestic, private, limited by shares company registration.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_06.png" alt="Business Registration Application Tabs">
                            <img
                                src="/images/Registration_06.png"
                                alt="Business Registration Application Tabs"
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
                        Note that each of the major tabs ('General Info', 'Share Info' etc.) has separate minor tabs ('Company Name', 'Articles of Association' etc.) Ensure to complete all tabs before submitting the registration.
                    </p>
                    <p className="content-paragraph">
                        Once all tabs are completed, click the 'Preview' tab to check that all the details entered are correct, before clicking 'Submit' to submit the business registration application.
                    </p>
                    <p className="content-paragraph">
                        After submitting, RDB will validate that the information entered is correct. If this is approved, an SMS will be sent to inform the taxpayer that the application has been sent to RRA to issue a Taxpayer Identification Number (TIN). Once the TIN is issued, another SMS will be sent to inform the taxpayer that his/her business has been registered.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 4: Print Certificates</h2>
                    <p className="content-paragraph">
                        After receiving the second SMS, confirming that RDB has validated the business registration application and RRA has issued a TIN, the taxpayer must log back in to the RDB Business Registration system.
                    </p>
                    <p className="content-paragraph">
                        Once logged in, click on the 'Certificates' option on the left-hand side. There are two certificates that must be printed and kept securely.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_07.png" alt="RDB Certificates Screen">
                            <img
                                src="/images/Registration_07.png"
                                alt="RDB Certificates Screen"
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
                        Firstly, choose the 'Certificate Type' that matches the application type, for example 'Domestic' if the business type that was registered was a domestic company. Once selected, download and print this certificate. Secondly, choose the 'Certificate Type' titled 'Memorandum' and also download and print this certificate. If there are any other applicable certificates, for example a 'Value Added Tax' certificate, then these should also be printed at this stage, <Link to="/certificates" className="content-link">(check on Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs))</Link> for more details on certificates.
                    </p>
                    <p className="content-paragraph">
                        Once registered, the business can operate and declare and pay taxes as normal. The immediate obligations of the taxpayer are explained <Link to="/obligations" className="content-link">(check on Obligations and Bookkeeping)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step 5: Register, declare and pay all required taxes</h2>
                    <p className="content-paragraph">
                        The taxpayer is automatically registered for Income Tax. Visit RRA offices to register for any additional required taxes, including visiting LGT tax centres immediately to register for Trading License Tax.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RegistrationGuide;

