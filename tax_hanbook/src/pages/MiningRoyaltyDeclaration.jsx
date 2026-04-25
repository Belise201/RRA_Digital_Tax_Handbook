import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const MiningRoyaltyDeclaration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Declaring Mining Royalty Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph">
            The declaration process for Mining Royalty Tax is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Annexures</h2>
          <p className="content-paragraph">
            The next step requires the taxpayer to download WOP Mining Royalty Annexure from Withholding menu in E-Tax, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on downloading annexures.
          </p>
          <p className="content-paragraph">
            The WOP Mining Royalty Annexure file has one tab that must be completed, validated and saved. <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> if the taxpayer has any problems when validating annexures.
          </p>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>WOP Mining Royalty Annexure Tab</h3>
          <p className="content-paragraph">
            The 'WOP Mining Royalty Annexure' tab has 6 columns. Each row is for a separate type of mineral, and should contain all the aggregated data for that type of mineral during the tax period. For each type of mineral, enter details on:
          </p>
          <ul className="content-list">
            <li>Product of MINERALS – Select mineral category.</li>
            <li>Quantity Purchased (in kg) – Enter the total mass of that type of mineral being purchased, in kilograms.</li>
            <li>Gross Value – Enter the total gross value of the mineral being purchased. This column is only required for gemstones category.</li>
            <li>Norm Value – Enter the total norm value of the mineral being purchased. This column is only required for other categories excluding gemstones.</li>
            <li>Tax rate – Enter the tax rate corresponding to the specified mineral category.</li>
            <li>Tax Due – Enter the amount of Mining Royalty Tax to be paid. This should equal 'Gross Value' or 'Norm Value' multiplied by completed 'Tax Rate' column, depending upon the type of mineral being purchased.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Mining Royalty Tax Declaration</h2>
          <p className="content-paragraph">
            After the applicable WOP Mining Royalty Annexure has been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the Mining Royalty Tax declaration, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declaration.
          </p>
          <p className="content-paragraph">
            The declaration form requires similar data to the WOP Mining Royalty Tax annexure that has previously been completed. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 52</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              An example of Mining Royalty Tax declaration form is entered below. The tax due for this taxpayer in this tax period is FRW 135,000.
            </p>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/mining_tax_01.png" alt="Mining Royalty Tax Declaration Form">
              <img
                src="/images/mining_tax_01.png"
                alt="Mining Royalty Tax Declaration Form"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            After saving the declaration form, upload the WOP Mining Royalty Tax annexure and then compare with the declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declaration forms.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 53</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Continuing the example of the Mining Royalty Tax declaration form above, the comparison between this declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted.
            </p>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/mining_tax_02.png" alt="Mining Royalty Tax Declaration Comparison">
              <img
                src="/images/mining_tax_02.png"
                alt="Mining Royalty Tax Declaration Comparison"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/lump_sum_03.png" alt="Mining Royalty Tax Declaration Submitted">
              <img
                src="/images/lump_sum_03.png"
                alt="Mining Royalty Tax Declaration Submitted"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Click 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link> for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MiningRoyaltyDeclaration;
