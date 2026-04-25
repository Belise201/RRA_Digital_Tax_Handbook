import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const BorderPortsAndDryPorts = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Border Posts and Dry Ports</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are Border Posts and Dry Ports?</h2>
                    <p className="content-paragraph">
                        Importing and exporting of goods can only be done at authorised customs border posts, customs offices outside Rwanda, virtual offices in partner states and dry ports. Border posts are customs offices at the border with a neighbouring country, whilst dry ports are inland customs offices. There are RRA customs offices outside Rwanda at Dar Es Salaam, Eldoret and Mombasa.
                    </p>
                    <p className="content-paragraph">
                        The list of currently operating customs border posts and dry ports is displayed in this chapter. However, Customs Administration is receptive to taxpayers' behaviour, and may open or close border posts depending upon demand and the frequency of trade. Taxpayers may contact customs to request to import or export through other potential border posts.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Border Posts</h2>
                    <p className="content-paragraph">
                        Rwanda borders Uganda to the North, Tanzania to the East, Burundi to the South and the Democratic Republic of Congo (DRC) to the West. The border posts for each of the neighbouring countries are:
                    </p>
                    <ul className="content-list">
                        <li><strong>Uganda</strong> - Buziba, Rwempasha, Buhita, Gatuna, Kagitumba, Cyanika</li>
                        <li><strong>Tanzania</strong> - Rusumo</li>
                        <li><strong>Burundi</strong> - Akanyaru-Haut, Akanyaru-Bas, Rutete, Ruhwa</li>
                        <li><strong>DRC</strong> - Gisenyi Corniche, Gisenyi Poids-Lourds, Kabuhanga, Bugarama, Rusizi 1, Rusizi 2 / Mururu</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Customs office outside Rwanda</h2>
                    <p className="content-paragraph">
                        Goods that are imported from overseas are declared at RRA customs offices at the port of entry of Dar Es Salaam or Mombasa. On entry to Rwanda, checks will be undertaken to ensure the goods are the same as those declared at the port.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Dry Ports</h2>
                    <p className="content-paragraph">
                        Not all imports and exports are processed at Border Posts, some consignments are declared and processed at dry ports. This is typically because of the nature of the products, the value or the entry. There are three main types of inland border post:
                    </p>
                    <ul className="content-list">
                        <li><strong>Dry ports capable of handling high-value consignments, with associated licensed warehouses</strong> - Dubai Port World (DPW) - Masaka, Magerwa - Gikondo, Bolloré (former SDV) - Free Zone, Rubavu Inland Office, Mutara</li>
                        <li><strong>Airports</strong> - Kigali Airport and Rusizi Airport</li>
                        <li><strong>Oil Depots</strong> - Such as Gatsata, Kabuye, Rusororo and Jabana Oil Depots</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>When are imports declared at Dry Ports?</h2>
                    <p className="content-paragraph">
                        There are three situations when imports must be declared at inland border posts.
                    </p>
                    <p className="content-paragraph">
                        Firstly, dry ports must be used when importing at a border goods above a certain value. The import value threshold varies depending upon the capacity of the border post, see the list of border posts in this chapter.
                    </p>
                    <p className="content-paragraph">
                        The main dry port for this use is Dubai Port World in Kigali - Masaka. However, Rubavu Inland Office and Mutara are also used for this purpose for imports into Gisenyi and Rusizi border posts respectively.
                    </p>
                    <p className="content-paragraph">
                        Dry ports must also be used for processing and declaring imports when goods are imported by airplane to an airport. The goods must be declared at the airport they land at. The process is the same as at Border Posts.
                    </p>
                    <p className="content-paragraph">
                        Finally, imported fuel and petroleum products must be processed and declared at oil depot dry ports. The importer can choose whichever oil depot to use.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When are Dry Ports used for exports?</h2>
                    <p className="content-paragraph">
                        There is no threshold of value for declaring exports at a border. The taxpayer may choose whether to declare at a Border Post or a Dry Port.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are One Stop Border Posts (OSBPs)?</h2>
                    <p className="content-paragraph">
                        One Stop Border Posts (OSBPs) are border posts where RRA Customs Officials work in the same building as the neighbouring country Customs Officials. This allows the export procedures of the neighbouring country, and the import procedures of RRA (or vice versa) to be conducted in one place at one time, reducing the time taken when importing or exporting goods.
                    </p>
                    <p className="content-paragraph">
                        Note that there are three types or models of OSBPs:
                    </p>
                    <ul className="content-list">
                        <li><strong>Juxtaposed model:</strong> State A and state B share facilities in the country of entry. For example, Rusumo;</li>
                        <li><strong>Straddled model:</strong> Where a single facility is built across a border line for the two adjoining states. For example, Nemba;</li>
                        <li><strong>Wholly located model (single country):</strong> Single shared border facility is constructed in one of the countries to house officers from both countries to carry out border controls. For example, Ruhwa OSBP.</li>
                    </ul>
                    <p className="content-paragraph">
                        For the Juxtaposed model, the Clearing Agent only needs to visit the border post in the country they are importing into, as displayed in the example below of Rusumo OSBP.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/border_ports_01.png" alt="Rusumo OSBP" />
                    </div>
                </section>

                <section className="content-section">
                    <h2>List of Border Posts and Dry Ports</h2>
                    <p className="content-paragraph">
                        The list of currently operational customs Border Posts and Dry Ports is displayed below, including details of the border country, opening hours, manager contact details, import declaration value threshold (FRW) and notes such as if the Border Post is a One Stop Border Post (OSBP).
                    </p>
                    <p className="content-paragraph">
                        The import value threshold (FRW) refers to the value of imports that can be processed directly at that border post. It is important to note that higher value consignments are still able to pass through this border post, but must be declared and processed at a Dry Port, <Link to="/border-ports-and-dry-ports">(check on Border Ports and Dry Ports)</Link> for more details.
                    </p>
                    <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left', whiteSpace: 'nowrap' }}>Code</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Name of Border Post or Dry Port</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Border Country</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Opening Hours</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Contact Number</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Import Value Threshold (FRW)</th>
                                    <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11AH</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Akanyaru-Haut</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Burundi</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5739</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>500,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP in process</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11BZ</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Buziba</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Uganda</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5763</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>500,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11GA</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Gatuna</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Uganda</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>24 hours</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5731</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>2,500,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11GI/ HQ01</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Magerwa - Gikondo</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 24:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5712 077818 5713</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11GT</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Gatsata Oil Depots</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>08:00 - 24:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5668</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11KA</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Kagitumba</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Uganda</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>24 hours</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5732</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>3,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11KB</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Kabuye Oil Depots</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>24 hours<br />Weekend: 08:00 – 17:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5599</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11RS</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rusororo Oil Depots</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 24:00<br />Weekend: 08:00 – 17:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5912</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11RE</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rutete (Nemba)</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Burundi</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>04:00 - 22:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5578</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>2,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11RU</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rusumo</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Tanzania</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>24 hours</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5735</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>2,500,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11DPW</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>DPW - Masaka</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>7:00 – 12:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0788198500</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11SDV</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Bollore Logistics RW (SDV)</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>7:00 – 24:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>252575584</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>12KP</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Kigali Poste</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 19:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5547</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>21KA</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Kigali Airport (Freight)</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 24:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5717</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>22AE</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Kigali – Aérogare (Passengers)</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>24 hours</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5724</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>31CY</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Cyanika</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Uganda</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 19:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5737</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>3,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP in process</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>31GC</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Gisenyi Corniche</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>DRC</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5738</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>32PL</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Gisenyi Poids-Lourds</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>DRC</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5667</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>32RB</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rubavu Inland Office</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5738</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41BU</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Bugarama</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>DRC</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5746</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41MT</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Mutara</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 17:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5729</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41CY</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rusizi 1</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>DRC</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 22:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5744</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41MU</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rusizi 2 / Mururu</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>DRC</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5745</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41KA</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rusizi Airport</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 16:30</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5829</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41RZ</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Raha Warehouse</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 17:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5829</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>41RU</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Ruhwa</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Burundi</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 - 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5728</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>1,000,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>OSBP</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11JB</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Jabana Oil Depots</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>07:00 - 24:00<br />Weekend: 08:00 – 17:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>078818 5768</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>11RWA</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rwabuye</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>08:00 – 17:00<br />Weekend: 08:00 – 17:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>12RW</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Rwempasha</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Uganda</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>06:00 – 18:00</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>500,000</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Heart of Africa</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Uzima Safi</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Dry Port</td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                    <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BorderPortsAndDryPorts;

