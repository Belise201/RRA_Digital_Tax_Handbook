import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamingTaxPenalties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Gaming Taxes Penalties and Fines</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        The penalties and fines for gaming taxes are similar to other domestic taxes, <Link to="/domestic-penalties" className="content-link">(check on Domestic Taxes Penalties and Fines)</Link> for more details. This includes penalties and fines for:
                    </p>
                    <ul className="content-list">
                        <li>Late declaration</li>
                        <li>Late payment</li>
                        <li>Declaring less than the correct tax due</li>
                        <li>Paying less than the tax due declared</li>
                    </ul>
                    <p className="content-paragraph">
                        The rules concerning interest, administrative fines and repeat offenders are also as explained <Link to="/domestic-penalties" className="content-link">(check on Domestic Taxes Penalties and Fines)</Link> for more details.
                    </p>
                    <p className="content-paragraph">
                        The additional penalties and fines applicable to Gaming Taxes are the same as those concerning other types of withholding taxes, <Link to="/withholding-taxes-explanation" className="content-link">(check on Explanation of Withholding Taxes)</Link> for more details.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that these penalties apply separately to both Gaming Tax and Withholding Tax of 25% on Gambling Proceeds. Failure to declare or pay any one tax type will result in penalties and fines applying to only that particular tax type. Failure to declare or pay both tax types will result in penalties and fines applying to both tax types.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default GamingTaxPenalties;

