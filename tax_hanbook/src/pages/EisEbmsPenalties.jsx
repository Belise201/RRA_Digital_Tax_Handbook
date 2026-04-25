import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const EisEbmsPenalties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">EIS/EBMs Penalties and Fines</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        The penalties and fines relating to the non-compliance with EBM user obligations or misuse are explained below. These may be applied separately, or in addition to, any penalties and fines relating to Value Added Tax (VAT), <Link to="/vat-explanation" className="content-link">(check on VAT Explanation)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who does not have an EIS/EBM, but is required to have?</h2>
                    <p className="content-paragraph">
                        A taxpayer who does not have an EIS/EBM for a sales location that requires an EIS/EBM is subject to a penalty of:
                    </p>
                    <ul className="content-list">
                        <li>FRW 200,000 for a first-time offence.</li>
                        <li>FRW 400,000 for any repeat offences.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who fails to comply with any other EIS/EBM user obligations?</h2>
                    <p className="content-paragraph">
                        A VAT taxpayer who fails to comply with any other five EIS/EBM user obligations, including indicating the true name of the goods, notify RRA of EIS/EBM failure and refraining from deleting invoices inappropriately, is subject to a penalty of:
                    </p>
                    <ul className="content-list">
                        <li>FRW 200,000 for a first-time offence.</li>
                        <li>FRW 400,000 for any repeat offences.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who has an EBM but fails to issue an EIS/EBM invoice?</h2>
                    <p className="content-paragraph">
                        A VAT taxpayer who has an operational EIS/EBM but fails to issue an EIS/EBM invoice when required is subject to a penalty of:
                    </p>
                    <ul className="content-list">
                        <li>Ten (10) times the value of the evaded VAT for a first-time offence.</li>
                        <li>Twenty (20) times the value of the evaded VAT for any repeat offences.</li>
                    </ul>
                    <p className="content-paragraph">
                        A non-VAT taxpayer who has an operational EIS/EBM bit fails to issue an EIS/EBM invoice when required is subject to a penalty of:
                    </p>
                    <ul className="content-list">
                        <li>Twice (2) times the value of the transaction.</li>
                        <li>Four (4) times the value of the transaction for any repeat offences.</li>
                    </ul>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 36</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Lucie is a VAT-registered taxpayer. Lucie is caught not issuing an EBM invoice for a FRW 59,000 transaction with VAT evaded of FRW 9,000. As it is her first offence, Lucie is subject to a penalty of:
                        </p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            FRW 9,000 * 10 = FRW 90,000.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who has an EIS/EBM but issues an undervalued EIS/EBM invoice?</h2>
                    <p className="content-paragraph">
                        A taxpayer who has an operational EIS/EBM but issues an undervalued EIS/EBM invoice is subject to a penalty of:
                    </p>
                    <ul className="content-list">
                        <li>Ten (10) times the value of the evaded VAT for a first-time offence.</li>
                        <li>Twenty (20) times the value of the evaded VAT for any repeat offences.</li>
                    </ul>
                    <p className="content-paragraph">
                        A non-VAT taxpayer who has an operational EIS/EBM bit fails to issue an EIS/EBM invoice when required is subject to a penalty of:
                    </p>
                    <ul className="content-list">
                        <li>Twice (2) times the value of the transaction.</li>
                        <li>Four (4) times the value of the transaction for any repeat offences.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What other penalties can taxpayers be subject to for non-compliance with EIS/EBM requirements?</h2>
                    <p className="content-paragraph">
                        Additional penalties available to RRA for non-compliance with EIS/EBM requirements can include:
                    </p>
                    <ul className="content-list">
                        <li>Closure of business activities for a period of thirty (30) days.</li>
                        <li>Being barred from bidding for public tenders.</li>
                        <li>Being named in nationwide newspapers.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default EisEbmsPenalties;

