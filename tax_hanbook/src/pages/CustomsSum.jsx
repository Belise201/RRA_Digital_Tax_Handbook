import React from 'react';
import { FileText } from 'lucide-react';

const CustomsSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Customs Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Who must pay Customs Duties?</h2>
                    <p className="content-paragraph">
                        Customs duties are taxes and fees paid on imported goods. There is only a nominal processing fee for exports. Customs duties are paid by the importer or exporter of the goods, typically through a Clearing Agent.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are Clearing Agents?</h2>
                    <p className="content-paragraph">
                        Clearing Agents are companies licensed by Commissioner for Customs Services to transact any business related to the import or export of goods. Clearing Agents act as a broker between the taxpayers and the revenue authority. Clearing Agents are required to be contracted by any taxpayer wishing to import or export goods valued at FRW 500,000 or above.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How are imported and exported goods valued?</h2>
                    <p className="content-paragraph">
                        Imports are valued as Cost, Insurance & Freight (CIF). This is equal to the cost of the goods, the cost of any insurance paid on the goods and the freight costs of transporting the goods to Rwanda. Exports are valued as Free On Board (FOB). This is equal to the cost of the goods only.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Import Duty rate?</h2>
                    <p className="content-paragraph">
                        The Import Duty rate is 0% for imports from within the EAC or COMESA, or the Common External Tariff (CET) rate for imports from outside, typically 0%, 10%, 25% or 35%. The current version of the CET is available on the RRA website at: <a href="https://www.rra.gov.rw/index.php?id=243" target="_blank" rel="noopener noreferrer" className="content-link">https://www.rra.gov.rw/index.php?id=243</a>.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How are Customs Duties calculated?</h2>
                    <p className="content-paragraph">
                        Import Duty = CIF * Import Duty Rate
                    </p>
                    <p className="content-paragraph">
                        Excise Duty = (CIF + Import Duty + HF) * Excise Rate
                    </p>
                    <p className="content-paragraph">
                        Note that Handling Fee (HF) is not actually paid to RRA, but is included in Excise Duty and VAT calculations, where: HF = FRW 10 per kg.
                    </p>
                    <p className="content-paragraph">
                        VAT = (CIF + Import Duty + Excise Duty + HF) * 18%
                    </p>
                    <p className="content-paragraph">
                        Withholding Tax of 5% (WHT 5%) = CIF * 5%
                    </p>
                    <p className="content-paragraph">
                        Infrastructure Development Levy (IDL) = CIF * 1.5%
                    </p>
                    <p className="content-paragraph">
                        Strategic Reserves Levy (SRL) = FRW 50 per litre of fuel
                    </p>
                    <p className="content-paragraph">
                        African Union Levy (AUL) = CIF * 0.2%
                    </p>
                    <p className="content-paragraph">
                        Motor Vehicle Fees (MVF) – Between FRW 75,000 and FRW 1,000,000 depending upon the vehicle engine capacity (cc)
                    </p>
                    <p className="content-paragraph">
                        Road Toll = $76 USD for simple trucks, or $152 USD for heavy commercial trucks (trailer and semi-trailers)
                    </p>
                    <p className="content-paragraph">
                        Fuel Levy = 15% of CIF
                    </p>
                    <p className="content-paragraph">
                        Export Duty on Raw Hides and Skins = FOB * 80%, or $0.52 per Kg, whichever is higher.
                    </p>
                    <p className="content-paragraph">
                        Computer Processing Fee = FRW 3,000 per normal declaration or FRW 500 per simplified declaration
                    </p>
                    <p className="content-paragraph">
                        Quality Inspection Fees (QIF) = (CFR) * 0.2%
                    </p>
                    <p className="content-paragraph">
                        Environmental Levy = CIF * 0.2%
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step Guide to importing or exporting</h2>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Taxpayer prepares all necessary documents and contracts a Clearing Agent.</p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window (ReSW).</p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: The Clearing Agent receives assessment notices, containing the amounts of customs duties due. The taxpayer pays all customs duties due, either directly or through the Clearing Agent. The assessment notice may contain different 'Doc IDs' for different tax types. If so, these must each be paid separately.</p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: The ReSW system allocates the consignment to a certain Customs channel. If verification is required, Customs Officers will request the necessary documents and/or access to the consignment. If there are any problems, further action may be required.</p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: After successful verification, the Customs Officer provides the taxpayer with a release order.</p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 6: The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.</p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 7: The taxpayer receives an exit note and may leave with their consignment.</p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step Guide to Motor Vehicle Ownership Transfer</h2>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Online Motor Vehicle Transfer Request</p>
                    <p className="content-paragraph">
                        The seller applies for online motor vehicle transfer in E-Tax.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Visit RRA offices and pay the transfer fee</p>
                    <p className="content-paragraph">
                        Visit any RRA offices. If the seller of the motor vehicle has no outstanding tax arrears, RRA staff will provide an assessment notice for the Registration Transfer Fee. This must be paid by either the buyer or the seller.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Register the buyer with RRA</p>
                    <p className="content-paragraph">
                        If the buyer on the motor vehicle does not yet have a unique Taxpayer Identification Number (TIN), provide RRA staff with a valid Identity Document (ID) or Passport.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Provide all required documents</p>
                    <p className="content-paragraph">
                        The buyer must provide RRA staff with all the required documents.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: Updated Yellow Card is provided to the buyer</p>
                    <p className="content-paragraph">
                        RRA staff will provide the buyer of the motor vehicle with the updated Yellow Card containing the buyer's details. The process is now finished and the buyer is now the legal owner of the motor vehicle.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default CustomsSum;

