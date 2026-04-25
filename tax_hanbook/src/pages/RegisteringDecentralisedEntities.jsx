import React from 'react';
import { FileText } from 'lucide-react';

const RegisteringDecentralisedEntities = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Registering for Decentralised Entities Taxes and Fees</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Taxpayers must register for Decentralised Entities Taxes and fees with the help of staff at tax centres, listed on page 340 except for Trading License Tax for which registration is done upon registering a business in RDB system.
                    </p>
                    <p className="content-paragraph">
                        In order to register on the LGT system, the taxpayer must provide identification: either a Rwandan ID or Passport. The taxpayer must also provide their address and a mobile phone number. The taxpayer will be registered on the LGT system, and tax accounts will be set up for the relevant Decentralised Entities Taxes and fees by RRA staff.
                    </p>
                    <p className="content-paragraph">
                        In addition, when registering for Rental Income Tax, Immovable Property Tax, or Tax on Sale of Immovable Property, taxpayers must provide the Unique Plot Identifier (UPI) for each of their properties.
                    </p>
                    <p className="content-paragraph">
                        Once registered, the taxpayer will be provided with a username, TIN and a password for the LGT system. The taxpayer will also receive an SMS and/or email confirming the registration.
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer later is required to pay any additional Decentralised Entities Taxes and fees for which they are not yet registered for, the taxpayer must return to any tax centre or RRA offices to set up the accounts for each of those Decentralised Entities Taxes and fees.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RegisteringDecentralisedEntities;

