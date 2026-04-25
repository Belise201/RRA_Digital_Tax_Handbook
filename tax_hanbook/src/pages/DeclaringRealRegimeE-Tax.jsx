import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DeclaringRealRegimeETax = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Real Regime Income Tax using E-Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Real Regime Income Tax must be declared using E-Tax.
                    </p>
                    <p className="content-paragraph">
                        The declaration process for Real Regime using E-Tax is similar to other domestic taxes, as explained <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link>. The process is similar whether the tax type is PIT or CIT.
                    </p>
                    <p className="content-paragraph">
                        Firstly, download the Real Regime annexures from the E-Tax website, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on downloading annexures. The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same.
                    </p>
                    <p className="content-paragraph">
                        However, in addition to the annexures, three additional documents are required to be submitted. These are the:
                    </p>
                    <ul className="content-list">
                        <li>Profit and Loss Account</li>
                        <li>Balance Sheet</li>
                        <li>Company Representative</li>
                    </ul>
                    <p className="content-paragraph">
                        In addition, if the taxpayer's annual turnover is above FRW 600,000,000, the 'Certified Financial Statements' annexure must also be uploaded by approved certifying audit firm and then being available on taxpayer's side by RRA tax system. For more details on these additional documents, <Link to="/real-regime-details">(check on Real Regime Details)</Link>.
                    </p>
                    <p className="content-paragraph">
                        From FY 2025, taxpayers filing for income tax are required to provide the following (if any) through E-Tax, online requests menu, CIT/PIT requests:
                    </p>
                    <ul className="content-list">
                        <li>Extension of financial reports submission,</li>
                        <li>Exemption of certifying the financial statements,</li>
                        <li>Disclaim the tax incentive to be benefited</li>
                    </ul>
                    <p className="content-paragraph">
                        Additionally, taxpayers with uncontrolled expenses (i.e., expenses not supported by EBM receipts, customs declarations, or WHT-supported transactions) are required to record these daily in e-Tax under Income Tax Preparation {'>'} Daily Capture of Uncontrolled Expenses {'>'} Add Transaction.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Annexures</h2>
                    <p className="content-paragraph">
                        The Real Regime annexure file has eleven (11) tabs. All tabs need to be completed, validated and saved if applicable to the taxpayer in that tax period. <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> if there are any problems when validating annexures.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Depreciation Table Tab</h3>
                    <p className="content-paragraph">
                        This tab refers to the depreciation that is allowed to be deducted, <Link to="/real-regime-details">(check on Real Regime Details)</Link> for more details.
                    </p>
                    <p className="content-paragraph">
                        Buildings, equipment, heavy machinery and intangible assets that have been purchased from a third party must be listed as individual rows.
                    </p>
                    <p className="content-paragraph">
                        Computers and accessories, information and communication systems, software products and data equipment can be pooled and entered as a single row.
                    </p>
                    <p className="content-paragraph">
                        All other depreciable business assets (that have not otherwise been mentioned) can be pooled and entered as a single row.
                    </p>
                    <ul className="content-list">
                        <li>Description – Enter a description of the depreciable assets owned by the business.</li>
                        <li>Book Value Beginning of Period – Enter the book value of any assets that were already owned by the business at the beginning of the tax period. The book value includes any depreciation from previous tax periods.</li>
                        <li>Acquisition During the Period – Enter the cost price of any assets that were purchased by the business during the tax period.</li>
                        <li>Disposition During the Period – Enter the book value of any assets that were sold or disposed of by the business during the tax period.</li>
                        <li>Rate – Enter the rate of depreciation for the type of business assets, without the percentage symbol. For example, depreciation of 10% should be entered as '10'.</li>
                        <li>Depreciation Allowance for the Period – Enter the value of depreciation allowed to be deducted. This should equal ('Book Value Beginning of Period' + 'Acquisition During the Period' – 'Disposition During the Period') multiplied by 'Rate'.</li>
                        <li>Book Value End of the Period – Enter the book value of any assets at the end of the tax period. This should equal ('Book Value Beginning of Period' + 'Acquisition During the Period' – 'Disposition During the Period') – 'Depreciation Allowance for the Period'.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Tax Discounts Tab</h3>
                    <p className="content-paragraph">
                        This tab refers to tax discounts allowed for within the Law on investment promotion and facilitation and Law establishing taxes on income. Each type of tax discount requires a separate row.
                    </p>
                    <ul className="content-list">
                        <li>Allowance Type – Select the type of tax discount.</li>
                        <li>Amount on which to Apply Allowances – Enter the amount on which the discount is applied.</li>
                        <li>Rate Used – Enter the rate of the tax discount.</li>
                        <li>Amount of Allowance – Enter the amount of the discount allowed to be deducted. This should equal 'Amount on which to Apply Allowances' multiplied by 'Rate Used'%.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports which is included in the 'Withholding 5%' tab.
                    </p>
                    <p className="content-paragraph">
                        The details required to enter the withholding tab are the same as described <Link to="/withholding-taxes-explanation">(check on Explanation of Withholding Taxes)</Link>.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding 5% Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the 'Withholding' tab.
                    </p>
                    <p className="content-paragraph">
                        The details required to enter the withholding 5% tab are the same as described <Link to="/withholding-taxes-explanation">(check on Explanation of Withholding Taxes)</Link>.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Debtors Tab</h3>
                    <p className="content-paragraph">
                        This tab refers to any debts or loans that are owed to the taxpayer in terms of their business. This does not include personal debts owed to the taxpayer as an individual. Each debt requires a separate row.
                    </p>
                    <ul className="content-list">
                        <li>TIN of the Debtor – Enter the TIN of the taxpayer who owes the debt, if applicable.</li>
                        <li>Debtor's Name – Enter the taxpayer's name who owes the debt, if applicable, or the name of the individual if not.</li>
                        <li>Description – Enter a brief description of the context and terms of the debt.</li>
                        <li>Date of Liability (dd/mm/yyyy) – Enter the date that the debt began, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
                        <li>Amount Owed – Enter the amount of the debt that is owed by the debtor, including any interest.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Creditors Tab</h3>
                    <p className="content-paragraph">
                        This tab refers to any debts or loans that are owed by the taxpayer in terms of their business. This does not include personal debts owed by the taxpayer as an individual. Each credit requires a separate row.
                    </p>
                    <ul className="content-list">
                        <li>TIN of the Creditor – Enter the TIN of the taxpayer who is owed the debt, if applicable.</li>
                        <li>Creditor's Name – Enter the taxpayer's name, if applicable, or the name of the individual who is owed the debt.</li>
                        <li>Description – Enter a brief description of the context and terms of the debt.</li>
                        <li>Date of Liability (dd/mm/yyyy) – Enter the date that the debt began, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
                        <li>Amount Owed – Enter the amount of the debt that is owed to the creditor, including any interest.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Related Party Transactions Tab</h3>
                    <p className="content-paragraph">
                        This tab must be completed, saved and uploaded by all taxpayers. This is particularly applicable to any taxpayer who has made transactions with any 'related persons', <Link to="/real-regime-details">(check on Real Regime Details)</Link> for more details. Each transaction requires a separate row.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that this tab must be completed, saved and uploaded even if there are no applicable transactions. If this is the case, complete a single row entering 'None' for all columns, with the exception of 'Date of transaction (dd/mm/yyyy)' and 'Amount paid' where the final date of the tax year, eg. '31/12/2017' and '0' should be entered respectively.
                    </p>
                    <ul className="content-list">
                        <li>TIN – Supplier TIN if any</li>
                        <li>Taxpayer Name – Enter supplier name</li>
                        <li>Tax Period (Year) – Enter the year in which the related transaction happened</li>
                        <li>Tax Type Desc – Enter CIT or PIT</li>
                        <li>Name of related person – Enter the name of the person that qualify the transaction to be transfer pricing</li>
                        <li>Nature of relationship – Enter the relationship type between the client and related person</li>
                        <li>Country of tax residence – Enter the name of the country where related person resides</li>
                        <li>Country of incorporation (Where applicable) – Enter the name of the country where the supply is incorporated</li>
                        <li>Description of transactions (including transfers if any) – Select one of the options from the proposed list in accordance with the transaction</li>
                        <li>Aggregate value of transactions from related persons ie. Inbound Transactions (Frw**) – Enter the aggregate value of the transaction in FRW</li>
                        <li>Aggregate value of transactions to related persons ie. Outbound Transactions (Frw**) – Enter the aggregate value of the transaction in FRW</li>
                        <li>Transfer pricing adjustment (if any) – Percentage () for which transfer pricing documentation has been prepared – Enter a figure without % sign. For example, enter 10 instead of 10%</li>
                        <li>TP method – Select one of the options from the proposed list in accordance with the transaction</li>
                        <li>Key Financial Items - Select one of the options from the proposed list in accordance with the transaction</li>
                        <li>Rwandan Taxpayer – Enter the name of the Rwandan resident taxpayer</li>
                        <li>Holding Company (Consolidated) FRW</li>
                        <li>Transactions of capital nature with a connected person</li>
                        <li>TP method**** for transactions in Column Q -Select one of the options from the proposed list in accordance with the transaction</li>
                        <li>Value of disposal transactions in column R - Mode of payment for transactions in columns I, J, S</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Ledger Account</h3>
                    <ul className="content-list">
                        <li>Nature of goods/services – Select one of the options from the proposed list in accordance with the transaction</li>
                        <li>Category - Select one of the options from the proposed list in accordance with the transaction after selecting nature of goods/services</li>
                        <li>Suppliers Name – Enter the supplier's name</li>
                        <li>Country of Origin – Enter the country where goods/services were purchased</li>
                        <li>Value of goods/services - Enter the value of goods or services</li>
                        <li>Internal reference – Enter the internal transaction reference recorded in internal books of accounts or internal accounts system for easy reference</li>
                        <li>Payment mode/reference – Enter the payment channel used to settle the transaction payment</li>
                        <li>Related rows – Enter declaration form row reference number on which the expense related to transaction will affect for each transaction.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Real Regime Declaration Form</h2>
                    <p className="content-paragraph">
                        After all applicable and required Real Regime Annexures been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Real Regime declaration, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are similar.
                    </p>
                    <p className="content-paragraph">
                        The Real Regime declaration form requires data on:
                    </p>
                    <ul className="content-list">
                        <li>Sales/Annual sales – Enter the total income generated by activities within the core operating activities of the business, i.e., the turnover or total sales.</li>
                        <li>Cost of Goods/Service Sold – Enter the total of all costs used to produce goods or services which gave been sold. This can be calculated as: Cost of Goods Sold = Opening Stock + Purchases – Closing Stock.</li>
                        <li>Opening Stock – Enter the cost of inventory at the start of the tax period. Enter the figure equals or less than the closing stock of the last year. For new taxpayer into real regime, enter le closing stock of the last year.</li>
                        <li>Purchases supported by EBM/DMC/WOP – Enter the cost of all inventory purchased during the tax period supported by the relevant document.</li>
                        <li>Closing Stock – Enter the cost of all inventory at the end of the tax period. Taxpayers with EBM must use the corresponding value in EBM. Where 'inventory' is defined as assets that are intended to be used or sold in the ordinary course of business, including inputs and finished products.</li>
                        <li>Operating Expenses with EBM/DMC/WOP –Enter the total of all expenses associated with the general, sales, and administrative functions of an entity supported by relevant documents. <Link to="/real-regime-details">(check on Real Regime Details)</Link> for more details on deductible and not tax-deductible expenses.</li>
                        <li>Expenses related to the Salaries and Wages – Enter the cost of the employment as per Pay As You Earn (PAYE) declaration of the period. The system rejects the entered value greater than the amount declared on PAYE.</li>
                        <li>Expenses supported by the Withholding _ Enter the value of transaction supported by declared Withholdings within the period under declaration.</li>
                        <li>Expenses not requiring EBM or DMC as Supporting Document – Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.</li>
                        <li>Operating Expenses – The system auto-sums the expenses above.</li>
                        <li>Depreciation – Enter the total depreciation on business assets during the tax period. <Link to="/real-regime-details">(check on Real Regime Details)</Link> for the calculation of depreciation. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.</li>
                        <li>Expenses – PIT only – Enter the total of both 'Operating Expenses' and 'Depreciation' as described above.</li>
                        <li>Employment Income – PIT only – Enter the total employment income received by the taxpayer.</li>
                        <li>Investment Income – Enter the total investment income. This includes all payments in cash or in kind in the form of interest, dividends or royalties. In the majority of cases, this will already have been paid as a Withholding Tax, but must still be declared, and then claimed back.</li>
                        <li>Transport Income – PIT only – Enter the total motor vehicle transport income, excluding any that has been declared separately through M-Declaration. <Link to="/declaring-motor-vehicle-income-tax">(check on Declaring Motor Vehicle Income Tax using M-Declaration)</Link> for more details on declaring motor vehicle transport income through M-Declaration.</li>
                        <li>Non-Operating and Extraordinary Income – Enter the total income generated by activities outside of the core operating activities of a business and that are unlikely to recur in the foreseeable future. Revenue Surplus for Specified Entities Exempted from CIT – Only CIT- Enter the surplus from CIT exempted entities.</li>
                        <li>Rental Income – CIT only – Enter the total income received in cash or in kind from the rental or leasing of machinery, equipment, land, buildings and livestock. It is important to note that rental income for land and buildings received by PIT taxpayers must be declared separately as Local Government Taxes (LGT) and Fees, <Link to="/rental-income-tax">(check on Rental Income Tax)</Link> for more details. Rental income that from other assets received by PIT taxpayers must be entered in the 'Sales/Annual sales' field.</li>
                        <li>Employment Deductions – PIT only – Enter any exempt employment income, if this amount has also been included in the 'Employment Income' field. <Link to="/paye-explanation">(check on Explanation of PAYE)</Link> for more details on exempt employment income.</li>
                        <li>Investment Expenses – Enter any expenses relating to maintenance or ownership with the objective of earning future investment income in the form of interest, dividend, royalty or rent. This includes carrying charges and interest expenses. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.</li>
                        <li>Transport Expenses – PIT only – Enter any expenses relating to motor vehicle transport income, if they have not been included in the 'Expenses' field.</li>
                        <li>Non-Operating and Extraordinary Expenses – Enter the total expenses incurred by activities outside of the core operating activities of a business and that are unlikely to recur in the foreseeable future. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.</li>
                        <li>Non-Operating and Extra Ordinary Expenses – Enter expenses incurred to gain Non-Operating and Extra Ordinary Income. However, these expenses cannot be greater than the income generated.</li>
                        <li>Training and Research Expenses – Enter the total training and research expenses that are incurred for the direct purpose of the business. This does not include any purchases or improvements of immovable property or exploration assets. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.</li>
                        <li>Accelerated depreciation (Investment Allowances) – Enter the total investment allowances available to registered investors only. Refer to the Law on investment promotion and facilitation for details. Enter the value less or equal to the value of Ledger account annexure taking the sum dedicated to this row in its last column.</li>
                        <li>Bad Debts – Enter the total deduction allowed for bad debts. A deduction is only allowed if the following criteria are met:
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                                <li>an amount corresponding to the debt was previously declared as income.</li>
                                <li>the debt is written off in the books of the taxpayer.</li>
                                <li>for debts of FRW 3,000,000 or more, the taxpayer has taken all possible steps in pursing payment and has shown proof that the debtor is insolvent.</li>
                                <li>for debts less than FRW 3,000,000, the taxpayer has taken all possible steps in pursuing payment over a period of three years.</li>
                            </ul>
                            If any value entered, remember to attach also the court decision in 'Upload annexure'
                        </li>
                        <li>Rental Expenses – CIT only – Enter the total deduction allowed for rental income from machinery, equipment, land and livestock. The deduction can include:
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                                <li>10% of the rental income as wear-and-tear expense.</li>
                                <li>Interest paid on loans to purchase the rented items.</li>
                                <li>Depreciation expenses equivalent to 5% annually of the cost price of the rented items.</li>
                            </ul>
                        </li>
                        <li>Reintegration of Expenses Not Tax Deductible – Enter any expenses that are not tax deductible, if this amount has also been included in the 'Expenses' field. <Link to="/real-regime-details">(check on Real Regime Details)</Link> for more details for the types of expenses that are not tax deductible.</li>
                        <li>Depreciation Adjustments (+/-) – Enter the difference between the depreciation entered in the 'Depreciation' field, and the depreciation basis allowed, if applicable. <Link to="/real-regime-details">(check on Real Regime Details)</Link> for more details on the depreciation basis.</li>
                        <li>Fiscal Loss Carried Forward from Previous periods– Enter the total deduction allowed for losses declared, but not yet deducted, in the previous five (5) tax periods. Losses can be deducted against profits, with earlier losses being deducted before later losses.</li>
                        <li>Non-Taxable Dividends Received – CIT only – Enter the total income of dividends received by the taxpayer, that have already had tax withheld and paid on their behalf.</li>
                        <li>Tax Discounts – Enter any tax discounts allowed for the taxpayer. The types of tax discounts allowed are subject to change in the Investment Code, see the Rwanda Development Board (RDB) for the latest versions of these laws.</li>
                        <li>Agricultural and Livestock Activities Exempted Turnover – Enter the value of income from this sector. This value must be less than FRW 12,000,000.</li>
                        <li>Income Accrued from Saving and Employees Share Scheme – Refer to the tax incentive as per Law establishing Taxes on Income.</li>
                        <li>RDB domestic tax investment incentives (investment code) & RRA discount (Income tax law) – Refer to the Law on investment promotion and facilitation and Law establishing Taxes on Income.</li>
                        <li>Foreign Tax Credit – Enter any tax that has been paid on income derived from taxable activities performed abroad that can be substantiated with proof.</li>
                        <li>Quarterly Prepayments – This field is automatically filled with the Instalment Quarterly Prepayments (IQP) that the taxpayer has already paid corresponding to this tax period.</li>
                        <li>Withholding on Imports – Enter any tax that has been withheld on imports (WHT 5%) and paid on behalf of the taxpayer during the tax period.</li>
                        <li>Withholding on Public Supplies – Enter any tax that has been withheld on public supplies (WHT 3%) and paid on behalf of the taxpayer during the tax period.</li>
                        <li>Withholding on Other Payments – Enter any tax that has been withheld on other payments and paid on behalf of the taxpayer during the tax period.</li>
                        <li>Withholding on payments (PAYE) – PIT only – Enter any Pay As You Earn (PAYE) that has been withheld and paid on behalf of the taxpayer during the tax period.</li>
                        <li>Overpayment from Previous Periods – Do not fill this row.</li>
                    </ul>
                    <p className="content-paragraph">
                        Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 23</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example Real Regime PIT declaration form is entered below. The total PIT due to be paid with this declaration is FRW 2,325,515.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declare_real_regime_01.png" alt="Real Regime Declaration Form Part 1">
                            <img
                                src="/images/declare_real_regime_01.png"
                                alt="Real Regime Declaration Form Part 1"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declare_real_regime_02.png" alt="Real Regime Declaration Form Part 2">
                            <img
                                src="/images/declare_real_regime_02.png"
                                alt="Real Regime Declaration Form Part 2"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declare_real_regime_03.png" alt="Real Regime Declaration Form Part 3">
                            <img
                                src="/images/declare_real_regime_03.png"
                                alt="Real Regime Declaration Form Part 3"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declare_real_regime_04.png" alt="Real Regime Declaration Form Part 4">
                            <img
                                src="/images/declare_real_regime_04.png"
                                alt="Real Regime Declaration Form Part 4"
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
                        After saving the declaration form, upload the annexures and then compare with the Real Regime declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declaration forms.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that the following annexures must be uploaded with all Real Regime declarations:
                    </p>
                    <ul className="content-list">
                        <li>Balance Sheet Annexure</li>
                        <li>Profit & Loss A/c Annexure</li>
                        <li>Company Representative</li>
                        <li>Related Party Transactions (Transfer Pricing tab)</li>
                    </ul>
                    <p className="content-paragraph">
                        In addition, if the taxpayer's annual turnover is above FRW 600,000,000, the 'Certified Financial Statements' annexure must also be uploaded by the approved professional from audit firm on behalf of the taxpayer. <Link to="/real-regime-details">(check on Real Regime Details)</Link> for more details on these documents. Finally, all relevant annexures must also be uploaded.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 24</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Continuing the example of the declaration above, the comparison between this declaration form and the uploaded annexures is shown below. As all the comparison values are equal, and all the mandatory annexures uploaded, the declaration can be certified and submitted.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declare_real_regime_05.png" alt="Real Regime Declaration Comparison">
                            <img
                                src="/images/declare_real_regime_05.png"
                                alt="Real Regime Declaration Comparison"
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
                        <ImageModal src="/images/declare_real_regime_06.png" alt="Real Regime Declaration Submitted">
                            <img
                                src="/images/declare_real_regime_06.png"
                                alt="Real Regime Declaration Submitted"
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

                <section className="content-section">
                    <h2>Real Regime Declaration Form Calculation Summary</h2>
                    <div style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Gross Profit = Business Income/Sales – Cost of Goods Sold
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Net Operating Income or Loss = Gross Profit – Total Expenses and Depreciation
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Total Income = Net Operating Income or Loss + Additional Income
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Total Deductions = Additional Expenses + Investment Allowance + Bad Debts
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Net Income = Total Income - Total Deductions
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Taxable Income = Net Income + Reintegration of Non-Deductible Expenses + Depreciation Adjustments + Loss Carried Forward from Previous Five Tax Periods - Non-Taxable Dividend Received
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            CIT / PIT payable = (Taxable Income * CIT / PIT tax rates) – All Tax Discounts
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem', fontWeight: '600' }}>
                            Total Credits = Foreign Tax Credit + Quarterly Prepayments + All Withholdings
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: 0, fontWeight: '600' }}>
                            Net Tax Due = CIT / PIT Payable – Total Credits – Overpayments from Previous Periods
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DeclaringRealRegimeETax;

