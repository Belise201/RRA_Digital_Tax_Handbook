import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const PayingSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Paying Taxes Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>How can taxes and fees be paid?</h2>
                    <p className="content-paragraph">
                        After declaring, all types of taxes and fees can be paid:
                    </p>
                    <ul className="content-list">
                        <li>Online using Internet Banking and E-Payment (Integration with all banks is underway to enable taxpayers to pay taxes directly within the e-Tax system. The service is already operational with Umwalimu SACCO and Unguka Bank.).</li>
                        <li>On mobile phones or through agents using MTN/Airtel Mobile Money.</li>
                        <li>Through Mobicash agents.</li>
                        <li>In person at a bank.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the advantages of paying taxes using Internet Banking, MTN/Airtel Mobile Money or Mobicash?</h2>
                    <p className="content-paragraph">
                        The benefits of paying online or on mobile phones are:
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
                        There are two main details needed when paying taxes. These are: the RRA Reference Number, also referred to as the 'Doc No', 'Doc ID' or 'RRA Ref No', and the total amount of tax due to be paid.
                    </p>
                    <p className="content-paragraph">
                        These are both found in the 'acknowledgement receipts' that are generated after submitting a tax declaration.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How can taxes be paid using Internet Banking or E-Payment?</h2>
                    <p className="content-paragraph">
                        For Internet Banking, the registration and use vary for each bank. Always enter the RRA Reference Number and the amount due from the Acknowledgement Receipt.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How can taxes be paid using MTN/Airtel Mobile Money?</h2>
                    <p className="content-paragraph">
                        After registering for MTN Mobile Money, dial *182# to enter the platform. Select the language, then 'Pay Bill', and 'RRA'. Enter the RRA Reference Number from the Acknowledgement Receipt. Enter the Mobile Money PIN to pay the amount due, including transaction fees.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How can taxes be paid through MTN/Airtel Mobile Money or Mobicash agents?</h2>
                    <p className="content-paragraph">
                        Provide the agent with the RRA Reference Number and the amount due from the Acknowledgement Receipt including transaction fees.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How can taxes be paid at a bank?</h2>
                    <p className="content-paragraph">
                        When paying by Bank Cheque or Cash Deposit Slip, ensure to make the payment to 'RRA' and write the RRA Reference Number, the tax type and the amount due.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Tax Types Summary</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', fontSize: '0.85rem' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Description</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Tax Type(s)</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Declaration and Payment Deadlines</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>For all businesses…</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Income Tax (PIT or CIT), including Income Tax Quarterly Prepayments (IQP)<br /><br />Trading License Tax - Annually<br />Trading Licence Tax - Quarterly</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>31st March of following year<br />30th June, 31st September and 31st December of current year<br /><br />31st January of current year<br />Q1 – End of January, Q2 – End of April; Q3 – End of July; Q4 – End of October</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/income-tax-explanation" className="content-link">Income Tax</Link><br /><br />
                                    <Link to="/trading-license-tax" className="content-link">Trading License Tax</Link><br /><br />
                                    <Link to="/trading-license-tax" className="content-link">Trading License Tax</Link><br />
                                    <Link to="/trading-license-tax" className="content-link">Trading License Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… with employees</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Pay As You Earn (PAYE)</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of following month or quarter</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/paye-explanation" className="content-link">PAYE</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… with annual turnover above FRW 20,000,000</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Value Added Tax (VAT)</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of following month or quarter</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/vat-explanation" className="content-link">VAT</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… which import or export goods</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Customs Duties</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>when importing or exporting</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/customs-explanation" className="content-link">Customs</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… which manufacture fruit juices, other juice, lemonades and sodas, cosmetic and beauty products, other alcoholic beverages, beers, wines, spirits, brandies, oils, cigarettes, lubricants and fluids, motor vehicles, powdered milk or airtime, Chocolate, Sweets and Chewing gum, flavoured and coloured syrup, other fermented beverages, financial transactions</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Excise Duty</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>5th of following month</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/excise-explanation" className="content-link">Excise Duty</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… which make payments of interest, dividends, royalties, service or consultancy fees, for performances, or to non-registered businesses</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Withholding Taxes</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of following month</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/withholding-taxes-explanation" className="content-link">Withholding Taxes</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… which pay out gambling proceeds</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Gaming Taxes</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of following month</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/gaming-tax-explanation" className="content-link">Gaming Taxes</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… which deal with minerals (local exploitation)</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Mining Royalty Tax</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of following month</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/mining-royalty-explanation" className="content-link">Mining Royalty Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… which deal with minerals (export)</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Export Tax (Minerals)</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Before export</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/customs-explanation" className="content-link">Export Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… to maintain roads in good condition</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Road maintenance Levy</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>31st December</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/road-maintenance-explanation" className="content-link">Road Maintenance Levy</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… paid on accommodation services</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Tourism tax</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of the following month</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/tourism-tax-explanation" className="content-link">Tourism Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>For all landowners…</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Immovable Property Tax</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>31st December of same year</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/immovable-property-tax" className="content-link">Immovable Property Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… renting out property</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Rental Income Tax</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>31st January of following year</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/rental-income-tax" className="content-link">Rental Income Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>…Sale of Immovable Property</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Tax on sale of immovable property</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Upon transaction</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/immovable-property-tax" className="content-link">Immovable Property Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>For all individuals…</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… who have sold/transferred shares, licenses, debt instruments, options, guarantees and similar assets</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Capital Gains Tax</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>15th of the following month</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/capital-gains-tax-explanation" className="content-link">Capital Gains Tax</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>For anyone…</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… importing a car</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Customs duties</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>when importing</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/importing-moto-vehicle" className="content-link">Importing Motor Vehicle</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… buying a car locally</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Motor Vehicle Ownership Transfer Fees</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>when buying the car</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/motor-vehicle" className="content-link">Motor Vehicle Transfer</Link>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>… requiring District's services or authorisation</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Decentralised Entities Fees</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>before the service or authorisation is provided</td>
                                <td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>
                                    <Link to="/fee-levied-decentralised-entities" className="content-link">Decentralised Entities Fees</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default PayingSum;

