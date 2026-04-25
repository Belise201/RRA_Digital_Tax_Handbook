import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomDuties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Customs Duties</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are the different Customs Duties?</h2>
                    <p className="content-paragraph">
                        The full list of customs duties is displayed in this chapter. The rates and bases of each type are described below.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Import Duty</h3>
                    <p className="content-paragraph">
                        Import Duty is a tax paid specifically on imported goods originating from outside of the EAC. The EAC Customs Union ensures a zero (0%) rate of Import Duty on all imports on goods originating from within the EAC, <Link to="/custom-duties">(check on Customs Duties)</Link> for details.
                    </p>
                    <p className="content-paragraph">
                        The EAC Customs Union means that the rates of import duty are agreed in the Common External Tariff (CET). The CET sets Import Duty rates on a product-by-product basis for each HS Code. The CET is available on the RRA website at: <a href="https://www.rra.gov.rw/fileadmin/user_upload/EAC_CET_2022_version_JULY_23.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://www.rra.gov.rw/fileadmin/user_upload/EAC_CET_2022_version_JULY_23.pdf</a>
                    </p>
                    <p className="content-paragraph">
                        The Common External Tariff (CET) applies a range of import duty rates across four tariff bands, with rates varying from a minimum of 0% to a maximum of 35%, depending on the type of goods:
                    </p>
                    <ul className="content-list">
                        <li>Capital goods and raw materials = 0%</li>
                        <li>Intermediate goods = 10%</li>
                        <li>Finished goods = 25%</li>
                        <li>Finished goods available in EAC = 35%</li>
                    </ul>
                    <p className="content-paragraph">
                        In addition to these standard rates, certain products are classified as sensitive goods, which may be subject to specific tariff rates or trade restrictions.
                    </p>
                    <p className="content-paragraph">
                        Some examples of sensitive goods which attract higher rate than 35% include:
                    </p>
                    <ul className="content-list">
                        <li>0402.10.00 - In powder, granules or other solid forms, of a fat content, by weight, not exceeding 1.5% at a rate of 60% of CIF;</li>
                        <li>1006.40.00 - Broken Rice at a rate of 75% of CIF or $345/MT whichever is higher;</li>
                        <li>1701.99.10 - White refined sugar (for industrial use) at a rate of 100% of CIF or $ 460/MT whichever is higher;</li>
                        <li>1701.99.20 - Other sugar (for industrial use) at a rate of 100% of CIF or$ 460/MT whichever is higher…</li>
                    </ul>
                    <p className="content-paragraph">
                        There are two exceptions where the above tariff rates can be temporally modified: 'Stay of Applications' and the 'Duty Remission Scheme'. For more details <Link to="/custom-duties">(check on Customs Duties)</Link> and <Link to="/facilitation-schema">(check on Facilitation Schemes)</Link> respectively.
                    </p>
                    <p className="content-paragraph">
                        The amount of Import Duty to be paid is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Import Duty = CIF * Import Duty rate
                    </p>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, Import Duty is referred to under code 'C', for example 'C02'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Handling Fees (HF)</h3>
                    <p className="content-paragraph">
                        Handling Fees are not actually paid, but are included in VAT and Excise Duty calculations. HF is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Handling Fees (HF) = Net Weight (kg) * FRW 10
                    </p>
                    <p className="content-paragraph">
                        Net Weight (kg) refers to the weight of the goods in the consignment in kilograms.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Excise Duty</h3>
                    <p className="content-paragraph">
                        Excise Duty is paid on specific products, regardless of whether they are produced domestically or imported. For more details on the products subject to Excise Duty, the basis and the rates, <Link to="/excise-explanation">(check on Explanation of Excise Duty)</Link>.
                    </p>
                    <p className="content-paragraph">
                        The Excise Duty to be paid on a specific basis is calculated by an amount of tax per unit of the product. The Excise Duty to be paid on an ad valorem basis is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Excise Duty = (CIF + Import Duty + HF) * Excise Rate
                    </p>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, Excise Duty is referred to under code 'E', for example 'E01'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Value Added Tax (VAT)</h3>
                    <p className="content-paragraph">
                        VAT is paid on the majority of products, regardless of whether they are produced domestically or imported. The normal rate of VAT in Rwanda is 18%. For details on products that are exempted or zero-rated, <Link to="/vat-explanation">(check on Explanation of VAT)</Link>.
                    </p>
                    <p className="content-paragraph">
                        Therefore, the VAT to be paid on imported goods is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        VAT = (CIF + Import Duty + Excise Duty + HF) * VAT rate
                    </p>
                    <p className="content-paragraph">
                        Any VAT previously paid in a foreign country is not offset when calculating the VAT that is to be paid at Customs. This is expected to be refunded at the country of origin.
                    </p>
                    <p className="content-paragraph">
                        Once VAT has been paid on imports at Customs, this amount can be claimed back in subsequent domestic VAT declarations. <Link to="/vat-declaration">(check on Declaring VAT)</Link> for the information required when claiming back VAT paid on imports.
                    </p>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, VAT is referred to under code 'V', for example 'V02'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Withholding Tax of 5% (WHT 5%)</h3>
                    <p className="content-paragraph">
                        WHT 5% is a tax paid specifically on imported goods. WHT 5% is paid by all taxpayers except for taxpayers with a valid Compliance Certificate (Quitus Fiscal), and persons exempted from income tax, <Link to="/certificates">(check on Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs))</Link>.
                    </p>
                    <p className="content-paragraph">
                        The WHT 5% to be paid on imported goods is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Withholding Tax of 5% (WHT 5%) = CIF * 5%
                    </p>
                    <p className="content-paragraph">
                        Once WHT 5% has been paid at Customs, this amount can be claimed back in subsequent domestic Income Tax (PIT or CIT) declarations by the importing taxpayers. This can be claimed back in the annual declarations. <Link to="/declaring-lump-sum-e-tax">(check on Declaring Lump Sum Income Tax using E-Tax)</Link> for the information required when claiming back WHT 5% paid on imports.
                    </p>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, WHT 5% is referred to under code 'W', for example 'W01'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Infrastructure Development Levy (IDL)</h3>
                    <p className="content-paragraph">
                        IDL is a tax paid specifically on imported goods from outside of the EAC. IDL contributes to regional trade-facilitation infrastructure projects. IDL is paid on all imported goods, with the exception of those detailed in Article 5 of Law N°34/2015 of 30/06/2015 establishing the infrastructure development levy on imported goods, including:
                    </p>
                    <ul className="content-list">
                        <li>Goods imported certifying the East African Community Rules of Origin;</li>
                        <li>Goods imported specified in the Fifth Schedule of the East African Customs Management Act;</li>
                        <li>Imported goods exempted from taxes as provided for in East African Community and industrial goods imported in Rwanda entitled to remission;</li>
                        <li>Reproductive animals and reproductive plants;</li>
                        <li>Pharmaceutical products;</li>
                        <li>Veterinary and phytosanitary products;</li>
                        <li>Medical equipment appearing on the list made by the Minister in charge of health and approved by the Minister in charge of taxes;</li>
                        <li>Veterinary and phytosanitary equipment appearing on the list made by the Minister in charge of agriculture and animal husbandry and approved by the Minister in charge of taxes;</li>
                        <li>Industrial machinery and equipment for energy and water sectors, as well as for investment projects with investment certificate;</li>
                        <li>Organic and inorganic chemicals;</li>
                        <li>Machinery and equipment approved by the Commissioner General.</li>
                    </ul>
                    <p className="content-paragraph">
                        The IDL to be paid on imported goods is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Infrastructure Development Levy (IDL) = CIF * 1.5%
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Strategic Reserves Levy (SRL)</h3>
                    <p className="content-paragraph">
                        SRL is a tax paid specifically on imported fuel and petroleum products. SRL funds the purchase and safe maintenance of greater reserves of fuel. The SRL is paid at a specific rate per litre of fuel, calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Strategic Reserves Levy (SRL) = FRW 50 per litre of fuel
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>African Union Levy (AUL)</h3>
                    <p className="content-paragraph">
                        AUL is a tax paid specifically on imported goods. AUL contributes to the financing of African Union activities. AUL is paid on all imported goods, except for those subject to exemptions by the 5th Schedule of the EAC CMA, Duty Remission or VAT.
                    </p>
                    <p className="content-paragraph">
                        The AUL paid on imported goods is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        African Union Levy (AUL) = CIF * 0.2%
                    </p>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, AUL is referred to under code 'AU', for example 'AU0'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Environmental levy</h3>
                    <p className="content-paragraph">
                        Environmental levy is a tax paid specifically on imported items that are packaged in plastic materials for the management of the resulting waste.
                    </p>
                    <p className="content-paragraph">
                        Imported items provided for by the law are subjected to a levy of 0.2% to be calculated on their customs value. Items subject to environmental levy on imported items packaged in plastic materials are:
                    </p>
                    <ul className="content-list">
                        <li>Water</li>
                        <li>All types of juice, energy drinks and carbonated non-alcoholic beverages</li>
                        <li>Peanut butter, honey and derived products</li>
                        <li>All types of body lotions, petroleum jelly and shampoos</li>
                        <li>Mattresses</li>
                        <li>Clothes</li>
                        <li>Shoes</li>
                        <li>All types of soaps</li>
                        <li>Toilet papers</li>
                    </ul>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, Environmental levy is referred to under code 'EPL'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Motor Vehicle Registration Fees (MVF)</h3>
                    <p className="content-paragraph">
                        MVF are paid specifically on imported motor vehicles. MVF must be paid regardless of the type of vehicle or the exemptions available to the importing taxpayer. For more details on importing motor vehicles <Link to="/importing-moto-vehicle">(check on Importing Motor Vehicles)</Link>.
                    </p>
                    <p className="content-paragraph">
                        MVF vary depending upon the engine capacity of the vehicle as measured in cubic centimetres (cc):
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Engine Capacity (cc) between</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Motor Vehicle Fees (MVF) for all Motor Vehicles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0 to 1,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 75,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,001 to 1,500</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 285,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,501 to 3,000</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 445,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>3,001 to 4,500</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 748,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>4,501 and above</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 997,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Special Engine/Other categories</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 1,000,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Electric Vehicles</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 285,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>All Electric Motorcycles</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 75,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Personalized Plate Number</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 5,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="content-paragraph">
                        The special engine category includes semi-trailers, construction vehicles and other very heavy vehicles.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Road Toll</h3>
                    <p className="content-paragraph">
                        Road Toll is a fee paid specifically on foreign registered trucks entering Rwanda. Road Toll contributes to the Road Maintenance Fund (RMF) in Rwanda.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that the Road Toll is paid per truck entering Rwanda, not per declaration. Therefore, this is paid separately to other Customs Duties.
                    </p>
                    <p className="content-paragraph">
                        The Road Toll has two different rates, depending on the size of the trucks. The Road Toll must be paid by trucks every time they enter Rwanda. The rate of Road Toll is:
                    </p>
                    <ul className="content-list">
                        <li>$76 USD for simple trucks</li>
                        <li>$152 USD for semi-trailer, and trailer</li>
                    </ul>
                    <p className="content-paragraph">
                        Road Toll is referred to as 'FER' in assessment notices.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Fuel Levy</h3>
                    <p className="content-paragraph">
                        Fuel Levy is a tax paid specifically on imported fuel and petroleum products. Fuel Levy contributes to the Road Maintenance Fund (RMF) in Rwanda. The Fuel Levy is paid at a specific rate per litre of fuel. The Fuel Levy to be paid on imported fuel is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Fuel Levy = 15% of CIF
                    </p>
                    <p className="content-paragraph">
                        As with the Fuel Levy, Road Toll is referred to as 'FER' in import declarations and assessment notices.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Export Duty on Raw Hides and Skins</h3>
                    <p className="content-paragraph">
                        Export Duty on Raw Hides and Skins is paid on all exports of unprocessed hides and skins to outside of the EAC. The rate of Export Duty on Raw Hides and Skins is either:
                    </p>
                    <ul className="content-list">
                        <li>80% of FOB, or $0.52 per Kg, whichever is higher</li>
                    </ul>
                    <p className="content-paragraph">
                        In export declarations and assessment notices, Export Duty on Raw Hides and Skins is referred to as code 'EX1'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Export Tax – Minerals</h3>
                    <p className="content-paragraph">
                        Minerals exported in raw form are subject to an export tax as follows:
                    </p>
                    <ul className="content-list">
                        <li>2% of the norm value for the mineral category of base metals;</li>
                        <li>3% of the norm value for the category of gemstones;</li>
                        <li>2% of the norm value for the category of platinum group metals;</li>
                        <li>1% of the norm value for the category of rare earth elements;</li>
                        <li>2% of the norm value for the category of energy minerals;</li>
                        <li>0.5% of the norm value for the category of gold.</li>
                    </ul>
                    <p className="content-paragraph">
                        However, the law provides exemptions on Export Tax – Minerals as follows:
                    </p>
                    <ul className="content-list">
                        <li>Samples of minerals exported for the purpose of essay, analysis or any other examination are exempted from tax on minerals. A regulation of the competent authority determines the quantity of samples of minerals exempt from the tax on minerals.</li>
                        <li>The processed minerals and imported minerals to be re-exported, except gold, are exempted from tax on minerals at export point.</li>
                    </ul>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Computer Processing Fee</h3>
                    <p className="content-paragraph">
                        The Computer Processing Fee is a fee paid for every import or export declaration that is submitted.
                    </p>
                    <p className="content-paragraph">
                        The Computer Processing Fee is:
                    </p>
                    <ul className="content-list">
                        <li>FRW 3,000 per regular declaration</li>
                        <li>FRW 500 per simplified declaration, <Link to="/declaring-imports-and-export">(check on Declaring Imports and Exports)</Link> for more details on simplified declarations</li>
                    </ul>
                    <p className="content-paragraph">
                        Computer Processing Fee is listed as a 'global fee' in import/export declarations and assessment notices.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Quality Inspection Fees (QIF)</h3>
                    <p className="content-paragraph">
                        Quality Inspection Fees (QIF) are fees paid on specific imported products. Rwanda Inspectorate, Competition and Consumer Protection Authority (RICA), and Rwanda Food and Drugs Authority (Rwanda FDA) are institutions which both designates which products are required to be inspected and carry out the inspections. RRA collects QIF on behalf of related regulatory agencies above mentioned. The QIF to be paid on imported goods is calculated by:
                    </p>
                    <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
                        Quality Inspection Fees (QIF) = FOB * 0.2%
                    </p>
                    <p className="content-paragraph">
                        In import declarations and assessment notices, QIF are referred to under code 'QIF'.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Warehousing Fees</h3>
                    <p className="content-paragraph">
                        Warehousing Fees are paid when storing consignments in warehouses. It is important to note that these are paid directly to the warehouse owner and not to RRA. Rates may vary according to the warehouse, the size and weight of the consignment and how long it has been stored for.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 81</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Rukundo is importing a consignment of sports shoes packed in plastic materials from the United Kingdom. The HS Code is 6404.11.00 'Sports footwear…'. The net weight of the consignment is 75kg. The CIF value of the consignment is:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                            <li>Cost = FRW 2,800,000</li>
                            <li>Insurance = FRW 75,000</li>
                            <li>Freight = FRW 350,000</li>
                            <li>CIF (Cost + Insurance + Freight) = FRW 3,225,000</li>
                        </ul>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            The Customs Duties that must be paid are:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                            <li>Import Duty = FRW 3,225,000 * 35% = FRW 1,125,750</li>
                            <li>Handling Fees (not paid) = FRW 10/kg * 75kg = FRW 750</li>
                            <li>VAT = (FRW 3,225,000 + FRW 1,125,750 + FRW 750) * 18% = FRW 797,175</li>
                            <li>WHT 5% = FRW 3,225,000 * 5% = FRW 161,250</li>
                            <li>IDL = FRW 3,225,000 * 1.5% = FRW 48,375</li>
                            <li>AUL = FRW 3,225,000 * 0.2% = FRW 6,450</li>
                            <li>Environmental Levy = FRW 3,225,000 * 0.2% = FRW 6,450</li>
                            <li>Computer Processing Fee = FRW 3,000</li>
                        </ul>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            Therefore, the total duties to be paid are FRW 2,149,200.
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            Of this, the VAT of FRW 797,175 can be claimed back in domestic VAT declarations (as Rukundo is not the final consumer), and the WHT 5% of FRW 161,250 can be claimed back in domestic Income Tax declarations.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 82</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Ubumwe is importing a consignment of Tusker beer from Kenya and presented EAC Certificate of Origin. The HS Code is 2203.00.90 'Beer made from malt'. The net weight of the consignment is 1,400kg. The CIF value of the consignment is:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                            <li>Cost = FRW 1,100,000</li>
                            <li>Insurance = FRW 55,000</li>
                            <li>Freight = FRW 450,000</li>
                            <li>Since the goods are on EAC territory, Customs Value does not include Insurance and Freight. Therefore, CIF = FRW 1,100,000</li>
                        </ul>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            The customs duties that must be paid are:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                            <li>Import Duty = FRW 1,100,000 * 0% = FRW 0</li>
                            <li>Handling Fee (not paid) = FRW 10/kg * 1,400kg = FRW 14,000</li>
                            <li>Excise Duty = (FRW 1,100,000 + FRW 0 + FRW 14,000) * 65% = FRW 724,100</li>
                            <li>VAT = (FRW 1,100,000 + FRW 0 + FRW 14,000 + FRW 724,100) * 18% = FRW 330,858</li>
                            <li>WHT 5% = FRW 1,100,000 * 5% = FRW 55,000</li>
                            <li>Computer Processing Fee = FRW 3,000</li>
                            <li>QIF = (FRW 1,100,000) * 0.2% = FRW 2,200</li>
                        </ul>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            As Kenya is in the EAC Customs Unions the total duties to be paid are FRW 1,129,158.
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            Of this, the VAT of FRW 330,858 can be claimed back in domestic VAT declarations (as Ubumwe is not the final consumer), and the WHT 5% of FRW 55,000 can be claimed back in domestic Income Tax declarations.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 83</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Amahoro is importing a consignment of petrol from the United States of America. The HS Code is 2710.12.20 'Motor Spirit (gasoline) regular'. The consignment is 9,000 litres being transported in a semi-trailer truck. The CIF value of the consignment is:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                            <li>Cost = FRW 6,500,000</li>
                            <li>Insurance = FRW 400,000</li>
                            <li>Freight = FRW 600,000</li>
                            <li>CIF (Cost + Insurance + Freight) = FRW 7,500,000</li>
                        </ul>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            The Customs Duties that must be paid are:
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>
                            <li>Excise Duty = FRW 183/litre * 9,000 litres = FRW 1,647,000</li>
                            <li>VAT = FRW 275.1/litre * 9,000 litres = 2,475,900</li>
                            <li>WHT 5% = FRW 7,500,000 * 5% = FRW 375,000</li>
                            <li>IDL = FRW 7,500,000 * 1.5% = FRW 172,500</li>
                            <li>SRL = FRW 50/litre * 9,000 litres = FRW 450,000</li>
                            <li>Road Toll = $152 * FRW 832/$ = FRW 126,464</li>
                            <li>Fuel Levy = FRW 7,500,000 * 15% = FRW 1,125,000</li>
                            <li>AUL= FRW 6,500,000 * 0.2% = FRW 13,000</li>
                            <li>Computer Processing Fee = FRW 3,000</li>
                        </ul>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            Therefore, the total duties to be paid are FRW 6,387,864.
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            Of this, the WHT 5% of FRW 375,000 can be claimed back in domestic Income Tax declarations.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CustomDuties;

