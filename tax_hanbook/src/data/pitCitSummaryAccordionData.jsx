import React from 'react';

const tw = { width: '100%', borderCollapse: 'collapse', margin: '1rem 0' };
const th = { border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left', backgroundColor: '#f0f0f0' };
const td = { border: '1px solid #ddd', padding: '0.75rem' };
const h3 = { marginTop: '1.5rem', marginBottom: '1rem' };

/** Top-of-page Q&A (Income Tax PIT/CIT Summary). */
export const PIT_CIT_SUMMARY_FAQ_ITEMS = [
  {
    id: 'pit-cit-sum-q1',
    question: 'What is the difference between PIT and CIT?',
    answer:
      'Personal Income Tax (PIT) applies to individuals and certain enterprises. Corporate Income Tax (CIT) applies to companies and other corporate entities. Rates and regimes depend on turnover and the regime you use.',
  },
  {
    id: 'pit-cit-sum-q2',
    question: 'What are Flat Tax, Lump Sum, and Real Regime?',
    answer:
      'These are income tax regimes based on annual turnover. Flat Tax uses fixed annual amounts within bands; Lump Sum uses a percentage of turnover; Real Regime taxes taxable profit using progressive PIT rates or CIT as applicable. Bands are shown in the tables on this page.',
  },
  {
    id: 'pit-cit-sum-q3',
    question: 'When is Motor Vehicle Income Tax used?',
    answer:
      'If you earn motor vehicle transport income, you may need to declare Motor Vehicle Income Tax separately, using the quarterly rates by vehicle type in the table on this page.',
  },
  {
    id: 'pit-cit-sum-q4',
    question: 'Can I declare Flat Tax, Lump Sum, or IQP on M-Declaration?',
    answer:
      'Yes. Dial *800#, choose your language and Other Business Activities, then follow registration (first time) and declaration steps. Pay using the RRA reference with E-Payment, mobile money, Mobicash, or at a bank.',
  },
  {
    id: 'pit-cit-sum-q5',
    question: 'Where are the E-Tax steps for Real Regime?',
    answer:
      'This page includes step-by-step guides for Flat Tax, Lump Sum, Real Regime, IQP, and motor vehicle declarations using E-Tax at https://etax.rra.gov.rw in the sections below.',
  },
];

export const PIT_CIT_REGIMES_ITEMS = [
  {
    id: 'pit-cit-regimes',
    question: 'What are the tax regimes and rates for Income Tax?',
    answer: (
      <>
        <p className="content-paragraph">Income Tax has three &apos;regimes&apos; available for taxpayers:</p>
        <table style={tw}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Annual Turnover</th>
              <th style={th}>Tax Regime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>FRW 2,000,000 – FRW 12,000,000</td>
              <td style={td}>Flat Tax</td>
            </tr>
            <tr>
              <td style={td}>FRW 12,000,001 – FRW 20,000,000</td>
              <td style={td}>Lump Sum</td>
            </tr>
            <tr>
              <td style={td}>Above FRW 20,000,001</td>
              <td style={td}>Real Regime</td>
            </tr>
          </tbody>
        </table>
        <p className="content-paragraph">
          Taxpayers earning motor vehicle transport income may also separately declare Motor Vehicle Income Tax.
        </p>
        <h3 style={h3}>Flat Tax</h3>
        <table style={tw}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Annual Turnover</th>
              <th style={th}>Annual Tax Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>FRW 2,000,000 – FRW 4,000,000</td>
              <td style={td}>FRW 60,000</td>
            </tr>
            <tr>
              <td style={td}>FRW 4,000,001 – FRW 7,000,000</td>
              <td style={td}>FRW 120,000</td>
            </tr>
            <tr>
              <td style={td}>FRW 7,000,001 – FRW 10,000,000</td>
              <td style={td}>FRW 210,000</td>
            </tr>
            <tr>
              <td style={td}>FRW 10,000,001 – FRW 12,000,000</td>
              <td style={td}>FRW 300,000</td>
            </tr>
          </tbody>
        </table>
        <h3 style={h3}>Lump Sum</h3>
        <table style={tw}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Annual Turnover</th>
              <th style={th}>Income Tax Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>FRW 12,000,001 – FRW 20,000,000</td>
              <td style={td}>3% of Turnover</td>
            </tr>
          </tbody>
        </table>
        <h3 style={h3}>Real Regime</h3>
        <table style={tw}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={th}>Annual taxable income (profit)</th>
              <th style={th}>PIT Rate</th>
              <th style={th}>CIT Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>FRW 0 – FRW 720,000</td>
              <td style={td}>0%</td>
              <td style={td}>28%</td>
            </tr>
            <tr>
              <td style={td}>FRW 720,001 – FRW 1,200,000</td>
              <td style={td}>10%</td>
              <td style={td} />
            </tr>
            <tr>
              <td style={td}>FRW 1,200,001 – FRW 2,400,000</td>
              <td style={td}>20%</td>
              <td style={td} />
            </tr>
            <tr>
              <td style={td}>Above FRW 2,400,000</td>
              <td style={td}>30%</td>
              <td style={td} />
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];

export const PIT_CIT_MOTOR_VEHICLE_ITEMS = [
  {
    id: 'pit-cit-mv-rates',
    question: 'What are the rates for Motor Vehicle Income Tax?',
    answer: (
      <table style={tw}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={th}>Type of Vehicle</th>
            <th style={th}>Tax Rate per Quarter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td}>Motorcycle cc below 100</td>
            <td style={td}>FRW 9,000</td>
          </tr>
          <tr>
            <td style={td}>Motorcycle cc above 100</td>
            <td style={td}>FRW 18,000</td>
          </tr>
          <tr>
            <td style={td}>Car</td>
            <td style={td}>FRW 22,050</td>
          </tr>
          <tr>
            <td style={td}>Bus/Minibus</td>
            <td style={td}>FRW 3,000 per seat capacity</td>
          </tr>
          <tr>
            <td style={td}>Pick-up/Truck with maximum load capacity below 7 tonnes</td>
            <td style={td}>FRW 15,000 per tonne of capacity, rounded to the nearest half-tonne</td>
          </tr>
          <tr>
            <td style={td}>Pick-up/Truck with maximum load capacity between 7 - 30 tonnes</td>
            <td style={td}>FRW 19,500 per tonne of capacity, rounded to the nearest half-tonne</td>
          </tr>
          <tr>
            <td style={td}>Private Ambulance/ Hearse</td>
            <td style={td}>FRW 25,000</td>
          </tr>
          <tr>
            <td style={td}>Wheeled construction/ breakdown/ towing vehicle</td>
            <td style={td}>FRW 76,800</td>
          </tr>
          <tr>
            <td style={td}>Caterpillar-tracked vehicle</td>
            <td style={td}>FRW 195,000</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

export const PIT_CIT_MDECL_INCOME_ITEMS = [
  {
    id: 'pit-mdecl-inc-intro',
    question: 'Overview — Flat Tax, Lump Sum or IQP using M-Declaration',
    answer: (
      <p className="content-paragraph">
        Flat Tax, Lump Sum or Instalment Quarterly Prepayments (IQP) Income Tax can be declared on mobile phones using
        M-Declaration.
      </p>
    ),
  },
  {
    id: 'pit-mdecl-inc-s1',
    question: 'Step 1: Keep records of all income',
    answer: <p className="content-paragraph">Keep records of all income to calculate annual turnover.</p>,
  },
  {
    id: 'pit-mdecl-inc-s2',
    question: 'Step 2: Register for M-Declaration',
    answer: (
      <p className="content-paragraph">
        Using the mobile phone, dial *800#. Select a language, &apos;2. Other Business Activities&apos; and then
        &apos;1. Registration&apos;. Enter the TIN and Rwanda National ID number. This step is only required the
        first-time using M-Declaration.
      </p>
    ),
  },
  {
    id: 'pit-mdecl-inc-s3',
    question: 'Step 3: M-Declaration of Income Tax',
    answer: (
      <p className="content-paragraph">
        Using the mobile phone, dial *800#. Select a language, &apos;2. Other Business Activities&apos; and then
        &apos;2. Declaration&apos;. Enter the tax period, whether the taxpayer is &apos;new&apos; or &apos;usual&apos;
        to M-Declaration and the tax period business income.
      </p>
    ),
  },
  {
    id: 'pit-mdecl-inc-s4',
    question: 'Step 4: Receive payment details and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN Mobile Money, Mobicash, or at a bank.
      </p>
    ),
  },
];

export const PIT_CIT_MDECL_MV_ITEMS = [
  {
    id: 'pit-mdecl-mv-intro',
    question: 'Overview — Motor Vehicle Income Tax or IQP using M-Declaration',
    answer: (
      <p className="content-paragraph">
        Motor Vehicle Income Tax must be declared on mobile phones using M-Declaration. The process is the same when
        declaring Motor Vehicle Income Tax Instalment Quarterly Prepayments (IQP).
      </p>
    ),
  },
  {
    id: 'pit-mdecl-mv-s1',
    question: 'Step 1: Register Motor Vehicle for Transport Income use',
    answer: (
      <p className="content-paragraph">
        Visit any RRA offices and register the motor vehicle for transport income use. This use also requires specific
        insurance to be purchased for the motor vehicle. This step is only required the first-time using M-Declaration.
      </p>
    ),
  },
  {
    id: 'pit-mdecl-mv-s2',
    question: 'Step 2: M-Declaration of Income Tax',
    answer: (
      <p className="content-paragraph">
        Using your mobile phone, dial *800#. Select a language, &apos;1. Motor Cycles/Vehicles&apos;. Enter the TIN,
        number plate of the motor vehicle, tax period and whether you are a &apos;new&apos; taxpayer or a &apos;usual
        taxpayer&apos;.
      </p>
    ),
  },
  {
    id: 'pit-mdecl-mv-s3',
    question: 'Step 3: Receive payment details and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

export const PIT_CIT_ETAX_FLAT_ITEMS = [
  {
    id: 'pit-etax-flat-intro',
    question: 'Overview — Flat Tax regime using E-Tax',
    answer: (
      <p className="content-paragraph">
        Flat Tax Income Tax can be declared online or with the help of staff at RRA offices with E-Tax.
      </p>
    ),
  },
  {
    id: 'pit-etax-flat-s1',
    question: 'Step 1: Keep records of all income',
    answer: <p className="content-paragraph">Keep records of all income to calculate annual turnover.</p>,
  },
  {
    id: 'pit-etax-flat-s2',
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
    id: 'pit-etax-flat-s3',
    question: 'Step 3: Complete form and submit',
    answer: (
      <p className="content-paragraph">Complete the declaration form and submit the Income Tax declaration.</p>
    ),
  },
  {
    id: 'pit-etax-flat-s4',
    question: 'Step 4: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

export const PIT_CIT_ETAX_LUMP_ITEMS = [
  {
    id: 'pit-etax-lump-intro',
    question: 'Overview — Lump Sum regime using E-Tax',
    answer: (
      <p className="content-paragraph">
        Lump Sum regime PIT or CIT can be declared online or with the help of staff at RRA offices with E-Tax.
      </p>
    ),
  },
  {
    id: 'pit-etax-lump-s1',
    question: 'Step 1: Keep records of all income',
    answer: <p className="content-paragraph">Keep records of all income to calculate annual turnover.</p>,
  },
  {
    id: 'pit-etax-lump-s2',
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
    id: 'pit-etax-lump-s3',
    question: 'Step 3: Download, complete, validate and save annexures',
    answer: (
      <>
        <p className="content-paragraph">
          Download, complete, validate and save any applicable Lump Sum Annexures.
        </p>
        <p className="content-paragraph">
          This step is only required if the taxpayer has had any tax withheld and paid on their behalf during the tax
          period.
        </p>
      </>
    ),
  },
  {
    id: 'pit-etax-lump-s4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <>
        <p className="content-paragraph">
          Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.
        </p>
        <p className="content-paragraph">
          Only upload annexures if the taxpayer has had any tax withheld and paid on their behalf during the tax
          period.
        </p>
      </>
    ),
  },
  {
    id: 'pit-etax-lump-s5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

export const PIT_CIT_ETAX_REAL_ITEMS = [
  {
    id: 'pit-etax-real-s1',
    question: 'Step 1: Bookkeeping',
    answer: (
      <p className="content-paragraph">Ensure accurate bookkeeping of all business matters.</p>
    ),
  },
  {
    id: 'pit-etax-real-s2',
    question: 'Step 2: Certify the financial statements',
    answer: (
      <>
        <p className="content-paragraph">Submit the financial statements to ICPAR members for validation.</p>
        <p className="content-paragraph">
          This step is only required if the taxpayer had annual turnover of more than FRW 600,000,000.
        </p>
      </>
    ),
  },
  {
    id: 'pit-etax-real-s3',
    question: 'Step 3: Login to E-Tax',
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
    id: 'pit-etax-real-s4',
    question: 'Step 4: Download, complete, validate and save annexures',
    answer: (
      <p className="content-paragraph">
        Download, complete, validate and save the applicable Real Regime annexures, including the Balance Sheet, Profit
        and Loss Statement and Company Representative annexures.
      </p>
    ),
  },
  {
    id: 'pit-etax-real-s5',
    question: 'Step 5: Upload certified financials',
    answer: (
      <p className="content-paragraph">
        Approved certifying audit firm upload certified financials on behalf of their clients through their E-Tax
        portals.
      </p>
    ),
  },
  {
    id: 'pit-etax-real-s6',
    question: 'Step 6: Complete form, upload annexures and submit',
    answer: (
      <p className="content-paragraph">
        Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.
      </p>
    ),
  },
  {
    id: 'pit-etax-real-s7',
    question: 'Step 7: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];

export const PIT_CIT_ETAX_IQP_ITEMS = [
  {
    id: 'pit-etax-iqp-intro',
    question: 'Overview — Instalment Quarterly Prepayments (IQP) using E-Tax',
    answer: (
      <>
        <p className="content-paragraph">
          Lump Sum regime PIT or CIT can be declared online or with the help of staff at RRA offices with E-Tax.
        </p>
        <p className="content-paragraph">
          If the taxpayer has had any tax withheld and paid on their behalf during the tax period, also follow the
          italics steps.
        </p>
      </>
    ),
  },
  {
    id: 'pit-etax-iqp-s1',
    question: 'Step 1: Bookkeeping',
    answer: (
      <p className="content-paragraph">Keep records of all tax withheld and paid on their behalf.</p>
    ),
  },
  {
    id: 'pit-etax-iqp-s2',
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
    id: 'pit-etax-iqp-s3',
    question: 'Step 3: Download, complete, validate and save annexures',
    answer: (
      <p className="content-paragraph">Download, complete, validate and save any applicable IQP Annexures.</p>
    ),
  },
  {
    id: 'pit-etax-iqp-s4',
    question: 'Step 4: Complete declaration form, upload annexures and submit',
    answer: (
      <p className="content-paragraph">
        Complete the declaration form, upload annexures, confirm accuracy and submit the IQP declaration.
      </p>
    ),
  },
  {
    id: 'pit-etax-iqp-s5',
    question: 'Step 5: View acknowledgement receipt and pay taxes',
    answer: (
      <p className="content-paragraph">
        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a
        bank.
      </p>
    ),
  },
];
