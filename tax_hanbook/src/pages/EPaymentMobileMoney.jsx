import React from 'react';
import { FileText } from 'lucide-react';

const EPaymentMobileMoney = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Paying taxes on mobile phones using MTN Mobile Money/Airtel Mobile Money</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        This can be done individually, or through a Telecom agent. To pay taxes individually, register on Telecom Mobile Money requires a SIM-card, and registering an account at any Telecom Mobile Money agent. The taxpayer does not need to register with MTN/Airtel to pay taxes through an agent.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that there are small additional transaction fees payable to MTN that vary depending upon the amount of tax being paid.
                    </p>
                    <p className="content-paragraph">
                        Once registered, and with sufficient funds in the account to cover the amount payable, including transaction fees, follow these steps to pay taxes individually:
                    </p>
                    <ul className="content-list">
                        <li>Dial *182# to enter the mobile money platform.</li>
                        <li>Choose the Language.</li>
                        <li>Choose the 'Pay Bill' option.</li>
                        <li>Choose the 'RRA' payment option.</li>
                        <li>Enter the RRA Reference Number from the Acknowledgement Receipt.</li>
                        <li>This will then show the Amount and Taxpayer Name. If these details are correct, enter '1' to proceed with payment.</li>
                        <li>Enter Mobile Money PIN to confirm the payment.</li>
                    </ul>
                    <p className="content-paragraph">
                        To pay through an MTN Mobile Money agent, provide the agent with the RRA Reference Number from the Acknowledgement Receipt and sufficient funds to cover the amount payable, including transaction fees.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EPaymentMobileMoney;

