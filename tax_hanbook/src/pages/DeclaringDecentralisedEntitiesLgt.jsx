import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const DeclaringDecentralisedEntitiesLgt = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Decentralised Entities Taxes and Fees using the LGT system</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        The four types of Decentralised Entities Taxes which are Rental Income Tax, Trading License Tax, Immovable Property Tax, and Tax on Sale of Immovable Property, and Decentralised Entities fees can be declared using the LGT system. The process of declaring each is similar, and described below.
                    </p>

                    <h2 style={{ marginTop: '2rem' }}>Step 1: Login to the LGT System</h2>
                    <p className="content-paragraph">
                        Access the LGT system at https://localgov.rra.gov.rw or through the RRA website at https://www.rra.gov.rw/en/home and clicking on 'Pay District taxes here' on the right of the screen. This loads the following login screen:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_01.png" alt="LGT System Login Screen">
                            <img
                                src="/images/lgt_declare_01.png"
                                alt="LGT System Login Screen"
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
                        The language can be changed by clicking on the flag icons in the top right corner, respectively English, Kinyarwanda and French.
                    </p>
                    <p className="content-paragraph">
                        Click 'Taxes' for the following LGT system login screen:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_02.png" alt="LGT System Taxes Login">
                            <img
                                src="/images/lgt_declare_02.png"
                                alt="LGT System Taxes Login"
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
                        If a taxpayer does not know their TIN, <Link to="/registration-guide">(check on Registration Guide)</Link>.
                    </p>
                    <p className="content-paragraph">
                        If a taxpayer does not know their password, it can be reset by clicking 'Forgot Password' on the LGT system login and receiving a new password by SMS or email.
                    </p>

                    <h2 style={{ marginTop: '2rem' }}>Step 2: Select the correct Decentralised Entities Taxes or fee to declare</h2>
                    <p className="content-paragraph">
                        After logging in, the LGT system home page is loaded.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_03.png" alt="LGT System Home Page">
                            <img
                                src="/images/lgt_declare_03.png"
                                alt="LGT System Home Page"
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
                        There are four menus available on the left of the screen: 'Registration', 'Declaration', 'Fee Payment Ticket' and 'Change Password'. Each of these menus is discussed in turn.
                    </p>
                    <p className="content-paragraph">
                        As taxpayers must register with LGT System staff (<Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link>) and cannot use the 'Registration' menu to register. However, it does display confirmation of registration, and allows for printing of Trading License Tax Certificates.
                    </p>
                    <p className="content-paragraph">
                        The taxpayer is also required to indicate building characteristics such as roofing, wall material, sewage system etc that was previously displayed on registration form as per below screen:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_04.png" alt="Building Characteristics Form">
                            <img
                                src="/images/lgt_declare_04.png"
                                alt="Building Characteristics Form"
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
                        The 'Declaration' menu is where the four types of Decentralised Entities Taxes are declared. Click 'Declaration' and the drop-down 'Taxes' option. Then choose the tax type and tax period that is being declared and click 'Submit'. Finally, click on the document number of the applicable declaration.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 73</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            A taxpayer clicks 'Declaration' then 'Taxes' and sees the following screen. The only Decentralised Entities Tax the taxpayer is registered for is 'Rental Income'. They select this tax type and the tax year that is being declared, and click 'Submit'.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_05.png" alt="LGT Declaration Selection">
                            <img
                                src="/images/lgt_declare_05.png"
                                alt="LGT Declaration Selection"
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
                        This loads the following screen. It displays each of the properties registered by that taxpayer for Rental Income Tax, for this taxpayer only one. For each property, the taxpayer clicks the 'Document No' to begin the declaration.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_06.png" alt="LGT Property Selection">
                            <img
                                src="/images/lgt_declare_06.png"
                                alt="LGT Property Selection"
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
                        The 'Fees Payment Ticket' menu is where fees can be declared and the drop-down provides the choice of a range of fee declarations:
                    </p>
                    <ul className="content-list">
                        <li>Fees on civil marriage conducted on a day other than an official business day</li>
                        <li>Fees on services and documents of immovable property</li>
                        <li>Fees on official certificates of a decentralized entity</li>
                        <li>Fees on authorisation to make or burn clay bricks, tiles, or charcoal</li>
                        <li>Market fees</li>
                        <li>Fees on parking</li>
                        <li>Fees on public parking</li>
                        <li>Parking fees on boats</li>
                        <li>Fees on small-scale quarry exploitation</li>
                        <li>Fees on advertising</li>
                        <li>Fees for boat number plates</li>
                        <li>Fees on bicycle number plates</li>
                        <li>Fees on communication towers</li>
                        <li>Fees on transport of materials from quarries and forests</li>
                    </ul>
                    <p className="content-paragraph">
                        The 'Change Password' menu requires the taxpayer to enter the previous password, and the new password. The taxpayer is automatically required to change their password when first logging in to the LGT system with the RRA provided password.
                    </p>

                    <h2 style={{ marginTop: '2rem' }}>Step 3: Complete declaration form and submit</h2>
                    <p className="content-paragraph">
                        Having selected the correct Decentralised Entities Tax or fee, enter the required information in the declaration form. The information that is required depends upon the type of Decentralised Entities Tax or fee. These are displayed in turn below.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Immovable Property Tax</h3>
                    <p className="content-paragraph">
                        The declaration for the Immovable Property Tax generally consists of three parts:
                    </p>
                    <ol className="content-list" style={{ listStyleType: 'decimal', marginLeft: '2rem' }}>
                        <li>Part referring to the land.</li>
                        <li>Part referring to the building – if there is a building on the land.</li>
                        <li>Part referring to the entire immovable property.</li>
                    </ol>
                    <p className="content-paragraph">
                        In the first part of the declaration, the taxpayer does not have to enter any information about the land. Instead, the LGT system automatically displays all information determining the tax due on the land.
                    </p>
                    <p className="content-paragraph" style={{ fontStyle: 'italic' }}>
                        Note that if the construction of a building has been completed on the plot during the tax period so that the land is no longer undeveloped, the taxpayer needs to visit an RRA office to update the registration of the Immovable Property Tax to indicate that land is developed.
                    </p>
                    <p className="content-paragraph">
                        In the second part of the declaration, the taxpayer needs to provide information on the building (for developed land, only). In particular, the taxpayer needs to indicate the market value of the building.
                    </p>
                    <p className="content-paragraph">
                        In the following section, the taxpayer is asked to indicate the total market value of the immovable property, which includes both the building component and the land component.
                    </p>
                    <p className="content-paragraph">
                        Once the required information has been entered, click 'Calculate Tax'. The LGT system automatically displays:
                    </p>
                    <ol className="content-list" style={{ listStyleType: 'decimal', marginLeft: '2rem' }}>
                        <li>The tax due on the land component, depending on the surface area of the plot and the tax rate on land.</li>
                        <li>The tax due on the building component, based on the market value and the tax rate on building.</li>
                        <li>The total tax due on the immovable property, potential penalties and interests in case of late declaration, as well as the total amount due.</li>
                    </ol>
                    <p className="content-paragraph">
                        Afterwards, certify that the declaration was done correctly before you 'Submit'.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 74</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example of a filled in declaration form for Immovable Property Tax is shown below. The tax due on the land is FRW 14,460. The tax due on the building is FRW 125,000. Therefore, the total Immovable Property Tax due to be paid with this declaration is FRW 139,460.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_07.png" alt="Immovable Property Tax Declaration Part 1">
                            <img
                                src="/images/lgt_declare_07.png"
                                alt="Immovable Property Tax Declaration Part 1"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_08.png" alt="Immovable Property Tax Declaration Part 2">
                            <img
                                src="/images/lgt_declare_08.png"
                                alt="Immovable Property Tax Declaration Part 2"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Trading License Tax</h3>
                    <p className="content-paragraph">
                        Select Trading License Tax from 'Taxes' menu, choose annual or quarterly: If the previous annual turnover exists, the system retrieves it and fills it automatically. Otherwise, the system classifies a taxpayer under 'Other profit-oriented activities' category and charges trading licence tax accordingly.
                    </p>
                    <p className="content-paragraph">
                        If all the information is correct, click 'Calculate Tax' to display the tax due, and click to 'Submit' the declaration.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 75</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            The Trading License Tax due for a business with an annual turnover of FRW 20 million is FRW 160,000.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 76</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            The Trading License Tax due for a business with unknown previous fiscal year turnover is FRW 60,000 if the taxpayer is located in urban zone or FRW 30,000 if the taxpayer is located rural zone as per 'other profit-oriented activities' category.
                        </p>
                    </div>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Rental Income Tax</h3>
                    <p className="content-paragraph">
                        Having clicked on the document number of the relevant property for the tax type and tax period that is being declared, the following declaration form is displayed for Rental Income Tax.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_09.png" alt="Rental Income Tax Declaration Form">
                            <img
                                src="/images/lgt_declare_09.png"
                                alt="Rental Income Tax Declaration Form"
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
                        The taxpayer must enter the monthly rent and the total amount of rental income received during the tax year. In addition, if bank interest is being paid on this property, the taxpayer must change 'Is Bank Interest paid' to 'Yes' and enter the additional required details including rent contract copy.
                    </p>
                    <p className="content-paragraph">
                        Once all required information has been entered, click 'Continue with Declaration'. This generates an additional 'Rental Income Declaration' section. If all the information is correct, click 'Calculate Tax' to display the tax due, and click to 'Submit' the declaration.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 76</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example Rental Income Tax declaration form is entered below. The total Rental Income Tax due to be paid with this declaration is FRW 584,000.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_10.png" alt="Rental Income Tax Declaration Example">
                            <img
                                src="/images/lgt_declare_10.png"
                                alt="Rental Income Tax Declaration Example"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Tax on a sale of Immovable Property Tax</h3>
                    <p className="content-paragraph">
                        A rate of 2% is levied on the sale value of an immovable property for commercial use if the seller is a taxpayer registered for income tax. This tax is considered as a deductible expense.
                    </p>
                    <p className="content-paragraph">
                        A rate of 2.5% is levied on the sale value of an immovable property sold by a person not registered for income tax.
                    </p>
                    <p className="content-paragraph">
                        Tax on a sale of immovable property is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>Decentralised Entities Fees</h3>
                    <p className="content-paragraph">
                        The process of declaring Decentralised Entities fees varies depending upon the type of fee. In general, having selected the correct type of 'Fee Payment Ticket', enter the required information, and click 'Submit'. This Tax Handbook uses two examples to demonstrate the general processes of declaring Decentralised Entities fees.
                    </p>
                    <p className="content-paragraph">
                        <strong>Fees for civil marriage conducted on days other than official business days</strong>
                    </p>
                    <p className="content-paragraph">
                        The taxpayer must enter their personal details including their national ID number or passport number, name, date of birth, mobile number and the province, district and sector where they live. Some of these details may be automatically generated after entering the ID number.
                    </p>
                    <p className="content-paragraph">
                        The taxpayer can then choose the type of service that is required. This may include further drop-down options. Once selected, this automatically generates the correct amount that must be paid for that service, and the taxpayer can click to 'Submit' the fee declaration.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 77</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            An example fee declaration to pay for civil marriage done not on official business days is entered below. The amount that must be paid for this service is FRW 10,000.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_11.png" alt="Civil Marriage Fee Declaration">
                            <img
                                src="/images/lgt_declare_11.png"
                                alt="Civil Marriage Fee Declaration"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>

                    <h2 style={{ marginTop: '2rem' }}>Step 4: View payment details via the Acknowledgement Receipt, email or SMS, and pay the total amount due</h2>
                    <p className="content-paragraph">
                        After successfully submitting the declaration, click to view the Acknowledgement Receipt. Alternatively, receive the payment details by email or SMS by entering an email address or phone number and clicking 'Send Email' or 'Send SMS'.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lgt_declare_12.png" alt="LGT Acknowledgement Receipt">
                            <img
                                src="/images/lgt_declare_12.png"
                                alt="LGT Acknowledgement Receipt"
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
                        Use the RRA Reference Number to pay the total amount due. This must be paid before the deadline to avoid penalties and fines, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link> for more details on paying taxes.
                    </p>

                    <h2 style={{ marginTop: '2rem' }}>Declaring Decentralised Entities Taxes and Fees using M-Declaration</h2>
                    <p className="content-paragraph">
                        Taxpayers can use M-declaration for the following local government tax and fees:
                    </p>
                    <ul className="content-list">
                        <li>Trading License Tax</li>
                        <li>Immovable Property Tax (available for plots without buildings, only)</li>
                        <li>Outsourced Fees (available for Ngali Holding Ltd, only)</li>
                    </ul>
                    <p className="content-paragraph">
                        The process for declaring these Decentralised Entities Taxes and fees using M-declaration is explained below.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>M-Declaration Process</h3>
                    <p className="content-paragraph">
                        The M-Declaration system is accessed by dialling *800#. The M-Declaration system has a series of screens, with number options, that are navigated by entering and sending the relevant number.
                    </p>
                    <p className="content-paragraph">
                        On the first screen, select a language: either English or Kinyarwanda.
                    </p>
                    <p className="content-paragraph">
                        On the next screen select which M-Declaration service is required. To declare Decentralised Entities Taxes and fees, select '3. Local Government Taxes'.
                    </p>
                    <p className="content-paragraph">
                        At the following screen, select the type of tax or fee:
                    </p>
                    <ul className="content-list">
                        <li>1. Land lease</li>
                        <li>2. Trading license</li>
                        <li>5. Property tax</li>
                    </ul>
                    <p className="content-paragraph">
                        When the desired type of tax or fee is selected, first enter the 'TIN' and then follow the on-screen instructions, depending on the tax type.
                    </p>
                    <p className="content-paragraph">
                        Having entered all required information, the system calculates the tax to be paid, and generates the RRA Reference Number required for paying. For more details on paying taxes and fees, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringDecentralisedEntitiesLgt;

