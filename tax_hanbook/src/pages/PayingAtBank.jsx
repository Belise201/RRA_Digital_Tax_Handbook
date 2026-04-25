import React from 'react';
import { FileText } from 'lucide-react';

const PayingAtBank = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Paying taxes at a Bank</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Taxes can be paid at all registered commercial banks in Rwanda. This can be done using a cash deposit slip or by bank cheque. Any payments of FRW 500,000 (five hundred thousand Rwandan francs) or more must be paid by bank cheque only.
                    </p>
                    <p className="content-paragraph">
                        When writing a bank cheque, make it out to 'Rwanda Revenue Authority', making sure to include the RRA Reference Number, total tax due and tax type.
                    </p>
                    <p className="content-paragraph">
                        On the Cash Deposit Slip, enter the following details:
                    </p>
                    <p className="content-paragraph">
                        <strong>Beneficiary:</strong>
                    </p>
                    <ul className="content-list">
                        <li><strong>Account Number</strong> – Write the RRA Reference Number from the Acknowledgement Receipt.</li>
                        <li><strong>Of</strong> – Write 'Rwanda Revenue Authority'.</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Amount</strong> – write the 'Total Tax Due'.
                    </p>
                    <p className="content-paragraph">
                        <strong>Paid in by:</strong>
                    </p>
                    <ul className="content-list">
                        <li><strong>Name</strong> – Write the Taxpayer Name.</li>
                        <li><strong>Address</strong> – Write the address of the business or the PO Box number if applicable.</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Comment:</strong> Write the tax type, e.g 'VAT'.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PayingAtBank;

