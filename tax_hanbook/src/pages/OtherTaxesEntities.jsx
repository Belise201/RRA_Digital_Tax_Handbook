import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Building, DollarSign, Gift, Shield, Scale, Car, Globe, Laptop, AlertTriangle, FileText, Monitor, Receipt } from 'lucide-react';

const OtherTaxesEntities = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Other Taxes & Entities",
      description: "Specialized taxes and local government tax obligations",
      mainTopics: [
        {
          title: "Decentralised Entities (Local Government)",
          items: [
            { path: '/local-government-taxes-explanation', label: 'Decentralised Entities – Introduction', icon: <Building size={16} />, description: 'Overview of local government taxes and fees' },
            { path: '/immovable-property-tax', label: 'Immovable Property Tax', icon: <Building size={16} />, description: 'Tax on immovable property' },
            { path: '/trading-license-tax', label: 'Trading License Tax', icon: <Building size={16} />, description: 'Tax for business trading licenses' },
            { path: '/rental-income-tax', label: 'Rental Income Tax', icon: <Building size={16} />, description: 'Tax on rental income' },
            { path: '/fees-decentralised-entities', label: 'Fees Levied by Decentralised Entities', icon: <Building size={16} />, description: 'Various fees charged by local government' },
            { path: '/lgt-registration', label: 'Registering for LGT System', icon: <Laptop size={16} />, description: 'How to register for local government taxes' },
            { path: '/lgt-declaration', label: 'Declaring via LGT System', icon: <Laptop size={16} />, description: 'How to declare local government taxes' },
            { path: '/lgt-penalties', label: 'LGT Penalties and Fines', icon: <AlertTriangle size={16} />, description: 'Penalties for local government tax non-compliance' },
          ]
        },
        {
          title: "Excise Duty",
          items: [
            { path: '/excise-duty-explanation', label: 'Excise Duty – Explanation', icon: <DollarSign size={16} />, description: 'Understanding Excise Duty obligations' },
            { path: '/excise-duty-declaration', label: 'Excise Duty – Declaring', icon: <FileText size={16} />, description: 'How to declare Excise Duty' },
          ]
        },
        {
          title: "Gaming Taxes",
          items: [
            { path: '/gaming-taxes-explanation', label: 'Gaming Taxes – Explanation', icon: <Gift size={16} />, description: 'Understanding gaming tax obligations' },
            { path: '/gaming-taxes-declaration', label: 'Gaming Taxes – Declaring', icon: <FileText size={16} />, description: 'How to declare gaming taxes' },
            { path: '/gaming-taxes-penalties', label: 'Gaming Taxes – Penalties and Fines', icon: <AlertTriangle size={16} />, description: 'Penalties for gaming tax non-compliance' },
          ]
        },
        {
          title: "Mining Royalty Tax",
          items: [
            { path: '/mining-royalty-explanation', label: 'Mining Royalty Tax – Explanation', icon: <Shield size={16} />, description: 'Understanding mining royalty obligations' },
            { path: '/mining-royalty-declaration', label: 'Mining Royalty Tax – Declaring', icon: <FileText size={16} />, description: 'How to declare mining royalty tax' },
          ]
        },
        {
          title: "Capital Gains Tax",
          items: [
            { path: '/capital-gains-tax-explanation', label: 'Capital Gains Tax – Explanation', icon: <Scale size={16} />, description: 'Understanding capital gains tax obligations' },
            { path: '/capital-gains-tax-declaration', label: 'Capital Gains Tax – Declaring', icon: <FileText size={16} />, description: 'How to declare capital gains tax' },
          ]
        },
        {
          title: "Road Maintenance Levy",
          items: [
            { path: '/road-maintenance-explanation', label: 'Road Maintenance Levy – Explanation', icon: <Car size={16} />, description: 'Understanding road maintenance levy' },
            { path: '/road-maintenance-declaration', label: 'Road Maintenance Levy – Declaring', icon: <FileText size={16} />, description: 'How to declare road maintenance levy' },
          ]
        },
        {
          title: "Tourism Tax",
          items: [
            { path: '/tourism-tax-explanation', label: 'Tourism Tax – Explanation', icon: <Globe size={16} />, description: 'Understanding tourism tax obligations' },
            { path: '/tourism-tax-declaration', label: 'Tourism Tax – Declaring', icon: <FileText size={16} />, description: 'How to declare tourism tax' },
          ]
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Building size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                {currentContent.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="landing-page-intro">
          <p className="content-paragraph">
            This section covers specialized taxes and local government tax obligations in Rwanda. From decentralized entities (local government) taxes to sector-specific taxes like gaming, mining, and tourism, you'll find comprehensive information about these specialized tax obligations.
          </p>
        </div>

        {currentContent.mainTopics.map((topic, topicIndex) => (
          <section key={topicIndex} className="content-section">
            <h2 className="content-heading">{topic.title}</h2>
            <div className="topic-grid">
              {topic.items.map((item, itemIndex) => (
                <div key={itemIndex} className="topic-card">
                  <div className="topic-card-header">
                    <div className="topic-card-icon">
                      {item.icon}
                    </div>
                    <h3 className="topic-card-title">{item.label}</h3>
                  </div>
                  <p className="topic-card-description">{item.description}</p>
                  <a href={item.path} className="topic-card-link">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="content-section">
          <h2 className="content-heading">Local Government Tax System (LGT)</h2>
          <div className="lgt-info">
            <div className="lgt-card">
              <div className="lgt-icon">
                <Laptop size={24} />
              </div>
              <h3>LGT System</h3>
              <p>The Local Government Tax system is used for declaring and paying taxes and fees to decentralized entities (local government).</p>
              <a href="https://localgov.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="lgt-link">
                Access LGT System →
              </a>
            </div>
            <div className="lgt-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Immovable Property Tax</li>
                <li>Trading License Tax</li>
                <li>Rental Income Tax</li>
                <li>Various Local Government Fees</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2 className="content-heading">Quick Navigation</h2>
          <div className="quick-nav-grid">
            <a href="/core-taxes-declarations" className="quick-nav-card">
              <div className="quick-nav-icon">
                <Receipt size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Core Taxes & Declarations</h3>
                <p>Main tax types and declarations</p>
              </div>
            </a>
            <a href="/customs" className="quick-nav-card">
              <div className="quick-nav-icon">
                <Globe size={20} />
              </div>
              <div className="quick-nav-content">
                <h3>Customs</h3>
                <p>Import and export procedures</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OtherTaxesEntities;
