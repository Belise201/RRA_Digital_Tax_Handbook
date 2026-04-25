import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const CapitalGainsTaxDeclaration = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Capital Gains Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        The declaration process for Capital Gains Tax is the same as for other Withholding Taxes, <Link to="/withholding-taxes-explanation" className="content-link">(check on Explanation of Withholding Taxes)</Link> for more details. The 'Withholdings' tab of the Withholding annexure must be completed, validated and saved as normal.
                    </p>
                    <p className="content-paragraph">
                        The Capital Gains declaration form is selected by choosing 'WOP – CAPITAL GAINS'. Complete the declaration form, upload the annexure and submit the declaration as normal.
                    </p>
                    <p className="content-paragraph">
                        In the withholding taxes declaration forms, the total combined values for all transactions for the withholding type during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 54</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            A share sold at FRW 150,000 was acquired at FRW 140,000. This attracts a withholding tax of 10% on the increase in value of shared sold (FRW 150,000- FRW 140,000) *10%. The Capital Gains Tax due for the transaction in this tax period is FRW 1,000.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CapitalGainsTaxDeclaration;

