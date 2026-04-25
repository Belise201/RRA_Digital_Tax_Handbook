import React from 'react';
import { FileText } from 'lucide-react';

const EisSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Electronic Invoicing System (EIS) Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are EISs?</h2>
                    <p className="content-paragraph">
                        EISs refer to methods of printing RRA certified invoices and sending sales data to RRA in real time. EIS invoices are required to be provided to buyers for every sales transaction by every registered taxpayer. An EBM is a type of EIS that can be used to print EIS receipts.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who needs to have EIS/EBM?</h2>
                    <p className="content-paragraph">
                        A registered taxpayer (whether VAT registered or not) who carries out sales transaction is required to issue EIS/EBM invoices at their sales locations.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What methods are available to comply with EIS requirements?</h2>
                    <p className="content-paragraph">
                        Taxpayers who are required to issue EBM invoices can do so by adopting either:
                    </p>
                    <ul className="content-list">
                        <li>EBM2.1</li>
                        <li>A Virtual Sales Data Controller (VSDC)</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>How do taxpayers use EIS/EBMs?</h2>
                    <p className="content-paragraph">
                        EIS/EBMs must be used to produce EIS/EBM invoices for every sales transaction, both to other businesses and final consumers. RRA staff train taxpayers on how to set up, program and use their EIS/EBMs.
                    </p>
                    <p className="content-paragraph">
                        The typical process for using EIS/EBMs is to enter the quantity, price and code of each item that is being sold. The taxpayer must then print the EIS/EBM invoice, give this to the consumer and keep a duplicate EIS/EBM invoice.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What if the EIS/EBM is not working for any reason?</h2>
                    <p className="content-paragraph">
                        If there is any period where the EIS/EBM is not working, for whatever reason, taxpayers must notify RRA.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EisSum;

