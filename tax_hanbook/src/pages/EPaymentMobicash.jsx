import React from 'react';
import { FileText } from 'lucide-react';

const EPaymentMobicash = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Paying taxes through agents with Mobicash</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Paying taxes with Mobicash is currently only available through Mobicash agents. The taxpayer does not need to register with Mobicash to pay taxes through an agent.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that there are small additional transaction fees payable to Mobicash that vary depending upon the amount of tax being paid.
                    </p>
                    <p className="content-paragraph">
                        To pay through a Mobicash agent, provide the agent with the RRA Reference Number from the Acknowledgement Receipt and sufficient funds to cover the amount payable, including transaction fees.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EPaymentMobicash;

