import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DeclaringIQPIncomeTax = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Instalment Quarterly Prepayment (IQP) Income Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        IQP Income Tax can be declared using M-Declaration or using E-Tax. An important consideration is that any withholding tax that has been withheld and paid on behalf of the taxpayer during the tax period can only be claimed back when using E-Tax.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Declaring IQP using M-Declaration</h2>
                    <p className="content-paragraph">
                        The process for declaring IQP using M-Declaration is explained <Link to="/m-declaration-flat-lump-iqp" className="content-link">(check on M-Declaration for Flat Tax, Lump Sum and IQP)</Link> for more details. In addition, the process of declaring Motor Vehicle IQP using M-Declaration is explained <Link to="/m-declaration-motor-vehicle" className="content-link">(check on M-Declaration for Motor Vehicle)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Declaring IQP using E-Tax</h2>
                    <p className="content-paragraph">
                        The declaration process for IQP using E-Tax is similar to other domestic taxes, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details. The process is the same whether declaring the tax type is PIT or CIT and for each of the regimes.
                    </p>
                    <p className="content-paragraph">
                        Firstly, if the taxpayer has had any tax withheld and paid on their behalf during the tax period, they must download the IQP Annexures from the E-Tax website, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on downloading annexures. The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same.
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer has not had any tax withheld and paid on their behalf during the tax period, they can continue straight to the IQP declaration form below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Annexures</h2>
                    <p className="content-paragraph">
                        The IQP annexure has two tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> if the taxpayer has any problems when validating annexures.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>5% Withholding Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the 'Withholding' tab.
                    </p>
                    <p className="content-paragraph">
                        The details required to enter the withholding tab are the same as described <Link to="/withholding-taxes-explanation" className="content-link">(check on Explanation of Withholding Taxes)</Link> for more details.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports which is included in the 'Withholding 5%' tab.
                    </p>
                    <p className="content-paragraph">
                        The details required to enter the withholding tab are the same as described <Link to="/withholding-taxes-explanation" className="content-link">(check on Explanation of Withholding Taxes)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>IQP Declaration Form</h2>
                    <p className="content-paragraph">
                        After all applicable IQP annexures (if any) have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the IQP declaration, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are the same.
                    </p>
                    <p className="content-paragraph">
                        The IQP declaration form requires data on:
                    </p>
                    <ul className="content-list">
                        <li>Income Tax Payable – Enter the 'Income Tax Payable' declared in the previous annual Income Tax declaration.</li>
                        <li>Total Withholding on Payments (3%) – Enter the amount of WHT 3% that has been withheld on behalf of the taxpayer.</li>
                        <li>Total Withholding on Imports (5%) – Enter the amount of WHT 5% that has been withheld on behalf of the taxpayer. This should equal the total combined values in the 'Withholding 5%' annexure.</li>
                        <li>Total Withholding on other Payments (15% and/or 10%) – Enter the amount of all other withholdings that have been withheld on behalf of the taxpayer. This includes WHT 15%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% or WHT 3%.</li>
                    </ul>
                    <p className="content-paragraph">
                        Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 25</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example IQP declaration is entered below. The IQP due for this taxpayer in this tax period is FRW 26,550.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declaring_iqp_01.png" alt="IQP Declaration Form">
                            <img
                                src="/images/declaring_iqp_01.png"
                                alt="IQP Declaration Form"
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
                        After saving the IQP regime declaration form, if the taxpayer has not had any tax withheld and paid on their behalf during the tax period, click 'Submit without Annexures' to submit the declaration.
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer has had any tax withheld and paid on their behalf during the tax period, upload the IQP annexures and then compare with the declaration form, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declaration forms.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 26</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Continuing the example of the IQP declaration above, the taxpayer has had tax withheld and paid on their behalf during the tax period, and the comparison between this IQP declaration and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declaring_iqp_02.png" alt="IQP Declaration Comparison">
                            <img
                                src="/images/declaring_iqp_02.png"
                                alt="IQP Declaration Comparison"
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
                        Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declaring_iqp_03.png" alt="IQP Declaration Submitted">
                            <img
                                src="/images/declaring_iqp_03.png"
                                alt="IQP Declaration Submitted"
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
                        Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. <Link to="/methods-of-paying-taxes" className="content-link">(check on Methods of Paying Taxes)</Link> for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringIQPIncomeTax;

