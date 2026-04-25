import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const FacilitationSchema = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Facilitation Schemes</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are the available taxpayer facilitation schemes?</h2>
                    <p className="content-paragraph">
                        RRA recognises the importance of trade to Rwanda's development. Therefore, RRA has implemented many additional schemes to facilitate taxpayers in the import and export process. Each of these are discussed in more detail below, and include:
                    </p>
                    <p className="content-paragraph">
                        <strong>For small scale traders:</strong>
                    </p>
                    <ul className="content-list">
                        <li>Simplified Trade Regime (Simplified Customs Declaration and Simplified EAC Certificate of Origin)</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>For frequent, compliant traders:</strong>
                    </p>
                    <ul className="content-list">
                        <li>Gold Card Scheme</li>
                        <li>Authorised Economic Operator</li>
                        <li>Pre-payment facility</li>
                        <li>Compliance Certificate (Quitus Fiscal)</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>For certain types of goods:</strong>
                    </p>
                    <ul className="content-list">
                        <li>Pre-clearance facility</li>
                        <li>Immediate Release of Goods</li>
                        <li>Duty Remission scheme</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>For any taxpayers:</strong>
                    </p>
                    <ul className="content-list">
                        <li>Cargo Tracking System</li>
                        <li>Mobile Cargo Scanners</li>
                    </ul>
                    <p className="content-paragraph">
                        Taxpayers may benefit from many of these facilitation schemes at the same time. It is important to note that the majority of these facilitation schemes require the taxpayer or their clearing agent to apply, see each of the explanations in turn below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Simplified Trade Regime?</h2>
                    <p className="content-paragraph">
                        The simplified trade regime is available to taxpayers and small-scale traders importing or exporting goods valued at less than FRW 500,000 per consignment (Simplified Customs Declaration) and $ 2,000 per consignment (Simplified EAC Certificate of Origin).
                    </p>
                    <p className="content-paragraph">
                        The Simplified Customs Declaration is a direct assessment made by a customs officer to the taxpayer while the Simplified EAC Certificate of Origin is issued by a customs officer at any border post. In addition to the required documents the taxpayer should pay FRW 500 as computer processing fees either for Simplified Customs Declaration or for Simplified EAC Certificate of Origin.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that traders using the simplified trade regime are still required to pay any due Customs Duties as normal.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Gold Card Scheme?</h2>
                    <p className="content-paragraph">
                        The Gold Card Scheme is a privileged status available to importers/exporters who have a good compliance record with RRA. Members of the Gold Card Scheme gain many benefits including quick release and priority clearance of consignments during the importing and exporting process. Taxpayers must apply for Gold Card Scheme membership, which requires:
                    </p>
                    <ul className="content-list">
                        <li>Good history of compliance with all RRA departments.</li>
                        <li>Imported or exported goods with the total CIF value above FRW 200,000,000 during the year.</li>
                    </ul>
                    <p className="content-paragraph">
                        For more details on the benefits and application process for the Gold Card Scheme, see the RRA website at: <a href="https://www.rra.gov.rw/en/customs-services/importers/gold-card-scheme-information-for-applicants" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://www.rra.gov.rw/en/customs-services/importers/gold-card-scheme-information-for-applicants</a>
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Authorised Economic Operator (AEO)?</h2>
                    <p className="content-paragraph">
                        The AEO is a privileged status available to taxpayers who have a good compliance record with all applicable EAC tax administrations. The benefits available to AEOs are similar in nature and even greater than for the Gold Card Scheme, described above, and are available throughout the EAC, but have even stricter application requirements.
                    </p>
                    <p className="content-paragraph">
                        For more details on the benefits and application process to be certified as an AEO, see the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/customs-services/importers/authorized-economic-operators-aeo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://www.rra.gov.rw/en/customs-services/importers/authorized-economic-operators-aeo</a>
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the pre-payment facility?</h2>
                    <p className="content-paragraph">
                        The pre-payment facility allows taxpayers to apply to set up accounts with RRA to pay in advance for any due Customs Duties, reducing the time taken when importing or exporting. Taxpayers must apply for the pre-payment facility, and approval is based upon their frequency of imports and previous tax compliance.
                    </p>
                    <p className="content-paragraph">
                        In order to apply for the pre-payment facility, taxpayers must request the Prepayment Account Application Form. The application form is submitted to the Commissioner for Customs Services Department. Once approved, there is no limit to the amount that can be paid into the pre-payment account, and the taxpayer receives notification each time the account is used.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is a Compliance Certificate (Quitus Fiscal)?</h2>
                    <p className="content-paragraph">
                        A Compliance Certificate (Quitus Fiscal) is available, upon request, to taxpayers who have demonstrated a history of correct tax compliance. The benefit of Compliance Certificate (Quitus Fiscal) is that certified taxpayers are not required to pay WHT 5%.
                    </p>
                    <p className="content-paragraph">
                        The procedure and requirements for applying for a Compliance Certificate (Quitus Fiscal) are listed in more detail <Link to="/certificates" className="content-link">(check on Certificates)</Link> for more details, but in terms of Customs, the taxpayer is required to have:
                    </p>
                    <ul className="content-list">
                        <li>Imported goods with the total CIF value above FRW 200,000,000 during two years with at least FRW 100,000,000 each year.</li>
                        <li>A physical business address in Rwanda.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What is the pre-clearance facility?</h2>
                    <p className="content-paragraph">
                        The pre-clearance facility allows the clearing agent to begin the declaration process for certain goods before they arrive at a border post. The types of goods that are allowed pre-clearance include:
                    </p>
                    <ul className="content-list">
                        <li>Imported goods produced within the EAC, also referred to as Intra-Regional Trade.</li>
                        <li>Perishable goods, such as:
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Food</li>
                                <li>Medicine</li>
                                <li>Live animals</li>
                            </ul>
                        </li>
                        <li>Fragile or difficult to unload goods.</li>
                        <li>Government institution or project materials.</li>
                    </ul>
                    <p className="content-paragraph">
                        For Intra-Regional Trade, this facility is granted automatically and no application is required. The clearing agent can immediately begin the declaration process.
                    </p>
                    <p className="content-paragraph">
                        For other consignments, of goods produced outside the EAC, the clearing agent can apply for pre-clearance in the Rwanda electronic Single Window (ReSW) system. If the request for pre-clearance is approved, the clearing agent can begin the declaration process and pay any due taxes and fees as normal before reaching the border post or dry port.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Direct Delivery of Goods?</h2>
                    <p className="content-paragraph">
                        The Direct Delivery of Goods facility, also referred to as Dédouanement À Domicile (DAD), allows the customs procedures for certain goods to be carried out at a taxpayer's premises rather than at border posts or dry port, subject to approval. The types of goods that are allowed Direct Delivery include:
                    </p>
                    <ul className="content-list">
                        <li>Perishable goods, such as:
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Food</li>
                                <li>Medicine</li>
                                <li>Live animals</li>
                            </ul>
                        </li>
                        <li>Fragile or difficult to unload goods.</li>
                        <li>Government institution or project materials.</li>
                        <li>Exempted goods.</li>
                    </ul>
                    <p className="content-paragraph">
                        For consignments of this nature, the clearing agent can apply for Direct Delivery in the Rwanda electronic Single Window (ReSW) system. If the request for Direct Delivery is approved, the consignment can be immediately released from the border post and dry port, and then kept at a taxpayer's premises until Customs Officials have completed the verification process.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Duty Remission scheme?</h2>
                    <p className="content-paragraph">
                        The Duty Remission scheme is an exemption from import duty available to taxpayers who are importing goods to be used as inputs in the production of goods for export, or in the production of particular goods for home consumption. The list of particular goods for home consumption that the Duty Remission scheme can apply to is contained within EAC gazettes, available at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/customs-services/eac-gazette" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://www.rra.gov.rw/en/customs-services/eac-gazette</a>
                    </p>
                    <p className="content-paragraph">
                        Taxpayers must apply for the Duty Remission scheme by writing a letter to the Commissioner for Customs Services Department (CSD), explaining the reasons for application. If approved, the Duty Remission is valid for a period of twelve (12) months.
                    </p>
                    <p className="content-paragraph">
                        There are conditions attached to the Duty Remission scheme. A taxpayer must:
                    </p>
                    <ul className="content-list">
                        <li>Pay Import Duty on any imported goods not used in the production of goods for export or particular goods for home consumption.
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Any unpaid Import Duty that is liable is subject to a penalty of 10% of the dutiable value.</li>
                            </ul>
                        </li>
                        <li>Submit quarterly returns to the Commissioner for Customs Services Department (CSD) giving relevant information as required.
                            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>A taxpayer who does not submit a return as required is liable to a fine of USD 2,000 (two thousand US Dollars).</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What is the Regional Electronic Cargo Tracking System?</h2>
                    <p className="content-paragraph">
                        The Regional Electronic Cargo Tracking System (RECTS) is a facilitation scheme aimed at increasing the security of consignments by electronically sealing and monitoring the trucks from regional ports to Rwanda. Any tampering with the seal, or unexpected deviations from the transit path, can be instantly detected and responded to by Rapid Response Units (RRUs).
                    </p>
                    <p className="content-paragraph">
                        The RECTS is only available for consignments using the Northern Corridor, i.e., from the port of Mombasa in Kenya to Rwanda. In addition, there is currently no fee or application process for the RECTS, but the allocation and arming of electronic seals is decided by RRA staff at the Port of Mombasa. RECTS is under development through the Southern Corridor, i.e., from the port of Dar Es Salaam in Tanzania to Rwanda.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are Mobile Cargo Scanners?</h2>
                    <p className="content-paragraph">
                        RRA has three mobile cargo scanners, situated at Magerwa - Gikondo Dry Port, Gatuna and Rusumo Border Posts. The mobile cargo scanners are able to carry out physical verification of medium risk consignments with reduced intrusion and time. Taxpayers can request for mobile cargo scanners to be used at these locations free of charge through their Clearing Agent.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default FacilitationSchema;

