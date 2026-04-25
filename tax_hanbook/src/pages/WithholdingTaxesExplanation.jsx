import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const WithholdingTaxesExplanation = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Explanation of Withholding Taxes</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>Which tax types are included in this chapter?</h2>
          <p className="content-paragraph">
            This chapter focuses on withholding tax of 15% (WHT 15%) and withholding tax of 3% (WHT 3%). The process of declaring and paying each of these tax types are similar. The use of the phrase 'withholding taxes' in this chapter refers to WHT 15% and WHT 3%.
          </p>
          <p className="content-paragraph">
            It is important to note that although they are also technically types of withholding tax, this chapter does not concern Withholding tax on imports of 5% (WHT 5%), Pay As You Earn (PAYE), Gaming Tax or Mining Royalty Tax as these are declared and paid differently. For more details on these tax types, see their respective chapters in this Tax Handbook.
          </p>
          <p className="content-paragraph">
            Finally, withholding tax of 15% on gambling proceeds is a type of WHT 15%, but the process of declaring is more similar to that of Gaming Tax. Therefore, this particular type of WHT 15% is mentioned briefly, but is covered in more detail <Link to="/gaming-tax-explanation" className="content-link">(check on Gaming Tax Explanation)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>What are Withholding Taxes (WHT 15% and WHT 3%)?</h2>
          <p className="content-paragraph">
            Withholding taxes are paid on transactions on particular types of income. Withholding taxes are declared and paid by the taxpayer who is the source of the transaction, but on behalf of the recipient. The recipient is then able to claim the tax paid back in their Income Tax declarations.
          </p>
          <p className="content-paragraph">
            Withholding taxes are very important tax types. Withholding taxes ensure compliance by withholding tax on sources of income that might otherwise be difficult to trace. This increases the fairness of the tax system.
          </p>
          <p className="content-paragraph">
            The different types withholding taxes (WHT 15% and WHT 3%) concern different types of income with different tax rates, explained in turn below.
          </p>
        </section>

        <section className="content-section">
          <h2>What is Withholding Tax of 15% (WHT 15%)?</h2>
          <p className="content-paragraph">
            WHT 15% is required to be withheld and paid on income received by non-registered businesses or registered businesses without proof of their most recent income tax declaration. It applies to the following types of income:
          </p>
          <ul className="content-list">
            <li>Interest income</li>
            <li>Dividend income</li>
            <li>Royalty income</li>
            <li>Service fees</li>
            <li>Performance payments</li>
            <li>Gambling proceeds</li>
            <li>Payments for goods</li>
            <li>Public tender income</li>
          </ul>
          <p className="content-paragraph">
            The definitions of each of these types of income are discussed in more detail in this chapter.
          </p>
          <p className="content-paragraph">
            It is important to note that there are specific circumstances where some of these transactions may be subject to reduced withholding tax rates instead of 15% mostly because of double taxation avoidance agreements. Although the tax rate might be different, these are still referred to as WHT 15% in this Tax Handbook.
          </p>
        </section>

        <section className="content-section">
          <h2>What is Withholding Tax of 3% (WHT 3%)?</h2>
          <p className="content-paragraph">
            WHT 3% is required to be withheld and paid by public institutions on payments to the winners of public tenders who are registered and have proof of their recent income tax declaration.
          </p>
        </section>

        <section className="content-section">
          <h2>What is a Tax Compliance Certificate (Quitus Fiscal)?</h2>
          <p className="content-paragraph">
            A Quitus Fiscal certificate is available, upon request, to taxpayers who have demonstrated a history of correct tax compliance. The benefit of Compliance Certificate (Quitus Fiscal) is that certified taxpayers are not required to have WHT 3% withheld and paid on their behalf.
          </p>
          <p className="content-paragraph">
            The procedure and requirements for applying for a Quitus Fiscal certificate are listed in more detail <Link to="/certificates" className="content-link">(check on Certificates)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Who must register for Withholding Taxes?</h2>
          <p className="content-paragraph">
            Any taxpayer making payments of taxable income, of the types listed for each specific tax type above, must register for the relevant withholding taxes.
          </p>
        </section>

        <section className="content-section">
          <h2>How are Withholding Taxes calculated?</h2>
          <p className="content-paragraph">
            Withholding taxes are required to be calculated before transmitting transactions of taxable income. The net amount of income that is actually transmitted is therefore equal to:
          </p>
          <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
            Net Amount = Taxable Income – Tax Due
          </p>
          <p className="content-paragraph">
            Where 'Tax Due' is equal to:
          </p>
          <p className="content-paragraph" style={{ fontWeight: 'bold', margin: '1rem 0' }}>
            Tax Due = Taxable Income * Tax Rate
          </p>
          <p className="content-paragraph">
            Note that the taxable income excludes any other taxes due on the transaction, such as Value Added Tax (VAT).
          </p>
        </section>

        <section className="content-section">
          <h2>What is 'Withholding on interest'?</h2>
          <p className="content-paragraph">
            Interest income is subject to withholding tax of 15%. Interest income includes income from loans, deposits, guarantees, current accounts, government securities, bonds and negotiable securities. It excludes interest income on deposits held for at least one year.
          </p>
          <p className="content-paragraph">
            However, interest income on securities listed on capital markets and interest arising from investments in listed bonds with a maturity of three years and above can be withheld from Rwandan or EAC citizen registered taxpayers at the rate of 5%.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 41</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Amahoro has a current account with Gorilla Bank Ltd. Gorilla Bank Ltd pays her a gross interest of FRW 40,000 on her savings. As the source of this income, Gorilla Bank Ltd must declare and pay withholding tax on this interest of:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 40,000 * 15% = FRW 6,000
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              This FRW 6,000 is declared and paid to RRA by Gorilla Bank Ltd. Therefore, the net amount that is transmitted by Gorilla Bank Ltd to Amahoro is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 40,000 – FRW 6,000 = FRW 34,000
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              The FRW 6,000 withholding tax was withheld by Gorilla Bank Ltd on behalf of Amahoro. Therefore, Amahoro can claim back this amount in Income Tax declarations.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>What is 'Withholding on dividend'?</h2>
          <p className="content-paragraph">
            Dividend income is subject to withholding tax of 15%. Dividend income includes any income from shares and similar income distributed by companies.
          </p>
          <p className="content-paragraph">
            However, dividend income from securities listed on capital markets if the beneficiary of the dividend is a resident of Rwanda or EAC citizen is withheld at the rate of 5%.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 42</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              ABC Ltd pays a gross dividend of FRW 125,000 to its shareholder, Lucie. As the source of this income, ABC Ltd must declare and pay withholding tax on this dividend of:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 125,000 * 15% = FRW 18,750
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              This FRW 18,750 is declared and paid to RRA by ABC Ltd. Therefore, the net amount that is transmitted by ABC Ltd to Lucie is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 125,000 – FRW 18,750 = FRW 106,250
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              The FRW 18,750 withholding tax was withheld by ABC Ltd on behalf of Lucie. Therefore, Lucie can claim back this amount in Income Tax declarations.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>What is 'Withholding on royalty income'?</h2>
          <p className="content-paragraph">
            Royalty income is subject to withholding tax of 15%. Royalty income includes all payments of any kind received for the use of, or the right to use:
          </p>
          <ul className="content-list">
            <li>on the use of or the right to use any copyright of literary, craftsmanship or scientific work including cinematograph films, films or tapes used for radio or television broadcasting;</li>
            <li>on the use, right to use or exploitation of a trademark or a tradename, a design or a model, a computer application, a software and a patent;</li>
            <li>as the price or consideration of using, or of the right to use industrial, commercial or scientific equipment or for using information concerning industrial, commercial or scientific knowledge or formula;</li>
            <li>on the right to exploit or explore natural resource.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What are 'service fees'?</h2>
          <p className="content-paragraph">
            Service fees are subject to withholding tax of 15%. Service fees includes payments of any kind to any person other than to an employee, in consideration for any service of a managerial, technical or consultancy nature.
          </p>
          <p className="content-paragraph">
            Managerial services involve activities related to scoping or improving how a business is run, as opposed to the actual day-to-day activities involved in running the business.
          </p>
          <p className="content-paragraph">
            Technical services involve activities where skills or knowledge related to a technical field are required for the provision of goods and services.
          </p>
          <p className="content-paragraph">
            Consultancy services involve the provision of advice by experts, professionals or consultants in particular fields, typically of a short-term nature of less than one year. This can overlap with managerial and technical services as these can also be provided by a consultant.
          </p>
          <p className="content-paragraph">
            Lastly, board members allowance attracts 30% withholding tax.
          </p>
          <p className="content-paragraph">
            The rates of withholding tax on service fees can be affected by Double Taxation Agreements (DTAs) signed with other countries.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 43</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Innocent is hired by XYZ Business Ltd as a technical consultant on a short-term contract. Innocent's gross income for this contract is FRW 3,500,000. As the source of this income, XYZ Business Ltd must declare and pay withholding tax on this income of:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 3,500,000 * 15% = FRW 525,000
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
              This FRW 525,000 is declared and paid to RRA by XYZ Business Ltd. Therefore, the net amount transmitted by XYZ Business Ltd to Innocent is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 3,500,000 – FRW 525,000 = FRW 2,975,000
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              The FRW 525,000 withholding tax was withheld by XYZ Business Ltd on behalf of Innocent. Therefore, Innocent can claim back this amount in Income Tax declarations.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>What are 'performance payment'?</h2>
          <p className="content-paragraph">
            Performance payments are subject to withholding tax of 15%. Performance payments includes payments of any kind made to an artist, musician or sportsperson for a performance in Rwanda. This is irrespective of whether the payments are made directly or through an entity that is not resident in Rwanda.
          </p>
        </section>

        <section className="content-section">
          <h2>What are 'payments for goods and services supplied by non-registered taxpayers?</h2>
          <p className="content-paragraph">
            Payments of any kind for any goods and services supplied by non-registered taxpayers are subject to withholding tax of 15%. 'Non-registered taxpayers' refers to any individual or business without a unique Taxpayer Identification Number (TIN). This includes payments made for goods and services supplied by companies or individuals outside Rwanda that are not registered with RRA.
          </p>
        </section>

        <section className="content-section">
          <h2>What are 'gambling proceeds?</h2>
          <p className="content-paragraph">
            Gambling proceeds won by the player during gaming activities are subject to withholding tax of 15%. Gambling proceeds are defined as the difference between the winnings of a player and the amount of money invested by the player from the start until the end of the game.
          </p>
          <p className="content-paragraph">
            The declaration process for Withholding Tax of 25% on gambling proceeds is similar to Gaming Tax. Therefore, this is covered <Link to="/gaming-tax-explanation" className="content-link">(check on Gaming Tax Explanation)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>When is the deadline to declare and pay Withholding Taxes?</h2>
          <p className="content-paragraph">
            Withholding taxes (WHT 15% and WHT 3%) are each declared and paid on a monthly basis. The declaration must be submitted and any tax paid within fifteen (15) days of the end of the tax period in which the payment was made. A separate declaration is required for each type of withholding tax (including the different types of income subject to Withholding 15%). Declarations are not required if no taxable payments were made during the tax period.
          </p>
          <p className="content-paragraph">
            This means that declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year.
          </p>
        </section>

        <section className="content-section">
          <h2>Can Withholding Taxes be claimed back in Income Tax?</h2>
          <p className="content-paragraph">
            Taxpayers may claim back Withholding taxes that have been withheld and paid on their behalf in Income Tax declarations, <Link to="/withholding-taxes-explanation">(check on Explanation of Withholding Taxes)</Link> for more details.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WithholdingTaxesExplanation;
