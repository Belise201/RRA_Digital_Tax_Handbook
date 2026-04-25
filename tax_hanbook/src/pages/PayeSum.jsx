import React from 'react';
import { FileText } from 'lucide-react';

const PayeSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Pay As You Earn (PAYE) Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Who pays PAYE?</h2>
                    <p className="content-paragraph">
                        PAYE is a tax on employees' income. It is withheld, declared and paid on their behalf by their employers.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for PAYE?</h2>
                    <p className="content-paragraph">
                        Any taxpayer who pays its employees in cash, benefits-in-kind or allowances is required to register for PAYE.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the rate of PAYE for permanent employees?</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Monthly taxable income</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Marginal Tax Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 0 to FRW 60,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>0%</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 60,001 to FRW 100,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>10%</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 100,001 to FRW 200,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>20%</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Above FRW 200,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>30%</td></tr>
                        </tbody>
                    </table>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay PAYE?</h2>
                    <p className="content-paragraph">
                        PAYE is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may choose to declare on a quarterly basis.
                    </p>
                    <p className="content-paragraph">
                        Whether monthly or quarterly, the PAYE declaration must be submitted and paid by the 15th of the month following the end of the tax period.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Are PAYE and RSSB contributions declared together?</h2>
                    <p className="content-paragraph">
                        PAYE and RSSB contributions can be declared together in a 'Unified PAYE declaration' using RSSB system called 'Ishema'.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PayeSum;

