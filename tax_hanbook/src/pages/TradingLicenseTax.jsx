import React from 'react';
import { FileText } from 'lucide-react';

const TradingLicenseTax = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Trading License Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is Trading License Tax?</h2>
                    <p className="content-paragraph">
                        Trading License Tax, also informally known as 'patent', is a tax levied on business activities carried out in defined boundaries of decentralized entities.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Trading License Tax?</h2>
                    <p className="content-paragraph">
                        Any person or business activities carried out in defined boundaries of decentralized entities in Rwanda is required to register for Trading License Tax. It is important to note that the Trading License Tax must be declared and paid regardless of whether the taxpayer actually makes a profit, as long as it is the intention to do so.
                    </p>
                    <p className="content-paragraph">
                        It is illegal to conduct business activities of any kind without a Trading License Tax certificate.
                    </p>
                    <p className="content-paragraph">
                        Exemptions from trading licence tax applies to:
                    </p>
                    <ul className="content-list">
                        <li>Non-commercial public institutions;</li>
                        <li>Micro-enterprises and small businesses during the first two years following their establishment.</li>
                    </ul>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 64</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Footie Fun Pub is established in 1 April 2023. As the pub is considered a small enterprise, it will be exempted from Trading License Tax from 1st April to 31st December 2023, from 1st January to 31st December 2024, and from 1st January to 31st March 2025. By 7th April 2025, Footie Fun Pub will need to declare and pay Trading License Tax for April to December 2025. The deadline for declaring and paying Trading License Tax for 2025 will be 31st March 2025.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>How many times must Trading License Tax be paid by the same taxpayer?</h2>
                    <p className="content-paragraph">
                        If a taxpayer has a head office and branches in Districts, a trading license tax declaration is required for the head office as well as for each branch of his or her business activities basing on the turnover of the previous year for the head office and for each branch.
                    </p>
                    <p className="content-paragraph">
                        In case a branch does not have or cannot determine its turnover, the trading license tax is declared based on the turnover of the head office.
                    </p>
                    <p className="content-paragraph">
                        However, if all the branches are located in the same district as the head office, the taxpayer pays the trading license tax according to the turnover of the head office. If the branches are located in a district other than that of the head office, the trading license tax is unique and calculated basing on the turnover of the branch with the highest turnover.
                    </p>
                    <p className="content-paragraph">
                        This principle doesn't apply to motor vehicles, including motorcycles, and motorboats. If a taxpayer has multiple motor vehicles and motorboats used for profit-oriented activities, Trading License Tax must be paid for each.
                    </p>
                    <p className="content-paragraph">
                        On the other hand, if a taxpayer carries out multiple activities by the same company at the same premises, Trading License Tax is only paid once for that premises. If a taxpayer carries out different business activities in different buildings, he/she files a trading license tax declaration for each business activity.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 65</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Lucie has a supermarket business. She has a warehouse where goods are kept, two shops in same district where goods are sold. Lucie does not have to declare and pay Trading License Tax for the warehouse, but is required to declare and pay a single Trading License Tax for both shops. In case the two shops are located in different districts, each shop shall pay a separate trading licence tax. This also applies if the two are carrying different activities either in same district or more than one district.
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            Assume that Lucie owns a truck facilitating delivery of goods: If the truck is in Lucie's business financial statements, this truck doesn't pay trading licence tax. However, this truck pays trading licence tax if it is not in the financial statement.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are the rates for Trading License Tax?</h2>
                    <p className="content-paragraph">
                        The Trading License Tax depends on the annual turnover as per the following table:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>No</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Turnover</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual tax due/per quarter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>50,000,000,000 and above</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>2,000,000/500,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>2</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 25,000,000,000 to 50,000,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,500,000/375,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>3</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 1,000,000,000 to 25,000,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000/250,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>4</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 200,000,000 to 1,000,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>500,000/125,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 20,000,000 to 200,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>280,000/70,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>6</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 12,000,000 to 20,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>160,000/40,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>7</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 7,000,000 to 12,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>120,000/30,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>8</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>From 2,000,000 to 7,000,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>100,000/25,000</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="content-paragraph">
                        There are also other profit-oriented activities with specified flat amount of trading licence tax as per the following table:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>No</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Activities</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Amount to be paid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Profit-oriented activities not registered on income tax, in urban zone.</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>60,000/15,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>2</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Profit-oriented activities not registered on income tax, in rural zone.</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>30,000/7,500</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>3</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Individual transport activities by vehicles.</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>40,000/10,000 per vehicle</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>4</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Transport activities by boat.</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>20,000/5,000 per boat</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Transport activities by motor cycle</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>8,000/2,000 per moto</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 67</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Intare is a moto driver based in Remera, Kigali. The trading licence tax due for the full tax year for 'Transport activities on motorcycles' is FRW 8,000.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Trading License Tax?</h2>
                    <p className="content-paragraph">
                        Trading License Tax is to be declared and paid optionally on annually or quarterly basis. The tax period is the calendar year, from 1st January until 31st December. For the annual basis, the deadline to declare and pay Trading License Tax by is 31st January of the same year. For quarter basis, the deadline to declare and pay Trading License Tax by is the end of the first month of the concerned quarter:
                    </p>
                    <ul className="content-list">
                        <li>Quarter 1: From 1st January to 31st March – Due by 31st January;</li>
                        <li>Quarter 2: From 1st April to 30th June – Due by 30th April;</li>
                        <li>Quarter 3: From 1st July to 30th September – Due by 31st July;</li>
                        <li>Quarter 4: From 1st October to 31st December – Due by 31st October.</li>
                    </ul>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 68</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Amahoro must declare and pay Trading License Tax to authorise her business activities during the 2023 tax period, from 1st January 2023 until 31st December 2023, by the deadline of 31st January 2023.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What happens if the business activities start or end during the tax period?</h2>
                    <p className="content-paragraph">
                        If taxable activities begin during a calendar year tax period, the taxpayer may pay Trading License Tax equivalent to the remaining months including the month in which the taxable activities began. Trading License Tax must be declared and paid before beginning the taxable activities.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 69</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Ubumwe opens a small shop in Musanze in March 2024. The tax due for the full tax year for 'other profit-oriented' activities is FRW 120,000. However, as Ubumwe is only in business for ten out of the twelve months that year, his Trading License Tax due is: FRW 120,000 * 10/12 = FRW 100,000
                        </p>
                    </div>
                    <p className="content-paragraph">
                        If taxable activities end during a calendar year tax period, and the full rate Trading License Tax has been paid for the whole calendar year tax period, the taxpayer may be entitled to a refund, subject to an audit, equivalent to the remaining months excluding the month in which the taxable activities ended or changed.
                    </p>
                    <p className="content-paragraph">
                        Similarly, if taxable activities change during a calendar year, the taxpayer may be entitled to a refund, or be required to pay additional tax, depending upon the nature of the change in taxable activities.
                    </p>
                    <p className="content-paragraph">
                        However, taxpayers conducting regular seasonal or periodic activities must pay the full rate Trading License Tax for the whole calendar year tax period, even if the taxable activities do not occur throughout the whole calendar year tax period.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Trading License Tax Certificate?</h2>
                    <p className="content-paragraph">
                        After declaring and paying Trading License Tax, taxpayers can print a Trading License Tax certificate.
                    </p>
                    <p className="content-paragraph">
                        The Trading License Tax Certificates must be clearly displayed at the entrance of the business premisses or clearly attached to the motor vehicle (including motorcycles) or motorboat for which the tax was declared and paid. The taxpayer must also be able to present the Trading License Tax Certificate at all times upon request.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TradingLicenseTax;
