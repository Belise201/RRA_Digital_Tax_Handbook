import { Link } from 'react-router-dom';

const tableStyle = { width: '100%', borderCollapse: 'collapse', margin: '1rem 0' };
const thStyle = { border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left', backgroundColor: '#f0f0f0' };
const tdStyle = { border: '1px solid #ddd', padding: '0.75rem' };

/** Domestic Taxes + E-Tax — general questions (sidebar: FAQ → Domestic Taxes and E-Tax). */
export const DOMESTIC_TAXES_ETAX_QA_ITEMS = [
  {
    id: 'det-q-types',
    question: 'Which tax types are included in Domestic Taxes?',
    answer: (
      <>
        <p className="content-paragraph">Domestic taxes include the following tax types:</p>
        <ul className="content-list">
          <li>
            Income Tax, including:
            <ul className="content-sublist">
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
      </>
    ),
  },
  {
    id: 'det-q-etax',
    question: 'What is E-Tax?',
    answer: (
      <p className="content-paragraph">
        Each of the domestic taxes can be declared using E-Tax. This is an online portal that makes it easier for
        taxpayers to declare domestic taxes. This can be done online. The process of declaring using E-Tax is similar
        for all domestic taxes.
      </p>
    ),
  },
  {
    id: 'det-q-mdec',
    question: 'What is M-Declaration?',
    answer: (
      <p className="content-paragraph">
        The &apos;Flat Tax&apos;, &apos;Lump Sum&apos; and &apos;motor vehicle&apos; regimes of Income Tax (PIT and CIT)
        can be declared on mobile phones using M-Declaration.
      </p>
    ),
  },
  {
    id: 'det-q-register-etax',
    question: 'How do taxpayers register for E-Tax?',
    answer: (
      <p className="content-paragraph">
        Taxpayers are automatically registered for E-Tax when their business is registered.
      </p>
    ),
  },
  {
    id: 'det-q-pwd',
    question: 'What if taxpayers do not know their E-Tax password?',
    answer: (
      <p className="content-paragraph">
        If a taxpayer does not know their E-Tax password, reset it by clicking on &apos;Forgot Password&apos; or
        visiting RRA offices.
      </p>
    ),
  },
  {
    id: 'det-q-annexure',
    question: 'What are the causes of an annexure not validating?',
    answer: (
      <>
        <p className="content-paragraph">When completing annexures, ensure to:</p>
        <ul className="content-list">
          <li>&apos;enable content&apos; after opening the spreadsheet.</li>
          <li>use the required date format (dd/mm/yyyy) for the dates entered and the computer&apos;s settings.</li>
          <li>avoid blank cells for rows that have been started</li>
          <li>click to &apos;Validate&apos;.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'det-q-tax-period',
    question: 'What if the particular tax type or tax period is not available for declaration?',
    answer: (
      <p className="content-paragraph">
        If the tax type and tax period for the relevant declaration is not available on the &apos;Document Details&apos;
        screen, the taxpayer can request for it by calling the RRA call centre toll-free 3004 or visiting RRA offices.
      </p>
    ),
  },
  {
    id: 'det-q-submit',
    question: 'What are the causes of a declaration not submitting?',
    answer: (
      <p className="content-paragraph">
        When submitting declarations: the annexures must be uploaded, equal to the declaration form, and all certified.
      </p>
    ),
  },
];

export const DOMESTIC_TAXES_ETAX_STEP_ITEMS = [
  {
    id: 'det-s1',
    question: 'Step 1: Log-in to E-Tax',
    answer: (
      <p className="content-paragraph">
        Access the E-Tax website at{' '}
        <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
          https://etax.rra.gov.rw
        </a>{' '}
        and login to the E-Tax system using your TIN and password.
      </p>
    ),
  },
  {
    id: 'det-s2',
    question: 'Step 2: Download, complete and save annexures',
    answer: (
      <>
        <p className="content-paragraph">
          In E-Tax, hover the mouse over &apos;Annexure Downloads&apos;, and click a tax type to download the relevant
          annexures.
        </p>
        <p className="content-paragraph">
          Enter the required information and click &apos;Validate&apos; to save each annexure tab separately in the
          C:/RRA folder.
        </p>
      </>
    ),
  },
  {
    id: 'det-s3',
    question: 'Step 3: Complete the declaration form',
    answer: (
      <p className="content-paragraph">
        In E-Tax, choose the applicable declaration and enter the required aggregated values for the tax period. Click to
        &apos;Save&apos; the declaration and automatically calculate the grey calculation boxes, including the tax due.
      </p>
    ),
  },
  {
    id: 'det-s4',
    question: 'Step 4: Upload annexures, compare with the declaration form and submit the declaration',
    answer: (
      <p className="content-paragraph">
        Upload the annexures from the C:/RRA folder and compare the values with the declaration form. If these are equal
        and correct, certify and submit the declaration.
      </p>
    ),
  },
  {
    id: 'det-s5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, Telecom Mobile Money, Mobicash, or at a bank.
      </p>
    ),
  },
];

export const GAMING_TAX_ACCORDION_ITEMS = [
  {
    id: 'gam-q1',
    question: 'What are Gaming Taxes?',
    answer: (
      <>
        <p className="content-paragraph">
          Gaming taxes are paid on transactions of gambling proceeds. This includes Gaming Tax and Withholding Tax of 25%
          on Gambling Proceeds 40% (Tax on Gaming).
        </p>
        <p className="content-paragraph">
          These are declared and paid by the source of the betting company. The player is able to claim the tax paid back
          in their Income Tax declarations.
        </p>
      </>
    ),
  },
  {
    id: 'gam-q2',
    question: 'Who must register for Gaming Taxes?',
    answer: (
      <>
        <p className="content-paragraph">
          Any taxpayer making payments of gambling proceeds must register for both Gaming Tax and WOP-Gaming.
        </p>
        <p className="content-paragraph">
          Gambling proceeds are the difference between the winnings of a player and the amount of money invested by the
          player from the start until the end of the game.
        </p>
      </>
    ),
  },
  {
    id: 'gam-q3',
    question: 'What are the rates of Gaming Tax and WOP-Gaming?',
    answer: <p className="content-paragraph">All gambling proceeds are subject to Gaming Tax of 40%.</p>,
  },
  {
    id: 'gam-q4',
    question: 'When is the deadline to declare and pay Gaming Taxes?',
    answer: (
      <p className="content-paragraph">
        Gaming Tax and WOP-Gaming are declared on a monthly basis. These declarations must each be submitted and any tax
        due paid by the 15th of the following month.
      </p>
    ),
  },
  {
    id: 'gam-s1',
    question: 'Step 1: Withhold taxes on gambling proceeds payments',
    answer: (
      <p className="content-paragraph">
        Before making payments of gambling proceeds, withhold the Gaming Tax and the Withholding Tax of 25% on Gambling
        Proceeds and retain the transaction invoices.
      </p>
    ),
  },
  {
    id: 'gam-s2',
    question: 'Step 2: Login to E-Tax',
    answer: (
      <p className="content-paragraph">
        Login at{' '}
        <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
          https://etax.rra.gov.rw
        </a>
      </p>
    ),
  },
  {
    id: 'gam-s3',
    question: 'Step 3: Download, complete, validate and save annexures',
    answer: (
      <p className="content-paragraph">Download, complete, validate and save the applicable Annexures.</p>
    ),
  },
  {
    id: 'gam-s4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <p className="content-paragraph">
        Complete the declaration form, upload annexures, confirm accuracy and submit for each of the Gaming Tax.
      </p>
    ),
  },
  {
    id: 'gam-s5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
      </p>
    ),
  },
];

export const MINING_ROYALTY_ACCORDION_ITEMS = [
  {
    id: 'min-q1',
    question: 'Who must register for Mining Royalty Tax?',
    answer: (
      <p className="content-paragraph">Any taxpayer who purchases minerals must register for Mining Royalty Tax.</p>
    ),
  },
  {
    id: 'min-q2',
    question: 'What is the rate of Mining Royalty Tax?',
    answer: (
      <>
        <p className="content-paragraph">The rates of Mining Royalty Tax are:</p>
        <ul className="content-list">
          <li>3% of the norm value for the mineral category of base metals;</li>
          <li>2% of the gross value for the category of gemstones;</li>
          <li>2% of the norm value for the category of platinum group metals;</li>
          <li>2% of the norm value for the category of rare earth elements;</li>
          <li>3% of the norm value for the category of energy minerals;</li>
          <li>0.5% of the norm value for the category of gold.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'min-q3',
    question: 'What is the valuation method of Mining Royalty Tax?',
    answer: (
      <p className="content-paragraph">
        The valuation methods of Mining Royalty Tax are norm value and gross value.
      </p>
    ),
  },
  {
    id: 'min-q4',
    question: 'When must Mining Royalty Tax be declared and paid?',
    answer: (
      <p className="content-paragraph">
        Mining Royalty Tax is declared on a monthly basis. These declarations must each be submitted and any tax due paid
        by the 15th of the following month.
      </p>
    ),
  },
  {
    id: 'min-s1',
    question: 'Step 1: Login to E-Tax',
    answer: (
      <p className="content-paragraph">
        Login at{' '}
        <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
          https://etax.rra.gov.rw
        </a>
        .
      </p>
    ),
  },
  {
    id: 'min-s2',
    question: 'Step 2: Download, complete, validate and save annexures',
    answer: (
      <p className="content-paragraph">Download, complete, validate and save the applicable Annexures.</p>
    ),
  },
  {
    id: 'min-s3',
    question: 'Step 3: Complete declaration form, upload annexures and submit',
    answer: (
      <p className="content-paragraph">
        Complete the declaration form, upload annexures, confirm accuracy and submit the tax declaration.
      </p>
    ),
  },
  {
    id: 'min-s4',
    question: 'Step 4: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, E-Banking, MTN/Airtel Mobile Money, Mobicash, or
        at a bank.
      </p>
    ),
  },
];

export const CAPITAL_GAINS_ACCORDION_ITEMS = [
  {
    id: 'cg-q1',
    question: 'What is Capital Gains Tax?',
    answer: (
      <p className="content-paragraph">
        Capital Gains Tax applies to the profit from the sale or transfer of shares, licenses, debt instruments,
        options, guarantees and similar assets.
      </p>
    ),
  },
  {
    id: 'cg-q2',
    question: 'Who must register for Capital Gains Tax?',
    answer: (
      <p className="content-paragraph">
        The tax on profit from the sale of shares, licenses, debt instruments, options, guarantees and similar assets is
        withheld, declared and paid by the company whose shares were sold.
      </p>
    ),
  },
  {
    id: 'cg-q3',
    question: 'What is the tax rate of Capital Gains Tax?',
    answer: (
      <p className="content-paragraph">
        The tax rate of Capital Gains Tax is 10%, applied to the profit from the sale of shares, licenses, debt
        instruments, options, guarantees and similar assets, where profit equals sale price minus purchase price.
      </p>
    ),
  },
  {
    id: 'cg-q4',
    question: 'When are the Capital Gains Tax periods and deadlines?',
    answer: (
      <p className="content-paragraph">
        Capital Gains tax must be declared and paid by the 15th of the month after the transaction was made.
      </p>
    ),
  },
  {
    id: 'cg-s1',
    question: 'Step 1: Withhold tax on taxable payment transactions',
    answer: (
      <p className="content-paragraph">
        Before making payments subject to capital gains, withhold the tax due and retain the transaction invoices.
      </p>
    ),
  },
  {
    id: 'cg-s2',
    question: 'Step 2: Login to E-Tax',
    answer: (
      <p className="content-paragraph">
        Login at{' '}
        <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
          https://etax.rra.gov.rw
        </a>
        .
      </p>
    ),
  },
  {
    id: 'cg-s3',
    question: 'Step 3: Download, complete, validate and save annexure',
    answer: (
      <p className="content-paragraph">Download, complete, validate and save the applicable Annexure.</p>
    ),
  },
  {
    id: 'cg-s4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <p className="content-paragraph">
        Complete the declaration form, upload annexure, confirm accuracy and submit the Capital Gains declaration.
      </p>
    ),
  },
  {
    id: 'cg-s5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

export const ROAD_LEVY_ACCORDION_ITEMS = [
  {
    id: 'road-q1',
    question: 'What is Road Maintenance Levy?',
    answer: (
      <p className="content-paragraph">
        Road Maintenance Levy is a fee collected on taxable motor vehicles to maintain and develop roads.
      </p>
    ),
  },
  {
    id: 'road-q2',
    question: 'Who must register for Road Maintenance Levy?',
    answer: (
      <p className="content-paragraph">
        There is no separate registration process for the Road Maintenance Levy for eligible motor vehicles, as their
        registration information already exists in RRA systems. Owners of eligible motor vehicles are automatically
        registered.
      </p>
    ),
  },
  {
    id: 'road-q3',
    question: 'What is the rate of Road Maintenance Levy?',
    answer: (
      <>
        <p className="content-paragraph">
          The Road Maintenance Levy is an annual fixed amount applied to eligible motor vehicle types, as shown in the
          table below:
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Levy Amount (FRW)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>Car</td><td style={tdStyle}>50,000</td></tr>
            <tr><td style={tdStyle}>Jeep</td><td style={tdStyle}>50,000</td></tr>
            <tr><td style={tdStyle}>Pick-up</td><td style={tdStyle}>100,000</td></tr>
            <tr><td style={tdStyle}>Microbus</td><td style={tdStyle}>100,000</td></tr>
            <tr><td style={tdStyle}>Minibus</td><td style={tdStyle}>100,000</td></tr>
            <tr><td style={tdStyle}>Bus</td><td style={tdStyle}>100,000</td></tr>
            <tr><td style={tdStyle}>Truck</td><td style={tdStyle}>120,000</td></tr>
            <tr><td style={tdStyle}>Half-trailer</td><td style={tdStyle}>120,000</td></tr>
            <tr><td style={tdStyle}>Trailer</td><td style={tdStyle}>150,000</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'road-q4',
    question: 'When are the Road Maintenance Levy tax periods and deadlines?',
    answer: (
      <p className="content-paragraph">
        Road Maintenance Levy is paid annually and due throughout the current fiscal year, with the final payment deadline
        on 31st December.
      </p>
    ),
  },
  {
    id: 'road-guide',
    question: 'Step-by-Step guide to declaring and paying Road Maintenance Levy',
    answer: (
      <p className="content-paragraph">
        Road Maintenance Levy is declared through E-Tax, M-Declaration, and on RRA Website.{' '}
        <Link to="/road-maintenance-declaration" className="content-link">
          (check on Declaring Road Maintenance Levy)
        </Link>{' '}
        for more details.
      </p>
    ),
  },
];

export const TOURISM_TAX_ACCORDION_ITEMS = [
  {
    id: 'tour-q1',
    question: 'What is Tourism Tax?',
    answer: (
      <p className="content-paragraph">
        Tourism Tax is a levy imposed on accommodation services, which involve providing a room or space for sleeping or
        resting.
      </p>
    ),
  },
  {
    id: 'tour-q2',
    question: 'Who must register for Tourism Tax?',
    answer: <p className="content-paragraph">A provider of room or place to sleep or rest.</p>,
  },
  {
    id: 'tour-q3',
    question: 'What is the rate of Tourism Tax?',
    answer: (
      <p className="content-paragraph">
        The rate of the Tourism Tax on accommodation is set at 3% of the amount paid or payable for accommodation,
        exclusive of value added tax.
      </p>
    ),
  },
  {
    id: 'tour-q4',
    question: 'When are the Tourism Tax periods and deadlines?',
    answer: (
      <p className="content-paragraph">
        The Tourism Tax has a monthly period and is due by 15th of the following month.
      </p>
    ),
  },
  {
    id: 'tour-guide',
    question: 'Step-by-Step guide to declaring and paying Tourism Tax',
    answer: (
      <p className="content-paragraph">
        Tourism Tax is declared through E-Tax.{' '}
        <Link to="/tourism-tax-declaration" className="content-link">
          (check on Declaring Tourism Tax)
        </Link>{' '}
        for more details.
      </p>
    ),
  },
];

export const DECENTRALISED_SUMMARY_ACCORDION_ITEMS = [
  {
    id: 'dec-q-types',
    question: 'Which tax types are included in Decentralised Entities Taxes and fees?',
    answer: (
      <>
        <p className="content-paragraph">There are four types of Decentralised Entities Taxes:</p>
        <ul className="content-list">
          <li>Immovable Property Tax</li>
          <li>Trading License Tax</li>
          <li>Rental Income Tax</li>
          <li>Sale of Immovable Property Tax</li>
        </ul>
        <p className="content-paragraph">
          There are also a wide range of Decentralised Entities fees including Service Fees and fees for a range of
          services or authorisations required from Districts.
        </p>
      </>
    ),
  },
  {
    id: 'dec-q-who',
    question: 'Who must register for Decentralised Entities Taxes and Fees?',
    answer: (
      <p className="content-paragraph">
        Any person or company who owns or leases land or property, who owns a profit-oriented business of any size,
        receives rental income from land or property, or fulfils any of the criteria required for Decentralised Entities
        Taxes and fees is required to register for Decentralised Entities Taxes and fees.
      </p>
    ),
  },
  {
    id: 'dec-q-lgt',
    question: 'What is the LGT system?',
    answer: (
      <p className="content-paragraph">
        Each of the Decentralised Entities Taxes listed above, and many of the Decentralised Entities fees, must be
        declared using the Local Government Taxes (LGT) system. The LGT system is an online portal designed to make it
        easier for taxpayers to declare Decentralised Entities Taxes and fees. This can be done online, or with
        assistance from a RRA officer.
      </p>
    ),
  },
  {
    id: 'dec-q-login',
    question: 'How do taxpayers register and login to the LGT system?',
    answer: (
      <>
        <p className="content-paragraph">
          Taxpayers must visit any RRA offices with either a Rwandan ID or Passport to register with the LGT system.
        </p>
        <p className="content-paragraph">
          Access the LGT system at{' '}
          <a href="https://localgov.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
            https://localgov.rra.gov.rw
          </a>{' '}
          and login using the TIN/Username and LGT system password.
        </p>
      </>
    ),
  },
  {
    id: 'dec-q-pwd',
    question: 'What if taxpayers do not know their LGT system password?',
    answer: (
      <p className="content-paragraph">
        If a taxpayer does not know their password, it can be reset by clicking &apos;Forgot Password&apos; on the LGT
        system login and receiving a new password by SMS or email.
      </p>
    ),
  },
  {
    id: 'dec-q-find',
    question: 'What if the taxpayer cannot find the correct Decentralised Entities Taxes or fee on the LGT system?',
    answer: (
      <p className="content-paragraph">
        If a taxpayer wishes to declare a particular Decentralised Entities Taxes or fee, or tax period, and they cannot
        find it or are not registered for that Decentralised Entities Taxes or fee, the taxpayer can request for it by
        calling the RRA Call Centre for free on 3004 or visit nearest RRA office.
      </p>
    ),
  },
  {
    id: 'dec-q-third',
    question: 'Which third parties also collect Decentralised Entities fees?',
    answer: (
      <p className="content-paragraph">
        Ngali Holdings Ltd is mandated to support RRA in collecting all Decentralised Entities fees. MISIC also collects
        parking fees.
      </p>
    ),
  },
  {
    id: 'dec-q-ipt',
    question: 'What is the rate for Immovable Property Tax?',
    answer: (
      <p className="content-paragraph">
        Any owner of land and buildings must register for Immovable Property Tax. The immovable property is levied on an
        annual basis on the surface of a plot of land, and, if there is a building on a plot of land, also the market value
        of the building(s) and land. The tax rate on the surface of a land ranges between FRW 0 to FRW 80 per square metre.
        Exemptions from Immovable Property Tax can apply to properties belonging to vulnerable groups, public entities,
        and foreign diplomatic missions. Exemptions from the land component can apply for land without basic infrastructure
        and the first 20,000m2 of land used for agriculture and livestock. The building component can be exempted for the
        first residential building of the owner and the commonly owned portions of condominiums.
      </p>
    ),
  },
  {
    id: 'dec-q-tlt',
    question: 'What is the rate for Trading License Tax?',
    answer: (
      <>
        <p className="content-paragraph">
          Any person or business conducting business activities must register for Trading License Tax. Depending upon
          turnover and location, each business or motor vehicle must pay yearly or quarterly Trading License Tax as per
          below table:
        </p>
        <p className="content-paragraph">
          <Link to="/trading-license-tax" className="content-link">
            See Trading License Tax
          </Link>{' '}
          for the full rate table and bands.
        </p>
      </>
    ),
  },
  {
    id: 'dec-q-rit',
    question: 'What is the rate for Rental Income Tax?',
    answer: (
      <>
        <p className="content-paragraph">
          Any person receiving rental income on immovable properties must register for Rental Income Tax. 50% of income is
          exempt.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Annual taxable rental income</th>
              <th style={thStyle}>Marginal tax rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tdStyle}>FRW 0 – FRW 180,000</td><td style={tdStyle}>0%</td></tr>
            <tr><td style={tdStyle}>FRW 180,001 – FRW 1,000,000</td><td style={tdStyle}>20%</td></tr>
            <tr><td style={tdStyle}>Above FRW 1,000,001</td><td style={tdStyle}>30%</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'dec-q-fees-list',
    question: 'What does the list of Decentralised Entities fees include?',
    answer: (
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
    ),
  },
  {
    id: 'dec-s1',
    question: 'Step 1: Login to the LGT System',
    answer: (
      <p className="content-paragraph">
        Access the LGT system at{' '}
        <a href="https://localgov.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
          https://localgov.rra.gov.rw
        </a>{' '}
        and login using the TIN/Username and LGT system password.
      </p>
    ),
  },
  {
    id: 'dec-s2',
    question: 'Step 2: Select the correct Decentralised Entities Taxes or fee to declare',
    answer: (
      <>
        <p className="content-paragraph">
          For Decentralised Entities Taxes, click &apos;Declaration&apos; and the drop-down taxes option. Then choose the
          tax type and tax period that is being declared and click &apos;Submit&apos;. Finally, click on the document number
          of the applicable declaration.
        </p>
        <p className="content-paragraph">
          For fees, click &apos;Fee Payment Ticket&apos; and the service type, and select the correct fee from the
          drop-down menus.
        </p>
      </>
    ),
  },
  {
    id: 'dec-s3',
    question: 'Step 3: Complete declaration form and submit',
    answer: (
      <p className="content-paragraph">
        Enter the required information in the declaration form. Where necessary, click &apos;Calculate Tax&apos;,
        &apos;Continue with Annexure&apos; or &apos;Compare with Declaration&apos; then &apos;Submit&apos;.
      </p>
    ),
  },
  {
    id: 'dec-s4',
    question: 'Step 4: View payment details via the Acknowledgement Receipt, email or SMS, and pay all taxes and fees due',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
      </p>
    ),
  },
];
