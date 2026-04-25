import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Clock, FileText, Monitor, AlertTriangle, CheckCircle, Info, ShoppingCart, Receipt, Download, Upload, CreditCard, Smartphone, Percent, Building, Users, Globe, Shield, Zap } from 'lucide-react';
import '../styles/Diagrams.css';

const VAT = () => {
  const vatRates = [
    {
      rate: '18%',
      description: 'Standard rate on most goods and services',
      examples: 'General goods, services, imports',
      color: 'bg-blue-500',
      icon: <Percent size={20} />
    },
    {
      rate: '0%',
      description: 'Zero-rated goods and services',
      examples: 'Exports, minerals, international transport',
      color: 'bg-green-500',
      icon: <Globe size={20} />
    },
    {
      rate: 'Exempt',
      description: 'Exempt from VAT',
      examples: 'Financial services, education, healthcare',
      color: 'bg-gray-500',
      icon: <Shield size={20} />
    }
  ];

  const quickFacts = [
    { icon: <Building size={24} />, title: 'Registration Threshold', value: 'FRW 20M', description: 'Annual turnover' },
    { icon: <Clock size={24} />, title: 'Declaration Deadline', value: '15th', description: 'Of following month' },
    { icon: <Calculator size={24} />, title: 'Standard Rate', value: '18%', description: 'On most goods/services' },
    { icon: <FileText size={24} />, title: 'EIS Required', value: 'Yes', description: 'For all transactions' }
  ];

  const zeroRatedGoods = [
    'Exported goods and auxiliary services',
    'Exported services',
    'Minerals sold on domestic market',
    'International transportation services',
    'Commission fees for exported goods',
    'Services related to exported goods'
  ];

  const exemptGoods = [
    'Financial services',
    'Educational services',
    'Healthcare services',
    'Insurance services',
    'Rental of residential property',
    'Public transport services'
  ];

  const eisRequirements = [
    'Display VAT registration certificate',
    'Use Electronic Invoicing System (EIS)',
    'Issue EBM invoice for every transaction',
    'Submit monthly/quarterly declarations',
    'Keep books of accounts available',
    'Be available for RRA inspections'
  ];

  const declarationSteps = [
    {
      step: 1,
      title: 'Bookkeeping and EIS Invoices',
      description: 'Ensure accurate bookkeeping and use EIS to issue invoices for all sales',
      icon: <FileText size={24} />
    },
    {
      step: 2,
      title: 'Login to E-Tax',
      description: 'Access the E-Tax system at etax.rra.gov.rw',
      icon: <Monitor size={24} />
    },
    {
      step: 3,
      title: 'Download and Complete Annexures',
      description: 'Download and complete applicable annexures including sales, inputs, and reverse charge tabs',
      icon: <Download size={24} />
    },
    {
      step: 4,
      title: 'Complete Declaration Form',
      description: 'Fill in the VAT declaration form with aggregated values',
      icon: <Calculator size={24} />
    },
    {
      step: 5,
      title: 'Upload and Submit',
      description: 'Upload annexures, confirm accuracy, and submit the declaration',
      icon: <Upload size={24} />
    },
    {
      step: 6,
      title: 'View Receipt and Pay',
      description: 'Note the RRA reference number and pay all tax due',
      icon: <Receipt size={24} />
    }
  ];

  const annexureTabs = [
    {
      tab: 'Sales Tab',
      description: 'All sales transactions including taxable, exempt, and zero-rated sales',
      required: true,
      icon: <ShoppingCart size={20} />
    },
    {
      tab: 'Locally Purchased Inputs Tab',
      description: 'All purchases from local suppliers with VAT',
      required: true,
      icon: <Building size={20} />
    },
    {
      tab: 'Imported Inputs Tab',
      description: 'All imports with VAT paid at customs',
      required: true,
      icon: <Globe size={20} />
    },
    {
      tab: 'VAT Reverse Charge Tab',
      description: 'Services received from non-resident suppliers',
      required: false,
      icon: <ArrowRight size={20} />
    },
    {
      tab: 'VAT Retained by Public Institutions Tab',
      description: 'VAT retained by government institutions',
      required: false,
      icon: <Building size={20} />
    }
  ];

  const paymentMethods = [
    {
      method: 'E-Payment',
      description: 'Direct payment through E-Tax system',
      icon: <CreditCard size={24} />,
      color: 'bg-blue-500'
    },
    {
      method: 'MTN Mobile Money',
      description: 'Pay using MTN Mobile Money',
      icon: <Smartphone size={24} />,
      color: 'bg-yellow-500'
    },
    {
      method: 'Airtel Money',
      description: 'Pay using Airtel Money',
      icon: <Smartphone size={24} />,
      color: 'bg-red-500'
    },
    {
      method: 'Mobicash',
      description: 'Pay through Mobicash agents',
      icon: <Smartphone size={24} />,
      color: 'bg-green-500'
    },
    {
      method: 'Bank Payment',
      description: 'Pay at any commercial bank',
      icon: <FileText size={24} />,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Receipt size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Value Added Tax (VAT)</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to VAT registration, calculation, declaration, and payment.
                VAT is a consumption tax charged on goods and services at 18% standard rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Quick Facts Section */}
        <section className="content-section">
          <h2>Quick Facts</h2>
          <div className="quick-facts-grid">
            {quickFacts.map((fact, index) => (
              <div key={index} className="quick-fact-card">
                <div className="fact-icon">
                  {fact.icon}
                </div>
                <div className="fact-content">
                  <h3>{fact.title}</h3>
                  <div className="fact-value">{fact.value}</div>
                  <p>{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Section */}
        <section className="content-section">
          <h2>What is VAT?</h2>
          <div className="info-card">
            <div className="info-icon">
              <Calculator size={24} />
            </div>
            <div className="info-content">
              <p>
                Value Added Tax (VAT) is a consumption tax charged on goods and services. It is indirectly
                paid by the final consumer but collected by businesses at each stage of production.
                VAT registered taxpayers charge VAT on sales (output VAT) and claim back VAT on purchases (input VAT).
              </p>
            </div>
          </div>
        </section>

        {/* VAT Rates Section */}
        <section className="content-section">
          <h2>VAT Rates</h2>

          {/* VAT Registration Flow Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>VAT Registration Process Flow</h3>
            </div>
            <div className="flow-diagram">
              <div className="flow-start">
                <div className="flow-node start">
                  <Building size={20} />
                  <span>Business Activity</span>
                </div>
              </div>

              <div className="flow-arrow">↓</div>

              <div className="flow-decision">
                <div className="flow-node decision">
                  <Calculator size={20} />
                  <span>Annual Turnover ≥ FRW 20M?</span>
                </div>
              </div>

              <div className="flow-branches">
                <div className="flow-branch">
                  <div className="flow-condition">No</div>
                  <div className="flow-arrow-small">↓</div>
                  <div className="flow-node result exempt">
                    <Shield size={20} />
                    <span>No VAT Registration</span>
                    <div className="regime-details">
                      <small>Below threshold<br />Optional registration</small>
                    </div>
                  </div>
                </div>

                <div className="flow-branch">
                  <div className="flow-condition">Yes</div>
                  <div className="flow-arrow-small">↓</div>
                  <div className="flow-node result required">
                    <FileText size={20} />
                    <span>VAT Registration Required</span>
                    <div className="regime-details">
                      <small>Within 30 days<br />EIS system required</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VAT Calculation Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>VAT Calculation Process</h3>
            </div>
            <div className="vat-calculation-diagram">
              <div className="vat-step">
                <div className="step-icon">
                  <ShoppingCart size={24} />
                </div>
                <div className="step-content">
                  <h4>Sales (Output VAT)</h4>
                  <p>18% on taxable sales</p>
                  <div className="example">Sale: FRW 100,000<br />VAT: FRW 18,000</div>
                </div>
              </div>

              <div className="vat-arrow">-</div>

              <div className="vat-step">
                <div className="step-icon">
                  <Receipt size={24} />
                </div>
                <div className="step-content">
                  <h4>Purchases (Input VAT)</h4>
                  <p>18% on business purchases</p>
                  <div className="example">Purchase: FRW 50,000<br />VAT: FRW 9,000</div>
                </div>
              </div>

              <div className="vat-arrow">=</div>

              <div className="vat-step final">
                <div className="step-icon">
                  <CreditCard size={24} />
                </div>
                <div className="step-content">
                  <h4>VAT Payable</h4>
                  <p>Net VAT to RRA</p>
                  <div className="example">FRW 18,000 - FRW 9,000<br />= FRW 9,000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="vat-rates-grid">
            {vatRates.map((rate, index) => (
              <div key={index} className="vat-rate-card">
                <div className="rate-header">
                  <div className="rate-icon">
                    {rate.icon}
                  </div>
                  <div className="rate-badge">{rate.rate}</div>
                </div>
                <div className="rate-content">
                  <h3>{rate.rate}</h3>
                  <p className="rate-description">{rate.description}</p>
                  <div className="rate-examples">
                    <strong>Examples:</strong> {rate.examples}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Requirements */}
        <section className="content-section">
          <h2>Registration Requirements</h2>
          <div className="registration-grid">
            <div className="registration-card mandatory">
              <div className="card-header">
                <div className="card-icon">
                  <AlertTriangle size={24} />
                </div>
                <h3>Mandatory Registration</h3>
              </div>
              <div className="card-content">
                <p>You must register for VAT if your turnover is:</p>
                <ul>
                  <li>Above FRW 20,000,000 for any twelve-month period, OR</li>
                  <li>Above FRW 5,000,000 for three consecutive months</li>
                </ul>
                <div className="note">
                  <strong>Note:</strong> This includes all taxable, exempt, and zero-rated sales.
                </div>
              </div>
            </div>
            <div className="registration-card voluntary">
              <div className="card-header">
                <div className="card-icon">
                  <CheckCircle size={24} />
                </div>
                <h3>Voluntary Registration</h3>
              </div>
              <div className="card-content">
                <p>Any taxpayer may choose to register for VAT voluntarily, regardless of turnover.</p>
                <div className="benefits">
                  <h4>Benefits of VAT Registration:</h4>
                  <ul>
                    <li>Claim back VAT on business inputs</li>
                    <li>Professional business image</li>
                    <li>Access to larger business opportunities</li>
                    <li>Compliance with tax regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VAT Obligations */}
        <section className="content-section">
          <h2>VAT Obligations</h2>
          <div className="obligations-grid">
            {eisRequirements.map((requirement, index) => (
              <div key={index} className="obligation-card">
                <div className="obligation-icon">
                  <CheckCircle size={20} />
                </div>
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </section>

        {/* VAT Calculation */}
        <section className="content-section">
          <h2>VAT Calculation</h2>
          <div className="calculation-container">
            <div className="calculation-formula">
              <div className="formula-header">
                <Calculator size={24} />
                <h3>VAT Formula</h3>
              </div>
              <div className="formula-content">
                <div className="formula-equation">
                  <strong>VAT Due = Output VAT - Input VAT</strong>
                </div>
                <div className="formula-explanation">
                  <p>Where:</p>
                  <ul>
                    <li><strong>Output VAT:</strong> VAT charged on sales (18% of sales value)</li>
                    <li><strong>Input VAT:</strong> VAT paid on purchases and imports</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="calculation-example">
              <div className="example-header">
                <FileText size={24} />
                <h3>Example Calculation</h3>
              </div>
              <div className="example-content">
                <div className="example-row">
                  <span className="label">Sales:</span>
                  <span className="value">FRW 1,000,000 (VAT exclusive)</span>
                </div>
                <div className="example-row">
                  <span className="label">Output VAT:</span>
                  <span className="value">FRW 1,000,000 × 18% = FRW 180,000</span>
                </div>
                <div className="example-row">
                  <span className="label">Purchases:</span>
                  <span className="value">FRW 500,000 (VAT exclusive)</span>
                </div>
                <div className="example-row">
                  <span className="label">Input VAT:</span>
                  <span className="value">FRW 500,000 × 18% = FRW 90,000</span>
                </div>
                <div className="example-row total">
                  <span className="label">VAT Due:</span>
                  <span className="value">FRW 180,000 - FRW 90,000 = FRW 90,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zero-Rated and Exempt Goods */}
        <section className="content-section">
          <h2>Zero-Rated and Exempt Goods</h2>
          <div className="goods-categories">
            <div className="goods-card zero-rated">
              <div className="goods-header">
                <Globe size={24} />
                <h3>Zero-Rated Goods and Services</h3>
                <div className="rate-badge">0%</div>
              </div>
              <div className="goods-content">
                <p>No output VAT is charged, but input VAT can be claimed:</p>
                <ul>
                  {zeroRatedGoods.map((good, index) => (
                    <li key={index}>{good}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="goods-card exempt">
              <div className="goods-header">
                <Shield size={24} />
                <h3>Exempt Goods and Services</h3>
                <div className="rate-badge">Exempt</div>
              </div>
              <div className="goods-content">
                <p>No VAT is charged and input VAT cannot be claimed:</p>
                <ul>
                  {exemptGoods.map((good, index) => (
                    <li key={index}>{good}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Declaration Process */}
        <section className="content-section">
          <h2>Declaration Process</h2>
          <div className="declaration-steps">
            {declarationSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  {step.icon}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Annexure Requirements */}
        <section className="content-section">
          <h2>Annexure Requirements</h2>
          <div className="annexure-tabs">
            {annexureTabs.map((tab, index) => (
              <div key={index} className={`annexure-tab ${tab.required ? 'required' : 'optional'}`}>
                <div className="tab-header">
                  <div className="tab-icon">
                    {tab.icon}
                  </div>
                  <h3>{tab.tab}</h3>
                  <span className="tab-status">{tab.required ? 'Required' : 'Optional'}</span>
                </div>
                <p>{tab.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deadlines */}
        <section className="content-section">
          <h2>Deadlines</h2>
          <div className="deadlines-grid">
            <div className="deadline-card monthly">
              <div className="deadline-icon">
                <Clock size={24} />
              </div>
              <div className="deadline-content">
                <h3>Monthly Declaration</h3>
                <p>Submit VAT declaration and pay by the 15th of the following month</p>
                <div className="deadline-badge">15th of following month</div>
              </div>
            </div>
            <div className="deadline-card quarterly">
              <div className="deadline-icon">
                <Calculator size={24} />
              </div>
              <div className="deadline-content">
                <h3>Quarterly Declaration</h3>
                <p>Available for taxpayers with annual turnover below FRW 200,000,000</p>
                <div className="deadline-badge">Below FRW 200M turnover</div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="content-section">
          <h2>Payment Methods</h2>
          <div className="payment-methods-grid">
            {paymentMethods.map((method, index) => (
              <div key={index} className="payment-method-card">
                <div className="method-icon" style={{ backgroundColor: method.color }}>
                  {method.icon}
                </div>
                <h3>{method.method}</h3>
                <p>{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EIS System */}
        <section className="content-section">
          <h2>Electronic Invoicing System (EIS)</h2>
          <div className="eis-container">
            <div className="eis-overview">
              <div className="eis-header">
                <Monitor size={24} />
                <h3>What is EIS?</h3>
              </div>
              <p>
                EIS refers to methods of printing RRA certified invoices and sending sales data to RRA in real time.
                EIS invoices are required for every sales transaction by registered taxpayers.
              </p>
            </div>
            <div className="eis-methods">
              <h3>Available EIS Methods</h3>
              <div className="method-options">
                <div className="method-option">
                  <div className="option-icon">
                    <Zap size={20} />
                  </div>
                  <h4>EBM2.1</h4>
                  <p>Electronic Billing Machine version 2.1</p>
                </div>
                <div className="method-option">
                  <div className="option-icon">
                    <Monitor size={20} />
                  </div>
                  <h4>VSDC</h4>
                  <p>Virtual Sales Data Controller</p>
                </div>
              </div>
            </div>
            <div className="eis-process">
              <h3>EIS Process</h3>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <span>Enter quantity, price, and item code</span>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <span>Print EIS invoice</span>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <span>Give invoice to customer</span>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <span>Keep duplicate for records</span>
                </div>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <span>Data automatically sent to RRA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="content-section">
          <div className="notice-card warning">
            <div className="notice-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="notice-content">
              <h3>Important Notes</h3>
              <ul>
                <li>VAT inclusive prices must be displayed to customers</li>
                <li>VAT exclusive prices are used in declarations</li>
                <li>All invoices must show VAT exclusive price, VAT amount, and VAT inclusive price</li>
                <li>Notify RRA if EIS/EBM is not working</li>
                <li>Keep all VAT documents for 10 years</li>
                <li>VAT paid on imports can be claimed back in domestic VAT declarations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="content-section">
          <h2>Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you understand VAT requirements, you can:
            </p>
            <div className="steps-grid">
              <Link to="/paying-taxes" className="step-card">
                <h3>Learn Payment Methods</h3>
                <p>Multiple ways to pay your VAT</p>
                <ArrowRight size={20} />
              </Link>
              <Link to="/income-tax" className="step-card">
                <h3>Register for Income Tax</h3>
                <p>Required for Real Regime taxpayers</p>
                <ArrowRight size={20} />
              </Link>
              <a
                href="https://etax.rra.gov.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="step-card"
              >
                <h3>Access E-Tax</h3>
                <p>Start your VAT declarations</p>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VAT;
