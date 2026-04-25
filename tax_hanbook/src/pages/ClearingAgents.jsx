import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClearingAgents = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Clearing Agents</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are Clearing Agents?</h2>
                    <p className="content-paragraph">
                        A clearing agent (or customs agent) is a company licensed to transact any business related to the import or export of goods. Clearing agents interact with the revenue authority on behalf of the taxpayer. Clearing agents are trained and licensed by the revenue authority ensuring that all customs procedures are followed correctly.
                    </p>
                    <p className="content-paragraph">
                        There are 236 clearing agents licensed to operate by RRA as of May 2024. For the full list, see the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/customs-services/licencing-of-agents/updated-list-of-clearing-agencies" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://www.rra.gov.rw/en/customs-services/licencing-of-agents/updated-list-of-clearing-agencies
                        </a>
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who needs to contract Clearing Agents?</h2>
                    <p className="content-paragraph">
                        Any taxpayer wishing to import or export goods valued at more than FRW 500,000 is required to contract a clearing agent to carry out the importation or exportation process on their behalf.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the roles of taxpayers and Clearing Agents?</h2>
                    <p className="content-paragraph">
                        The importing or exporting taxpayers must contract clearing agents. The taxpayers may contract different clearing agents to conduct the import/export procedures on their behalf.
                    </p>
                    <p className="content-paragraph">
                        The taxpayer is responsible for providing the clearing agent with all required documents (<Link to="/declaring-imports-and-export">(check on Declaring Imports and Export)</Link> for the documents required for imports and exports) and for paying all due taxes and fees. These can be paid by the taxpayer directly, or through the clearing agent.
                    </p>
                    <p className="content-paragraph">
                        The clearing agent is responsible for exercising due diligence in ensuring the documentation provided by the taxpayer is valid and accurate, correctly identifying the HS Codes, submitting import or export declarations, printing assessment notices and if necessary paying Customs Duties on the taxpayers' behalf, facilitating any queries/statement of offence or verification by Customs staff and awaiting and receiving release orders, and exit notes. The clearing agent retains responsibility for the goods until they leave the border post or dry port.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the licensing process of Clearing Agents?</h2>
                    <p className="content-paragraph">
                        Clearing agents must apply for a license from the Commissioner for Customs in order to operate. If approved, clearing agents are licensed for a period of at least one year, before they must be renewed. The Commissioner may also suspend or revoke a license in the event of a breach of laws, procedure, negligence or unsatisfactory conduct.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who is responsible in the event of penalties and fines?</h2>
                    <p className="content-paragraph">
                        Both taxpayers and clearing agents are jointly liable in the event of penalties and fines.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ClearingAgents;

