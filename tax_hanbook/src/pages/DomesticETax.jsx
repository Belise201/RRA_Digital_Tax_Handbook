import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const DomesticETax = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Domestic Taxes and E-Tax Summary</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Which tax types are included in Domestic Taxes?</h2>
          <p className="content-paragraph">
            Domestic taxes include the following tax types:
          </p>
          <ul className="content-list">
            <li>Income Tax, including:
              <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
                <li>Personal Income Tax (PIT)</li>
                <li>Corporate Income Tax (CIT)</li>
              </ul>
            </li>
            <li>Pay As You Earn (PAYE)</li>
            <li>Value Added Tax (VAT)</li>
            <li>Excise Duty</li>
            <li>Withholding Taxes (WHT)</li>
            <li>Gaming Tax</li>
            <li>Mining Royalty Tax</li>
            <li>Capital Gains Tax</li>
            <li>Road Maintenance Levy</li>
            <li>Tourism Tax</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What is E-Tax?</h2>
          <p className="content-paragraph">
            Each of the domestic taxes can be declared using E-Tax. This is an online portal that makes it easier for taxpayers to declare domestic taxes. This can be done online. The process of declaring using E-Tax is similar for all domestic taxes.
          </p>
        </section>

        <section className="content-section">
          <h2>What is M-Declaration?</h2>
          <p className="content-paragraph">
            The 'Flat Tax', 'Lump Sum' and 'motor vehicle' regimes of Income Tax (PIT and CIT) can be declared on mobile phones using M-Declaration.
          </p>
        </section>

        <section className="content-section">
          <h2>How do taxpayers register for E-Tax?</h2>
          <p className="content-paragraph">
            Taxpayers are automatically registered for E-Tax when their business is registered.
          </p>
        </section>

        <section className="content-section">
          <h2>What if taxpayers do not know their E-Tax password?</h2>
          <p className="content-paragraph">
            If a taxpayer does not know their E-Tax password, reset it by clicking on 'Forgot Password' or visiting RRA offices.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the causes of an annexure not validating?</h2>
          <p className="content-paragraph">
            When completing annexures, ensure to:
          </p>
          <ul className="content-list">
            <li>'enable content' after opening the spreadsheet.</li>
            <li>use the required date format (dd/mm/yyyy) for the dates entered and the computer's settings.</li>
            <li>avoid blank cells for rows that have been started</li>
            <li>click to 'Validate'.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What if the particular tax type or tax period is not available for declaration?</h2>
          <p className="content-paragraph">
            If the tax type and tax period for the relevant declaration is not available on the 'Document Details' screen, the taxpayer can request for it by calling the RRA call centre toll-free 3004 or visiting RRA offices.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the causes of a declaration not submitting?</h2>
          <p className="content-paragraph">
            When submitting declarations: the annexures must be uploaded, equal to the declaration form, and all certified.
          </p>
        </section>

        <section className="content-section">
          <h2>Step-by-Step guide to using E-Tax to declare and pay domestic taxes</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 1: Log-in to E-Tax</h3>
          <p className="content-paragraph">
            Access the E-Tax website at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a> and login to the E-Tax system using your TIN and password.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 2: Download, complete and save annexures</h3>
          <p className="content-paragraph">
            In E-Tax, hover the mouse over 'Annexure Downloads', and click a tax type to download the relevant annexures.
          </p>
          <p className="content-paragraph">
            Enter the required information and click 'Validate' to save each annexure tab separately in the C:/RRA folder.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 3: Complete the declaration form</h3>
          <p className="content-paragraph">
            In E-Tax, choose the applicable declaration and enter the required aggregated values for the tax period. Click to 'Save' the declaration and automatically calculate the grey calculation boxes, including the tax due.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 4: Upload annexures, compare with the declaration form and submit the declaration</h3>
          <p className="content-paragraph">
            Upload the annexures from the C:/RRA folder and compare the values with the declaration form. If these are equal and correct, certify and submit the declaration.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step 5: View acknowledgement receipt and pay taxes</h3>
          <p className="content-paragraph">
            Note the RRA reference number and pay all tax due with E-Payment, Telecom Mobile Money, Mobicash, or at a bank.
          </p>
        </section>

        <section className="content-section">
          <h2>Gaming Taxes Summary</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What are Gaming Taxes?</h3>
          <p className="content-paragraph">
            Gaming taxes are paid on transactions of gambling proceeds. This includes Gaming Tax and Withholding Tax of 25% on Gambling Proceeds 40% (Tax on Gaming).
          </p>
          <p className="content-paragraph">
            These are declared and paid by the source of the betting company. The player is able to claim the tax paid back in their Income Tax declarations.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Who must register for Gaming Taxes?</h3>
          <p className="content-paragraph">
            Any taxpayer making payments of gambling proceeds must register for both Gaming Tax and WOP-Gaming.
          </p>
          <p className="content-paragraph">
            Gambling proceeds are the difference between the winnings of a player and the amount of money invested by the player from the start until the end of the game.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What are the rates of Gaming Tax and WOP-Gaming?</h3>
          <p className="content-paragraph">
            All gambling proceeds are subject to Gaming Tax of 40%.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>When is the deadline to declare and pay Gaming Taxes?</h3>
          <p className="content-paragraph">
            Gaming Tax and WOP-Gaming are declared on a monthly basis. These declarations must each be submitted and any tax due paid by the 15th of the following month.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step-by-Step guide to declaring and paying Gaming Taxes</h3>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Withhold taxes on gambling proceeds payments</p>
          <p className="content-paragraph">
            Before making payments of gambling proceeds, withhold the Gaming Tax and the Withholding Tax of 25% on Gambling Proceeds and retain the transaction invoices.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
          <p className="content-paragraph">
            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Download, complete, validate and save annexures</p>
          <p className="content-paragraph">
            Download, complete, validate and save the applicable Annexures.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Complete declaration form, upload annexures and submit</p>
          <p className="content-paragraph">
            Complete the declaration form, upload annexures, confirm accuracy and submit for each of the Gaming Tax.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: View acknowledgement receipt and pay taxes</p>
          <p className="content-paragraph">
            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
          </p>
        </section>

        <section className="content-section">
          <h2>Mining Royalty Tax Summary</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Who must register for Mining Royalty Tax?</h3>
          <p className="content-paragraph">
            Any taxpayer who purchases minerals must register for Mining Royalty Tax.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the rate of Mining Royalty Tax?</h3>
          <p className="content-paragraph">
            The rates of Mining Royalty Tax are:
          </p>
          <ul className="content-list">
            <li>3% of the norm value for the mineral category of base metals;</li>
            <li>2% of the gross value for the category of gemstones;</li>
            <li>2% of the norm value for the category of platinum group metals;</li>
            <li>2% of the norm value for the category of rare earth elements;</li>
            <li>3% of the norm value for the category of energy minerals;</li>
            <li>0.5% of the norm value for the category of gold.</li>
          </ul>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the valuation method of Mining Royalty Tax?</h3>
          <p className="content-paragraph">
            The valuation methods of Mining Royalty Tax are norm value and gross value.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>When must Mining Royalty Tax be declared and paid?</h3>
          <p className="content-paragraph">
            Mining Royalty Tax is declared on a monthly basis. These declarations must each be submitted and any tax due paid by the 15th of the following month.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step-by-Step guide to declaring and paying Mining Royalty Tax</h3>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Login to E-Tax</p>
          <p className="content-paragraph">
            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Download, complete, validate and save annexures</p>
          <p className="content-paragraph">
            Download, complete, validate and save the applicable Annexures.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Complete declaration form, upload annexures and submit</p>
          <p className="content-paragraph">
            Complete the declaration form, upload annexures, confirm accuracy and submit the tax declaration.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: View acknowledgement receipt and pay taxes</p>
          <p className="content-paragraph">
            Note the RRA reference number and pay all tax due with E-Payment, E-Banking, MTN/Airtel Mobile Money, Mobicash, or at a bank.
          </p>
        </section>

        <section className="content-section">
          <h2>Capital Gains Tax Summary</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is Capital Gains Tax?</h3>
          <p className="content-paragraph">
            Capital Gains Tax applies to the profit from the sale or transfer of shares, licenses, debt instruments, options, guarantees and similar assets.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Who must register for Capital Gains Tax?</h3>
          <p className="content-paragraph">
            The tax on profit from the sale of shares, licenses, debt instruments, options, guarantees and similar assets is withheld, declared and paid by the company whose shares were sold.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the tax rate of Capital Gains Tax?</h3>
          <p className="content-paragraph">
            The tax rate of Capital Gains Tax is 10%, applied to the profit from the sale of shares, licenses, debt instruments, options, guarantees and similar assets, where profit equals sale price minus purchase price.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>When are the Capital Gains Tax periods and deadlines?</h3>
          <p className="content-paragraph">
            Capital Gains tax must be declared and paid by the 15th of the month after the transaction was made.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step-by-Step guide to declaring and paying Capital Gains Tax</h3>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Withhold tax on taxable payment transactions</p>
          <p className="content-paragraph">
            Before making payments subject to capital gains, withhold the tax due and retain the transaction invoices.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
          <p className="content-paragraph">
            Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Download, complete, validate and save annexure</p>
          <p className="content-paragraph">
            Download, complete, validate and save the applicable Annexure.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Complete declaration form, upload annexures and submit</p>
          <p className="content-paragraph">
            Complete the declaration form, upload annexure, confirm accuracy and submit the Capital Gains declaration.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: View acknowledgement receipt and pay taxes</p>
          <p className="content-paragraph">
            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
          </p>
        </section>

        <section className="content-section">
          <h2>Road Maintenance Levy Summary</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is Road Maintenance Levy?</h3>
          <p className="content-paragraph">
            Road Maintenance Levy is a fee collected on taxable motor vehicles to maintain and develop roads.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Who must register for Road Maintenance Levy?</h3>
          <p className="content-paragraph">
            There is no separate registration process for the Road Maintenance Levy for eligible motor vehicles, as their registration information already exists in RRA systems. Owners of eligible motor vehicles are automatically registered.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the rate of Road Maintenance Levy?</h3>
          <p className="content-paragraph">
            The Road Maintenance Levy is an annual fixed amount applied to eligible motor vehicle types, as shown in the table below:
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Category</th>
                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Levy Amount (FRW)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Car</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>50,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Jeep</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>50,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Pick-up</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>100,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Microbus</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>100,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Minibus</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>100,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Bus</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>100,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Truck</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>120,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Half-trailer</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>120,000</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Trailer</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>150,000</td></tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>When are the Road Maintenance Levy tax periods and deadlines?</h3>
          <p className="content-paragraph">
            Road Maintenance Levy is paid annually and due throughout the current fiscal year, with the final payment deadline on 31st December.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step-by-Step guide to declaring and paying Road Maintenance Levy.</h3>
          <p className="content-paragraph">
            Road Maintenance Levy is declared through E-Tax, M-Declaration, and on RRA Website. <Link to="/road-maintenance-declaration" className="content-link">(check on Declaring Road Maintenance Levy)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Tourism Tax Summary</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is Tourism Tax?</h3>
          <p className="content-paragraph">
            Tourism Tax is a levy imposed on accommodation services, which involve providing a room or space for sleeping or resting.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Who must register for Tourism Tax?</h3>
          <p className="content-paragraph">
            A provider of room or place to sleep or rest.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the rate of Tourism Tax?</h3>
          <p className="content-paragraph">
            The rate of the Tourism Tax on accommodation is set at 3% of the amount paid or payable for accommodation, exclusive of value added tax.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>When are the Tourism Tax periods and deadlines?</h3>
          <p className="content-paragraph">
            The Tourism Tax has a monthly period and is due by 15th of the following month.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step-by-Step guide to declaring and paying Tourism Tax.</h3>
          <p className="content-paragraph">
            Tourism Tax is declared through E-Tax. <Link to="/tourism-tax-declaration" className="content-link">(check on Declaring Tourism Tax)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Decentralised Entities Taxes and Fees Summary</h2>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Which tax types are included in Decentralised Entities Taxes and fees?</h3>
          <p className="content-paragraph">
            There are four types of Decentralised Entities Taxes:
          </p>
          <ul className="content-list">
            <li>Immovable Property Tax</li>
            <li>Trading License Tax</li>
            <li>Rental Income Tax</li>
            <li>Sale of Immovable Property Tax</li>
          </ul>
          <p className="content-paragraph">
            There are also a wide range of Decentralised Entities fees including Service Fees and fees for a range of services or authorisations required from Districts.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Who must register for Decentralised Entities Taxes and Fees?</h3>
          <p className="content-paragraph">
            Any person or company who owns or leases land or property, who owns a profit-oriented business of any size, receives rental income from land or property, or fulfils any of the criteria required for Decentralised Entities Taxes and fees is required to register for Decentralised Entities Taxes and fees.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the LGT system?</h3>
          <p className="content-paragraph">
            Each of the Decentralised Entities Taxes listed above, and many of the Decentralised Entities fees, must be declared using the Local Government Taxes (LGT) system. The LGT system is an online portal designed to make it easier for taxpayers to declare Decentralised Entities Taxes and fees. This can be done online, or with assistance from a RRA officer.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>How do taxpayers register and login to the LGT system?</h3>
          <p className="content-paragraph">
            Taxpayers must visit any RRA offices with either a Rwandan ID or Passport to register with the LGT system.
          </p>
          <p className="content-paragraph">
            Access the LGT system at <a href="https://localgov.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://localgov.rra.gov.rw</a> and login using the TIN/Username and LGT system password.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What if taxpayers do not know their LGT system password?</h3>
          <p className="content-paragraph">
            If a taxpayer does not know their password, it can be reset by clicking 'Forgot Password' on the LGT system login and receiving a new password by SMS or email.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What if the taxpayer cannot find the correct Decentralised Entities Taxes or fee on the LGT system?</h3>
          <p className="content-paragraph">
            If a taxpayer wishes to declare a particular Decentralised Entities Taxes or fee, or tax period, and they cannot find it or are not registered for that Decentralised Entities Taxes or fee, the taxpayer can request for it by calling the RRA Call Centre for free on 3004 or visit nearest RRA office.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Which third parties also collect Decentralised Entities fees?</h3>
          <p className="content-paragraph">
            Ngali Holdings Ltd is mandated to support RRA in collecting all Decentralised Entities fees. MISIC also collects parking fees.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the rate for Immovable Property Tax?</h3>
          <p className="content-paragraph">
            Any owner of land and buildings must register for Immovable Property Tax. The immovable property is levied on an annual basis on the surface of a plot of land, and, if there is a building on a plot of land, also the market value of the building(s) and land. The tax rate on the surface of a land ranges between FRW 0 to FRW 80 per square metre. Exemptions from Immovable Property Tax can apply to properties belonging to vulnerable groups, public entities, and foreign diplomatic missions. Exemptions from the land component can apply for land without basic infrastructure and the first 20,000m2 of land used for agriculture and livestock. The building component can be exempted for the first residential building of the owner and the commonly owned portions of condominiums.
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the rate for Trading License Tax?</h3>
          <p className="content-paragraph">
            Any person or business conducting business activities must register for Trading License Tax. Depending upon turnover and location, each business or motor vehicle must pay yearly or quarterly Trading License Tax as per below table:
          </p>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What is the rate for Rental Income Tax?</h3>
          <p className="content-paragraph">
            Any person receiving rental income on immovable properties must register for Rental Income Tax. 50% of income is exempt.
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Annual taxable rental income</th>
                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Marginal tax rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 0 – FRW 180,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>0%</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 180,001 – FRW 1,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>20%</td></tr>
              <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Above FRW 1,000,001</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>30%</td></tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>What does the list of Decentralised Entities fees include?</h3>
          <ul className="content-list">
            <li>Fees charged on parking.</li>
            <li>Fees charged on public parking.</li>
            <li>Parking fees on boats.</li>
            <li>Fees on small-scale quarry exploitation</li>
            <li>Fees on civil marriage conducted on days other than official business days.</li>
            <li>Fees on services and documents of immovable property.</li>
            <li>Fees on official certificates of a decentralized entity.</li>
            <li>Fees on authorisation to make or burn clay bricks, tiles, or charcoal.</li>
            <li>Fees on advertising.</li>
            <li>Fees on signpost without advertisement.</li>
            <li>Fees on boat number plates.</li>
            <li>Fees on bicycle number plates.</li>
            <li>Fees on communication towers.</li>
            <li>Fees on transport of materials from quarries and forests.</li>
          </ul>

          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Step-by-step guide to declaring and paying Decentralised Entities Taxes and fees</h3>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Login to the LGT System</p>
          <p className="content-paragraph">
            Access the LGT system at <a href="https://localgov.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://localgov.rra.gov.rw</a> and login using the TIN/Username and LGT system password.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Select the correct Decentralised Entities Taxes or fee to declare</p>
          <p className="content-paragraph">
            For Decentralised Entities Taxes, click 'Declaration' and the drop-down taxes option. Then choose the tax type and tax period that is being declared and click 'Submit'. Finally, click on the document number of the applicable declaration.
          </p>
          <p className="content-paragraph">
            For fees, click 'Fee Payment Ticket' and the service type, and select the correct fee from the drop-down menus.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Complete declaration form and submit</p>
          <p className="content-paragraph">
            Enter the required information in the declaration form. Where necessary, click 'Calculate Tax', 'Continue with Annexure' or 'Compare with Declaration' then 'Submit'.
          </p>

          <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: View payment details via the Acknowledgement Receipt, email or SMS, and pay all taxes and fees due</p>
          <p className="content-paragraph">
            Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DomesticETax;

