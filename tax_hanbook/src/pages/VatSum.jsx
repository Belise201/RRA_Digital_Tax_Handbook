import React from 'react';
import { FileText } from 'lucide-react';

const VatSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Value Added Tax (VAT) Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is VAT?</h2>
                    <p className="content-paragraph">
                        VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers on the value added at each stage of production.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for VAT?</h2>
                    <p className="content-paragraph">
                        A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes all taxable, exempt and zero-rated sales.
                    </p>
                    <p className="content-paragraph">
                        In addition, any taxpayer may choose to register for VAT.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the rate of VAT?</h2>
                    <p className="content-paragraph">
                        The normal rate of VAT is 18%. There is also a zero-rate (0%) and exemptions applicable for certain types of goods and services. VAT is charged on the value added at each stage of production.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay VAT?</h2>
                    <p className="content-paragraph">
                        VAT is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may choose to declare on a quarterly basis.
                    </p>
                    <p className="content-paragraph">
                        Whether monthly or quarterly, the VAT declaration must be submitted and any tax paid by the 15th of the month following the end of the tax period.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-step guide to declaring and paying VAT</h2>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Bookkeeping and issuing EIS invoices.</p>
                    <p className="content-paragraph">
                        Ensure accurate bookkeeping including retaining all VAT invoices for inputs and using Electronic Invoicing System (EIS), a type of EBM to issue EIS invoices for all sales.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
                    <p className="content-paragraph">
                        Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Download, complete, validate and save annexures</p>
                    <p className="content-paragraph">
                        Download, complete, validate and save the applicable Annexures. This includes tabs for sales, locally purchased inputs, imported inputs, VAT reverse charge and VAT retained by public institutions.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Complete declaration form, upload annexures and submit</p>
                    <p className="content-paragraph">
                        Complete the declaration form, upload annexures, confirm accuracy and submit the VAT declaration.
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

export default VatSum;

