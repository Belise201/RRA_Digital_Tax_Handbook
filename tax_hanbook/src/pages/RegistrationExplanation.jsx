import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const RegistrationExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Registration</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* Which institution registers taxpayers */}
                <section className="content-section">
                    <h2>Which institution registers taxpayers?</h2>
                    <p className="content-paragraph">
                        Taxpayers receive a unique Taxpayer Identification Number (TIN) when registering their business with Rwanda Development Board (RDB) for all businesses, and Rwanda Cooperatives Agency (RCA) for cooperatives.
                    </p>
                    <p className="content-paragraph">
                        However, there are also circumstances where RRA registers taxpayers and provides them with TINs directly:
                    </p>
                    <ul className="content-list">
                        <li>Local Government Taxes (LGT) and fees</li>
                        <li>Non-business registration, for example for:
                            <ul className="content-sublist">
                                <li>Motor vehicle ownership</li>
                                <li>Tax Clearance Certificates (TCCs)</li>
                                <li>Non-governmental organisations (NGOs), after approval from Rwanda Governance Board (RGB)</li>
                                <li>Government institutions and projects</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        As the processes are separate, this Tax Handbook focuses on business registration with RDB in this section. For cooperatives registration, visit any RCA office. For more details on registering for Local Government Taxes (LGT) and fees, <Link to="/m-declaration-motor-vehicle">(check on M-Declaration Motor Vehicle)</Link>.
                    </p>
                    <p className="content-paragraph">
                        For all non-business registration purposes, visit any RRA office with a Rwanda National ID or a Passport.
                    </p>
                </section>

                {/* How can businesses register */}
                <section className="content-section">
                    <h2>How can businesses register as taxpayers and get a TIN?</h2>
                    <p className="content-paragraph">
                        Business registration in Rwanda is carried out by the Office of the Registrar General (ORG) within the Rwanda Development Board (RDB). This is carried out online on the RDB portal rather than RRA in order to facilitate the aftercare and investment promotion facilities that RDB offers. The RDB, RCA, and RRA computer systems are integrated to ensure a smooth registration process that provides a single, unique Taxpayer Identification Number (TIN) and a clear understanding of the taxpayer's obligations.
                    </p>
                    <p className="content-paragraph">
                        According to the World Bank Ease of Doing Business Index 2019, Rwanda was the simplest and fastest country in East Africa in which to start a business. This Tax Handbook tries to promote this further, with a basic guide to business registration, for further questions visit the RDB website at <a href="https://rdb.rw/" target="_blank" rel="noopener noreferrer" className="content-link">https://rdb.rw/</a> or contact RDB directly at:
                    </p>
                    <p className="content-paragraph">
                        Rwanda Development Board (RDB)<br />
                        KN 5 Rd, KG 9 Ave, Kigali, Rwanda<br />
                        P.O. Box 6239<br />
                        Tel (Local): 1415<br />
                        Tel (International): +250 727775170<br />
                        Email: info@rdb.rw
                    </p>
                </section>

                {/* Benefits of business registration */}
                <section className="content-section">
                    <h2>What are the benefits of business registration?</h2>
                    <p className="content-paragraph">
                        As well as being a legal requirement, there are many advantages to registering as a business. These include:
                    </p>
                    <ul className="content-list">
                        <li>Ensuring the business benefits from the protections provided by business laws, such as limited liability</li>
                        <li>Improving access to credit from financial institutions</li>
                        <li>Inspiring trust in customers with proof of being a registered business</li>
                    </ul>
                </section>

                {/* Limited liability */}
                <section className="content-section">
                    <h2>What is limited liability?</h2>
                    <p className="content-paragraph">
                        Liability refers to the responsibility for any debts that are owed by the business. One of the advantages of registering a business as a company, as opposed to an individual enterprise, is that all debts incurred by the company are the responsibility of the company, they are not the legal liability of the shareholders or the directors. In this way, the liability of the people who run the company is said to be 'limited'. They are not responsible for all the debts of the company, only to the extent of the stake they have in the company, <Link to="/registration-explanation">(check on Registration Explanation)</Link> for more details.
                    </p>
                </section>

                {/* When must register */}
                <section className="content-section">
                    <h2>When must a business be registered?</h2>
                    <p className="content-paragraph">
                        A business must register with the Register General when the business is established.
                    </p>
                </section>

                {/* RDB Business Registration system */}
                <section className="content-section">
                    <h2>What is the RDB Business Registration system?</h2>
                    <p className="content-paragraph">
                        RDB has developed the business registration system to make it easier for taxpayers to register their business. The RDB system is an online portal through which all businesses are registered.
                    </p>
                    <p className="content-paragraph">
                        It is important to note that although all business registrations go through the RDB system, this can still be done with the help of RDB staff at RDB offices. Similarly, Business Development Fund (BDF) staff are also trained to help taxpayers register their businesses at BDF offices.
                    </p>
                    <p className="content-paragraph">
                        Nevertheless, there are many advantages for taxpayers to register online. This Tax Handbook aims to provide all the information necessary for taxpayers to be able to register online.
                    </p>
                    <p className="content-paragraph">
                        Any questions during the registration process can be answered by calling the RDB call centre toll-free on 1415.
                    </p>
                </section>

                {/* Cost */}
                <section className="content-section">
                    <h2>How much does it cost to register a business?</h2>
                    <p className="content-paragraph">
                        It is free to register a business in Rwanda. It is free to register online and at RDB and BDF offices. However, some private internet cafés also offer assistance with business registration and can charge a fee for this service.
                    </p>
                </section>

                {/* Categories */}
                <section className="content-section">
                    <h2>What are the different categories of businesses?</h2>
                    <p className="content-paragraph">
                        There are three categories of business that can be registered. On the RDB business registration system these are: 'Domestic' company, individual 'Enterprise' and 'Foreign' company.
                    </p>
                    <p className="content-paragraph">
                        Registering as 'Domestic' is for domestic companies or for subsidiaries of foreign companies.
                    </p>
                    <p className="content-paragraph">
                        Registering as an 'Enterprise' is for sole traders or partnerships and is the simplest way to start and conduct business in Rwanda. 'Enterprise' typically refers to a business whose turnover is less than FRW 10,000 per day.
                    </p>
                    <p className="content-paragraph">
                        Registering as 'Foreign' is for companies which already exist and are registered in a foreign country that are undertaking business in Rwanda. It is important to note that this does not include domestic subsidiaries of foreign companies.
                    </p>
                </section>

                {/* Domestic types */}
                <section className="content-section">
                    <h2>What are the different types of 'Domestic' company?</h2>
                    <p className="content-paragraph">
                        Within the 'Domestic' company business category, the Rwanda Companies Act recognises four legal types of companies. These are: limited by shares, limited by guarantee, limited by shares and guarantee or unlimited.
                    </p>
                    <p className="content-paragraph">
                        Limited by shares is the most common business type, and is suitable for most profit-oriented businesses. Limited by guarantee is suitable for non-profit organisations and charities. Limited by shares and guarantee, and unlimited, are rare business types and should not be selected without consultation with RDB.
                    </p>
                    <p className="content-paragraph">
                        These four types of companies all follow the same registration procedure, although requirements vary.
                    </p>
                    <p className="content-paragraph">
                        Companies limited by shares must register a chairman of the board, a managing director and at least one shareholder. However, these can all be the same person.
                    </p>
                </section>

                {/* Documents */}
                <section className="content-section">
                    <h2>What documents are needed to register a business?</h2>
                    <p className="content-paragraph">
                        The requirements for registering vary depending on the category of business. These must be scanned and attached whilst completing the business registration application. The documents that are required for each business category are listed below:
                    </p>
                    <p className="content-paragraph">
                        <strong>'Domestic' company:</strong>
                    </p>
                    <ul className="content-list">
                        <li>Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants)</li>
                        <li>Notarised articles of association (if applicable)</li>
                        <li>Notarised company resolution to open a subsidiary company (if a subsidiary)</li>
                        <li>Notarised certificate of incorporation issued by the registration company in the country of incorporation (if a foreign subsidiary)</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>Individual 'Enterprise':</strong>
                    </p>
                    <ul className="content-list">
                        <li>Rwanda National ID or Passport</li>
                    </ul>
                    <p className="content-paragraph">
                        <strong>'Foreign' company:</strong>
                    </p>
                    <ul className="content-list">
                        <li>Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants residing in Rwanda)</li>
                        <li>Notarised power of attorney to present the company in Rwanda</li>
                        <li>Notarised articles of association</li>
                        <li>Notarised certificate of incorporation issued by the registration institution in the country of incorporation</li>
                        <li>Notarised company resolution to open a branch in Rwanda</li>
                    </ul>
                </section>

                {/* Business Activity */}
                <section className="content-section">
                    <h2>How should the type of 'Business Activity' be chosen?</h2>
                    <p className="content-paragraph">
                        The RDB business registration system asks taxpayers to identify the type of business activities that they plan to conduct. This is not binding, taxpayers can at any time carry out business activities that they do not include here.
                    </p>
                    <p className="content-paragraph">
                        However, it is important that this 'Business Activity' category is completed as accurately as possible when registering. This uses the International Standard Industrial Classification (ISIC), also used by the National Institute of Statistics (NISR), The National Bank of Rwanda (BNR) and the Ministry of Finance (MINECOFIN) to improve statistics and policy making.
                    </p>
                    <p className="content-paragraph">
                        The RDB system is designed to make it easier for taxpayers to choose their business activities, by first choosing the broad sector, and then choosing the more specific activity within that sector.
                    </p>
                    <p className="content-paragraph">
                        The RDB system allows taxpayers to choose as many different activities as they intend to carry out, and then requests that they choose one of these to designate as their main business activity. This should be the business activity that they expect will contribute the largest share of their value added, i.e., to the selling price of their products, compared to the price of their inputs.
                    </p>
                    <p className="content-paragraph">
                        <strong>Example 1</strong>
                    </p>
                    <p className="content-paragraph">
                        Amahoro is starting a butchery business. She intends to buy livestock and process the meat. She expects to sell to other shops as well as directly to consumers.
                    </p>
                    <p className="content-paragraph">
                        Processing meat is within the 'manufacture' sector. Selling to other shops refers to 'wholesale'. Selling directly to customers refers to 'retail sale'. Amahoro selects 'C1010 - Processing and preserving of meat', 'G4630 – Wholesale of food, beverages and tobacco' and 'G4721 – Retail sale of food in specialised stores'.
                    </p>
                    <p className="content-paragraph">
                        Of these three activities, Amahoro expects her greatest value added to be from the processing of the meat so she chooses this as her main business activity.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_01.png" alt="Business Activity Selection Example">
                            <img
                                src="/images/Registration_01.png"
                                alt="Business Activity Selection Example"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                </section>

                {/* Tax types registration */}
                <section className="content-section">
                    <h2>How do taxpayers register for different tax types?</h2>
                    <p className="content-paragraph">
                        All businesses are immediately registered for Income Tax during business registration. This is either Personal Income Tax (PIT) for individual businesses or Corporate Income Tax (CIT) for companies.
                    </p>
                    <p className="content-paragraph">
                        All businesses must also register for Trading License Tax. Businesses registered by RDB are automatically registered on Trading License Tax which is exempted for two years from registration date. <Link to="/m-declaration-motor-vehicle">(check on M-Declaration Motor Vehicle)</Link> for more details on registering for Local Government Taxes (LGT) and fees.
                    </p>
                    <p className="content-paragraph">
                        The Trading License Tax certificate, available after declaring and paying Trading License Tax, is required for all profit-oriented activities, <Link to="/trading-license-tax">(check on Trading License Tax)</Link> for details.
                    </p>
                    <p className="content-paragraph">
                        In addition, when registering, certain questions prompt the registration of tax accounts for other tax types. These include:
                    </p>
                    <p className="content-paragraph">
                        <strong>VAT:</strong> 'General Info' → 'Request for Value Added Tax' → 'Would you like to request for VAT Certificate?' → 'Yes' → Enter expected turnover amount.
                    </p>
                    <p className="content-paragraph">
                        <strong>PAYE:</strong> 'Employment Info' → 'Does the company have employees?' → 'Yes' → Enter required details.
                    </p>
                    <p className="content-paragraph">
                        To register for any other tax types, or to register for any additional tax types in the future, call the RRA call centre on 3004 or visit any RRA office.
                    </p>
                </section>

                {/* Start declaring */}
                <section className="content-section">
                    <h2>When must taxpayers start declaring and paying taxes?</h2>
                    <p className="content-paragraph">
                        Tax declarations for all registered tax types must be submitted for tax periods from the date the taxpayer was registered.
                    </p>
                    <p className="content-paragraph">
                        Even if there is no business activity within the first, or subsequent, tax periods, the declarations must still be submitted to avoid penalties. This includes domestic taxes such as Income Tax and also Local Government Taxes such as Trading License Tax, <Link to="/introduction">(check on Introduction)</Link> for a summary of tax deadlines.
                    </p>
                    <p className="content-paragraph">
                        <strong>Example 2</strong>
                    </p>
                    <p className="content-paragraph">
                        Rukundo is starting a private business of a retail shop. He is starting the business himself using his own capital and with no staff, partners or shareholders. He expects a daily turnover of approximately FRW 20,000, equivalent to an annual turnover of approximately FRW 8,000,000.
                    </p>
                    <p className="content-paragraph">
                        He wants to be protected by limited liability. Rukundo selects a 'domestic' business, with the company category 'private', the type 'limited by shares' and his position as 'managing director'. As shown below:
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/Registration_02.png" alt="Rukundo's Business Registration Example">
                            <img
                                src="/images/Registration_02.png"
                                alt="Rukundo's Business Registration Example"
                                style={{
                                    maxWidth: '500px',
                                    maxHeight: '355px',
                                    width: 'auto',
                                    height: 'auto',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </ImageModal>
                    </div>
                    <p className="content-paragraph">
                        On the share info tab, he lists himself as the only shareholder. On the members of the board tab, he enters himself as the only member of the board. On the business activity tab, he enters the business sector as 'G – Wholesale or Retail Trade; Repair of Motor Vehicles and Motorcycles' and then chooses 'G4711 – Retail sale in non-specialised stores with food, beverages or tobacco predominating'.
                    </p>
                    <p className="content-paragraph">
                        As his annual turnover is expected to be below FRW 20,000,000, he does not have to request for a VAT certificate. As he has no employees, he does not register for PAYE.
                    </p>
                    <p className="content-paragraph">
                        Rukundo is automatically registered for Personal Income Tax (PIT), which must be declared and paid on an annual basis by 31st March of the following year, Trading License Tax which must be declared and paid after the expiration of exemption period of two years from registration date.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RegistrationExplanation;

