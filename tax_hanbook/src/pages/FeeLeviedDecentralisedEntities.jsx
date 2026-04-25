import React from 'react';
import { FileText } from 'lucide-react';

const FeeLeviedDecentralisedEntities = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Fees Levied by Decentralised Entities</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are Decentralised Entities fees?</h2>
                    <p className="content-paragraph">
                        There are fees levied on services and certificates:
                    </p>
                    <ul className="content-list">
                        <li>Fees levied on services and certificates delivered by decentralised entities as follows:
                            <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                                <li>fees on the use of public domain of State;</li>
                                <li>fees on services delivered by decentralised entities;</li>
                                <li>charges levied as fees;</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        However, a decentralised entity is prohibited to set any other kind of fees or charges levied as fees not specified in the Presidential Order nº 075/01 of 04/12/2023 determining fees levied on services and certificates delivered by decentralised entities.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Which third parties also collect decentralised entities fees?</h2>
                    <p className="content-paragraph">
                        Ngali Holdings Ltd is mandated to support RRA in collecting all local government fees. Millennium Savings and Investment Cooperative (MISIC) also collects parking fees.
                    </p>
                    <p className="content-paragraph">
                        In addition, the declaration and payment of the following decentralized entities fees is now processed through the e-Government platform known as Irembo or Rwanda Online:
                    </p>
                    <ul className="content-list">
                        <li>Civil status certificates, including Birth, Marriage and Death certificates.</li>
                        <li>Transfer of land titles.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>When are the deadlines to declare and pay different types of decentralised entities fees?</h2>
                    <p className="content-paragraph">
                        The deadline to declare and pay decentralized entities fees depends upon the basis of the fee. Fees charged for a service, such as fees on official certificates and documents to be notified by the public notary, must be declared and paid before the service is delivered.
                    </p>
                    <p className="content-paragraph">
                        Fees payable on an annual basis, such as fees on advertising, must be declared and paid no later than 31st December of that year.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the different decentralized entities fees and rates?</h2>
                    <p className="content-paragraph">
                        The rates of many decentralized entities fees are variable, within certain thresholds, depending upon certain factors such as the location, i.e., urban, trading centre, or rural, or the vehicle details. The exact rate, within the thresholds, is determined by the District Council on an annual basis by the 30th June.
                    </p>
                    <p className="content-paragraph">
                        The list of local government fees, detailed in the Presidential Order Determining Fees Levied For Public Services And Certificates Delivered by Decentralized Entities are displayed below, and accessible using below link:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/fileadmin/user_upload/Iteka_rya_Perezida_04.12.2023_ku_mahoro_kuri_serivise_n_ibyemezo_bitangwa_2023.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                            https://www.rra.gov.rw/fileadmin/user_upload/Iteka_rya_Perezida_04.12.2023_ku_mahoro_kuri_serivise_n_ibyemezo_bitangwa_2023.pdf
                        </a>
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fees charged on public parking on road:</h3>
                    <ul className="content-list">
                        <li>FRW 200 per hour – FRW 30,000 per month</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fees charged on fenced public parking:</h3>
                    <ul className="content-list">
                        <li>a vehicle used for public transport not more than 18 seats and small cars used as taxis: FRW 500 per day;</li>
                        <li>a vehicle of 19 to 30 seats used for public transport: FRW 1,000 per day;</li>
                        <li>a vehicle of 31 to 50 seats used for public transport: fee ranges from FRW 1,500 to FRW 3,000 per day;</li>
                        <li>a vehicle of more than 50 seats used for public transport: fee ranges from FRW 3,500 to FRW 10,000 per day;</li>
                        <li>a vehicle not used for public transport which enters in a public parking is subject to FRW 200 every time it enters a public parking.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fees levied on boat public parking:</h3>
                    <ul className="content-list">
                        <li>Motor boat with loading capacity of equal to or less than five tons:
                            <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                                <li>FRW 150 per day;</li>
                                <li>FRW 4,000 per month;</li>
                            </ul>
                        </li>
                        <li>Motor boat with loading capacity exceeding five tons:
                            <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                                <li>FRW 200 per day;</li>
                                <li>FRW 5,000 per month;</li>
                            </ul>
                        </li>
                        <li>a small boat without engine:
                            <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                                <li>FRW 100 per day;</li>
                                <li>FRW 3,000 per month.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Livestock trade Fee:</h3>
                    <ul className="content-list">
                        <li>a cow: FRW 3,000;</li>
                        <li>a goat: FRW 500;</li>
                        <li>a pig: FRW 700;</li>
                        <li>a sheep: FRW 500.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fee for use of slaughterhouse organised by a decentralised entity:</h3>
                    <ul className="content-list">
                        <li>a cow: FRW 2,000;</li>
                        <li>a goat: FRW 500;</li>
                        <li>a pig: FRW 1,000;</li>
                        <li>a sheep: FRW 500.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Civil marriage on a day different from the day fixed by the Council of a decentralised entity:</h3>
                    <ul className="content-list">
                        <li>FRW 50,000</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Building permit, renewal of the building permit or for authorisation to change reasons based on the request for the building permit:</h3>
                    <ul className="content-list">
                        <li>FRW 20,000 for the floor area not exceeding 100 sqm;</li>
                        <li>FRW 100,000 for the floor area ranging from above 100 sqm to 200 sqm;</li>
                        <li>FRW 150,000 for the floor area ranging from above 200 sqm to 500 sqm;</li>
                        <li>FRW 200,000 for the floor area of more than 500 sqm.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Records, certificates and services</h3>
                    <ul className="content-list">
                        <li>a civil status record: FRW 1,500;</li>
                        <li>an extract of a civil status record: FRW 1,000;</li>
                        <li>an identity card: FRW 500;</li>
                        <li>a certificate for the loss of an identity card: FRW 3,000;</li>
                        <li>a birth certificate: FRW 500;</li>
                        <li>a marriage certificate: FRW 500;</li>
                        <li>a celibacy certificate: FRW 500;</li>
                        <li>a divorce certificate: FRW 500;</li>
                        <li>public auction conducted by a non-professional bailiff on immovable property: FRW 5,000.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Documents notarized by a public notary</h3>
                    <ul className="content-list">
                        <li>certification of document authenticity: FRW 1,500;</li>
                        <li>certification of the conformity of a copy to the original: FRW 1,500;</li>
                        <li>authentication of signatures: FRW 1,200;</li>
                        <li>certification of by-laws: FRW 500 for each page;</li>
                        <li>certification of any contract is FRW 500 for each page;</li>
                        <li>issuance of other notarial deeds provided for by law: FRW 500 for each page.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Non-electronic advertising billboards are fixed as follows:</h3>
                    <ul className="content-list">
                        <li>In the City of Kigali: FRW 20,000 per sqm per year;</li>
                        <li>In satellite or secondary cities: FRW 15,000 per sqm per year;</li>
                        <li>Elsewhere in the country: 10,000 FRW per sqm per year</li>
                    </ul>
                    <p className="content-paragraph">
                        Electronic advertising billboard: FRW 100,000 per year, regardless of its size and its location. This fee can be valued and paid quarterly at the request of the advertiser.
                    </p>
                    <p className="content-paragraph">
                        Other advertising billboards with non-permanent messages require authorization from the competent authority and are subject to a fee of 5,000 FRW per day.
                    </p>
                    <p className="content-paragraph">
                        If the advertising billboard advertises on both sides, each side is subject to charges.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fee for use of loudspeaker for advertisement</h3>
                    <ul className="content-list">
                        <li>In the City of Kigali: FRW 100,000 per day;</li>
                        <li>In satellite or secondary cities: FRW 50,000 per day;</li>
                        <li>Elsewhere in the country: FRW 10,000 per day.</li>
                        <li>Use of a banner is FRW 7,500 per day.</li>
                    </ul>
                    <p className="content-paragraph">
                        Fee on advertisement means not specified in the Presidential Order is FRW 10,000 per quarter or FRW 1,000 per day.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fees on boat number plate:</h3>
                    <ul className="content-list">
                        <li>A motor boat: FRW 15,000;</li>
                        <li>A non-motorised boat: FRW 5,000.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Fees on communication towers:</h3>
                    <ul className="content-list">
                        <li>FRW 2,000 on every meter of the tower's vertical length per year</li>
                        <li>The height of the building or structure on which the tower is erected is charged FRW 1,000 per meter of the vertical length per year.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Commercial transportation of quarry materials:</h3>
                    <p className="content-paragraph">
                        Per round of the vehicle, on commercial transportation of quarry materials is FRW 1,000 per m3
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Commercial transportation of bricks or tiles:</h3>
                    <ul className="content-list">
                        <li>FRW 1,000 per m3 per round of the vehicle transporting bricks;</li>
                        <li>FRW 500 per m3 per round of the vehicle transporting tiles.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Forest products:</h3>
                    <ul className="content-list">
                        <li>FRW 150 per plank, payable by the producer of planks;</li>
                        <li>FRW 150 per bag of charcoal paid by the charcoal maker;</li>
                        <li>FRW 1,000 per m3 of firewood, payable by the woodcutter;</li>
                        <li>FRW 1,000 per m3 of beams, payable by the woodcutter.</li>
                    </ul>

                    <p className="content-paragraph">
                        The processes for declaring these fees varies, depending upon the type of fee. These different processes for declaring are explained in more detail on page 345.
                    </p>
                    <p className="content-paragraph">
                        Note that vulnerable people may request a waiver from fees by the District Council for all of the following fees.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default FeeLeviedDecentralisedEntities;

