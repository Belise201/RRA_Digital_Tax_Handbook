import { useState } from 'react';
import { TrendingUp, CheckCircle, Info, RotateCcw } from 'lucide-react';
import './CalculatorPages.css';

const IncomeTaxCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState('');
  const [results, setResults] = useState(null);

  const calculateIncomeTax = () => {
    const income = parseFloat(annualIncome);

    if (isNaN(income) || income <= 0) {
      alert('Please enter a valid annual income');
      return;
    }

    let tax = 0;
    let bracket = '';
    let effectiveRate = 0;

    // Rwanda Income Tax Brackets
    if (income <= 360000) {
      tax = 0;
      bracket = '0% (Below RWF 360,000)';
      effectiveRate = 0;
    } else if (income <= 1200000) {
      tax = (income - 360000) * 0.20;
      bracket = '20% (RWF 360,001 - 1,200,000)';
      effectiveRate = (tax / income) * 100;
    } else {
      tax = (1200000 - 360000) * 0.20 + (income - 1200000) * 0.30;
      bracket = '30% (Above RWF 1,200,000)';
      effectiveRate = (tax / income) * 100;
    }

    const netIncome = income - tax;

    setResults({
      grossIncome: income.toFixed(2),
      taxAmount: tax.toFixed(2),
      netIncome: netIncome.toFixed(2),
      bracket: bracket,
      effectiveRate: effectiveRate.toFixed(2),
    });
  };

  const resetCalculator = () => {
    setAnnualIncome('');
    setResults(null);
  };

  return (
    <div className="calc-page-container">
      <div className="calc-page-header">
        <div className="calc-page-header-content">
          <h1 className="calc-page-title">
            <TrendingUp size={22} />
            Income Tax Calculator
          </h1>
          <p className="calc-page-subtitle">
            Calculate your annual Personal Income Tax (PIT) or Corporate Income Tax (CIT) liability
          </p>
        </div>
      </div>

      <div className="calc-page-content">
        <div className="calc-page-main">
          <div className="calc-card">
            <div className="calc-card-header">
              <h2>Calculate Income Tax</h2>
              <p>Enter your annual income to calculate your tax liability based on Rwanda tax brackets</p>
            </div>

            <div className="calc-form">
              <div className="calc-field">
                <label className="calc-label">Annual Income (RWF)</label>
                <input
                  type="number"
                  className="calc-input"
                  placeholder="Enter annual income"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(e.target.value)}
                />
              </div>

              <div className="calc-actions">
                <button className="calc-btn calc-btn--primary" onClick={calculateIncomeTax}>
                  <TrendingUp size={14} />
                  Calculate Income Tax
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
                    <span className="calc-result-label">Gross Income</span>
                    <span className="calc-result-value">RWF {results.grossIncome}</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Tax Amount</span>
                    <span className="calc-result-value calc-result-value--highlight">
                      RWF {results.taxAmount}
                    </span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Net Income</span>
                    <span className="calc-result-value calc-result-value--total">
                      RWF {results.netIncome}
                    </span>
                  </div>
                  <div className="calc-result-item calc-result-item--full">
                    <span className="calc-result-label">Tax Bracket</span>
                    <span className="calc-result-value">{results.bracket}</span>
                  </div>
                  <div className="calc-result-item calc-result-item--full">
                    <span className="calc-result-label">Effective Tax Rate</span>
                    <span className="calc-result-value">{results.effectiveRate}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="calc-info-section">
            <h3>Rwanda Income Tax Brackets</h3>
            <div className="calc-info-card">
              <h4>0% - Up to RWF 360,000</h4>
              <p>Annual income below RWF 360,000 is tax-free.</p>
            </div>
            <div className="calc-info-card">
              <h4>20% - RWF 360,001 to 1,200,000</h4>
              <p>Income between RWF 360,001 and RWF 1,200,000 is taxed at 20%.</p>
            </div>
            <div className="calc-info-card">
              <h4>30% - Above RWF 1,200,000</h4>
              <p>Income above RWF 1,200,000 is taxed at 30%.</p>
            </div>
          </div>
        </div>

        <aside className="calc-page-sidebar">
          <div className="calc-sidebar-panel">
            <section
              className="calc-sidebar-panel__section calc-sidebar-panel__section--note"
              aria-labelledby="pit-calc-sidebar-important"
            >
              <div className="calc-sidebar-panel__note-head">
                <Info size={14} className="calc-sidebar-panel__note-icon" aria-hidden />
                <h3 id="pit-calc-sidebar-important" className="calc-sidebar-panel__note-title">
                  Important
                </h3>
              </div>
              <p className="calc-sidebar-panel__note-body">
                This calculator provides estimates based on standard tax brackets. Actual tax may vary based on
                deductions, allowances, and other factors.
              </p>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="pit-calc-sidebar-guide">
              <div className="calc-help-box">
                <h4 id="pit-calc-sidebar-guide">Tax regimes</h4>
                <ul>
                  <li><strong>Real Regime:</strong> For businesses with turnover above RWF 20 million</li>
                  <li><strong>Lump Sum:</strong> For small businesses with turnover RWF 2–20 million</li>
                  <li><strong>Flat Tax:</strong> For micro businesses with turnover below RWF 2 million</li>
                </ul>
              </div>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="pit-calc-sidebar-links">
              <div className="calc-related-links">
                <h4 id="pit-calc-sidebar-links">Related resources</h4>
                <a href="/income-tax-explanation" className="calc-link">Income Tax Explanation</a>
                <a href="/real-regime-details" className="calc-link">Real Regime Details</a>
                <a href="/pit-cit-sum" className="calc-link">Income Tax FAQs</a>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
