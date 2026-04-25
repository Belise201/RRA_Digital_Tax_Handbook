import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DeclaringMotorVehicleIncomeTax = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Motor Vehicle Income Tax using M-Declaration</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Taxpayers who receive income from motor vehicle transportation of passengers or goods are able to declare this separately for each motor vehicle. This can be done on a mobile phone using M-Declaration or E-Tax.
                    </p>
                    <p className="content-paragraph">
                        The process for declaring Motor Vehicle Income Tax using M-Declaration is described below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>M-Declaration of Motor Vehicle Income Tax</h2>
                    <p className="content-paragraph">
                        The M-Declaration system for declaring Motor Vehicle Income Tax is accessed by dialling *800#. The M-Declaration has a series of screens, with number options, that are navigated by entering and sending the relevant number.
                    </p>
                    <p className="content-paragraph">
                        The first screen requests to select a language, either English or Kinyarwanda. After selecting a language, the next screen requests to select which M-Declaration service, to declare Motor Vehicle Income Tax, select '1. Motor Cycles/Vehicles'.
                    </p>
                    <p className="content-paragraph">
                        The taxpayer must then select:
                    </p>
                    <ul className="content-list">
                        <li>The unique Taxpayer Identification Number (TIN).</li>
                        <li>The number plate of the motor vehicle.</li>
                        <li>Whether they are a new taxpayer, meaning if this is their first Income Tax declaration of any kind.</li>
                        <li>The tax year and quarter for the period which is being declared.
                            <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                                <li>For example, for annual declarations that are due by 31st March 2017 are for the tax year of '2016' and quarter '4'.</li>
                                <li>For example, for IQP declarations that are due by 30th June 2017 are for the tax year of '2017' and quarter '1'.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        Based on the type of motor vehicle registered to the number plate, the system then selects the Income Tax to be paid, and generates the RRA Reference Number required for paying taxes. For more details on paying taxes, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DeclaringMotorVehicleIncomeTax;

