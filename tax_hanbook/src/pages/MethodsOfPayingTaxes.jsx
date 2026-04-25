import React from 'react';
import { FileText } from 'lucide-react';

const MethodsOfPayingTaxes = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Methods of Paying Taxes</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>How can taxes and fees be paid?</h2>
                    <p className="content-paragraph">
                        Taxpayers should submit tax declarations before paying taxes. Tax declarations provide the necessary information to calculate the correct amount of tax due.
                    </p>
                    <p className="content-paragraph">
                        The process of submitting the relevant tax declarations is different for each tax type, and is discussed in greater detail in their respective chapters of the Tax Handbook.
                    </p>
                    <p className="content-paragraph">
                        However, after declaring, the methods of paying taxes are the same for all types of domestic taxes, customs duties and local government taxes and fees. There are four possible methods of paying all types of taxes and fees:
                    </p>
                    <ul className="content-list">
                        <li>Online using Internet Banking and E-Payment.</li>
                        <li>On mobile phones or through agents using MTN Mobile Money and airtel money.</li>
                        <li>Through Mobicash agents.</li>
                        <li>In person at a bank outlet.</li>
                    </ul>
                    <p className="content-paragraph">
                        It is important to note that it is not possible to pay taxes in cash at RRA offices.
                    </p>
                    <p className="content-paragraph">
                        The details needed each method of paying taxes are the same. However, there are many advantages for taxpayers to paying taxes online or mobile phones. This Tax Handbook aims to provide the information necessary for all methods of paying taxes.
                    </p>
                    <p className="content-paragraph">
                        For all methods of paying taxes, it is important to save any receipts confirming the payment.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the advantages of paying taxes using Internet Banking, E-Payment, MTN Mobile Money/Airtel Mobile Money or Mobicash?</h2>
                    <p className="content-paragraph">
                        The benefits of paying online, on mobile phones or through licensed agents are:
                    </p>
                    <ul className="content-list">
                        <li>Pay taxes anytime, anywhere.</li>
                        <li>Avoid travel costs of visiting a bank.</li>
                        <li>Avoid queuing times at banks.</li>
                        <li>Avoid safety risks of carrying cash.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What details are needed when paying taxes?</h2>
                    <p className="content-paragraph">
                        There are two main details needed when paying taxes. The first detail needed is the 'RRA Reference Number' of the declaration that has been submitted. The second detail needed is the amount of tax due to be paid. Note that the amount due may also include any penalties and fines referring to that declaration.
                    </p>
                    <p className="content-paragraph">
                        Both these details are in the 'Acknowledgement Receipts' generated after submitting all tax declarations.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MethodsOfPayingTaxes;

