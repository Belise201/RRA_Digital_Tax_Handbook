import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const DecentralisedPenalties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <AlertTriangle size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Decentralised Entities Taxes and Fees Penalties and Fines</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are the penalties for late declaration of Decentralised Entities Taxes and Fees?</h2>
                    <p className="content-paragraph">
                        A Decentralised Entities Tax and Fee registered taxpayer who has failed to submit a tax declaration within the required time must still declare and pay, and is subject to an additional three penalties:
                    </p>
                    <ul className="content-list">
                        <li>1.5% interest of the unpaid tax due per month</li>
                        <li>A fine equal to 40% of the tax due if the declaration is submitted late</li>
                        <li>An additional fine for late payment of 10% of the tax due, up to a maximum of FRW 100,000</li>
                    </ul>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 78</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Amahoro declared Trading License Tax for the 2024 tax period late. Instead of declaring by the 31st January 2024, she finally declared and paid on 18th March 2024 (within two months late). The tax due for this tax period was FRW 160,000.
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Amahoro's penalty for declaring late is:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            (1) FRW 160,000 * 1.5% * 2 = FRW 4,800
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            (2) FRW 160,000 * 40% = FRW 64,000
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            (3) FRW 160,000 * 10% = FRW 16,000.
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            In addition to the FRW 160,000 tax due, Amahoro must thus pay FRW 4,800 + FRW 64,000 + FRW 16,000 = FRW 84,800.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for late payment of Decentralised Entities Taxes and fees?</h2>
                    <p className="content-paragraph">
                        A Decentralised Entities Tax and Fee registered taxpayer who has submitted a tax declaration, but failed to pay the full amount of taxes due within the required time must still pay the full amount of taxes due, and is subject to two additional penalties:
                    </p>
                    <ul className="content-list">
                        <li>1.5% interest of the unpaid tax due per month</li>
                        <li>10% of the unpaid tax due, up to a maximum of FRW 100,000</li>
                    </ul>
                    <p className="content-paragraph">
                        The same penalties also apply to late payment of Decentralised Entities fees.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for not registering for Trading License Tax or not presenting a Trading License Tax certificate when requested?</h2>
                    <p className="content-paragraph">
                        It is illegal to conduct business activities without having declared and paid Trading License Tax for the concerned tax period. Failure to present a valid Trading License Tax certificate when requested is subject to a penalty of FRW 10,000. In addition, the district has the right to temporarily close down any business activities.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who declares incomplete, incorrect or fraudulent information?</h2>
                    <p className="content-paragraph">
                        A taxpayer who submits a declaration, but is found to have declared incomplete, incorrect or fraudulent information, must pay the unpaid tax due and is subject to an additional penalty of 40% of the tax due.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the rules concerning interest?</h2>
                    <p className="content-paragraph">
                        The rules concerning interest are the same as for interest on domestic taxes, <Link to="/domestic-penalties" className="content-link">(check on Domestic Taxes Penalties and Fines)</Link> for more details.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DecentralisedPenalties;

