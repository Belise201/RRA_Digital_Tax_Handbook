import React from 'react';
import { FileText } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const PayingUsingBankingAndEpayment = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Paying Taxes online using Internet Banking and E-Payment</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Option 1: Using the banks' internet banking systems</h2>
                    <p className="content-paragraph">
                        All commercial banks in Rwanda now offer internet banking services. However, the process of using these internet banking systems varies depending on the bank. It is not possible to cover each system in this Tax Handbook, but bank staff will be able to assist with registering and using internet banking, including explaining how to pay taxes.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Option 2: Using the Domestic Taxes E-Payment system</h2>
                    <p className="content-paragraph">
                        In the case of domestic taxes, after submitting the declaration it is possible to directly access the domestic taxes E-Payment system, by clicking 'E-payment'.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lump_sum_03.png" alt="E-payment option" />
                    </div>
                    <p className="content-paragraph">
                        This shows the following screen. Clicking on the 'Select Bank to Pay' drop-down menu lists the banks that are linked with the domestic taxes E-Payment system.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that taxpayers may need to register for internet banking directly with their bank before paying taxes on the E-Payment system.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/e_payment_01.png" alt="Select Bank to Pay" />
                    </div>
                    <p className="content-paragraph">
                        After the taxpayer has selected their bank from the drop-down menu and clicked 'submit', they will be directed to the online banking system of their bank. Follow the bank instructions to complete the payment. The exact steps may vary by bank.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PayingUsingBankingAndEpayment;

