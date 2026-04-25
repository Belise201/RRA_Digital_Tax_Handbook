import { BookOpen } from 'lucide-react';

const Definitions = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <BookOpen size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Definitions</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <div className="content-paragraph">
            <p><strong>Taxpayer</strong> – any individual, legal entity (e.g., company, organisation or institution) or association of individuals (e.g., cooperative) that is subjected to tax according to the Rwandan tax laws. Each taxpayer must have a TIN.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>TIN</strong> – 'TIN' refers to the Taxpayer Identification Number. This is a unique reference number to be used in all interactions with RRA. No taxpayer should ever have more than one TIN for the same business.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Registration</strong> – There are two types of 'registration' concerning RRA. Firstly, taxpayers must register their business, or register as an individual, and receive their unique Taxpayer Identification Number (TIN). Secondly, taxpayers must also register for each relevant tax type, as soon as they fulfil the requirements for that tax type.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Declaration</strong> – Taxpayers must submit a tax 'declaration' each tax period for each tax type for which they are registered. Declaring is also referred to as 'tax filing'. The tax declaration contains all the information, including annexures and declaration forms, required by RRA to determine the amount of tax due for that tax period.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Payment</strong> – After submitting a tax declaration, the taxpayer must then pay any tax due to the correct RRA account. The RRA reference number received after declaring ensures each payment is to the correct account.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Tax period</strong> – The 'tax period' refers to the period of time that the declaration refers to, which varies by tax type. The declaration concerns the taxable activities during the tax period. Note that the tax period is often not the same as the deadline or the date at the time of declaration.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Deadline</strong> – The deadline refers to the date that tax declarations and payments must be submitted by in order to avoid penalties and fines. Taxes can be declared and paid at any time between the end of the tax period and the deadline. This is referred to as the 'filing period'.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Transaction</strong> – A 'transaction' refers to any payment or exchange of goods or services being bought or sold.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Annexures</strong> – During the declaration process, many tax types require additional information to be submitted in 'annexures'. Typically, annexures are spreadsheets, with separate 'tabs' for different aspects, and are completed for every relevant transaction during the tax period.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Declaration Form</strong> – During the declaration process, each tax type also requires the key information to be submitted in a 'declaration form'. This requires the total of all relevant transactions during the tax period.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Turnover</strong> – 'Turnover' refers to the total value of sales made by a taxpayer in a tax period. This may also be referred to as revenue, business income or total sales. Note that turnover is not the same as profit, as profit takes into account the taxpayer's business costs.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Compliance</strong> – 'Compliance' refers to the extent to which taxpayers fulfil all their tax obligations, including registering, declaring accurately and paying taxes on time. Businesses or individuals that are 'non-compliant' may face penalties, fines and other enforcement measures.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Arrears</strong> – 'Arrears' refers to any amount owed by taxpayers to RRA. This includes any unpaid taxes after the deadline, and unpaid penalties, fines and interests.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Refunds</strong> – 'Refunds' refers to any amount of VAT owed by RRA to taxpayers. These are also referred to as 'tax credits' for other tax types. 'Refunds' can be received by taxpayers in the form of 'cash' while tax credits in the form of 'credit notes' that can be deducted against future taxes, or cash.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>Consignment</strong> – A 'consignment' refers to any group of goods that is declared together when importing or exporting. Typically, this refers to the 'container load' or 'truck load' that is being transported together.</p>
          </div>

          <div className="content-paragraph">
            <p><strong>FRW</strong> – 'FRW' refers to Rwandan Francs. This is the currency of Rwanda and the currency that all declarations and payments must be made in unless otherwise specified.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Definitions;
