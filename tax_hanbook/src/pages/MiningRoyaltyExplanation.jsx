import React from 'react';
import { FileText } from 'lucide-react';

const MiningRoyaltyExplanation = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Explanation of Mining Royalty Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What is Mining Royalty Tax?</h2>
          <p className="content-paragraph">
            Mining Royalty Taxis a tax withheld from local mining operators by either a domestic mineral processing facility or an individual/entity exporting minerals from Rwanda. Tax on Minerals ensures that all Rwandans share in the benefits from the country's natural resources when these are taken out of Rwanda.
          </p>
          <p className="content-paragraph">
            Mining Royalty Tax is a type of withholding tax but cannot be claimed back in Income Tax declarations.
          </p>
        </section>

        <section className="content-section">
          <h2>Who must register for Mining Royalty Tax?</h2>
          <p className="content-paragraph">
            Any taxpayer who qualifies to be a local mineral processing facility or a person who exports minerals from Rwanda must register for Mining Royalty Tax. However, if the miner and the exporter constitute the same operator, this person pays both the Mining Royalty Tax and Export Tax at the time of export.
          </p>
          <p className="content-paragraph">
            It is important to note that all mining companies operating in Rwanda are required to have valid issued by Rwanda Mines, Petroleum and Gas Board (RMB).
          </p>
        </section>

        <section className="content-section">
          <h2>What if the minerals are not exported?</h2>
          <p className="content-paragraph">
            A taxpayer who buys minerals domestically within Rwanda has to pay Mining Royalty Tax.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the different types of minerals?</h2>
          <p className="content-paragraph">
            For the purposes of Mining Royalty Tax, RRA considers six different types of minerals:
          </p>
          <ul className="content-list">
            <li>Category of Base metals</li>
            <li>Category of Gemstones</li>
            <li>Category of Platinum group metals</li>
            <li>Category of Rare earth elements</li>
            <li>Category of Energy minerals</li>
            <li>Category of Gold</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What is the valuation method of Mining Royalty Tax?</h2>
          <p className="content-paragraph">
            There are two types of valuation method for Mining Royalty Tax: norm value and gross value.
          </p>
          <p className="content-paragraph">
            Norm value means the value of minerals on the international market as at the date of grant to the dealer in minerals of a certificate for the sale of such minerals, excluding processing costs approved by the competent authority.
          </p>
          <p className="content-paragraph">
            Gross Value means the value of minerals before deducting expenses associated with the processing thereof in a local mineral processing facility.
          </p>
        </section>

        <section className="content-section">
          <h2>What is the rate of Mining Royalty Tax?</h2>
          <p className="content-paragraph">
            The rates of Mining Royalty Tax depend upon the type of minerals:
          </p>
          <ul className="content-list">
            <li>3% of the norm value for the mineral category of base metals;</li>
            <li>2% of the gross value for the category of gemstones;</li>
            <li>2% of the norm value for the category of platinum group metals;</li>
            <li>2% of the norm value for the category of rare earth elements;</li>
            <li>3% of the norm value for the category of energy minerals;</li>
            <li>0.5% of the norm value for the category of gold.</li>
          </ul>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 50</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              ABC Mining Ltd exported 340kg of a product falling in base metals. The value of minerals on the international market is equivalent to FRW 16,000 per kg. Therefore, the norm value is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              340 kg * FRW 16,000 per kg = FRW 5,440,000
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              The tax rate for base metals is 3% of the norm value. Therefore, the Mining Royalty Tax due is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 5,440,000 * 3% = FRW 163,200.
            </p>
          </div>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 51</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              XYZ Mining Ltd is selling 50kg of a product falling in gemstones category on local market. The gross value is calculated at FRW 4,200,000. The tax rate for gemstones category is 2% of the gross value. Therefore, the Mining Royalty Tax Due is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 4,200,000 * 2% = FRW 84,000
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>When is the deadline to declare and pay Mining Royalty Tax?</h2>
          <p className="content-paragraph">
            Mining Royalty Tax are declared and paid on a monthly basis. A taxpayer declares and pays any mining royalty tax that he or she has withheld within 15 days following the month in which the tax was withheld.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the contact details for the Rwanda Mines, Petroleum and Gas Board?</h2>
          <p className="content-paragraph">
            The Rwanda Mines, Petroleum and Gas board is charged with implementing national policies, laws, and strategies related to mines, petroleum and gas.
          </p>
          <div style={{ margin: '2rem 0', padding: '1.5rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Rwanda Mines, Petroleum and Gas Board (RMB)</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              KN 7 Ave, Nyarugenge, Kigali, Rwanda
            </p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              P.O Box 937
            </p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Tel (Local): 2930
            </p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Tel (International): +250 788 386 220
            </p>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Email: info@rmb.gov.rw
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MiningRoyaltyExplanation;
