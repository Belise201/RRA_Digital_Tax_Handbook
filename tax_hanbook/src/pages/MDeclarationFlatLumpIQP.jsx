import { Smartphone, ListChecks, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const MDeclarationFlatLumpIQP = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Smartphone size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Flat Tax, Lump Sum and IQP Income Tax using M‑Declaration</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">How to register and declare via *800#</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Eligibility</h2>
                    <p>
                        If Income Tax is the taxpayer’s only registered domestic tax type, and if the taxpayer has a Rwandan ID in the case of PIT, the taxpayer may declare Flat Tax or Lump Sum using M‑Declaration. If not, Flat Tax and Lump Sum Income Tax can always be declared using E‑Tax.
                    </p>
                    <p>The process for declaring Flat Tax, Lump Sum and IQP Income Tax on a mobile phone using M‑Declaration is explained below.</p>
                </section>

                <section className="content-section">
                    <h2>M‑Declaration Process</h2>
                    <p>The first time a taxpayer uses M‑Declaration from that specific mobile phone, the taxpayer must first register.</p>
                    <p>
                        The M‑Declaration system for both registering and declaring is accessed by dialling <strong>*800#</strong>. The M‑Declaration system has a series of screens, with number options, that are navigated by entering and sending the relevant number.
                    </p>
                    <p>
                        The first screen requests the taxpayer to select a language, either English or Kinyarwanda. The next screen requests to select which M‑Declaration service is required. To declare Flat Tax, Lump Sum and IQP Income Tax select ‘2. Other Business Activities’.
                    </p>
                    <p>The next screen shows the ‘Welcome to Domestic Taxes’ menu. This menu offers three options:</p>
                    <ul>
                        <li>1. Registration</li>
                        <li>2. Declaration</li>
                        <li>3. Change Mobile Number</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Register for M‑Declaration</h2>
                    <p>From the ‘Welcome to Domestic Taxes’ menu, select ‘1. Registration’ to begin the registration process.</p>
                    <p>The details required for registration are:</p>
                    <ul>
                        <li>Taxpayer Identification Number (TIN)</li>
                        <li>Rwanda National ID number</li>
                    </ul>
                    <p>
                        For PIT registered taxpayers, their Rwanda National ID number is required. It is not currently possible to use passports to declare PIT using M‑Declaration, E‑Tax must be used instead.
                    </p>
                    <p>For CIT registered taxpayers (of any nationality), the Rwanda National ID number can be entered as ‘9999999999999999’ (sixteen ‘9’s).</p>
                    <p>Submit the required details in the relevant screens to register for M‑Declaration of Flat Tax, Lump Sum and IQP Income Tax.</p>
                </section>

                <section className="content-section">
                    <h2>M‑Declaration of Income Tax</h2>
                    <p>From the ‘Welcome to Domestic Taxes’ menu, select ‘2. Declaration’ to begin the declaration process.</p>
                    <p>
                        The taxpayer must have already registered the TIN with the mobile phone that they are declaring from. In addition, they must select:
                    </p>
                    <ul>
                        <li>Whether they are a new taxpayer, meaning if this is their first Income Tax declaration of any kind.</li>
                        <li>The business turnover or total sales during the tax period being declared.</li>
                        <li>The year and quarter for the tax period which is being declared.</li>
                    </ul>
                    <div className="example-card">
                        <h3>Examples</h3>
                        <ul>
                            <li>Annual declarations due by 31st March 2017 are for the year ‘2016’, quarter ‘annual’.</li>
                            <li>IQP declarations due by 30th June 2017 for the preceding quarter are for the year ‘2017’, quarter ‘1’.</li>
                        </ul>
                    </div>
                    <p>
                        Based on the turnover, the system calculates the tax to be paid, and generates the RRA Reference Number required for paying taxes. For more details on paying taxes, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MDeclarationFlatLumpIQP;

