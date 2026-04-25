import React from 'react';
import { FileText } from 'lucide-react';

const CapitalGainsTaxExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Capital Gains Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is Capital Gains Tax?</h2>
                    <p className="content-paragraph">
                        Capital Gains Tax applies to the profit from the sale or transfer of shares, licenses, debt instruments, options, guarantees and similar assets.
                    </p>
                    <p className="content-paragraph">
                        Capital Gains Tax ensures that shareholders pay tax on the income gained at the point of sale of these assets.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Capital Gains Tax?</h2>
                    <p className="content-paragraph">
                        The tax on profit from the sale of shares is withheld, declared and paid by the company whose shares were sold.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the tax rate of Capital Gains Tax?</h2>
                    <p className="content-paragraph">
                        The tax rate of Capital Gains Tax is 10%. This is charged on the basis of the profit from the sale of shares, licenses, debt instruments, options, guarantees and similar assets where profit equals sale price minus purchase price.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Capital Gains Tax?</h2>
                    <p className="content-paragraph">
                        Capital Gains tax must be declared and paid by the 15th of the month after the transaction was made.
                    </p>
                    <p className="content-paragraph">
                        However, as Capital Gains Tax is declared on a case-by-case basis, companies do not have to wait for the deadline to declare and pay. It is recommended to declare and pay Capital Gains Tax as soon as possible after making the transaction.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CapitalGainsTaxExplanation;

