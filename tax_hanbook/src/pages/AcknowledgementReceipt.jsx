import React from 'react';
import { FileText } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const AcknowledgementReceipt = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Acknowledgement Receipts</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are Acknowledgement receipts?</h2>
                    <p className="content-paragraph">
                        After submitting a declaration, for all types of taxes and fees, there is an option to download and view the acknowledgement receipt.
                    </p>
                    <p className="content-paragraph">
                        Acknowledgement receipts confirm the details of the taxpayer, contain details of the taxes and fees that must be paid, and provide the RRA Reference Number for the account the tax must be paid into. This RRA Reference Number is also known as the 'Doc ID', or 'Doc No'.
                    </p>
                    <p className="content-paragraph">
                        The RRA Reference Number is very important to ensure that the taxes are paid into the correct RRA tax account, and that the payment is attributed to the correct taxpayer. The RRA Reference Number and total tax due is highlighted in the examples for each broad tax type below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Domestic Taxes</h2>
                    <p className="content-paragraph">
                        In the case of domestic taxes on the E-Tax system, acknowledgement receipts can be viewed by clicking on 'View Acknowledgement Receipt' immediately after submitting the declaration, as seen below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lump_sum_03.png" alt="View Acknowledgement Receipt" />
                    </div>
                    <p className="content-paragraph">
                        Alternatively, from the E-Tax homepage, hover the mouse on 'Tax Declaration' and click on 'Submitted Declarations'. Choose the year of the tax period, and optionally the tax type, then click submit. Find the relevant submitted tax declaration, click on the Document Number, and the following options appear. Again, click on 'View Acknowledgement Receipt'.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_01.png" alt="Submitted Declarations" />
                    </div>
                    <p className="content-paragraph">
                        An example acknowledgement receipt for domestic tax declarations is displayed below. The associated RRA Reference Number and total tax due are highlighted.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_02.png" alt="Domestic Tax Acknowledgement Receipt" />
                    </div>
                </section>

                <section className="content-section">
                    <h2>Customs Duties</h2>
                    <p className="content-paragraph">
                        In the case of customs duties, the acknowledgement receipt is more commonly referred as the 'Assessment Notice'. This can be accessed by Clearing Agents through the Rwanda electronic Single Window (ReSW) system. The Clearing Agent then provides the taxpayer with the assessment notice in order to pay the taxes and fees due.
                    </p>
                    <p className="content-paragraph">
                        Different types of customs duties can be required to be paid to different accounts. Therefore, each assessment notice may have multiple RRA Reference Numbers with different amounts of tax due. The associated RRA Reference Numbers and amounts of tax due are highlighted in different colours in the example below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_03.png" alt="Customs Assessment Notice 1" />
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_04.png" alt="Customs Assessment Notice 2" />
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_05.png" alt="Customs Assessment Notice 3" />
                    </div>
                </section>

                <section className="content-section">
                    <h2>Local Government Taxes and Fees</h2>
                    <p className="content-paragraph">
                        In the case of Local Government Taxes (LGT) and Fees on the LGT system, this can vary slightly for the type of tax or fee. Typically, acknowledgement receipts can be viewed by clicking 'Get Acknowledgement' immediately after submitting the declaration, as seen below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_06.png" alt="Get Acknowledgement" />
                    </div>
                    <p className="content-paragraph">
                        The taxpayer can also enter their email address or phone number to receive the RRA Reference Number and tax due. An example acknowledgement receipt for LGT and fees declarations is displayed below. The associated RRA Reference Number and total tax due are highlighted.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/acknowledge_receipt_07.png" alt="LGT Acknowledgement Receipt" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AcknowledgementReceipt;

