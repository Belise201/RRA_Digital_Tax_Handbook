import React from 'react';
import { FileText } from 'lucide-react';

const CustomsPenalties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Customs Penalties and Fines</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What law governs Customs Penalties?</h2>
                    <p className="content-paragraph">
                        Penalties for Customs offences concerning both imports and exports are listed in Articles from 93 to 218 of the EAC Customs Management Act (CMA). This Tax Handbook gives some examples of the offences and penalties. The latest version of the EAC CMA is available on the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://rwandatrade.rw/media/EAC%20Customs%20Management%20Act%20-%20Rev%202009.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://rwandatrade.rw/media/EAC%20Customs%20Management%20Act%20-%20Rev%202009.pdf
                        </a>
                    </p>
                    <p className="content-paragraph">
                        Note that penalties described as 'not exceeding' may be reduced through amicable agreement with the taxpayer.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When can goods be seized by RRA?</h2>
                    <p className="content-paragraph">
                        RRA has the right to forfeiture (seize without compensation) any of the following types of goods:
                    </p>
                    <ul className="content-list">
                        <li>Prohibited goods.</li>
                        <li>Restricted goods dealt with contrary to regulations.</li>
                        <li>Uncustomed goods, where goods have not followed full and correct customs procedures.</li>
                        <li>Concealed goods, or goods mislabelled or contained in any way likely to deceive any officer.</li>
                        <li>Smuggled goods.</li>
                        <li>Falsely documented or declared goods.</li>
                        <li>Goods subject to Customs control which are without authorisation moved, altered or interfered with.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for concealing, smuggling or mislabelling goods?</h2>
                    <p className="content-paragraph">
                        Anyone who is found concealing or smuggling any goods, or which are mislabelled or contained in anyway likely to deceive any officer is liable on conviction to:
                    </p>
                    <ul className="content-list">
                        <li>Pay any unpaid Customs duties.</li>
                        <li>Imprisonment not exceeding five years.</li>
                        <li>Fine not exceeding 50% of the dutiable value (CIF) of the goods.</li>
                        <li>Confiscation of goods.</li>
                        <li>Additional fines provided under VAT and Excise Duty laws may also apply.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for submitting false documents or declarations?</h2>
                    <p className="content-paragraph">
                        Anyone who submits any documents that are found to be false or incorrect is liable on conviction to:
                    </p>
                    <ul className="content-list">
                        <li>Pay any unpaid Customs duties.</li>
                        <li>Imprisonment not exceeding three years.</li>
                        <li>Fine not exceeding USD 10,000 (ten thousand US dollars).</li>
                        <li>Additional fines provided under VAT and Excise Duty laws may also apply.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for interfering with goods subject to Customs control without authorisation?</h2>
                    <p className="content-paragraph">
                        Anyone who moves, alters, interferes with goods subject to Customs control without authorisation is liable on conviction to:
                    </p>
                    <ul className="content-list">
                        <li>Pay any unpaid Customs duties.</li>
                        <li>Imprisonment not exceeding three years.</li>
                        <li>Fine not exceeding USD 1,000 (one thousand US dollars).</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What is the penalty for aiding or abetting any offences?</h2>
                    <p className="content-paragraph">
                        Anyone who aids, abets, counsels or procures the commission of an offence is liable to the same penalty prescribed for that offence.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CustomsPenalties;

