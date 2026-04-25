import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeclaringImportsAndExport = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Imports and Exports</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is the general procedure when declaring imports or exports at Border Posts or at Dry Ports?</h2>
                    <p className="content-paragraph">
                        <strong>Step 1:</strong> Taxpayer prepares all necessary documents and contracts a Clearing Agent.
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 2:</strong> The Clearing Agent prepares and submits an import or export declaration to RRA using the Rwanda electronic Single Window (ReSW).
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 3:</strong> The Clearing Agent receives assessment notices, containing the amounts of customs duties due. The taxpayer pays all customs duties due, either directly or through the Clearing Agent. The assessment notice may contain different 'Doc IDs' for different tax types. If so, these must each be paid separately.
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 4:</strong> The ReSW system allocates the consignment to a certain Customs channel. If verification is required, Customs Officers will request the necessary documents and/or access to the consignment. If there are any problems, further action may be required.
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 5:</strong> After successful verification, the Customs Officer provides the taxpayer with a release order.
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 6:</strong> The taxpayer pays any due warehousing fees, if applicable, to the warehouse owner.
                    </p>
                    <p className="content-paragraph">
                        <strong>Step 7:</strong> The taxpayer receives an exit note and may leave with their consignment.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When consignments are continuing to Dry Ports for declaration, what is the procedure at Border Posts?</h2>
                    <p className="content-paragraph">
                        When declaring at Dry Ports except airports, <Link to="/border-ports-and-dry-ports">(check on Border Ports and Dry Ports)</Link>, there are three steps to be fulfilled at the Border Posts whilst on the way to the Dry Ports. These are:
                    </p>
                    <ul className="content-list">
                        <li>The consignment is sealed to ensure that it is not opened or altered before reaching the Dry Port.</li>
                        <li>The Customs Officer generates a Warehousing Document on the Rwanda electronic Single Window (ReSW) system. This is provided for free.</li>
                        <li>The consignment may continue to the Dry Port and begins declaration as explained <Link to="/declaring-imports-and-export">(check on Declaring Imports and Export)</Link>.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What is the procedure at the ports of Dar es Salaam or Mombasa when importing?</h2>
                    <p className="content-paragraph">
                        There are two options available to taxpayers when importing through the Dar Es Salaam or Mombasa ports.
                    </p>
                    <p className="content-paragraph">
                        Firstly, the full declaration process as explained in this chapter can be carried out at the port, including payment of Customs Duties and all necessary verifications.
                    </p>
                    <p className="content-paragraph">
                        Alternatively, the process for when consignments are continuing to Dry Ports for declaration as explained above can be carried out at the port, including sealing the consignment and generating a Warehousing Document. The document are then checked again at the Border Post on the way to the Dry Port and new seals are added.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringImportsAndExport;

