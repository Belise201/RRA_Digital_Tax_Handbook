import { useState } from 'react';
import { DollarSign, CheckCircle, Info, RotateCcw } from 'lucide-react';
import './CalculatorPages.css';

const PAYECalculator = () => {
  const [grossSalary, setGrossSalary] = useState('');
  const [allowances, setAllowances] = useState('');
  const [results, setResults] = useState(null);

  const calculatePAYE = () => {
    const salary = parseFloat(grossSalary);
    const allow = parseFloat(allowances) || 0;

    if (isNaN(salary) || salary <= 0) {
      alert('Please enter a valid gross salary');
      return;
    }

    const totalGross = salary + allow;
    let paye = 0;
    let bracket = '';

    // PAYE calculation based on Rwanda tax brackets
    if (totalGross <= 30000) {
      paye = 0;
      bracket = '0% (Up to RWF 30,000)';
    } else if (totalGross <= 100000) {
      paye = (totalGross - 30000) * 0.20;
      bracket = '20% (RWF 30,001 - 100,000)';
    } else {
      paye = (100000 - 30000) * 0.20 + (totalGross - 100000) * 0.30;
      bracket = '30% (Above RWF 100,000)';
    }

    const netSalary = totalGross - paye;
    const effectiveRate = (paye / totalGross) * 100;

    setResults({
      grossSalary: salary.toFixed(2),
      allowances: allow.toFixed(2),
      totalGross: totalGross.toFixed(2),
      payeAmount: paye.toFixed(2),
      netSalary: netSalary.toFixed(2),
      bracket: bracket,
      effectiveRate: effectiveRate.toFixed(2),
    });
  };

  const resetCalculator = () => {
    setGrossSalary('');
    setAllowances('');
    setResults(null);
  };

  return (
    <div className="calc-page-container">
      <div className="calc-page-header">
        <div className="calc-page-header-content">
          <h1 className="calc-page-title">
            <DollarSign size={22} />
            PAYE Calculator
          </h1>
          <p className="calc-page-subtitle">
            Calculate Pay As You Earn (PAYE) tax on your monthly salary and allowances
          </p>
        </div>
      </div>

      <div className="calc-page-content">
        <div className="calc-page-main">
          <div className="calc-card">
            <div className="calc-card-header">
              <h2>Calculate PAYE</h2>
              <p>Enter your monthly gross salary and allowances to calculate PAYE tax</p>
            </div>

            <div className="calc-form">
              <div className="calc-field">
                <label className="calc-label">Monthly Gross Salary (RWF)</label>
                <input
                  type="number"
                  className="calc-input"
                  placeholder="Enter gross salary"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(e.target.value)}
                />
              </div>

              <div className="calc-field">
                <label className="calc-label">Monthly Allowances (RWF) - Optional</label>
                <input
                  type="number"
                  className="calc-input"
                  placeholder="Enter allowances (if any)"
                  value={allowances}
                  onChange={(e) => setAllowances(e.target.value)}
                />
                <span className="calc-field-hint">Include housing, transport, and other taxable allowances</span>
              </div>

              <div className="calc-actions">
                <button className="calc-btn calc-btn--primary" onClick={calculatePAYE}>
                  <DollarSign size={14} />
                  Calculate PAYE
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
                    <span className="calc-result-label">Gross Salary</span>
                    <span className="calc-result-value">RWF {results.grossSalary}</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Allowances</span>
                    <span className="calc-result-value">RWF {results.allowances}</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Total Gross Income</span>
                    <span className="calc-result-value">RWF {results.totalGross}</span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">PAYE Tax</span>
                    <span className="calc-result-value calc-result-value--highlight">
                      RWF {results.payeAmount}
                    </span>
                  </div>
                  <div className="calc-result-item">
                    <span className="calc-result-label">Net Salary (Take Home)</span>
                    <span className="calc-result-value calc-result-value--total">
                      RWF {results.netSalary}
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
            <h3>PAYE Tax Brackets (Monthly)</h3>
            <div className="calc-info-card">
              <h4>0% - Up to RWF 30,000</h4>
              <p>Monthly income up to RWF 30,000 is tax-free.</p>
            </div>
            <div className="calc-info-card">
              <h4>20% - RWF 30,001 to 100,000</h4>
              <p>Income between RWF 30,001 and RWF 100,000 is taxed at 20%.</p>
            </div>
            <div className="calc-info-card">
              <h4>30% - Above RWF 100,000</h4>
              <p>Income above RWF 100,000 is taxed at 30%.</p>
            </div>
          </div>
        </div>

        <aside className="calc-page-sidebar">
          <div className="calc-sidebar-panel">
            <section
              className="calc-sidebar-panel__section calc-sidebar-panel__section--note"
              aria-labelledby="paye-calc-sidebar-important"
            >
              <div className="calc-sidebar-panel__note-head">
                <Info size={14} className="calc-sidebar-panel__note-icon" aria-hidden />
                <h3 id="paye-calc-sidebar-important" className="calc-sidebar-panel__note-title">
                  Important
                </h3>
              </div>
              <p className="calc-sidebar-panel__note-body">
                This calculator provides estimates. Actual PAYE may vary based on pension contributions, insurance,
                and other deductions.
              </p>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="paye-calc-sidebar-guide">
              <div className="calc-help-box">
                <h4 id="paye-calc-sidebar-guide">About PAYE</h4>
                <p>PAYE (Pay As You Earn) is a tax deducted from employee salaries by employers and remitted to RRA monthly.</p>
                <h4>Taxable income includes</h4>
                <ul>
                  <li>Basic salary</li>
                  <li>Housing allowance</li>
                  <li>Transport allowance</li>
                  <li>Other cash benefits</li>
                </ul>
              </div>
            </section>
            <section className="calc-sidebar-panel__section" aria-labelledby="paye-calc-sidebar-links">
              <div className="calc-related-links">
                <h4 id="paye-calc-sidebar-links">Related resources</h4>
                <a href="/paye-explanation" className="calc-link">PAYE Explanation</a>
                <a href="/paye-declaration" className="calc-link">How to Declare PAYE</a>
                <a href="/paye-sum" className="calc-link">PAYE FAQs</a>
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PAYECalculator;
