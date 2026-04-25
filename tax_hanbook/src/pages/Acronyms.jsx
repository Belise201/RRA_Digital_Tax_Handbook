import { FileText } from 'lucide-react';

const Acronyms = () => {
  const acronyms = [
    { acronym: 'AEO', meaning: 'Authorised Economic Operator' },
    { acronym: 'AEOI', meaning: 'Automatic Exchange of Information' },
    { acronym: 'AfCFTA', meaning: 'African Continental Free Trade Area' },
    { acronym: 'AUL', meaning: 'African Union Levy' },
    { acronym: 'BDF', meaning: 'Business Development Fund' },
    { acronym: 'BNR', meaning: 'National Bank of Rwanda' },
    { acronym: 'BRD', meaning: 'Development Bank of Rwanda' },
    { acronym: 'CBHI', meaning: 'Community Based Health Insurance' },
    { acronym: 'CD', meaning: 'Corps Diplomatic' },
    { acronym: 'CET', meaning: 'Common External Tariff' },
    { acronym: 'CG', meaning: 'Commissioner General' },
    { acronym: 'CIF', meaning: 'Cost, Insurance and Freight' },
    { acronym: 'CIT', meaning: 'Corporate Income Tax' },
    { acronym: 'CMA', meaning: 'Customs Management Act' },
    { acronym: 'COMESA', meaning: 'Common Market of Eastern and Southern Africa' },
    { acronym: 'CRS', meaning: 'Common Reporting Standard' },
    { acronym: 'CSD', meaning: 'Customs Services Department' },
    { acronym: 'DAD', meaning: 'Dédouanement à Domicile' },
    { acronym: 'DC', meaning: 'Deputy Commissioner' },
    { acronym: 'DCG', meaning: 'Deputy Commissioner General' },
    { acronym: 'DMC', meaning: 'Declaration de Mise à la Consommation' },
    { acronym: 'DPW', meaning: 'Doubai Port World' },
    { acronym: 'DRC', meaning: 'Democratic Republic of Congo' },
    { acronym: 'DTD', meaning: 'Domestic Taxes Department' },
    { acronym: 'EAC', meaning: 'East African Community' },
    { acronym: 'EBM', meaning: 'Electronic Billing Machine' },
    { acronym: 'EIS', meaning: 'Electronic Invoicing System' },
    { acronym: 'EO', meaning: 'Executive Organ' },
    { acronym: 'EOI', meaning: 'Exchange of Information' },
    { acronym: 'EOIR', meaning: 'Exchange of Information on Request' },
    { acronym: 'FER', meaning: 'Fonds d\'Entretien Routier' },
    { acronym: 'FOB', meaning: 'Free On Board' },
    { acronym: 'FRW', meaning: 'Franc Rwandais' },
    { acronym: 'HF', meaning: 'Handling Fee' },
    { acronym: 'IDL', meaning: 'Infrastructure Development Levy' },
    { acronym: 'IGO', meaning: 'Inter-Governmental Organisation' },
    { acronym: 'IQP', meaning: 'Instalment Quarterly Payment' },
    { acronym: 'IT', meaning: 'Immatriculation Temporaire' },
    { acronym: 'LGT', meaning: 'Local Government Taxes' },
    { acronym: 'MINAFFET', meaning: 'Ministry of Foreign Affairs, Cooperation and East African Community' },
    { acronym: 'MINECOFIN', meaning: 'Ministry of Finance and Economic Planning' },
    { acronym: 'MINICOM', meaning: 'Ministry of Trade and Industry' },
    { acronym: 'MININFRA', meaning: 'Ministry of Infrastructure' },
    { acronym: 'MINIRENA', meaning: 'Ministry of Natural Resources' },
    { acronym: 'MSIC', meaning: 'Millennium Savings & Investment Cooperative' },
    { acronym: 'MTN', meaning: 'Mobile Telephone Networks' },
    { acronym: 'MVF', meaning: 'Motor Vehicle Registration Fee' },
    { acronym: 'NGO', meaning: 'Non-Governmental Organisation' },
    { acronym: 'NID', meaning: 'National Identification' },
    { acronym: 'NISR', meaning: 'National Institute of Statistics Rwanda' },
    { acronym: 'OECD', meaning: 'Organisation for Economic Co-operation and Development' },
    { acronym: 'ORG', meaning: 'Office of the Registrar General' },
    { acronym: 'OS', meaning: 'Operating System' },
    { acronym: 'OSBP', meaning: 'One-Stop Border Post' },
    { acronym: 'PAYE', meaning: 'Pay As You Earn' },
    { acronym: 'PCA', meaning: 'Post-Clearance Audit' },
    { acronym: 'PIT', meaning: 'Personal Income Tax' },
    { acronym: 'PSF', meaning: 'Private Sector Federation' },
    { acronym: 'QIF', meaning: 'Quality Inspection Fee' },
    { acronym: 'RAMA', meaning: 'Rwandaise d\'Assurance Maladie' },
    { acronym: 'RCA', meaning: 'Rwanda Cooperatives Authority' },
    { acronym: 'RDB', meaning: 'Rwanda Development Board' },
    { acronym: 'RECTS', meaning: 'Rwanda Electronic Cargo Tracking System' },
    { acronym: 'ReSW', meaning: 'Rwanda electronic Single Window' },
    { acronym: 'RGB', meaning: 'Rwanda Governance Board' },
    { acronym: 'RICA', meaning: 'Rwanda Inspectorate, Competition and Consumer Protection Authority' },
    { acronym: 'RIED', meaning: 'Revenue Investigation and Enforcement Dept' },
    { acronym: 'RMB', meaning: 'Rwanda Mines, Petroleum and Gas Board' },
    { acronym: 'RMF', meaning: 'Road Maintenance Fund' },
    { acronym: 'RRA', meaning: 'Rwanda Revenue Authority' },
    { acronym: 'RSSB', meaning: 'Rwanda Social Security Board' },
    { acronym: 'SMS', meaning: 'Short Message Service' },
    { acronym: 'SRL', meaning: 'Strategic Reserves Levy' },
    { acronym: 'TCC', meaning: 'Tax Clearance Certificates' },
    { acronym: 'TIN', meaning: 'Taxpayer Identification Number' },
    { acronym: 'TP', meaning: 'Transfer Pricing' },
    { acronym: 'UN', meaning: 'United Nations' },
    { acronym: 'USD', meaning: 'United States Dollars' },
    { acronym: 'USSD', meaning: 'Unstructured Supplementary Service Data' },
    { acronym: 'VAT', meaning: 'Value Added Tax' },
    { acronym: 'VDS', meaning: 'Voluntary Disclosure Scheme' },
    { acronym: 'VSDC', meaning: 'Virtual Sales Data Controller' },
    { acronym: 'WHT', meaning: 'Withholding Tax' },
    { acronym: 'WOP', meaning: 'Withholding on Payments' }
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Acronyms</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="acronyms-table-container">
            <table className="acronyms-table">
              <thead>
                <tr>
                  <th>Acronym</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                {acronyms.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.acronym}</strong></td>
                    <td>{item.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Acronyms;
