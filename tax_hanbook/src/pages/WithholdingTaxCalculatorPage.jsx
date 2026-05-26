import { useState } from 'react';
import { FileText, CheckCircle, Info, RotateCcw } from 'lucide-react';
import './CalculatorPages.css';

const WithholdingTaxCalculator = () => {
  const [whtAmount, setWhtAmount] = useState('');
  const [whtRate, setWhtRate] = useState('15');
  const [results, setResults] = useState(null);

  const calculateWHT = () => {
    const amount = parseFloat(whtAmount);
    const rate = parseFloat(whtRate) / 100;

    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid payment amount');
      return;
    }

    const whtValue = amount * rate;
    const netAmount = amount - whtValue;

    setResults({
      grossAmount: amount.toFixed(2),
      whtAmount: whtValue.toFixed(2),
      netAmount: netAmount.toFixed(2),
      rate: whtRate,
    });
  };

  const resetCalculator = () => {
    setWhtAmount('');
    setResults(null);
  };

  return (
    <div className="calc-page-container">
      <div className="calc-page-header">
        <div className="calc-page-header-content">
          <h1 className="calc-page-title">
            <FileText size={22} />
            Withholding Tax Calculator
          </h1>
          <p className="calc-page-subtitle">
            Calculate withholding tax (WHT) on payments for services and goods
          </p>
        </div>
      </div>

      <div className="calc-page-content">
        <div className="calc-page-main">
          <div className="calc-card">
            <div className="calc-card-header">
              <h2>Calculate Withholding Tax</h2>
              <p>Enter the payment amount and select the applicable WHT rate</p>
            </div>

            <div className="calc-form">
              <div className="calc-field">
                <label className="calc-label">Payment Amount (RWF)</label>
                <input
                  type="number"
                  className="calc-input"
                  placeholder="Enter payment amount"
                  value={whtAmount}
                  onChange={(e) => setWhtAmount(e.target.value)}
                />
              </div>

              <div className="calc-field">
                <label className="calc-label">WHT Rate (%)</label>
                <select
                  className="calc-input"
                  value={whtRate}
                  onChange={(e) => setWhtRate(e.target.value)}
                >
                  <option value="15">15% (Standard WHT on Services)</option>
                  <option value="3">3% (WHT on Goods)</option>
                  <option value="5">5% (WHT on Rent)</option>
                  <option value="20">20% (WHT on Royalties)</option>
                </select>
              </div>

              <div className="calc-actions">
                <button className="calc-btn calc-btn--primary" onClick={calculateWHT}>
                  <FileText size={14} />
                  Calculate WHT
                </button>
                <button className="calc-btn calc-btn--secondary" onClick={resetCalculator}>
                  <RotateCcw size={14} />
                  Reset
                </button>
              </div>
            </div>

            {results && (
              <div className="calc-results">
                <div className="calc-results-header">
                  <CheckCircle size={16} />
                  <h3>Calculation Results</h3>
                </div>
                <div className="calc-results-grid">
                  <div className="calc-result-item">
                    <span className="calc-result-label">Gross Payment Amount</span>
                    <span className="calc-result-value">RWF {results.grossAmount}</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Withholding Tax ({results.rate}%)</span>
                    <span className="calc-result-value calc-result-value--highlight">
                      RWF {results.whtAmount}
                    </span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Net Payment to Supplier</span>
                    <span className="calc-result-value calc-result-value--total">
                      RWF {results.netAmount}
                    </span>
                  </div>
                </div>
                <div className="calc-results-note">
                  <Info size={14} />
                  <p>The withholding tax amount (RWF {results.whtAmount}) must be remitted to RRA within 15 days of the month following payment.</p>
                </div>
              </div>
            )}
          </div>

          <div className="calc-info-section">
            <h3>Withholding Tax Rates in Rwanda</h3>
            <div className="calc-info-card">
              <h4>15% - Services</h4>
              <p>Standard rate for payments to local suppliers for services (consultancy, professional services, etc.)</p>
            </div>
            <div className="calc-info-card">
              <h4>3% - Goods</h4>
              <p>Applied on payments to local suppliers for goods purchased.</p>
            </div>
            <div className="calc-info-card">
              <h4>5% - Rent</h4>
              <p>Applied on rental payments for property.</p>
            </div>
            <div className="calc-info-card">
              <h4>20% - Royalties</h4>
              <p>Applied on royalty payments for intellectual property.</p>
            </div>
          </div>
        </div>

        <aside className="calc-page-sidebar">
          <div className="calc-sidebar-panel">
            <section
              className="calc-sidebar-panel__section calc-sidebar-panel__section--note"
              aria-labelledby="wht-calc-sidebar-important"
            >
              <div className="calc-sidebar-panel__note-head">
                <Info size={14} className="calc-sidebar-panel__note-icon" aria-hidden />
                <h3 id="wht-calc-sidebar-important" className="calc-sidebar-panel__note-title">
                  Important
                </h3>
              </div>
              <p className="calc-sidebar-panel__note-body">
                Withholding tax is deducted by the payer and remitted to RRA. The supplier can claim this as a credit
                against their tax liability.
              </p>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="wht-calc-sidebar-guide">
              <div className="calc-help-box">
                <h4 id="wht-calc-sidebar-guide">Who withholds tax?</h4>
                <p>Businesses and organizations making payments to suppliers must withhold tax and remit it to RRA.</p>
                <h4>When to withhold</h4>
                <ul>
                  <li>Payments for services rendered</li>
                  <li>Purchase of goods from suppliers</li>
                  <li>Rental payments</li>
                  <li>Royalty payments</li>
                  <li>Interest payments</li>
                </ul>
              </div>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="wht-calc-sidebar-links">
              <div className="calc-related-links">
                <h4 id="wht-calc-sidebar-links">Related resources</h4>
                <a href="/withholding-taxes-explanation" className="calc-link">WHT Explanation</a>
                <a href="/withholding-taxes-declaration" className="calc-link">How to Declare WHT</a>
                <a href="/wht-sum" className="calc-link">WHT FAQs</a>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WithholdingTaxCalculator;
