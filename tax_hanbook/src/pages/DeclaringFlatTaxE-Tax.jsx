import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DeclaringFlatTaxETax = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Flat Tax Income Tax using E-Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Flat Tax regime Income Tax can be declared using E-Tax or M-Declaration. If the taxpayer is registered for other domestic tax types as well as Income Tax, then Flat Tax regime must be declared using E-Tax, instead of M-Declaration.
                    </p>
                    <p className="content-paragraph">
                        The declaration process for Flat Tax regime using E-Tax is similar to other domestic taxes, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for details.
                    </p>
                    <p className="content-paragraph">
                        However, the process of declaring Flat Tax regime is even simpler as there are no annexures. The taxpayer only has to complete the declaration form and submit the declaration.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Flat Tax Declaration Form</h2>
                    <p className="content-paragraph">
                        Firstly, this requires logging into E-Tax and entering the declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details on choosing the applicable declaration.
                    </p>
                    <p className="content-paragraph">
                        The Flat Tax regime declaration form for PIT or CIT has seven (7) fields. The only fields that must be entered are:
                    </p>
                    <ul className="content-list">
                        <li>Annual Turnover - Enter the turnover of the business during the tax year and withholding on other payments if any.</li>
                    </ul>
                    <p className="content-paragraph">
                        The other fields are automatically filled by the system, where applicable. After entering the required information, click save to calculate the 'Annual Flat Amount of Tax Due' automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 20</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example Flat Tax Income Tax declaration is entered below. The annual amount of Flat Tax due for this taxpayer in this tax period is FRW 60,000.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declaring_flat_tax_01.png" alt="Flat Tax Declaration Form">
                            <img
                                src="/images/declaring_flat_tax_01.png"
                                alt="Flat Tax Declaration Form"
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
                        After checking that the fields entered are correct, click 'Continue with uploading annexure' then Compare declaration and annexures before clicking on 'Submit' the declaration. After successfully submitting, this screen will load.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declaring_flat_tax_02.png" alt="Flat Tax Declaration Submitted">
                            <img
                                src="/images/declaring_flat_tax_02.png"
                                alt="Flat Tax Declaration Submitted"
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
                        Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due. <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link> for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringFlatTaxETax;

