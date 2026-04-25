import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const MotorVehicle = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Car size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Motor Vehicle</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* When Transfer is Required Section */}
        <section className="content-section">
          <h2>When must motor vehicles be transferred?</h2>
          <p className="content-paragraph">
            Transfer of motor vehicles is required when the ownership of the vehicle changes.
          </p>
        </section>

        {/* Transfer Cost Section */}
        <section className="content-section">
          <h2>What is the cost of motor vehicle transfer?</h2>
          <p className="content-paragraph">
            The Transfer Fee is FRW 30,000 for motorcycles and FRW 60,000 for all other motor vehicles.
          </p>
          <p className="content-paragraph">
            For transfer of motor vehicles with number plates that begin 'IT', 'CD' or 'UN' to new owners who do not have that status, <Link to="/importing-moto-vehicle" className="content-link">(check on Importing Motor Vehicles)</Link> for details on the customs duties that must also be paid.
          </p>
        </section>

        {/* Required Documents Section */}
        <section className="content-section">
          <h2>What documents are required for motor vehicle transfer?</h2>
          <p className="content-paragraph">
            The documents required for motor vehicle transfer are:
          </p>
          <ul className="content-list">
            <li>Notarised Sale Contract (containing the date, location, value and the names, phone numbers, NID, identification of motor vehicles and signatures of both the buyer and seller). If done outside the country, Embassy and MINAFET may approval it.</li>
            <li>Registration Transfer Fee payment receipt (FRW 30,000-FRW 60,000)</li>
            <li>Latest Yellow Card and plate number for the motor vehicle</li>
            <li>The buyer's TIN, <Link to="/registration-guide" className="content-link">(check on Registration Guide)</Link> for details</li>
            <li>Historical insurance information (only required if vehicle will be used as a business such as a taxi).</li>
            <li>No tax arrears of the vehicle</li>
          </ul>
        </section>

        {/* Transfer Process Section */}
        <section className="content-section">
          <h2>What is the motor vehicle transfer process?</h2>
          <p className="content-paragraph">
            Step 1: The motor vehicle seller logs in into E-Tax, goes to 'Motor Vehicle' then clicks on 'Ownership Transfer'. The system displays the following screen:
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/motor_vehical_01.png" alt="Motor Vehicle Ownership Transfer Screen">
              <img
                src="/images/motor_vehical_01.png"
                alt="Motor Vehicle Ownership Transfer Screen"
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
            If the seller is transferring the owned motor vehicle to a new owner; the seller uses the first option 'Transfer from Myself to Another Person'. If a new owner wants to acquire the motor vehicle for the following specific reasons:
          </p>
          <ul className="content-list">
            <li>Auction;</li>
            <li>Succession;</li>
            <li>Court order</li>
          </ul>
          <p className="content-paragraph">
            The applicant uses 'Transfer to Myself' option.
          </p>
          <p className="content-paragraph">
            Step 2: The taxpayer pays the Transfer Fee.
          </p>
          <p className="content-paragraph">
            Step 3: If the buyer of the motor vehicle does not have a unique Taxpayer Identification Number (TIN), they must provide RRA staff with a valid NID or Passport. The TIN and certificate are provided free.
          </p>
          <p className="content-paragraph">
            Step 4: The buyer must provide RRA staff with all the required documents.
          </p>
          <p className="content-paragraph">
            Step 5: If all required documents are valid, RRA staff will provide the buyer of the motor vehicle with the updated Yellow Card containing the buyer's details after receiving the old yellow card and plate number.
          </p>
          <p className="content-paragraph">
            Step 6: The process is finished and the buyer is now the legal owner of the motor vehicle.
          </p>
        </section>

        {/* Online Services Section */}
        <section className="content-section">
          <h2>What services related to moto vehicle can a taxpayer access online?</h2>
          <p className="content-paragraph">
            To access online Moto vehicle services, log into E-Tax, click on Motor vehicle menu, choose any of the following services as displayed by the system:
          </p>
          <ul className="content-list">
            <li>Moto vehicle (MV) Declaration,</li>
            <li>Moto vehicle (MV) Acknowledgment Receipt,</li>
            <li>New Inactivity Request,</li>
            <li>Duplicate Request,</li>
            <li>View Duplicate requests,</li>
            <li>Owner Ship Transfer,</li>
            <li>View Owner Ship Transfer Requests,</li>
            <li>Ownership Certificate Request,</li>
            <li>View Ownership Certificate Requests</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MotorVehicle;
