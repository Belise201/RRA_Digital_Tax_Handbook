import React from 'react';
import { FileText } from 'lucide-react';

const RoadMaintenanceDeclaration = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Road Maintenance Levy</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Road Maintenance Levy can be declared using one of the following means of declaration:
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Through E-tax:</h3>
                    <ul className="content-list">
                        <li>Login in to your E-Tax account</li>
                        <li>Navigate to Motor Vehicle</li>
                        <li>MVDeclaration</li>
                        <li>Click MV- Road levy Declaration</li>
                        <li>Select the year</li>
                        <li>Choose Undeclared vehicles for declaration (Declared vehicles is for review of declared MV)</li>
                        <li>Select ALL or one by one or a batch of MV that share the payment (One single RRA ref Number shall be produced for selected MV)</li>
                        <li>Click the "declare selected vehicles" button</li>
                        <li>Click on "Acknowledgment receipt"</li>
                        <li>Use doc ID on the acknowledgment receipt to pay the tax due</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Through M-declaration:</h3>
                    <ul className="content-list">
                        <li>Dial *800#</li>
                        <li>Choose 1 for English or Choose 2 for Kinyarwanda</li>
                        <li>Choose 1 for Motor cycles/vehicles</li>
                        <li>Chose 1 for Declaration</li>
                        <li>Choose 2 for Road Levy</li>
                        <li>Chose 1 for Declaration</li>
                        <li>Enter TIN as per MV registration card</li>
                        <li>Select year</li>
                        <li>Enter Motor Plate Number as per MV registration card</li>
                        <li>Enter 2 and Submit</li>
                        <li>Enter 1 to confirm your details</li>
                        <li>View and use the doc ID to pay the tax due</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Through RRA Website</h3>
                    <ul className="content-list">
                        <li>Visit www.rra.gov.rw</li>
                        <li>Click on declare Motor Vehicle levy for road maintenance</li>
                        <li>Fill NID and Phone number for nationals or Passport and email for foreigners</li>
                        <li>Enter received OTP (via SMS/Email)</li>
                        <li>Enter TIN</li>
                        <li>Enter Plate number</li>
                        <li>Verify Information</li>
                        <li>Select year</li>
                        <li>Click the "submit declaration" button</li>
                        <li>Click on "Acknowledgment receipt"</li>
                        <li>Use doc ID on the acknowledgment receipt to pay the tax due.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default RoadMaintenanceDeclaration;
