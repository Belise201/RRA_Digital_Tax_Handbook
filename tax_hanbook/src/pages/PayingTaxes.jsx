import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Smartphone, FileText, Clock, AlertTriangle, CheckCircle, Info, Monitor, Phone, Globe, Download, Shield } from 'lucide-react';

const PayingTaxes = () => {
  const paymentMethods = [
    {
      method: 'E-Payment',
      description: 'Direct payment through E-Tax system using internet banking',
      icon: <CreditCard size={24} />,
      steps: [
        'Submit tax declaration',
        'Click "E-payment" button',
        'Select your bank from dropdown',
        'Complete payment through bank system'
      ],
      advantages: ['Immediate confirmation', 'No transaction fees', '24/7 availability']
    },
    {
      method: 'MTN Mobile Money',
      description: 'Pay using MTN Mobile Money individually or through agents',
      icon: <Smartphone size={24} />,
      steps: [
        'Dial *182#',
        'Choose "Pay Bill"',
        'Select "RRA"',
        'Enter RRA Reference Number',
        'Confirm payment with PIN'
      ],
      advantages: ['Convenient', 'Available 24/7', 'Immediate confirmation']
    },
    {
      method: 'Airtel Money',
      description: 'Pay using Airtel Money individually or through agents',
      icon: <Smartphone size={24} />,
      steps: [
        'Dial *182#',
        'Choose "Pay Bill"',
        'Select "RRA"',
        'Enter RRA Reference Number',
        'Confirm payment with PIN'
      ],
      advantages: ['Convenient', 'Available 24/7', 'Immediate confirmation']
    },
    {
      method: 'Mobicash',
      description: 'Pay through Mobicash agents only',
      icon: <Smartphone size={24} />,
      steps: [
        'Visit Mobicash agent',
        'Provide RRA Reference Number',
        'Pay amount including fees',
        'Receive confirmation'
      ],
      advantages: ['No registration required', 'Agent assistance', 'Wide network']
    },
    {
      method: 'Bank Payment',
      description: 'Pay at any commercial bank using cash or cheque',
      icon: <FileText size={24} />,
      steps: [
        'Visit any commercial bank',
        'Use cash deposit slip or bank cheque',
        'Include RRA Reference Number',
        'Pay amount due'
      ],
      advantages: ['Personal assistance', 'Secure', 'Receipt provided']
    }
  ];

  const acknowledgementReceipts = [
    {
      type: 'Domestic Taxes',
      system: 'E-Tax',
      access: 'Click "View Acknowledgement Receipt" after submission',
      details: ['RRA Reference Number', 'Total tax due', 'Payment deadline', 'Taxpayer details']
    },
    {
      type: 'Customs Duties',
      system: 'ReSW',
      access: 'Provided by clearing agent as Assessment Notice',
      details: ['Multiple RRA Reference Numbers', 'Different tax amounts', 'Payment instructions', 'Customs details']
    },
    {
      type: 'Local Government Taxes',
      system: 'LGT System',
      access: 'Click "Get Acknowledgement" after submission',
      details: ['RRA Reference Number', 'Total tax due', 'Local authority details', 'Payment deadline']
    }
  ];

  const paymentDetails = [
    {
      detail: 'RRA Reference Number',
      description: 'Unique identifier for the tax declaration (also called Doc ID or Doc No)',
      importance: 'Essential for correct payment attribution'
    },
    {
      detail: 'Amount Due',
      description: 'Total tax amount including any penalties and fines',
      importance: 'Must be paid in full to avoid additional penalties'
    },
    {
      detail: 'Payment Deadline',
      description: 'Date by which payment must be completed',
      importance: 'Late payments attract penalties and interest'
    },
    {
      detail: 'Tax Type',
      description: 'Type of tax being paid (e.g., VAT, Income Tax, Customs)',
      importance: 'Helps with record keeping and reconciliation'
    }
  ];

  const bankPaymentDetails = {
    cashDeposit: {
      beneficiary: 'RRA Reference Number',
      of: 'Rwanda Revenue Authority',
      amount: 'Total Tax Due',
      paidBy: {
        name: 'Taxpayer Name',
        address: 'Business address or PO Box'
      },
      comment: 'Tax type (e.g., VAT)'
    },
    bankCheque: {
      payee: 'Rwanda Revenue Authority',
      amount: 'Total Tax Due',
      reference: 'RRA Reference Number',
      note: 'Cheques of FRW 500,000+ are mandatory'
    }
  };

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <CreditCard size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Paying Taxes</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to paying taxes in Rwanda. Multiple payment methods available 
                including online, mobile money, and bank payments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Overview Section */}
        <section className="content-section">
          <h2>Overview</h2>
          <div className="info-card">
            <div className="info-icon">
              <CreditCard size={24} />
            </div>
            <div className="info-content">
              <p>
                After submitting tax declarations, taxpayers must pay the taxes due. Rwanda offers 
                multiple convenient payment methods including online payments, mobile money, and 
                bank payments. All payments require the RRA Reference Number from the acknowledgement receipt.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Methods Section */}
        <section className="content-section">
          <h2>Payment Methods</h2>
          <div className="payment-methods-grid">
            {paymentMethods.map((method, index) => (
              <div key={index} className="payment-method-card">
                <div className="method-header">
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <h3>{method.method}</h3>
                </div>
                <p className="method-description">{method.description}</p>
                
                <div className="method-steps">
                  <h4>Steps:</h4>
                  <ol>
                    {method.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="method-advantages">
                  <h4>Advantages:</h4>
                  <ul>
                    {method.advantages.map((advantage, idx) => (
                      <li key={idx}>{advantage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Acknowledgement Receipts Section */}
        <section className="content-section">
          <h2>Acknowledgement Receipts</h2>
          <div className="acknowledgement-info">
            <p>
              After submitting any tax declaration, you will receive an acknowledgement receipt 
              containing the RRA Reference Number and payment details. This is essential for making payments.
            </p>
            
            <div className="acknowledgement-types">
              {acknowledgementReceipts.map((type, index) => (
                <div key={index} className="acknowledgement-card">
                  <div className="acknowledgement-header">
                    <h3>{type.type}</h3>
                    <span className="system-name">{type.system}</span>
                  </div>
                  <div className="access-method">
                    <strong>How to Access:</strong> {type.access}
                  </div>
                  <div className="receipt-details">
                    <h4>Contains:</h4>
                    <ul>
                      {type.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Details Section */}
        <section className="content-section">
          <h2>Required Payment Details</h2>
          <div className="payment-details-grid">
            {paymentDetails.map((detail, index) => (
              <div key={index} className="payment-detail-card">
                <h3>{detail.detail}</h3>
                <p className="detail-description">{detail.description}</p>
                <div className="detail-importance">
                  <strong>Importance:</strong> {detail.importance}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bank Payment Details */}
        <section className="content-section">
          <h2>Bank Payment Details</h2>
          <div className="bank-payment-info">
            <div className="payment-option">
              <h3>Cash Deposit Slip</h3>
              <div className="deposit-details">
                <div className="detail-row">
                  <strong>Beneficiary:</strong>
                  <span>Account Number: {bankPaymentDetails.cashDeposit.beneficiary}</span>
                </div>
                <div className="detail-row">
                  <strong>Of:</strong>
                  <span>{bankPaymentDetails.cashDeposit.of}</span>
                </div>
                <div className="detail-row">
                  <strong>Amount:</strong>
                  <span>{bankPaymentDetails.cashDeposit.amount}</span>
                </div>
                <div className="detail-row">
                  <strong>Paid in by:</strong>
                  <div className="paid-by-details">
                    <div>Name: {bankPaymentDetails.cashDeposit.paidBy.name}</div>
                    <div>Address: {bankPaymentDetails.cashDeposit.paidBy.address}</div>
                  </div>
                </div>
                <div className="detail-row">
                  <strong>Comment:</strong>
                  <span>{bankPaymentDetails.cashDeposit.comment}</span>
                </div>
              </div>
            </div>

            <div className="payment-option">
              <h3>Bank Cheque</h3>
              <div className="cheque-details">
                <div className="detail-row">
                  <strong>Pay to:</strong>
                  <span>{bankPaymentDetails.bankCheque.payee}</span>
                </div>
                <div className="detail-row">
                  <strong>Amount:</strong>
                  <span>{bankPaymentDetails.bankCheque.amount}</span>
                </div>
                <div className="detail-row">
                  <strong>Reference:</strong>
                  <span>{bankPaymentDetails.bankCheque.reference}</span>
                </div>
                <div className="cheque-note">
                  <AlertTriangle size={16} />
                  <span>{bankPaymentDetails.bankCheque.note}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Advantages */}
        <section className="content-section">
          <h2>Advantages of Digital Payments</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">
                <Clock size={24} />
              </div>
              <h3>24/7 Availability</h3>
              <p>Pay taxes anytime, anywhere without visiting offices</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">
                <Globe size={24} />
              </div>
              <h3>No Travel Costs</h3>
              <p>Save money on transportation and time</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">
                <Shield size={24} />
              </div>
              <h3>Enhanced Security</h3>
              <p>Avoid carrying cash and reduce safety risks</p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">
                <CheckCircle size={24} />
              </div>
              <h3>Immediate Confirmation</h3>
              <p>Receive instant payment confirmation</p>
            </div>
          </div>
        </section>

        {/* Transaction Fees */}
        <section className="content-section">
          <h2>Transaction Fees</h2>
          <div className="fees-info">
            <div className="fee-card">
              <h3>E-Payment</h3>
              <p>No additional transaction fees</p>
            </div>
            <div className="fee-card">
              <h3>Mobile Money</h3>
              <p>Small fees vary by amount and provider</p>
            </div>
            <div className="fee-card">
              <h3>Mobicash</h3>
              <p>Small fees vary by amount</p>
            </div>
            <div className="fee-card">
              <h3>Bank Payment</h3>
              <p>Standard bank fees may apply</p>
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
                <li>Always save payment receipts for your records</li>
                <li>Payments must be made by the deadline to avoid penalties</li>
                <li>RRA Reference Number is essential for correct payment attribution</li>
                <li>Cash payments are not accepted at RRA offices</li>
                <li>Bank cheques of FRW 500,000+ are mandatory</li>
                <li>Contact RRA if payment confirmation is not received</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="content-section">
          <h2>Troubleshooting</h2>
          <div className="troubleshooting-grid">
            <div className="trouble-card">
              <h3>Payment Not Confirmed</h3>
              <p>Wait 24 hours and contact RRA if confirmation not received</p>
            </div>
            <div className="trouble-card">
              <h3>Wrong Reference Number</h3>
              <p>Contact RRA immediately to correct payment attribution</p>
            </div>
            <div className="trouble-card">
              <h3>System Errors</h3>
              <p>Try again later or use alternative payment method</p>
            </div>
            <div className="trouble-card">
              <h3>Need Help</h3>
              <p>Call RRA toll-free: 3004 or visit nearest office</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="content-section">
          <h2>Next Steps</h2>
          <div className="next-steps">
            <p>
              Now that you understand payment methods, you can:
            </p>
            <div className="steps-grid">
              <Link to="/income-tax" className="step-card">
                <h3>Declare Income Tax</h3>
                <p>Submit your tax declarations</p>
                <ArrowRight size={20} />
              </Link>
              <Link to="/vat" className="step-card">
                <h3>Declare VAT</h3>
                <p>Submit VAT declarations</p>
                <ArrowRight size={20} />
              </Link>
              <a 
                href="https://etax.rra.gov.rw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="step-card"
              >
                <h3>Access E-Tax</h3>
                <p>Start your declarations and payments</p>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PayingTaxes;
