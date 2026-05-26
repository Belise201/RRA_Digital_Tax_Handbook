import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

/** Expandable Q&A for Explanation of Domestic Taxes and E-Tax (same pattern as FAQ page). */
export const DOMESTIC_TAXES_ACCORDION_ITEMS = [
  {
    id: 'dt-domestic-what',
    question: 'What are domestic taxes?',
    answer: (
      <>
        <p className="content-paragraph">
          Domestic taxes include the following tax types which can each be declared in a similar manner using E-Tax:
        </p>
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
          <li>Withholding Taxes (WHT),</li>
          <li>Gaming Tax</li>
          <li>Mining Royalty Tax</li>
          <li>Capital Gains Tax</li>
          <li>Road Maintenance Levy</li>
          <li>Tourism Tax</li>
        </ul>
        <p className="content-paragraph">
          Domestic taxes progressively tax income (PIT, CIT, PAYE and Capital Gains Tax), ensure compliance (WHT),
          efficiently tax consumption (VAT), deter consumption with negative social impacts (Excise Duty and Gaming Tax),
          and ensure that all Rwandans share the benefit from the country&apos;s natural resources (Mining Royalty Tax).
        </p>
        <p className="content-paragraph">
          For more details on the rates and bases of each domestic tax, see their respective chapters in this Tax Handbook.
        </p>
      </>
    ),
  },
  {
    id: 'dt-etax',
    question: 'What is E-Tax?',
    answer: (
      <p className="content-paragraph">
        E-Tax is a module-based system to manage domestic taxes operations. This includes an online portal through which
        all domestic tax types can be declared. RRA has developed the E-Tax system to make it easier for taxpayers to
        declare and pay domestic taxes. This Tax Handbook aims to provide all the information necessary for taxpayers to
        be able declare online.
      </p>
    ),
  },
  {
    id: 'dt-m-declaration',
    question: 'What is M-Declaration?',
    answer: (
      <>
        <p className="content-paragraph">
          In certain cases, Income Tax can also be declared on mobile phones using M-Declaration,{' '}
          <Link to="/m-declaration-flat-lump-iqp" className="content-link">
            (check on Explanation of Domestic Taxes and E-Tax)
          </Link>{' '}
          for more details on declaring Income Tax using M-Declaration.
        </p>
        <p className="content-paragraph">
          However, the majority of domestic taxes can only be declared using E-Tax. Therefore, this chapter focuses on the
          E-Tax process.
        </p>
      </>
    ),
  },
  {
    id: 'dt-benefits-online',
    question: 'What are the benefits of declaring online using E-Tax or on mobile phones using M-Declaration?',
    answer: (
      <>
        <p className="content-paragraph">The advantages of declaring online or on mobile phones include being able to:</p>
        <ul className="content-list">
          <li>Declare taxes anytime, from anywhere.</li>
          <li>Avoid travel costs of visiting RRA offices.</li>
          <li>Avoid queuing times at RRA offices.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'dt-register-login',
    question: 'How do taxpayers register and login to E-Tax?',
    answer: (
      <>
        <p className="content-paragraph">
          Access the E-Tax website at{' '}
          <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
            https://etax.rra.gov.rw
          </a>{' '}
          or through the RRA website{' '}
          <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">
            https://www.rra.gov.rw
          </a>{' '}
          and click &apos;Pay Domestic taxes here&apos; on the right of the screen.
        </p>
        <p className="content-paragraph">
          Taxpayers are automatically registered for E-Tax when their business is registered with RDB. To login for the
          first time, taxpayers login through sign up. The system requires taxpayer to fill in &apos;TIN&apos; and
          &apos;Phone Number&apos; to authenticate the taxpayer who wants to sign up. If the information is the same as
          the information provided during registration, the system sends the password by SMS and email using the contact
          details given when register. The taxpayer uses these credentials to &apos;Sign up&apos;.
        </p>
        <p className="content-paragraph">
          Once logged in, the E-Tax password can be changed by the taxpayer by clicking &apos;Get Password?&apos; on the
          left of the E-Tax home screen.
        </p>
      </>
    ),
  },
  {
    id: 'dt-tin-unknown',
    question: 'What if taxpayers do not know their TIN?',
    answer: (
      <>
        <p className="content-paragraph">
          If a taxpayer does not know their TIN, they can visit RRA offices or call the RRA call centre toll-free on 3004.
        </p>
        <p className="content-paragraph">
          In addition, if an individual taxpayer (i.e., not a company) does not know their TIN, they can visit the RRA
          website or uses below link:{' '}
          <a href="https://etax.rra.gov.rw/nidAssignedTIN/" target="_blank" rel="noopener noreferrer" className="content-link">
            https://etax.rra.gov.rw/nidAssignedTIN/
          </a>{' '}
          and click &apos;Search for TIN using National ID&apos; as per the following screen:
        </p>
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <ImageModal src="/images/e_tax_01.png" alt="E-Tax TIN Search Screen">
            <img
              src="/images/e_tax_01.png"
              alt="E-Tax TIN Search Screen"
              style={{
                maxWidth: '500px',
                maxHeight: '355px',
                width: 'auto',
                height: 'auto',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </ImageModal>
        </div>
        <p className="content-paragraph">
          This leads to the following screen asking whether the taxpayer registered their TIN using a Rwandan National ID
          or a Passport. After clicking on the relevant choice, the National ID or Passport Number can be entered, and the
          associated TIN is displayed by clicking &apos;Show TIN&apos;.
        </p>
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <ImageModal src="/images/e_tax_02.png" alt="E-Tax TIN Search Result Screen">
            <img
              src="/images/e_tax_02.png"
              alt="E-Tax TIN Search Result Screen"
              style={{
                maxWidth: '500px',
                maxHeight: '355px',
                width: 'auto',
                height: 'auto',
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </ImageModal>
        </div>
      </>
    ),
  },
  {
    id: 'dt-common-problems',
    question: 'What are the common problems when using E-Tax?',
    answer: (
      <p className="content-paragraph">
        There are three main types of problems faced by taxpayers when using E-Tax, this concern: annexures not
        validating, particular tax types or tax periods not being available on the &apos;Document Details&apos; screen
        or declarations not submitting. Potential solutions to these problems are discussed in turn below.
      </p>
    ),
  },
  {
    id: 'dt-annexure-validate',
    question: 'What are the causes of an annexure not validating?',
    answer: (
      <>
        <p className="content-paragraph">When completing annexures, ensure to:</p>
        <ul className="content-list">
          <li>&apos;enable content&apos; after opening the spreadsheet.</li>
          <li>use the required date format (dd/mm/yyyy) for the dates entered and the computer&apos;s settings.</li>
          <li>avoid blank cells for rows that have been started</li>
          <li>try using a Windows computer instead of a Mac.</li>
          <li>click to &apos;Validate&apos; and save the annexure.</li>
        </ul>
        <p className="content-paragraph">
          <Link to="/domestic-taxes" className="content-link">
            (check on Explanation of Domestic Taxes and E-Tax)
          </Link>{' '}
          for more details on solving these problems.
        </p>
      </>
    ),
  },
  {
    id: 'dt-tax-period-missing',
    question: 'What if the particular tax type or tax period is not available for declaration?',
    answer: (
      <p className="content-paragraph">
        If the tax type and tax period for the relevant declaration is not available on the &apos;Document Details&apos;
        screen, the taxpayer can request for it by calling the RRA call centre toll-free or visiting RRA offices.
      </p>
    ),
  },
  {
    id: 'dt-declaration-not-submit',
    question: 'What are the causes of a declaration not submitting?',
    answer: (
      <>
        <p className="content-paragraph">
          When submitting declarations: the annexures must be uploaded, its information equals to the declaration form
          information, and all certified by clicking in certifying box.
        </p>
        <p className="content-paragraph">
          If the declaration and annexures information are not equal, either the declaration or the annexures must then
          be changed until they are equal and accurate,{' '}
          <Link to="/domestic-taxes" className="content-link">
            (check on Explanation of Domestic Taxes and E-Tax)
          </Link>{' '}
          for details.
        </p>
      </>
    ),
  },
];
