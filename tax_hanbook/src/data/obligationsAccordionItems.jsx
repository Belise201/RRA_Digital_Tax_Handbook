import { Link } from 'react-router-dom';

export const OBLIGATIONS_ACCORDION_ITEMS = [
  {
    id: 'obl-general',
    question: 'What are the obligations of taxpayers?',
    answer: (
      <>
        <p className="content-paragraph">The general obligations of all taxpayers include:</p>
        <ul className="content-list">
          <li>
            Keeping RRA informed of any changes in contact details or physical address. Any changes must be reported to
            RRA within ten (10) days.
          </li>
          <li>Keeping books of account, see below.</li>
          <li>Submitting tax declarations and paying due taxes</li>
          <li>Cooperating fully with all RRA officers and correspondence.</li>
        </ul>
        <p className="content-paragraph">
          For additional obligations of taxpayers that are registered for specific tax types, see the relevant chapters
          of this Tax Handbook.
        </p>
      </>
    ),
  },
  {
    id: 'obl-books',
    question: "What are 'Books of Account' and what bookkeeping is required of taxpayers?",
    answer: (
      <>
        <p className="content-paragraph">
          Books of account are very helpful for businesses to keep track of their cash-flow and profitability. The
          minimum information required by RRA is for taxpayers to record each sale transaction, with the date, client,
          nature of goods and amount recorded.
        </p>
        <p className="content-paragraph">
          Taxpayers with annual turnover between FRW 12,000,000 and FRW 20,000,000 must keep record of daily purchases,
          record of all financial transactions, tax liability, withheld tax, and a declaration of withheld tax in addition
          to record of sales.
        </p>
        <p className="content-paragraph">
          Taxpayers with annual turnover above FRW 20,000,000 must also keep a record of assets and liabilities,
          records of daily income and expenses, records of stock inventory at the end of the period and information
          related to controlled transactions.
        </p>
        <p className="content-paragraph">
          Taxpayers with annual turnover above FRW 20,000,000 must register for VAT; must also declare Real Regime Income
          Tax and follow the additional bookkeeping requirements,{' '}
          <Link to="/real-regime-details" className="content-link">
            (check on Real regime details)
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: 'obl-retention',
    question: 'How long must taxpayers keep relevant tax documents?',
    answer: (
      <p className="content-paragraph">
        Taxpayers are required to keep all documents and invoices relating to all tax declarations and payments for 10
        years.
      </p>
    ),
  },
];
