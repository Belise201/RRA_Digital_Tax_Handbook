import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const ImportingMotoVehicle = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Importing Motor Vehicles</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is the process for importing motor vehicles?</h2>
                    <p className="content-paragraph">
                        Imported motor vehicles must be declared at 'DPW – Masaka, Magerwa - Gikondo' Dry Port. <Link to="/border-ports-and-dry-ports">(check on Border Ports and Dry Ports)</Link> for the process at Border Posts when declaring at Dry Ports. If the motor vehicle does not have a number plate, they will receive a transit number plate until the process is completed.
                    </p>
                    <p className="content-paragraph">
                        Once at DPW – Masaka or Magerwa - Gikondo, the process for declaring imported motor vehicles is similar to declarations of other types of goods, <Link to="/declaring-imports-and-export">(check on Declaring Imports and Export)</Link>. The only difference is the additional step of registration of the motor vehicle.
                    </p>
                    <p className="content-paragraph">
                        Registration of the motor vehicle first requires the owner to have a unique Taxpayer Identification Number (TIN). If they do not already have a TIN, they are provided with one. Secondly, the owner must provide a passport photo and either a Rwandan ID card or passport.
                    </p>
                    <p className="content-paragraph">
                        Finally, they are registered as owner of the motor vehicle, and provided with a Rwandan number plate and 'Yellow Card' logbook. This initial registration service and the provision of the number plate has already been paid for within the Motor Vehicle Registration Fee (MVF).
                    </p>
                </section>

                <section className="content-section">
                    <h2>How are imported brand new motor vehicles valued?</h2>
                    <p className="content-paragraph">
                        Brand new imported motor vehicles are valued at Cost, Insurance and Freight (CIF) using the transaction price invoices or equivalent documents as normal. When a customs officer is not satisfied with the transaction price, other customs valuation methods can be applied to determine customs value.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How are imported used motor vehicles valued?</h2>
                    <p className="content-paragraph">
                        Used or second-hand imported motor vehicles are valued using the depreciation method. The transaction price may also be used in special circumstances.
                    </p>
                    <p className="content-paragraph">
                        The first step of the depreciation method is to download the valuation database. The link to the spreadsheet is available on the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/customs-services/valuation-gateway" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://www.rra.gov.rw/en/customs-services/valuation-gateway</a>
                    </p>
                    <p className="content-paragraph">
                        The valuation database contains details on the brand, mark, engine, drive, year and body style. Identify the exact description of the motor vehicle, and then note the 'When New Price ($)'. This price, in US Dollars, is the base of the depreciation. Contact RRA if you cannot identify the appropriate motor vehicle. An example view of the valuation database is shown below.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/import_moto_vehicle_01.png" alt="Valuation database example" />
                    </div>
                    <p className="content-paragraph">
                        The depreciation method then uses a standardised depreciation rate depending upon the age of the car. The depreciation schedule is shown below:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Date of Manufacture</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Depreciation</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Less than 1 year ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 1 and 2 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>20%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 2 and 3 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>30%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 3 and 4 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>40%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 4 and 5 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>50%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 5 and 6 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>55%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 6 and 7 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>60%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 7 and 8 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>65%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 8 and 9 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>70%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between 9 and 10 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>75%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>More than 10 years ago</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>80%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="content-section">
                    <h2>What are the Customs Duties on imported motor vehicles?</h2>
                    <p className="content-paragraph">
                        The rates of Customs Duties on imported motor vehicles are summarised below. In addition, a flat rate Motor Vehicle Registration Fee (MVF) is charged upon all imported motor vehicles without any exemptions. This depends upon the capacity or displacement of the engine in cubic centimetres (cc) and is displayed in this chapter.
                    </p>
                    <p className="content-paragraph">
                        The final tab of the depreciation method spreadsheet, titled 'Depreciation Schedule' can be used to estimate the Customs Duties due for imported motor vehicles.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 85</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Rukundo is importing a 1997 Rav4 with a 1.8 litre engine, 2 Wheel Drive (2WD) and three doors. In the valuation database, the listed Price When New ($) is USD 13,200.
                        </p>
                        <div style={{ margin: '1rem 0', textAlign: 'center' }}>
                            <ImageModal src="/images/import_moto_vehicle_02.png" alt="Depreciation schedule example" />
                        </div>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            In the 'Depreciation Schedule' tab, Rukundo enters the necessary details in the yellow boxes as shown below.
                        </p>
                    </div>
                    <p className="content-paragraph" style={{ marginTop: '1.5rem' }}>
                        <strong>Non-utility motor vehicles</strong>
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Vehicles</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Category</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Import Duty</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Excise Duty</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>VAT</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>IDL</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>WHT 5%</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>AUL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Engine capacity less than 1,500cc</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>A</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>25%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Engine capacity between 1,501cc and 2,500cc</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>B</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>25%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>10%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Engine capacity more than 2,501cc</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>C</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>25%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>15%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="content-paragraph" style={{ marginTop: '1.5rem' }}>
                        <strong>Utility motor vehicles</strong>
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Vehicles</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Category</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Import Duty</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Excise Duty</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>VAT</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>IDL</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>WHT 5%</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>AUL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Tractors</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>D</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Minibuses (with less than 25 seats)</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>E</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>25%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Buses (with 25 seats or more)</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>F</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>10%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Pick-up truck</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>G</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>25%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Truck (carrying capacity below 20 tonnes)</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>H</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>10%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Truck (carrying capacity 20 tonnes and above)</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>I</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>18%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1.5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>5%</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0.2%</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="content-section">
                    <h2>What are the requirements for receiving special number plates and exemption from certain Customs Duties when importing motor vehicles?</h2>
                    <p className="content-paragraph">
                        The normal number plate provided for Rwandan motor vehicles begins with 'RA'. There are also public institution number plates such as 'RDF', 'RNP' or 'GR'. These vehicles must have all customs duties due paid as normal.
                    </p>
                    <p className="content-paragraph">
                        On the other hand, some international institutions and foreign investors are exempt from all customs duties, except for Motor Vehicle Registration Fees (MVF). The number plates are issued by RRA, but require supporting documents from other public institutions. These include:
                    </p>
                    <p className="content-paragraph">
                        <strong>'IT' Foreign Investors and other foreign persons for temporally residence</strong>
                    </p>
                    <p className="content-paragraph">
                        This requires a recommendation letter to the Commissioner for Customs Services Department (CSD) of RRA from concerned public institution. 'IT' number plate is only valid for one year, before requiring renewal.
                    </p>
                    <p className="content-paragraph">
                        Other requirements include:
                    </p>
                    <ul className="content-list">
                        <li>Guarantee letter;</li>
                        <li>Valid passport;</li>
                        <li>Valid VISA;</li>
                        <li>Valid ID Card for foreigners</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>'CD' Diplomatic and Consular staff</strong>
                    </p>
                    <p className="content-paragraph">
                        This requires a letter from the Ministry of Foreign Affairs and Cooperation (MINAFFET) to the Commissioner for CSD of RRA, highlighting their diplomatic status and a reciprocal letter of approval.
                    </p>
                    <p className="content-paragraph">
                        <strong>'UN' United Nations agencies</strong>
                    </p>
                    <p className="content-paragraph">
                        This requires a letter from the Ministry of Foreign Affairs and Cooperation (MINAFFET) to the Commissioner for CSD of RRA, highlighting their UN status, and a reciprocal letter of approval.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Which customs duties must be paid when transferring ownership of motor vehicles with IT, CD or UN number plates to a buyer without the same status?</h2>
                    <p className="content-paragraph">
                        When transferring ownership of any motor vehicles with IT, CD or UN number plates to a buyer who is not subject to the same privileges, the buyer must pay all Customs Duties due on imported motor vehicles, <Link to="/importing-moto-vehicle">(check on Importing Motor Vehicles)</Link>, except for Motor Vehicle Registration Fees (MVF) that have already been paid for that motor vehicle.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Can Right-Hand Drive motor vehicles be imported?</h2>
                    <p className="content-paragraph">
                        Right-Hand Drive (RHD) motor vehicles, where the steering wheel is on the right-hand side of the car, are not allowed to be imported into Rwanda, except for:
                    </p>
                    <ul className="content-list">
                        <li>Diplomats or drivers with a medical condition. In both these cases, this requires permission from the Ministry of Infrastructure (MININFRA).</li>
                        <li>Trucks with a carrying capacity above 20 tonnes</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default ImportingMotoVehicle;

