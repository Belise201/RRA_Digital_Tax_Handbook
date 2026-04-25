import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const TourismTaxDeclaration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Declaring Tourism Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph">
            The declaration process for Tourism Tax is the same as for other Taxes, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details. The 'Tourism' tab must be completed, validated and saved as normal.
          </p>
          <p className="content-paragraph">
            The Tourism Tax declaration form is selected by choosing 'Tourism Tax'. Complete the declaration form, upload the annexure and submit the declaration as normal.
          </p>
          <p className="content-paragraph">
            In the declaration forms, the total combined values for all transactions for the Tourism Tax type during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
          </p>
          <p className="content-paragraph">
            However, in contrary to other domestic taxes, the taxpayer offering accommodation services has to register the property type. This is done using the following steps:
          </p>
          <ul className="content-list">
            <li>Go to E-Tax portal and login</li>
            <li>Go to Update details</li>
            <li>Click on Tourism property</li>
            <li>Select Tourism Property from the list of value</li>
            <li>Select Property Type</li>
            <li>Select Room type</li>
            <li>Fill Number of rooms</li>
            <li>Tick Ownership</li>
            <li>Click the "Add Property" button to submit the updated tourism property details</li>
          </ul>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 55</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              An example of Tourism Tax computation: A client paid FRW 50,000 VAT inclusive for accommodation service. What is the Tourism Tax to be remitted to the Tax Administration?
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '0.5rem 0' }}>Amount paid by the client:</td>
                  <td style={{ padding: '0.5rem 0', textAlign: 'right', fontWeight: 'bold' }}>50,000</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0' }}>VAT (50,000*18/118):</td>
                  <td style={{ padding: '0.5rem 0', textAlign: 'right' }}>(7,127)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0' }}>Selling price (Excluding VAT):</td>
                  <td style={{ padding: '0.5rem 0', textAlign: 'right', fontWeight: 'bold' }}>42,373</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0' }}>Tourism Tax (42,373*3/103):</td>
                  <td style={{ padding: '0.5rem 0', textAlign: 'right' }}>(1,234)</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.5rem 0', fontWeight: 'bold' }}>Net for service provider:</td>
                  <td style={{ padding: '0.5rem 0', textAlign: 'right', fontWeight: 'bold' }}>41,139</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TourismTaxDeclaration;
