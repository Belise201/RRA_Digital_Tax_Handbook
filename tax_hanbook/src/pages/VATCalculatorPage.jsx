import { useState } from 'react';
import { Calculator, CheckCircle, Info, RotateCcw } from 'lucide-react';
import './CalculatorPages.css';

const VATCalculator = () => {
  const [vatAmount, setVatAmount] = useState('');
  const [vatRate, setVatRate] = useState('18');
  const [vatType, setVatType] = useState('exclusive');
  const [results, setResults] = useState(null);

  const calculateVAT = () => {
    const amount = parseFloat(vatAmount);
    const rate = parseFloat(vatRate) / 100;

    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    let vatValue, totalAmount, netAmount;

    if (vatType === 'exclusive') {
      vatValue = amount * rate;
      totalAmount = amount + vatValue;
      netAmount = amount;
    } else {
      totalAmount = amount;
      netAmount = amount / (1 + rate);
      vatValue = amount - netAmount;
    }

    setResults({
      netAmount: netAmount.toFixed(2),
      vatAmount: vatValue.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      rate: vatRate,
    });
  };

  const resetCalculator = () => {
    setVatAmount('');
    setResults(null);
  };

  return (
    <div className="calc-page-container">
      <div className="calc-page-header">
        <div className="calc-page-header-content">
          <h1 className="calc-page-title">
            <Calculator size={22} />
            VAT Calculator
          </h1>
          <p className="calc-page-subtitle">
            Calculate Value Added Tax for your business transactions in Rwanda
          </p>
        </div>
      </div>

      <div className="calc-page-content">
        <div className="calc-page-main">
          <div className="calc-card">
            <div className="calc-card-header">
              <h2>Calculate VAT</h2>
              <p>Enter your transaction amount and select the VAT rate to calculate tax</p>
            </div>

            <div className="calc-form">
              <div className="calc-field">
                <label className="calc-label">Amount (RWF)</label>
                <input
                  type="number"
                  className="calc-input"
                  placeholder="Enter amount"
                  value={vatAmount}
                  onChange={(e) => setVatAmount(e.target.value)}
                />
              </div>

              <div className="calc-field">
                <label className="calc-label">VAT Rate (%)</label>
                <select
                  className="calc-input"
                  value={vatRate}
                  onChange={(e) => setVatRate(e.target.value)}
                >
                  <option value="18">18% (Standard Rate)</option>
                  <option value="0">0% (Zero Rate)</option>
                </select>
              </div>

              <div className="calc-field">
                <label className="calc-label">Calculation Type</label>
                <div className="calc-radio-group">
                  <label className="calc-radio">
                    <input
                      type="radio"
                      name="vatType"
                      value="exclusive"
                      checked={vatType === 'exclusive'}
                      onChange={(e) => setVatType(e.target.value)}
                    />
                    <span>VAT Exclusive (Add VAT to amount)</span>
                  </label>
                  <label className="calc-radio">
                    <input
                      type="radio"
                      name="vatType"
                      value="inclusive"
                      checked={vatType === 'inclusive'}
                      onChange={(e) => setVatType(e.target.value)}
                    />
                    <span>VAT Inclusive (Extract VAT from amount)</span>
                  </label>
                </div>
              </div>

              <div className="calc-actions">
                <button className="calc-btn calc-btn--primary" onClick={calculateVAT}>
                  <Calculator size={14} />
                  Calculate VAT
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
                    <span className="calc-result-label">Net Amount</span>
                    <span className="calc-result-value">RWF {results.netAmount}</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">VAT ({results.rate}%)</span>
                    <span className="calc-result-value calc-result-value--highlight">
                      RWF {results.vatAmount}
                    </span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Total Amount</span>
                    <span className="calc-result-value calc-result-value--total">
                      RWF {results.totalAmount}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="calc-info-section">
            <h3>About VAT in Rwanda</h3>
            <div className="calc-info-card">
              <h4>Standard Rate: 18%</h4>
              <p>The standard VAT rate in Rwanda is 18% and applies to most goods and services.</p>
            </div>
            <div className="calc-info-card">
              <h4>Zero Rate: 0%</h4>
              <p>Certain goods and services are zero-rated, including exports and some essential items.</p>
            </div>
            <div className="calc-info-card">
              <h4>Exempt Items</h4>
              <p>Some items are exempt from VAT, such as financial services, education, and healthcare.</p>
            </div>
          </div>
        </div>

        <aside className="calc-page-sidebar">
          <div className="calc-sidebar-panel">
            <section
              className="calc-sidebar-panel__section calc-sidebar-panel__section--note"
              aria-labelledby="vat-calc-sidebar-important"
            >
              <div className="calc-sidebar-panel__note-head">
                <Info size={14} className="calc-sidebar-panel__note-icon" aria-hidden />
                <h3 id="vat-calc-sidebar-important" className="calc-sidebar-panel__note-title">
                  Important
                </h3>
              </div>
              <p className="calc-sidebar-panel__note-body">
                This calculator provides estimates only. For official tax obligations, please consult RRA or use the
                official E-Tax system.
              </p>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="vat-calc-sidebar-guide">
              <div className="calc-help-box">
                <h4 id="vat-calc-sidebar-guide">How to use</h4>
                <ol>
                  <li>Enter the transaction amount in RWF</li>
                  <li>Select the applicable VAT rate (18% or 0%)</li>
                  <li>
                    Choose calculation type:
                    <ul>
                      <li><strong>VAT Exclusive:</strong> Adds VAT to your amount</li>
                      <li><strong>VAT Inclusive:</strong> Extracts VAT from your amount</li>
                    </ul>
                  </li>
                  <li>Click &quot;Calculate VAT&quot; to see results</li>
                </ol>
              </div>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="vat-calc-sidebar-links">
              <div className="calc-related-links">
                <h4 id="vat-calc-sidebar-links">Related resources</h4>
                <a href="/vat-explanation" className="calc-link">VAT Explanation</a>
                <a href="/vat-declaration" className="calc-link">How to Declare VAT</a>
                <a href="/vat-sum" className="calc-link">VAT FAQs</a>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VATCalculator;
