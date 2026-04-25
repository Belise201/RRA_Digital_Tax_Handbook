import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeclaringFlatTaxLumpSumIQP = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        If Income Tax is the taxpayer's only registered domestic tax type, and if the taxpayer has a Rwandan ID in the case of PIT, the taxpayer may declare Flat Tax or Lump Sum using M-Declaration. If not, Flat Tax and Lump Sum Income Tax can always be declared using E-Tax.
                    </p>
                    <p className="content-paragraph">
                        The process for declaring Flat Tax, Lump Sum and IQP Income Tax on a mobile phone using M-Declaration is explained below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>M-Declaration Process</h2>
                    <p className="content-paragraph">
                        The first time a taxpayer uses M-Declaration from that specific mobile phone, the taxpayer must first register.
                    </p>
                    <p className="content-paragraph">
                        The M-Declaration system for both registering and declaring is accessed by dialling *800#. The M-Declaration system has a series of screens, with number options, that are navigated by entering and sending the relevant number.
                    </p>
                    <p className="content-paragraph">
                        The first screen requests the taxpayer to select a language, either English or Kinyarwanda. The next screen requests to select which M-Declaration service is required. To declare Flat Tax, Lump Sum and IQP Income Tax select '2. Other Business Activities'.
                    </p>
                    <p className="content-paragraph">
                        The next screen shows the 'Welcome to Domestic Taxes' menu. This menu offers three options:
                    </p>
                    <ul className="content-list">
                        <li>1. Registration</li>
                        <li>2. Declaration</li>
                        <li>3. Change Mobile Number</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Register for M-Declaration</h2>
                    <p className="content-paragraph">
                        From the 'Welcome to Domestic Taxes' menu, select '1. Registration' to begin the registration process.
                    </p>
                    <p className="content-paragraph">
                        The details required for registration are:
                    </p>
                    <ul className="content-list">
                        <li>Taxpayer Identification Number (TIN)</li>
                        <li>Rwanda National ID number</li>
                    </ul>
                    <p className="content-paragraph">
                        For PIT registered taxpayers, their Rwanda National ID number is required. It is not currently possible to use passports to declare PIT using M-Declaration, E-Tax must be used instead.
                    </p>
                    <p className="content-paragraph">
                        For CIT registered taxpayers (of any nationality), the Rwanda National ID number can be entered as '9999999999999999' (sixteen '9's).
                    </p>
                    <p className="content-paragraph">
                        Submit the required details in the relevant screens to register for M-Declaration of Flat Tax, Lump Sum and IQP Income Tax.
                    </p>
                </section>

                <section className="content-section">
                    <h2>M-Declaration of Income Tax</h2>
                    <p className="content-paragraph">
                        From the 'Welcome to Domestic Taxes' menu, select '2. Declaration' to begin the declaration process.
                    </p>
                    <p className="content-paragraph">
                        The taxpayer must have already registered the TIN with mobile phone that they are declaring from. In addition, they must select:
                    </p>
                    <ul className="content-list">
                        <li>Whether they are a new taxpayer, meaning if this is their first Income Tax declaration of any kind.</li>
                        <li>The business turnover or total sales during the tax period being declared.</li>
                        <li>The year and quarter for the tax period which is being declared.
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                                <li>For example, for annual declarations that are due by 31st March 2017 are for the year of '2016' and quarter 'annual'.</li>
                                <li>For example, for IQP declarations that are due by 30th June 2017 for the preceding quarter are for the year of '2017' and quarter '1'.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        Based on this turnover, the system calculates the tax to be paid, and generates the RRA Reference Number required for paying taxes. For more details on paying taxes, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringFlatTaxLumpSumIQP;

