import { FileText, CheckCircle, Clock, AlertTriangle, Building, Users, Globe, Shield, CreditCard, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import '../styles/Diagrams.css';

const Registration = () => {
  const domesticDocuments = [
    'Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants)',
    'Notarised articles of association (if applicable)',
    'Notarised company resolution to open a subsidiary company (if a subsidiary)',
    'Notarised certificate of incorporation issued by the registration company in the country of incorporation (if a foreign subsidiary)'
  ];

  const enterpriseDocuments = [
    'Rwanda National ID or Passport'
  ];

  const foreignDocuments = [
    'Rwanda National ID or Passport (for all shareholders, directors, company secretaries, accountants residing in Rwanda)',
    'Notarised power of attorney to present the company in Rwanda',
    'Notarised articles of association',
    'Notarised certificate of incorporation issued by the registration institution in the country of incorporation',
    'Notarised company resolution to open a branch in Rwanda'
  ];

  const businessBenefits = [
    'Ensuring the business benefits from the protections provided by business laws, such as limited liability',
    'Improving access to credit from financial institutions',
    'Inspiring trust in customers with proof of being a registered business'
  ];

  const domesticCompanyTypes = [
    { type: 'Limited by shares', description: 'Most common business type, suitable for most profit-oriented businesses' },
    { type: 'Limited by guarantee', description: 'Suitable for non-profit organisations and charities' },
    { type: 'Limited by shares and guarantee', description: 'Rare business type, requires consultation with RDB' },
    { type: 'Unlimited', description: 'Rare business type, requires consultation with RDB' }
  ];

  const registrationSteps = [
    {
      step: 1,
      title: 'Register on the RDB business registration system',
      description: 'Access the RDB business registration system at https://brs.rdb.rw/busregonline',
      details: [
        'New users must first register an account by clicking on "Register Here"',
        'Enter required personal details and click submit to register an account',
        'RDB will send an email with a validation link',
        'Click the link to validate and activate the account',
        'Return to the system and login with chosen details'
      ]
    },
    {
      step: 2,
      title: 'Choose the business category to be registered',
      description: 'Select the appropriate business type and complete required information',
      details: [
        'Select business type: Domestic, Enterprise, or Foreign',
        'Note your position within the business',
        'For Domestic: Choose company category (public/private) and type',
        'Complete all required fields for the selected category'
      ]
    },
    {
      step: 3,
      title: 'Complete the business registration application',
      description: 'Fill in all required tabs and submit the application',
      details: [
        'Complete all major tabs: General Info, Share Info, etc.',
        'Fill in all minor tabs within each major tab',
        'Use Preview tab to check all details are correct',
        'Click Submit to submit the application',
        'Wait for RDB validation and TIN issuance via SMS'
      ]
    },
    {
      step: 4,
      title: 'Print Certificates',
      description: 'Download and print required business certificates',
      details: [
        'Login to RDB Business Registration system',
        'Click on "Certificates" option',
        'Download and print the main business certificate',
        'Download and print the Memorandum certificate',
        'Print any additional certificates (e.g., VAT certificate)'
      ]
    },
    {
      step: 5,
      title: 'Register, declare and pay all required taxes',
      description: 'Complete tax registration and begin tax obligations',
      details: [
        'Income Tax registration is automatic',
        'Visit RRA offices for additional tax registrations',
        'Register for Trading License Tax at LGT tax centres',
        'Begin declaring and paying taxes as required'
      ]
    }
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Building size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Registration</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to business registration and obtaining a Taxpayer Identification Number (TIN)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Explanation of Registration */}
        <section className="content-section">
          <h2>Explanation of Registration</h2>
          <div className="info-card">
            <div className="info-icon">
              <FileText size={24} />
            </div>
            <div className="info-content">
              <p>
                Taxpayers receive a unique Taxpayer Identification Number (TIN) when registering their business with
                Rwanda Development Board (RDB) for all businesses, and Rwanda Cooperatives Agency (RCA) for cooperatives.
              </p>
            </div>
          </div>
        </section>

        {/* Which Institution Registers Taxpayers */}
        <section className="content-section">
          <h2>Which Institution Registers Taxpayers?</h2>
          <div className="institution-container">
            <div className="institution-card primary">
              <div className="institution-header">
                <Building size={24} />
                <h3>Rwanda Development Board (RDB)</h3>
              </div>
              <p>Primary registration for all businesses</p>
            </div>
            <div className="institution-card">
              <div className="institution-header">
                <Users size={24} />
                <h3>Rwanda Cooperatives Agency (RCA)</h3>
              </div>
              <p>Registration for cooperatives</p>
            </div>
            <div className="institution-card">
              <div className="institution-header">
                <Shield size={24} />
                <h3>Rwanda Revenue Authority (RRA)</h3>
              </div>
              <p>Direct registration for specific purposes</p>
            </div>
          </div>

          <div className="rra-registration">
            <h3>RRA Direct Registration</h3>
            <p>RRA registers taxpayers and provides TINs directly for:</p>
            <ul>
              <li>Local Government Taxes (LGT) and fees</li>
              <li>Non-business registration, for example for:
                <ul>
                  <li>Motor vehicle ownership</li>
                  <li>Tax Clearance Certificates (TCCs)</li>
                  <li>Non-governmental organisations (NGOs), after approval from Rwanda Governance Board (RGB)</li>
                  <li>Government institutions and projects</li>
                </ul>
              </li>
            </ul>
            <div className="note">
              <strong>Note:</strong> For all non-business registration purposes, visit any RRA office with a Rwanda National ID or a Passport.
            </div>
          </div>
        </section>

        {/* How to Register */}
        <section className="content-section">
          <h2>How Can Businesses Register as Taxpayers and Get a TIN?</h2>
          <div className="registration-info">
            <p>
              Business registration in Rwanda is carried out by the Office of the Registrar General (ORG) within the
              Rwanda Development Board (RDB). This is carried out online on the RDB portal rather than RRA in order
              to facilitate the aftercare and investment promotion facilities that RDB offers.
            </p>
            <p>
              According to the World Bank Ease of Doing Business Index 2019, Rwanda was the simplest and fastest
              country in East Africa in which to start a business.
            </p>

            <div className="contact-info">
              <h3>RDB Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={20} />
                  <span>KN 5 Rd, KG 9 Ave, Kigali, Rwanda</span>
                </div>
                <div className="contact-item">
                  <span>P.O. Box 6239</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>Tel (Local): 1415 | Tel (International): +250 727775170</span>
                </div>
                <div className="contact-item">
                  <Mail size={20} />
                  <span>Email: info@rdb.rw</span>
                </div>
                <div className="contact-item">
                  <ExternalLink size={20} />
                  <span>Website: https://rdb.rw/</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Registration */}
        <section className="content-section">
          <h2>What Are the Benefits of Business Registration?</h2>
          <div className="benefits-container">
            <p>As well as being a legal requirement, there are many advantages to registering as a business:</p>
            <div className="benefits-grid">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">
                    <CheckCircle size={20} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="limited-liability">
            <h3>What is Limited Liability?</h3>
            <p>
              Liability refers to the responsibility for any debts that are owed by the business. One of the advantages
              of registering a business as a company, as opposed to an individual enterprise, is that all debts incurred
              by the company are the responsibility of the company, they are not the legal liability of the shareholders
              or the directors.
            </p>
            <p>
              In this way, the liability of the people who run the company is said to be 'limited'. They are not
              responsible for all the debts of the company, only to the extent of the stake they have in the company.
            </p>
          </div>
        </section>

        {/* Registration Requirements */}
        <section className="content-section">
          <h2>When Must a Business Be Registered?</h2>
          <div className="requirement-card">
            <div className="requirement-icon">
              <Clock size={24} />
            </div>
            <div className="requirement-content">
              <h3>Registration Deadline</h3>
              <p>A business must register with the Register General when the business is established.</p>
            </div>
          </div>
        </section>

        {/* RDB System */}
        <section className="content-section">
          <h2>What is the RDB Business Registration System?</h2>
          <div className="system-info">
            <p>
              RDB has developed the business registration system to make it easier for taxpayers to register their business.
              The RDB system is an online portal through which all businesses are registered.
            </p>
            <div className="system-features">
              <div className="feature-card">
                <h4>Online Registration</h4>
                <p>Complete registration process online through the RDB portal</p>
              </div>
              <div className="feature-card">
                <h4>Assistance Available</h4>
                <p>RDB staff and BDF staff can help with registration at their offices</p>
              </div>
              <div className="feature-card">
                <h4>Call Center Support</h4>
                <p>Get help by calling RDB call centre toll-free on 1415</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Cost */}
        <section className="content-section">
          <h2>How Much Does It Cost to Register a Business?</h2>
          <div className="cost-info">
            <div className="cost-card free">
              <h3>Free Registration</h3>
              <p>It is free to register a business in Rwanda:</p>
              <ul>
                <li>Free to register online</li>
                <li>Free at RDB offices</li>
                <li>Free at BDF offices</li>
              </ul>
            </div>
            <div className="cost-card paid">
              <h3>Paid Services</h3>
              <p>Some private internet cafés offer assistance with business registration and can charge a fee for this service.</p>
            </div>
          </div>
        </section>

        {/* Business Categories */}
        <section className="content-section">
          <h2>What Are the Different Categories of Businesses?</h2>
          <div className="business-categories">
            <div className="category-card">
              <h3>Domestic Company</h3>
              <p>For domestic companies or for subsidiaries of foreign companies</p>
            </div>
            <div className="category-card">
              <h3>Individual Enterprise</h3>
              <p>For sole traders or partnerships and is the simplest way to start and conduct business in Rwanda. Typically refers to a business whose turnover is less than FRW 10,000 per day.</p>
            </div>
            <div className="category-card">
              <h3>Foreign Company</h3>
              <p>For companies which already exist and are registered in a foreign country that are undertaking business in Rwanda. This does not include domestic subsidiaries of foreign companies.</p>
            </div>
          </div>
        </section>

        {/* Domestic Company Types */}
        <section className="content-section">
          <h2>What Are the Different Types of 'Domestic' Company?</h2>
          <div className="company-types">
            {domesticCompanyTypes.map((companyType, index) => (
              <div key={index} className="company-type-card">
                <h3>{companyType.type}</h3>
                <p>{companyType.description}</p>
              </div>
            ))}
          </div>
          <div className="company-requirements">
            <h3>Registration Requirements</h3>
            <p>
              Companies limited by shares must register a chairman of the board, a managing director and at least one
              shareholder. However, these can all be the same person.
            </p>
          </div>
        </section>

        {/* Required Documents */}
        <section className="content-section">
          <h2>What Documents Are Needed to Register a Business?</h2>
          <div className="documents-container">
            <div className="document-category">
              <h3>'Domestic' Company</h3>
              <div className="minimal-list">
                {domesticDocuments.map((doc, index) => (
                  <div key={index} className="document-item">
                    <FileText size={16} />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="document-category">
              <h3>Individual 'Enterprise'</h3>
              <div className="minimal-list">
                {enterpriseDocuments.map((doc, index) => (
                  <div key={index} className="document-item">
                    <FileText size={16} />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="document-category">
              <h3>'Foreign' Company</h3>
              <div className="minimal-list">
                {foreignDocuments.map((doc, index) => (
                  <div key={index} className="document-item">
                    <FileText size={16} />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Activity Selection */}
        <section className="content-section">
          <h2>How Should the Type of 'Business Activity' Be Chosen?</h2>
          <div className="activity-info">
            <p>
              The RDB business registration system asks taxpayers to identify the type of business activities that they
              plan to conduct. This is not binding, taxpayers can at any time carry out business activities that they
              do not include here.
            </p>
            <p>
              However, it is important that this 'Business Activity' category is completed as accurately as possible
              when registering. This uses the International Standard Industrial Classification (ISIC), also used by
              the National Institute of Statistics (NISR), The National Bank of Rwanda (BNR) and the Ministry of
              Finance (MINECOFIN) to improve statistics and policy making.
            </p>
            <div className="activity-process">
              <h3>Selection Process</h3>
              <ol>
                <li>Choose the broad sector first</li>
                <li>Choose the more specific activity within that sector</li>
                <li>Select as many different activities as intended</li>
                <li>Choose one as the main business activity (largest share of value added)</li>
              </ol>
            </div>
            <div className="example-card">
              <h3>Example</h3>
              <p>
                <strong>Amahoro's Butchery Business:</strong> She intends to buy livestock and process the meat,
                selling to other shops as well as directly to consumers.
              </p>
              <ul>
                <li>Processing meat: 'C1010 - Processing and preserving of meat' (Manufacture sector)</li>
                <li>Selling to shops: 'G4630 – Wholesale of food, beverages and tobacco' (Wholesale)</li>
                <li>Direct to customers: 'G4721 – Retail sale of food in specialised stores' (Retail)</li>
              </ul>
              <p><strong>Main Activity:</strong> Processing of meat (greatest value added)</p>
            </div>
          </div>
        </section>

        {/* Tax Registration */}
        <section className="content-section">
          <h2>How Do Taxpayers Register for Different Tax Types?</h2>
          <div className="tax-registration">
            <div className="automatic-registration">
              <h3>Automatic Registration</h3>
              <ul>
                <li><strong>Income Tax:</strong> All businesses are immediately registered for Income Tax (PIT for individual businesses or CIT for companies)</li>
                <li><strong>Trading License Tax:</strong> All businesses must register for Trading License Tax (exempted for two years from registration date)</li>
              </ul>
            </div>
            <div className="conditional-registration">
              <h3>Conditional Registration</h3>
              <div className="conditional-item">
                <h4>VAT Registration</h4>
                <p>Path: 'General Info' → 'Request for Value Added Tax' → 'Would you like to request for VAT Certificate?' → 'Yes' → Enter expected turnover amount</p>
              </div>
              <div className="conditional-item">
                <h4>PAYE Registration</h4>
                <p>Path: 'Employment Info' → 'Does the company have employees?' → 'Yes' → Enter required details</p>
              </div>
            </div>
            <div className="additional-registration">
              <h3>Additional Tax Types</h3>
              <p>To register for any other tax types, or to register for any additional tax types in the future, call the RRA call centre on 3004 or visit any RRA office.</p>
            </div>
          </div>
        </section>

        {/* Tax Declaration Timeline */}
        <section className="content-section">
          <h2>When Must Taxpayers Start Declaring and Paying Taxes?</h2>
          <div className="timeline-info">
            <div className="timeline-card">
              <Clock size={24} />
              <div className="timeline-content">
                <h3>Declaration Requirements</h3>
                <p>
                  Tax declarations for all registered tax types must be submitted for tax periods from the date
                  the taxpayer was registered.
                </p>
                <p>
                  Even if there is no business activity within the first, or subsequent, tax periods, the declarations
                  must still be submitted to avoid penalties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="content-section">
          <h2>Step-by-Step Guide to Business Registration</h2>

          {/* Registration Process Flow Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>Business Registration Process Flow</h3>
            </div>
            <div className="registration-flow-diagram">
              <div className="flow-step">
                <div className="step-icon">
                  <Users size={24} />
                </div>
                <div className="step-content">
                  <h4>1. Account Creation</h4>
                  <p>Register on RDB system</p>
                </div>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-step">
                <div className="step-icon">
                  <FileText size={24} />
                </div>
                <div className="step-content">
                  <h4>2. Business Details</h4>
                  <p>Enter business information</p>
                </div>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-step">
                <div className="step-icon">
                  <Building size={24} />
                </div>
                <div className="step-content">
                  <h4>3. Company Type</h4>
                  <p>Select business structure</p>
                </div>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-step">
                <div className="step-icon">
                  <Shield size={24} />
                </div>
                <div className="step-content">
                  <h4>4. Document Upload</h4>
                  <p>Submit required documents</p>
                </div>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-step">
                <div className="step-icon">
                  <CreditCard size={24} />
                </div>
                <div className="step-content">
                  <h4>5. Payment</h4>
                  <p>Pay registration fees</p>
                </div>
              </div>

              <div className="flow-arrow">→</div>

              <div className="flow-step">
                <div className="step-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="step-content">
                  <h4>6. TIN Issuance</h4>
                  <p>Receive TIN from RRA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Types Diagram */}
          <div className="diagram-container">
            <div className="diagram-title">
              <h3>Business Types & Requirements</h3>
            </div>
            <div className="business-types-diagram">
              <div className="business-type">
                <div className="type-header">
                  <h4>Domestic Company</h4>
                  <span className="type-badge">Most Common</span>
                </div>
                <div className="type-requirements">
                  <div className="requirement-item">National ID/Passport</div>
                  <div className="requirement-item">Articles of Association</div>
                  <div className="requirement-item">Company Resolution</div>
                </div>
              </div>

              <div className="business-type">
                <div className="type-header">
                  <h4>Enterprise</h4>
                  <span className="type-badge">Simplified</span>
                </div>
                <div className="type-requirements">
                  <div className="requirement-item">National ID/Passport</div>
                </div>
              </div>

              <div className="business-type">
                <div className="type-header">
                  <h4>Foreign Company</h4>
                  <span className="type-badge">Branch</span>
                </div>
                <div className="type-requirements">
                  <div className="requirement-item">Power of Attorney</div>
                  <div className="requirement-item">Certificate of Incorporation</div>
                  <div className="requirement-item">Company Resolution</div>
                </div>
              </div>
            </div>
          </div>
          <div className="registration-steps">
            {registrationSteps.map((step, index) => (
              <div key={index} className="step-card">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                </div>
                <div className="step-content">
                  <p className="step-description">{step.description}</p>
                  <ul className="step-details">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section className="content-section">
          <div className="notice-card warning">
            <div className="notice-icon">
              <AlertTriangle size={24} />
            </div>
            <div className="notice-content">
              <h3>Important Notice</h3>
              <p>
                Once registered, the business can operate and declare and pay taxes as normal. The immediate
                obligations of the taxpayer are explained in the relevant tax sections of this handbook.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registration;
