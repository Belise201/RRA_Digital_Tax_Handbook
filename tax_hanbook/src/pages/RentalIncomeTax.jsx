import React from 'react';
import { FileText } from 'lucide-react';

const RentalIncomeTax = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Rental Income Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What is Rental Income Tax?</h2>
          <p className="content-paragraph">
            Rental Income Tax is a tax levied on the income generated from rented land and buildings. The land and buildings are referred to as the 'Immovable Property' and Rental Income Tax must be declared and paid on rented immovable properties in addition to Immovable Property Tax.
          </p>
        </section>

        <section className="content-section">
          <h2>Who must register for Rental Income Tax?</h2>
          <p className="content-paragraph">
            Any person or business who is not subject to corporate income tax and who receives income from a rented immovable property located in Rwanda, is required to register for Rental Income Tax.
          </p>
        </section>

        <section className="content-section">
          <h2>What is the taxable income for Rental Income Tax?</h2>
          <p className="content-paragraph">
            Rental Income Tax is not charged on the total (gross) rental income. Rental Income Tax allows for exemptions for expenses. This is intended to encourage landlords to provide high quality and well-maintained properties for their tenants.
          </p>
          <p className="content-paragraph">
            There are two different methods of calculating taxable income for Rental Income Tax, depending upon whether the taxpayer has taken out bank loans to fund the construction / purchase, or has no loan of the rented immovable property.
          </p>
          <p className="content-paragraph">
            Firstly, if the taxpayer has no loans relating to the immovable property, the taxable income is calculated by:
          </p>
          <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
            Taxable Income = gross rental income * 50%
          </p>
          <p className="content-paragraph">
            Secondly, if the taxpayer does have loans relating to the immovable property, in addition to the deduction of 50%, he or she can deduct the actual bank interest payments within the tax period. From the tax period 2019 onwards, the taxable income is calculated by:
          </p>
          <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
            Taxable Income = gross rental income * 50% – interest paid
          </p>
        </section>

        <section className="content-section">
          <h2>What are the rates of Rental Income Tax?</h2>
          <p className="content-paragraph">
            Rental Income Tax is a progressive tax. This means that there are different tax rates depending on taxpayer's taxable income, as described above. The groupings of taxable rental income are called tax brackets. The tax rates for each tax bracket are:
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0', border: '1px solid #e2e8f0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Annual taxable income</th>
                <th style={{ border: '1px solid #e2e8f0', padding: '0.75rem', textAlign: 'left' }}>Marginal tax rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Below FRW 180,000</td>
                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Between FRW 180,001 to FRW 1,000,000</td>
                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>20%</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Above FRW 1,000,001</td>
                <td style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>30%</td>
              </tr>
            </tbody>
          </table>
          <p className="content-paragraph">
            It is important to note that these tax rates are marginal. This means that for each taxpayer in each year: the first FRW 180,000 that the taxpayer earns is taxed at 0%, the next FRW 820,000 earned is taxed at 20% and any remaining income is taxed at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 70</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Lucie rents a house to tenants in the year 2019. She receives gross rental income of FRW 4,800,000 during the tax year. She does not have a bank loan for that house. Her taxable income in 2019 is therefore:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 4,800,000 * 50% = FRW 2,400,000.
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Based on her taxable rental income of FRW 2.4 million, the Rental Income Tax due can be calculated as:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              (FRW 180,000 * 0%) + (FRW 820,000 * 20%) + (FRW 1,400,000 * 30%) = FRW 0 + FRW 164,000 + FRW 420,000 = FRW 584,000.
            </p>
          </div>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 71</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Rukundo rents a house to tenants in the year 2019. He receives gross rental income of FRW 4,800,000 during the tax year. He has a bank loan for that house, and paid FRW 400,000 interest in the year 2019.
            </p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              His taxable rental income in 2019 is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 4,800,000 * 50% – FRW 400,000 = FRW 2,000,000.
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              Based on his taxable rental income of FRW 2 million, the Rental Income Tax due can be calculated as:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              (FRW 180,000 * 0%) + (FRW 820,000 * 20%) + (FRW 1,000,000 * 30%) = FRW 0 + FRW 164,000 + FRW 300,000 = FRW 464,000.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>When is the deadline to declare and pay Rental Income Tax?</h2>
          <p className="content-paragraph">
            Rental Income Tax is required to be declared and paid on an annual basis. The tax period is the calendar year, from 1st January until 31st December. Thus, the deadline to declare and pay Rental Income Tax is 31st January of the following year.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 72</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Lucie must declare and pay her annual Rental Income Tax declaration for the 2019 tax period, from 1st January 2019 until 31st December 2019, by the deadline of 31st January 2020.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Is it required to submit rental contracts to RRA?</h2>
          <p className="content-paragraph">
            The taxpayer is required to submit the rental contract, signed by the taxpayer and the tenant, to RRA within fifteen (15) days of the date the contract was signed.
          </p>
          <p className="content-paragraph">
            In the event of any amendment or termination of the rental contract, the taxpayer is required to notify RRA within 15 days, and submit the amended rental contract.
          </p>
          <p className="content-paragraph">
            There is no obligation of the tenant to submit the rental contract. However, tenants can help to ensure the tax compliance of their landlords by submitting their rental contracts to RRA at any time. Rental contracts can be submitted by the tenant to any RRA office or tax centre.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RentalIncomeTax;
