import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomsExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Customs</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is importing and exporting?</h2>
                    <p className="content-paragraph">
                        Importing is when goods are brought into Rwanda from an external country. Exporting is when goods are taken from Rwanda into an external country.
                    </p>
                    <p className="content-paragraph">
                        This Tax Handbooks aims to provide all the information required for taxpayers to import or export any goods. However, as taxes are often required on imports, there is a greater focus in this Tax Handbook on importing.
                    </p>
                    <p className="content-paragraph">
                        For comprehensive information on export-related processes, stakeholders are encouraged to consult the Rwanda Trade Portal. Detailed export procedures can be accessed at: <a href="https://rwandatrade.rw/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://rwandatrade.rw/</a>
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who can import or export?</h2>
                    <p className="content-paragraph">
                        Any taxpayer may import or export goods. No additional registration is required, but individuals or businesses without TINs must register with RDB or RRA as normal.
                    </p>
                    <p className="content-paragraph">
                        The majority of importing and exporting procedures are carried out by licensed companies called Clearing Agents on behalf of the taxpayers, <Link to="/clearing-agents">(check on Clearing Agents)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are Customs Duties?</h2>
                    <p className="content-paragraph">
                        In this Tax Handbook, customs duties are defined as all taxes, duties, levies and fees that are required to be paid to RRA on imported or exported goods.
                    </p>
                    <p className="content-paragraph">
                        Therefore, customs duties include:
                    </p>
                    <p className="content-paragraph">
                        <strong>Taxes paid on imports that are also paid on domestic goods</strong>
                    </p>
                    <ul className="content-list">
                        <li>Value Added Tax (VAT)</li>
                        <li>Excise Duty</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Taxes that are specifically paid on imports</strong>
                    </p>
                    <ul className="content-list">
                        <li>Import Duty (ID)</li>
                        <li>Withholding Tax of 5% (WHT 5%)</li>
                        <li>Infrastructure Development Levy (IDL)</li>
                        <li>Strategic Reserves Levy (SRL)</li>
                        <li>African Union Levy (AUL)</li>
                        <li>Environmental levy on imported items that are packaged in plastic materials.</li>
                        <li>Levy on petrol, gas oil and motor vehicles for road maintenance.</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Taxes that are specifically paid on exports</strong>
                    </p>
                    <ul className="content-list">
                        <li>Export Duty on Raw Hides and Skins</li>
                        <li>Export Tax - Minerals</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Small fees on imports and exports</strong>
                    </p>
                    <ul className="content-list">
                        <li>Computer Processing Fee</li>
                        <li>Quality Inspection Fee (QIF)</li>
                    </ul>
                    <p className="content-paragraph">
                        Customs duties ensure that local and foreign business can compete fairly, by ensuring a level playing field (VAT and Excise Duty), encouraging intra-regional trade (Import Duty), ensuring compliance of Income Tax (WHT 5%), funding beneficial projects (IDL, SRL and AUL) and supporting domestic manufacturing industries (Export Duty on Raw Hides and Skins), and by ensuring economic benefit, environmental stewardship, and social equity in the exploitation of mineral resources (Export Tax – Minerals). For more details on all types of customs duties, <Link to="/custom-duties">(check on Custom Duties)</Link>.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the East African Community Customs Union?</h2>
                    <p className="content-paragraph">
                        The East African Community (EAC) Customs Union is formed of Kenya, Tanzania, Uganda, Burundi, Southern Soudan, Democratic Republic of Congo and Rwanda. The main features of the EAC Customs Union are:
                    </p>
                    <ul className="content-list">
                        <li>A shared set of import duties applied on goods from countries outside the EAC. This is referred to as the Common External Tariff (CET), <Link to="/custom-duties">(check on Custom Duties)</Link> for details.</li>
                        <li>Zero rate of import duty, and no quotas, applied on goods from countries within the EAC with valid Certificates of Origin, <Link to="/facilitation-schema">(check on Facilitation Schema)</Link> for details.</li>
                        <li>Shared procedures, safety measures, valuation methods, exemptions, trade policy and terminology governed by the EAC Customs Management Act (CMA).</li>
                    </ul>
                    <p className="content-paragraph">
                        Rwanda is also a member of the Common Market for Eastern and Southern Africa (COMESA) free trade area.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Rwanda electronic Single Window (ReSW)?</h2>
                    <p className="content-paragraph">
                        The ReSW is an online portal aimed at facilitating trade by ensuring all trade related information required by government institutions is submitted only once. This reduces the compliance burden and time taken when importing or exporting goods. The ReSW also increases transparency by clearly showing when information was submitted, changed or approved, and by whom.
                    </p>
                    <p className="content-paragraph">
                        The ReSW is used by Clearing Agents, Customs Officials and other government institutions as required. Clearing Agents use the ReSW on behalf of taxpayers during the importing and exporting process. For more details on Clearing Agents, <Link to="/clearing-agents">(check on Clearing Agents)</Link>.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How are imported and exported goods valued?</h2>
                    <p className="content-paragraph">
                        Imports are valued as Cost, Insurance and Freight (CIF). This is equal to the cost of the goods, the cost of any insurance paid on the goods and the freight costs of transporting the goods to the first point of entry of the EAC territory. Exports are valued as Free On Board (FOB). This is equal to the cost of the goods only.
                    </p>
                    <p className="content-paragraph">
                        Whether using the CIF or FOB valuation, the declared value must be supported by commercial invoices, as well as insurance and freight invoices where applicable.
                    </p>
                    <p className="content-paragraph">
                        If goods have been purchased in a foreign currency, declare the value in the currency of the invoice. The ReSW system then uses the National Bank of Rwanda (BNR) exchange rate to convert this into Rwandan francs.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 79</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Rukundo is importing a consignment of mobile phones from Japan. The cost of the mobile phones was USD 30,000 (thirty thousand US dollars). He paid an additional USD 400 (four hundred US dollars) to transport the consignment to the first point of entry of the EAC, in this case, the port of Mombasa in Kenya. He also paid USD 150 to insure the goods during transportation to the port of Mombasa. On the day of declaration, the exchange rate is USD 1: 900 FRW. Therefore, the CIF value of his import declaration is:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            CIF = (USD 30,000 + USD 400 + USD 150) * 900 = FRW 27,495,000.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are Harmonised System (HS) Codes?</h2>
                    <p className="content-paragraph">
                        Harmonised System (HS) Codes are internationally standardized numerical codes used to classify traded products for customs, taxation, and statistical purposes. The importer provides a description of the type of goods to the Clearing Agent, who is trained to select the correct HS Code. Selecting the correct HS Code is important for ensuring the correct tariff rate and amount of tax to be declared and paid.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 80</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Amahoro is importing scotch whisky of 40% alcoholic volume from the United Kingdom. She describes this to the Clearing Agent who correctly selects the HS Code: 2208.30.00 – 'Whiskies' within the 'Beverages, Spirits and Vinegar' chapter.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What documents are required when importing or exporting?</h2>
                    <p className="content-paragraph">
                        The importing or exporting taxpayer must provide the Clearing Agent with valid documents proving the value and authenticity of their consignment.
                    </p>
                    <p className="content-paragraph">
                        The mandatory documents that taxpayers importing goods originating from within the EAC must provide are:
                    </p>
                    <ul className="content-list">
                        <li><strong>Commercial Invoice or equivalent document</strong> - Showing the value and description of all goods within the consignment.</li>
                        <li><strong>Packing List</strong> - Lists the goods being transported within the consignment.</li>
                    </ul>
                    <p className="content-paragraph">
                        There are two additional mandatory documents that taxpayers importing goods originating from outside the EAC must provide to RRA:
                    </p>
                    <ul className="content-list">
                        <li><strong>Freight Invoice</strong> - Showing the cost of transport and insurance for the consignment, if not included in the commercial invoice.</li>
                        <li><strong>Bill of Lading / Airway Bill</strong> - A contract between the owner of the ship / plane transporting the consignment and the importing taxpayer.</li>
                    </ul>
                    <p className="content-paragraph">
                        The only mandatory document that taxpayers exporting goods must provide to RRA:
                    </p>
                    <ul className="content-list">
                        <li><strong>Commercial Invoice or equivalent document</strong> - Showing the value and description of all goods within the consignment.</li>
                    </ul>
                    <p className="content-paragraph">
                        Additional documents that taxpayers may be required to provide when importing or exporting depend upon the type of goods and their origin. Clearing Agents are trained to inform taxpayers which documents are necessary for their consignment. Without the required documents, Customs Officials will not permit the goods to be imported or exported. Examples of goods that may require additional documents include:
                    </p>
                    <ul className="content-list">
                        <li>Goods produced within the EAC or COMESA</li>
                        <li>Agricultural goods and inputs including food</li>
                        <li>Chemicals and cosmetics</li>
                        <li>Medical equipment and pharmaceuticals</li>
                        <li>Worn clothes</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What documents are required to prove that goods being imported were produced in the EAC or COMESA?</h2>
                    <p className="content-paragraph">
                        Imported goods that are produced within the EAC or COMESA can be subject to exemptions. In addition, imported goods that are produced within the EAC only are granted automatic access to the pre-clearance facility, <Link to="/facilitation-schema">(check on Facilitation Schema)</Link> for details. These benefits require a Certificate of Origin delivered by the exporting country.
                    </p>
                    <p className="content-paragraph">
                        The EAC Rules of Origin document explains the criteria that goods should meet to be considered as originating from EAC partner states. This Tax Handbook does not include all details or exceptions. The EAC Rules of Origin document is on the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/fileadmin/user_upload/eac_rules_of_origin_2015.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://www.rra.gov.rw/fileadmin/user_upload/eac_rules_of_origin_2015.pdf
                        </a>
                    </p>
                    <p className="content-paragraph">
                        Similarly, the COMESA Rules of Origin document is available at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.comesa.int/wp-content/uploads/2022/01/COMESA_Protocol-on-Rules-of-Origin.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://www.comesa.int/wp-content/uploads/2022/01/COMESA_Protocol-on-Rules-of-Origin.pdf
                        </a>
                    </p>
                </section>

                <section className="content-section">
                    <h2>How do Rwandan exporters certify that goods being exported were produced in Rwanda?</h2>
                    <p className="content-paragraph">
                        Rwandan exporters can apply for a Certificate of Origin through their Clearing Agent. The Clearing Agent applies on the Rwanda electronic Single Window (ReSW) and provides the required evidence at any Border Post or Dry Port. There are different fees and requirements depending upon the country to which the goods are exported. There is also a Simplified Certificate of Origin available for smaller value consignments, <Link to="/introduction">(check on Introduction)</Link> for more details.
                    </p>
                    <p className="content-paragraph">
                        There are many incentives that Rwandan exporters can benefit from, depending on the country being exported to. This includes EAC, COMESA, and the European Union (EU). For more details, contact RRA or visit the RRA website.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the different Customs channels?</h2>
                    <p className="content-paragraph">
                        After import or export declarations have been submitted and paid, the Rwanda electronic Single Window (ReSW) system assigns the consignment to a Customs channel. The Customs channel refers to the level of verification from Customs Officers required for that consignment.
                    </p>
                    <p className="content-paragraph">
                        The ReSW uses a risk management system to assign Customs channels depending upon the customs facility scheme (AEO, Gold Card), the past history of the taxpayer, and the types of goods amongst other factors. However, Customs Officers are authorised to carry out surprise checks or additional verifications regardless of the assigned Customs channel.
                    </p>
                    <p className="content-paragraph">
                        The Customs channels are:
                    </p>
                    <ul className="content-list">
                        <li><strong>Green</strong> – No verification, immediate release of goods, no post-clearance audit</li>
                        <li><strong>Blue</strong> – No verification, immediate release of goods, available to taxpayers with history of correct compliance, scope for post-clearance audit</li>
                        <li><strong>Yellow</strong> – Documentary verification, scope for post-clearance audit</li>
                        <li><strong>Red</strong> – Documentary and physical verification, scope for post-clearance audit</li>
                    </ul>
                    <p className="content-paragraph">
                        Documentary verification requires Customs Officers to check declarations and supplementary documentation. Physical verification requires Customs Officers to check the actual consignment.
                    </p>
                    <p className="content-paragraph">
                        If there are any problems with verification, the Customs Officers will lodge a 'query' which may require a second assessment notice, additional taxes to be paid, statement of offence, or further actions to be taken. <Link to="/customs-penalties">(check on Customs Penalties)</Link> for more details on Customs penalties.
                    </p>
                    <p className="content-paragraph">
                        If there are no problems with verification, the Customs Official changes the Customs channel to 'Green' in the ReSW system and gives the taxpayer a release order.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is a Post-Clearance Audit (PCA)?</h2>
                    <p className="content-paragraph">
                        In addition to documentary and physical verification at border posts, importing or exporting taxpayers may also be subject to Post-Clearance Audits (PCAs). PCAs are explained in more detail on the EAC website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.eac.int/documents" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://www.eac.int/documents
                        </a>
                    </p>
                    <p className="content-paragraph">
                        The different types and processes for PCAs is similar to other RRA audits, <Link to="/audits">(check on Audits)</Link> for details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is a Stay of Application?</h2>
                    <p className="content-paragraph">
                        A 'stay of application' is a different rate of import duty from the Common External Tariff (CET) available for specific products. These are negotiated on a country-by-country basis, but once agreed are available for all importing taxpayers. The stay of application rate can be higher or lower than the CET rate. Stay of applications apply on annual fiscal year, 1st July to 30th June, basis.
                    </p>
                    <p className="content-paragraph">
                        Once approved, the stay of applications are published by product (using HS Codes) in EAC gazettes, available at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/customs-services/eac-gazette" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://www.rra.gov.rw/en/customs-services/eac-gazette
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CustomsExplanation;

