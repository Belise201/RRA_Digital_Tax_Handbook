import React from 'react';
import { FileText } from 'lucide-react';

const RoadMaintenanceExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Road Maintenance Levy</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is Road Maintenance Levy Tax?</h2>
                    <p className="content-paragraph">
                        Road Maintenance Levy is a tax imposed on petrol, gas oil, and motor vehicles to fund road maintenance.
                    </p>
                    <p className="content-paragraph">
                        The levy on petrol and gas oil is collected at the customs point.
                    </p>
                    <p className="content-paragraph">
                        The levy on new or already registered motor vehicles is declared and paid annually to the Domestic Taxes Department, no later than 31st December of each year.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Road Maintenance Levy?</h2>
                    <p className="content-paragraph">
                        There is no registration process for the Road Maintenance Levy. Simply possessing a taxable vehicle automatically makes it subject to this tax.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the tax rate for the Road Maintenance Levy?</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f8f9fa' }}>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Category</th>
                                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Levy Amount (FRW)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Car</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>50,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Jeep</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>50,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Pick-up</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>100,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Microbus</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>100,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Minibus</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>100,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Bus</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>100,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Truck</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>120,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Half-trailer</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>120,000</td>
                            </tr>
                            <tr>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Trailer</td>
                                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>150,000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="content-section">
                    <h2>What are the exemptions for the Road Maintenance Levy?</h2>
                    <ul className="content-list">
                        <li>Motor vehicles of the Government of Rwanda;</li>
                        <li>Motor vehicles of high commissions, embassies and diplomats accredited to Rwanda;</li>
                        <li>Motor vehicles of international organizations having signed an agreement with the Republic of Rwanda.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>How can one apply for an exemption from the Road Maintenance Levy?</h2>
                    <ul className="content-list">
                        <li>Login in to your E-Tax account</li>
                        <li>Navigate to Online requests</li>
                        <li>Online requests</li>
                        <li>Under request type select Exemption for moto vehicle road levy</li>
                        <li>Click view.</li>
                        <li>Select category of exemption:
                            <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                                <li>Government,</li>
                                <li>High Commissions,</li>
                                <li>Embassies and diplomats accredited to Rwanda,</li>
                                <li>International organizations</li>
                            </ul>
                        </li>
                        <li>Submit exemption and wait for approval notification</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default RoadMaintenanceExplanation;
