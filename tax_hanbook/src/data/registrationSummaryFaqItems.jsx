/** Expandable Q&A for Registration Summary page — general questions. */
export const REGISTRATION_SUMMARY_MAIN_ITEMS = [
  {
    id: 'reg-sum-tin',
    question: 'How can businesses and individuals get a TIN?',
    answer: (
      <>
        <p className="content-paragraph">
          All businesses in Rwanda must register online through Rwanda Development Board (RDB) website. The RDB and RRA
          systems link to issue a unique Taxpayer Identification Number (TIN).
        </p>
        <p className="content-paragraph">
          However, RRA also registers and gives TINs for: Decentralised Entities Taxes and fees and non-businesses.
        </p>
      </>
    ),
  },
  {
    id: 'reg-sum-when-register',
    question: 'When must a taxpayer register their business?',
    answer: (
      <p className="content-paragraph">
        A taxpayer must register their business within seven days of the beginning of the business activity.
      </p>
    ),
  },
  {
    id: 'reg-sum-cost',
    question: 'How much does it cost to register a business?',
    answer: (
      <p className="content-paragraph">It is free to register a business in Rwanda.</p>
    ),
  },
  {
    id: 'reg-sum-how-register',
    question: 'How do you register a business?',
    answer: (
      <p className="content-paragraph">
        Taxpayers must register their business on the RDB business registration system. This is an online portal that
        makes it easier for taxpayers to register a business. This can be done online, or with the help of staff at RDB or
        Business Development Fund (BDF) telecentres.
      </p>
    ),
  },
  {
    id: 'reg-sum-tax-types',
    question: 'How do taxpayers register for specific tax types?',
    answer: (
      <p className="content-paragraph">
        Taxpayers are automatically registered for some tax types when registering their business. Call the RRA call
        centre toll free 3004 or visit RRA offices to register for other tax types.
      </p>
    ),
  },
];

/** Step-by-step guide (same expandable pattern). */
export const REGISTRATION_SUMMARY_STEP_ITEMS = [
  {
    id: 'reg-step-1',
    question: 'Step 1: Register and login on the RDB system',
    answer: (
      <p className="content-paragraph">
        Access the RDB business registration system at{' '}
        <a href="https://org.rdb.rw/busregonline" target="_blank" rel="noopener noreferrer" className="content-link">
          https://org.rdb.rw/busregonline
        </a>{' '}
        and click on &apos;Register Here&apos;. Submit the required details. Click the link in the validation email.
        Return to the RDB system to login.
      </p>
    ),
  },
  {
    id: 'reg-step-2',
    question: 'Step 2: Choose the business category to be registered',
    answer: (
      <p className="content-paragraph">
        The taxpayer must register as a &apos;Domestic&apos; company, individual &apos;Enterprise&apos; or
        &apos;Foreign&apos; company.
      </p>
    ),
  },
  {
    id: 'reg-step-3',
    question: 'Step 3: Complete the business registration application',
    answer: (
      <p className="content-paragraph">
        Enter all the required business information, including attaching scanned versions of any required documents.
        Submit the application to register the business and receive the Taxpayer Identification Number (TIN) by SMS.
      </p>
    ),
  },
  {
    id: 'reg-step-4',
    question: 'Step 4: Print Certificates',
    answer: (
      <p className="content-paragraph">
        Login to the RDB system to print the required certificates, including the business certificate and memorandum.
        The taxpayer is registered and must fulfil all tax obligations.
      </p>
    ),
  },
  {
    id: 'reg-step-5',
    question: 'Step 5: Register, declare and pay all required taxes',
    answer: (
      <p className="content-paragraph">
        The taxpayer is automatically registered for Income Tax and Trading License. Visit RRA offices to register for
        any additional required taxes, including visiting RRA tax centres.
      </p>
    ),
  },
];

/** @deprecated Use REGISTRATION_SUMMARY_MAIN_ITEMS + REGISTRATION_SUMMARY_STEP_ITEMS */
export const REGISTRATION_SUMMARY_FAQ_ITEMS = [
  ...REGISTRATION_SUMMARY_MAIN_ITEMS,
  ...REGISTRATION_SUMMARY_STEP_ITEMS,
];
