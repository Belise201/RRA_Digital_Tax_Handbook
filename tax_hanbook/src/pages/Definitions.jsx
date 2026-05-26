
const definitions = [
  {
    term: 'Taxpayer',
    definition:
      'Any individual, legal entity (e.g., company, organisation or institution) or association of individuals (e.g., cooperative) that is subjected to tax according to the Rwandan tax laws. Each taxpayer must have a TIN.',
  },
  {
    term: 'TIN',
    definition:
      "'TIN' refers to the Taxpayer Identification Number. This is a unique reference number to be used in all interactions with RRA. No taxpayer should ever have more than one TIN for the same business.",
  },
  {
    term: 'Registration',
    definition:
      "There are two types of 'registration' concerning RRA. Firstly, taxpayers must register their business, or register as an individual, and receive their unique Taxpayer Identification Number (TIN). Secondly, taxpayers must also register for each relevant tax type, as soon as they fulfil the requirements for that tax type.",
  },
  {
    term: 'Declaration',
    definition:
      "Taxpayers must submit a tax 'declaration' each tax period for each tax type for which they are registered. Declaring is also referred to as 'tax filing'. The tax declaration contains all the information, including annexures and declaration forms, required by RRA to determine the amount of tax due for that tax period.",
  },
  {
    term: 'Payment',
    definition:
      "After submitting a tax declaration, the taxpayer must then pay any tax due to the correct RRA account. The RRA reference number received after declaring ensures each payment is to the correct account.",
  },
  {
    term: 'Tax period',
    definition:
      "The 'tax period' refers to the period of time that the declaration refers to, which varies by tax type. The declaration concerns the taxable activities during the tax period. Note that the tax period is often not the same as the deadline or the date at the time of declaration.",
  },
  {
    term: 'Deadline',
    definition:
      "The deadline refers to the date that tax declarations and payments must be submitted by in order to avoid penalties and fines. Taxes can be declared and paid at any time between the end of the tax period and the deadline. This is referred to as the 'filing period'.",
  },
  {
    term: 'Transaction',
    definition:
      "A 'transaction' refers to any payment or exchange of goods or services being bought or sold.",
  },
  {
    term: 'Annexures',
    definition:
      "During the declaration process, many tax types require additional information to be submitted in 'annexures'. Typically, annexures are spreadsheets, with separate 'tabs' for different aspects, and are completed for every relevant transaction during the tax period.",
  },
  {
    term: 'Declaration Form',
    definition:
      "During the declaration process, each tax type also requires the key information to be submitted in a 'declaration form'. This requires the total of all relevant transactions during the tax period.",
  },
  {
    term: 'Turnover',
    definition:
      "'Turnover' refers to the total value of sales made by a taxpayer in a tax period. This may also be referred to as revenue, business income or total sales. Note that turnover is not the same as profit, as profit takes into account the taxpayer's business costs.",
  },
  {
    term: 'Compliance',
    definition:
      "'Compliance' refers to the extent to which taxpayers fulfil all their tax obligations, including registering, declaring accurately and paying taxes on time. Businesses or individuals that are 'non-compliant' may face penalties, fines and other enforcement measures.",
  },
  {
    term: 'Arrears',
    definition:
      "'Arrears' refers to any amount owed by taxpayers to RRA. This includes any unpaid taxes after the deadline, and unpaid penalties, fines and interests.",
  },
  {
    term: 'Refunds',
    definition:
      "'Refunds' refers to any amount of VAT owed by RRA to taxpayers. These are also referred to as 'tax credits' for other tax types. 'Refunds' can be received by taxpayers in the form of 'cash' while tax credits in the form of 'credit notes' that can be deducted against future taxes, or cash.",
  },
  {
    term: 'Consignment',
    definition:
      "A 'consignment' refers to any group of goods that is declared together when importing or exporting. Typically, this refers to the 'container load' or 'truck load' that is being transported together.",
  },
  {
    term: 'FRW',
    definition:
      "'FRW' refers to Rwandan Francs. This is the currency of Rwanda and the currency that all declarations and payments must be made in unless otherwise specified.",
  },
];

const Definitions = () => {
  return (
    <div className="page-container">
      <div className="page-content page-content--plain-flow">
        {definitions.map((item, index) => (
          <section className="content-section" key={index}>
            <h2>{item.term}</h2>
            <p className="content-paragraph">{item.definition}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Definitions;
