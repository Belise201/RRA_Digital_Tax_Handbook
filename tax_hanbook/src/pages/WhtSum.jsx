import React from 'react';
import { FileText } from 'lucide-react';

const WhtSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Withholding Taxes Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Who must register for Withholding Taxes?</h2>
                    <p className="content-paragraph">
                        Any taxpayer making payments of types of income that require withholding must register for withholding taxes.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who pays Withholding Taxes?</h2>
                    <p className="content-paragraph">
                        Withholding taxes are declared and paid by the source of the transaction, on behalf of the recipient.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is Withholding Tax of 15% (WHT 15%)?</h2>
                    <p className="content-paragraph">
                        WHT 15% must be withheld and paid on income received by non-registered businesses or registered businesses without a recent income tax declaration. It applies to the following types of income: interest income, dividend income, royalty income, service fees, performance payments, gambling proceeds and payments for goods, services and public tenders.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is Withholding Tax of 3% (WHT 3%)?</h2>
                    <p className="content-paragraph">
                        WHT 3% must be withheld and paid by public institutions on payments to the winners of public tenders.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Other Withholdings</h2>
                    <p className="content-paragraph">
                        Based on Double Taxation Agreement (DTA), withholding tax 15% can have a reduced rate:
                    </p>
                    <ul className="content-list">
                        <li>Withholding on interests: 10% or 5% depending on agreement;</li>
                        <li>Withholding on dividend: 10% or 5% depending on agreement;</li>
                        <li>Withholding on Professional and Management Fees: 12%;</li>
                        <li>Withholding on Services: 10%;</li>
                    </ul>
                    <p className="content-paragraph">
                        Based on other considerations:
                    </p>
                    <ul className="content-list">
                        <li>Investments: Withholding on preferential tax (interests, dividend, and royalty) - 0%;</li>
                        <li>Taxation of partners in partnership: Withholding on partners. The rate depends on either it is a company – 28% or individual enterprise – following PIT brackets;</li>
                        <li>Type of service provided (Commissions – 15%, Board Member Allowance – 30%, Treasury Bonds – 15%, WOP Capital Gain – 10%, and WOP Gaming – 15%)</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Withholding Taxes?</h2>
                    <p className="content-paragraph">
                        Withholding taxes are declared on a monthly basis. The declaration must be submitted and paid, for each type of income separately, by the 15th of the following month.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Withholding Taxes</h2>
                    <p className="content-paragraph">
                        Taxpayers must declare and pay withholding taxes on each type of taxable income separately.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Withhold tax on taxable payment transactions</p>
                    <p className="content-paragraph">
                        Before making payments subject to withholding taxes, withhold the tax due and retain the transaction invoices.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
                    <p className="content-paragraph">
                        Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Download, complete, validate and save annexures</p>
                    <p className="content-paragraph">
                        Download, complete and save the applicable Annexures.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Complete declaration form, upload annexures and submit</p>
                    <p className="content-paragraph">
                        Complete the declaration form, upload annexures, confirm accuracy and submit the Withholding Tax declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: View acknowledgement receipt and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default WhtSum;

