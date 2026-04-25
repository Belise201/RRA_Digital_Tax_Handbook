import { Smartphone, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const MDeclarationMotorVehicle = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Car size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Motor Vehicle Income Tax using M‑Declaration</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">Declare per vehicle via *800#</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Overview</h2>
                    <p>
                        Taxpayers who receive income from motor vehicle transportation of passengers or goods are able to declare this separately for each motor vehicle. This can be done on a mobile phone using M‑Declaration or E‑Tax.
                    </p>
                    <p>The process for declaring Motor Vehicle Income Tax using M‑Declaration is described below.</p>
                </section>

                <section className="content-section">
                    <h2>M‑Declaration of Motor Vehicle Income Tax</h2>
                    <p>
                        Access by dialling <strong>*800#</strong>. The system presents screens with number options; navigate by entering and sending the relevant number.
                    </p>
                    <p>
                        First select language (English or Kinyarwanda). Then select the service. To declare Motor Vehicle Income Tax, choose ‘1. Motor Cycles/Vehicles’.
                    </p>
                    <p>The taxpayer must then select/enter:</p>
                    <ul>
                        <li>The unique Taxpayer Identification Number (TIN).</li>
                        <li>The number plate of the motor vehicle.</li>
                        <li>Whether they are a new taxpayer (first ever Income Tax declaration).</li>
                        <li>The tax year and quarter for the period being declared.</li>
                    </ul>
                    <div className="example-card">
                        <h3>Examples</h3>
                        <ul>
                            <li>Annual declarations due by 31st March 2017 → year ‘2016’, quarter ‘4’.</li>
                            <li>IQP declarations due by 30th June 2017 → year ‘2017’, quarter ‘1’.</li>
                        </ul>
                    </div>
                    <p>
                        Based on the type of motor vehicle registered to the number plate, the system selects the Income Tax to be paid and generates the RRA Reference Number required for payment. For paying taxes, <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MDeclarationMotorVehicle;

