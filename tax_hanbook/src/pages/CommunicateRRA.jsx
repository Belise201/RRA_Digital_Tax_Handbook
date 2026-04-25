import { MessageSquare } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const CommunicateRRA = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <MessageSquare size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Communicate to RRA in Writing</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* How to Send Letter Section */}
        <section className="content-section">
          <h2>How to send a letter to RRA?</h2>
          <p className="content-paragraph">
            To send a letter to RRA whether you have a TIN or not, visit RRA website then click on "CLICK HERE TO SEND YOUR LETTER TO RRA" as per below screenshot:
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/e_Correspondace_01.png" alt="RRA Letter Submission Screenshot">
              <img
                src="/images/e_Correspondace_01.png"
                alt="RRA Letter Submission Screenshot"
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
            Then follow all steps by filling all requested information. The letter to be sent should be signed, stamped, and saved as PDF.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CommunicateRRA;
