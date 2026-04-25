import { User } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const MyRRA = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <User size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">MyRRA</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* What is MyRRA Section */}
        <section className="content-section">
          <h2>What is MyRRA?</h2>
          <p className="content-paragraph">
            The MyRRA system is a unified gateway that allows taxpayers to access a range of tax services provided by the Rwanda Revenue Authority. These services were previously accessed through separate systems such as E-Tax, LGT, ESW, and NFR.
          </p>
        </section>

        {/* How to Login Section */}
        <section className="content-section">
          <h2>How to Login into MyRRA?</h2>
          <p className="content-paragraph">
            Visit RRA website and click on highlighted menu as per the following picture:
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/my_rra_01.png" alt="MyRRA Menu on RRA Website">
              <img
                src="/images/my_rra_01.png"
                alt="MyRRA Menu on RRA Website"
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
            Or click on the following link:
          </p>
          <p className="content-paragraph">
            <a href="https://myrra.rra.gov.rw/basic/login/indexLogin" target="_blank" rel="noopener noreferrer" className="content-link">https://myrra.rra.gov.rw/basic/login/indexLogin</a>
          </p>
          <p className="content-paragraph">
            Once clicked, the following access picture will be displayed on the screen:
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/my_rra_02.png" alt="MyRRA Login Screen">
              <img
                src="/images/my_rra_02.png"
                alt="MyRRA Login Screen"
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
            Click on 'Sign Up' to access MyRRA for the first time, or 'Login' if you already have credentials. If you have forgotten your password, the system provides an option to reset it by clicking on 'Forgot your Password'.
          </p>
        </section>

        {/* What can I access Section */}
        <section className="content-section">
          <h2>What can I access through MyRRA?</h2>
          <p className="content-paragraph">
            Through MyRRA, the system displays:
          </p>
          <ul className="content-list">
            <li>Current tax declarations</li>
            <li>Undeclared taxes</li>
            <li>Unpaid taxes</li>
          </ul>
        </section>

        {/* Additional Features Section */}
        <section className="content-section">
          <h2>What else can a Taxpayer access once logged into MyRRA?</h2>
          <p className="content-paragraph">
            MyRRA offers other features as displayed on below picture:
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/my_rra_03.png" alt="MyRRA Features">
              <img
                src="/images/my_rra_03.png"
                alt="MyRRA Features"
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
      </div>
    </div>
  );
};

export default MyRRA;
