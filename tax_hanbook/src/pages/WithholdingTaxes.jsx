import { DollarSign } from 'lucide-react';

const WithholdingTaxes = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <DollarSign size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Withholding Taxes</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Guide to withholding taxes (WHT 15%, WHT 3%, WHT 5%)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page-content">
        <section className="content-section">
          <h2>Withholding Taxes Overview</h2>
          <p>Withholding taxes are deducted at source and paid on behalf of taxpayers.</p>
        </section>
      </div>
    </div>
  );
};

export default WithholdingTaxes;
