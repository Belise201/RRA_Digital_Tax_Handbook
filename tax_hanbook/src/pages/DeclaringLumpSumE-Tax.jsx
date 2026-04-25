import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DeclaringLumpSumETax = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Lump Sum Income Tax using E-Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Lump Sum regime Income Tax can be declared using E-Tax or M-Declaration. If the taxpayer is registered for other domestic tax types as well as Income Tax, then Lump Sum regime must be declared using E-Tax, instead of M-Declaration.
                    </p>
                    <p className="content-paragraph">
                        The declaration process for Lump Sum regime using E-Tax is similar to other domestic taxes, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for details.
                    </p>
                    <p className="content-paragraph">
                        Firstly, if the taxpayer has had any tax withheld and paid on their behalf during the tax period, they must download the Lump Sum annexures from the E-Tax website, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details on downloading annexures. The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same.
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer has not had any tax withheld and paid on their behalf during the tax period, they can continue straight to the Lump Sum declaration, <Link to="/declaring-lump-sum-e-tax">(check on Declaring Lump Sum Income Tax using E-Tax)</Link>.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Annexures</h2>
                    <p className="content-paragraph">
                        The Lump Sum regime annexure has two tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> if there are any problems when validating annexures.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding 5% Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the 'Withholding' tab.
                    </p>
                    <ul className="content-list">
                        <li>Customs Station - Select the customs office of entry. This is listed under the 'Office of Destination' in the top right of the customs declaration.</li>
                        <li>Customs Declaration (DD COM No) – Enter the unique customs declaration number, for example: 'C39012'. This is listed under the 'Customs Reference' in the top right of the customs declaration.</li>
                        <li>Customs Declaration Date (dd/mm/yyyy) – Enter the date of the importation, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted. This is listed next to the 'Customs Reference' in the top right of the customs declaration.</li>
                        <li>Nature of Goods – Enter a brief description of the goods that have been imported. This is listed in the 'Packages and descriptions of goods' section in the middle of the customs declaration.</li>
                        <li>Origin – Enter the name of the country where the goods or services first came from. This means that if a product first comes from the United Kingdom but arrives via boat to Mombasa - Kenya and lorry through Uganda to the Gatuna border, the origin country is United Kingdom. This is listed under the 'Country of Origin' or 'Cty. orig. Code' in the middle of the customs declaration.</li>
                        <li>Customs Value (CIF) – Enter the value of the goods or services upon entering East African Community territory (EAC). CIF stands for Cost, Insurance and Freight which means that this value includes the cost of the goods and services from when they originated, but also includes the costs of insurance and freight or transport in getting the goods to EAC first port of entry (Mombasa). This is listed in Rwandan Francs under the 'Statistical Value' in the middle-right of the customs declaration.</li>
                        <li>5% Withheld in Custom – Enter the tax withheld on the imports. This is equal to the 'W01' Amount in the 'Calculation of Taxes' section in the middle of the customs declaration.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports which is included in the 'Withholding 5%' tab.
                    </p>
                    <ul className="content-list">
                        <li>Withholdee's TIN – Enter the TIN of the withholding taxpayer who has withheld and paid tax on behalf of the declaring taxpayer.</li>
                        <li>Withholdee's Name – Enter the taxpayer name of the withholding taxpayer.</li>
                        <li>Invoice/Transaction No – Enter the unique invoice number of the transaction that the tax was withheld on.</li>
                        <li>Date of Withholding (dd/mm/yyyy) – Enter the date of the invoice, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
                        <li>Nature of Goods/Services – Enter a brief description of the goods or services on which the tax was withheld.</li>
                        <li>Amount on Which to Withhold – Enter the amount of the invoice on which withholding was applied, excluding taxes.</li>
                        <li>Rate Used – Enter the rate of tax that was withheld, without the percentage symbol. For example, withholding tax of 3% should be entered as '3'.</li>
                        <li>Amount Withheld – Enter the amount of tax that was withheld. This should equal 'Amount on Which to Withhold' multiplied by 'Rate Used'%.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Lump Sum Declaration</h2>
                    <p className="content-paragraph">
                        After all applicable Lump Sum annexures (if any) have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Lump Sum declaration, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are the same.
                    </p>
                    <p className="content-paragraph">
                        The Lump Sum declaration form requires data on:
                    </p>
                    <ul className="content-list">
                        <li>Business income/sales – Enter the turnover of the business during the tax year including transport income if not declared using the Plate number through M-declaration. Income earned by an agriculturalist or a pastoralist on agricultural or livestock activities: Enter the amount less than 12,000,000 if a taxpayer is operating in this sector.</li>
                        <li>Quarterly Prepayments – This field is automatically filled with the Instalment Quarterly Prepayments (IQP) that the taxpayer has paid in advance of this declaration.</li>
                        <li>Withholding on Imports – Enter the amount of WHT 5% that has been withheld on behalf of the taxpayer. This should equal the total combined values in the 'Withholding 5%' annexure.</li>
                        <li>Withholding on Public Tenders – Enter the amount of all other types of withholding that has been withheld on behalf of the taxpayer. This should equal the total combined values in the 'Withholding' annexure.</li>
                    </ul>
                    <p className="content-paragraph">
                        Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 21</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example Lump Sum regime PIT declaration is entered below. The Income Tax due for this taxpayer in this tax period is FRW 278,500.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lump_sum_01.png" alt="Lump Sum Declaration Form">
                            <img
                                src="/images/lump_sum_01.png"
                                alt="Lump Sum Declaration Form"
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
                        After saving the Lump Sum regime declaration form, if the taxpayer has not had any tax withheld and paid on their behalf during the tax period, click 'Submit without Annexures' to submit the declaration.
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer has had tax withheld and paid on their behalf during the tax period, click 'Continue with Upload Annexures'. Upload the annexures and then compare with the declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declaration forms.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 22</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Continuing the example of the Lump Sum PIT declaration above, the comparison between this declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lump_sum_02.png" alt="Lump Sum Declaration Comparison">
                            <img
                                src="/images/lump_sum_02.png"
                                alt="Lump Sum Declaration Comparison"
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
                        <ImageModal src="/images/lump_sum_03.png" alt="Lump Sum Declaration Submitted">
                            <img
                                src="/images/lump_sum_03.png"
                                alt="Lump Sum Declaration Submitted"
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
                        Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link> for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringLumpSumETax;

