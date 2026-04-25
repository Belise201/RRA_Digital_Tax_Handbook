import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const ExciseDeclaration = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Excise Duty</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        The declaration process for Excise Duty is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax <Link to="/domestic-declaration">(check on Step-by-Step guide to declaring domestic taxes)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Annexures</h2>
                    <p className="content-paragraph">
                        Firstly, download the Excise Duty Annexures from the E-Tax website, <Link to="/domestic-declaration">(check on Step-by-Step guide to declaring domestic taxes)</Link> for more detail on downloading annexures. The Excise Annexure file has two tabs.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Raw Materials Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable for all taxpayers to record their register of raw materials used in the manufacturing of taxable products during the tax period.
                    </p>
                    <p className="content-paragraph">
                        Each raw material used for production of each product on each date is required to have its own row in the annex. For example, if two raw materials are used to produce two separate products on eight days of production, then (2 * 2 * 8 = 32) 32 rows are required in the annexure.
                    </p>
                    <ul className="content-list">
                        <li><strong>Product Name</strong> – Enter the type or brand of product that is being produced. This does not have to specify amounts or unit sizes.</li>
                        <li><strong>Production Date</strong> – Enter the date of production, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
                        <li><strong>Name of the Raw Materials Used</strong> – Enter the name of the manufactured product.</li>
                        <li><strong>Opening Stock</strong> – Enter the opening stock (in given units) of the raw material at the beginning of that day's production.
                            <br />
                            <em>Note: The units that are used can be chosen by the taxpayer, i.e., grams, kilograms or tonnes, but should remain consistent for that raw material. The units that are used are not written in the annexure, only numbers.</em>
                        </li>
                        <li><strong>Quantity of Raw materials locally purchased</strong> – Enter the units of raw material used purchased locally.</li>
                        <li><strong>Quantity of Raw materials imported</strong> - Enter the units of raw material used purchased abroad.</li>
                        <li><strong>Quantities Used for Production</strong> – Enter the amount of stock (in given units) of the raw material during that day's production.</li>
                        <li><strong>Quantities Spoiled</strong> – Enter the amount of stock (in given units) of the raw material that was spoiled during that day's production.</li>
                        <li><strong>Closing Stock</strong> – Enter the amount of stock (in given units) of the raw material remaining at the end of that day's production. This should equal Opening Stock – Quantities Used for Production – Quantities Spoiled.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Excise Tab</h3>
                    <p className="content-paragraph">
                        This tab is applicable for all taxpayers to record their sales of taxable products sold during the tax period. There are different Excise tabs for cigarette, telephone and for other excisable products. The information to complete in each tab is almost similar. In this Tax Handbook the tab 'Excise others' is explained.
                    </p>
                    <p className="content-paragraph">
                        Each product type sold on each date for each specific unit price is required to have its own row in the annex. For example, if two different sized products of the same brand are sold on the same day, these are required to have two separate rows.
                    </p>
                    <ul className="content-list">
                        <li><strong>Date of Delivery</strong> – Enter the exit date</li>
                        <li><strong>Item Name</strong> – Enter excisable product name</li>
                        <li><strong>Container Type</strong> – Select the type of the container</li>
                        <li><strong>Quantity per container produced(ml/gr)</strong> – Enter the number of units in a single container in millilitre or in gram depending of the nature of the product.</li>
                        <li><strong>Unit of measurement</strong> - Select either (ml) for mil-litter or (gr) for milligram depending of the nature of the product.</li>
                        <li><strong>Package type</strong> – Select one of the listed package types</li>
                        <li><strong>Quantity in the package</strong> – Enter the number of units of the product in a package as per package type</li>
                        <li><strong>Total Packages in Stores</strong> – Enter the number of units of package produced in the store</li>
                        <li><strong>Total Package Out of Factory</strong> – Enter the number of the package to be sold</li>
                        <li><strong>Quantity Out of Factory</strong> – Convert the number of units to be sold into Kilograms or litres</li>
                        <li><strong>Total Adjustment</strong> – Enter converted number of units to be sold into litres or kilograms</li>
                        <li><strong>Total Export</strong> – Enter converted number of units to be sold outside the country into litres or kilograms</li>
                        <li><strong>Total Taxable Units</strong> – Enter the number of units to be sold (in Kg/lt) minus the number of units to be sold outside the country (manufactured for exported)</li>
                        <li><strong>Unit price</strong> – Enter the value of recorded units</li>
                        <li><strong>Total Taxable Value</strong> – Enter the product of unit price times total taxable units (column M*N)</li>
                        <li><strong>Tax Due</strong> – Enter the total tax due of all units sold (including exports). This should equal Total Taxable Value multiplied by the excise tax rate for that product.</li>
                        <li><strong>Package in KG/Liter remaining in Stock</strong> – Enter the number of units that are not yet sold and remain in the factory.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Excise Declaration</h2>
                    <p className="content-paragraph">
                        Once all the Excise Duty annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Excise Duty declaration, <Link to="/domestic-declaration">(check on Step-by-Step guide to declaring domestic taxes)</Link> for more detail on selecting the relevant declaration.
                    </p>
                    <p className="content-paragraph">
                        The Excise Duty declaration requires similar data to the Excise Duty Annexures that have previously been completed. The important distinction is that in the Excise Duty declaration, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 40</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Excise declaration is entered below. The Excise Duty due for this taxpayer in this tax period is FRW 192,000.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/excise_declaration_01.png" alt="Excise Declaration Form">
                            <img
                                src="/images/excise_declaration_01.png"
                                alt="Excise Declaration Form"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        After saving the Excise Duty declaration form, upload the Excise Duty annexures and then compare with the Excise Duty declaration form, <Link to="/domestic-declaration">(check on Step-by-Step guide to declaring domestic taxes)</Link> for more detail on uploading annexures and comparing with declaration forms.
                    </p>
                    <p className="content-paragraph">
                        Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/declaring_iqp_03.png" alt="Excise Declaration Submitted">
                            <img
                                src="/images/declaring_iqp_03.png"
                                alt="Excise Declaration Submitted"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        Click 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link> for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for failing to keep a tax stamp register?</h2>
                    <p className="content-paragraph">
                        A domestic producer or importer who does not keep:
                    </p>
                    <ul className="content-list">
                        <li>Stamp registers, records or related documents</li>
                        <li>Stamp reconciliation statements</li>
                    </ul>
                    <p className="content-paragraph">
                        is subject to an administrative fine between million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000).
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the consequences for incorrectly applying tax stamps?</h2>
                    <p className="content-paragraph">
                        A domestic producer or importer of products who:
                    </p>
                    <ul className="content-list">
                        <li>Does not affix tax stamps to appropriate products</li>
                        <li>Does not affix tax stamps incorrectly</li>
                        <li>Affixes tax stamps to products in a manner contrary to rules set forth by the Authority</li>
                        <li>Making an overprint or defaces tax stamps</li>
                        <li>Submits an incorrect or incomplete tax stamp reconciliation statement</li>
                        <li>Applies tax stamps to products for which they are not intended</li>
                        <li>Sells products which are subject to excise duty without tax stamps</li>
                    </ul>
                    <p className="content-paragraph">
                        Is, upon conviction, subject to a fine of between one million Rwandan francs (FRW 1,000,000) and two million Rwandan francs (FRW 2,000,000) or to imprisonment for a term of six (6) months to one (1) year.
                    </p>
                    <p className="content-paragraph">
                        When the perpetrator of the offence referred to in this Article is a person other than an individual, such a person is liable to a fine of not less than FRW 5,000,000 but not more than FRW 10,000,000. In case of recidivism within a period not exceeding two years, the fine is doubled.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ExciseDeclaration;

