import React from 'react';
import { FileText } from 'lucide-react';

const RegistrationSummary = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Registration Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>How can businesses and individuals get a TIN?</h2>
                    <p className="content-paragraph">
                        All businesses in Rwanda must register online through Rwanda Development Board (RDB) website. The RDB and RRA systems link to issue a unique Taxpayer Identification Number (TIN).
                    </p>
                    <p className="content-paragraph">
                        However, RRA also registers and gives TINs for: Decentralised Entities Taxes and fees and non-businesses.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When must be a taxpayer register their business?</h2>
                    <p className="content-paragraph">
                        A taxpayer must register their business within seven days of the beginning of the business activity.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How much does it cost to register a business?</h2>
                    <p className="content-paragraph">
                        It is free to register a business in Rwanda.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How do you register a business?</h2>
                    <p className="content-paragraph">
                        Taxpayers must register their business on the RDB business registration system. This is an online portal that makes it easier for taxpayers to register a business. This can be done online, or with the help of staff at RDB or Business Development Fund (BDF) telecentres.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How do taxpayers register for specific tax types?</h2>
                    <p className="content-paragraph">
                        Taxpayers are automatically registered for some tax types when registering their business. Call the RRA call centre toll free 3004 or visit RRA offices to register for other tax types.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to registering as a business getting a TIN with RDB</h2>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 1: Register and login on the RDB system</h3>
                    <p className="content-paragraph">
                        Access the RDB business registration system at <a href="https://org.rdb.rw/busregonline" target="_blank" rel="noopener noreferrer" className="content-link">https://org.rdb.rw/busregonline</a> and click on 'Register Here'. Submit the required details. Click the link in the validation email. Return to the RDB system to login.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 2: Choose the business category to be registered</h3>
                    <p className="content-paragraph">
                        The taxpayer must register as a 'Domestic' company, individual 'Enterprise' or 'Foreign' company.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 3: Complete the business registration application</h3>
                    <p className="content-paragraph">
                        Enter all the required business information, including attaching scanned versions of any required documents. Submit the application to register the business and receive the Taxpayer Identification Number (TIN) by SMS.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 4: Print Certificates</h3>
                    <p className="content-paragraph">
                        Login to the RDB system to print the required certificates, including the business certificate and memorandum. The taxpayer is registered and must fulfil all tax obligations.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 5: Register, declare and pay all required taxes</h3>
                    <p className="content-paragraph">
                        The taxpayer is automatically registered for Income Tax and Trading License. Visit RRA offices to register for any additional required taxes, including visiting RRA tax centres.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RegistrationSummary;

