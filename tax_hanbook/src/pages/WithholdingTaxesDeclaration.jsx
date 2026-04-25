import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const WithholdingTaxesDeclaration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Declaring Withholding Taxes (WHT 15% and WHT 3%)</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph">
            The declaration process for withholding taxes is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Annexures</h2>
          <p className="content-paragraph">
            Firstly, download the Withholding Annexures from the E-Tax website, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on downloading annexures.
          </p>
          <p className="content-paragraph">
            It is important to note that each type of withholding tax (including the different types of income subject to Withholding 15%) must complete their own annexure and declaration separately. The whole declaration process should be completed for each type of withholding tax before beginning the next type.
          </p>
          <p className="content-paragraph">
            The Withholding Annexure file has three tabs. Only the 'Withholdings' Tab needs to be completed, validated and saved for withholding taxes, the other tabs are for Gaming Taxes, <Link to="/gaming-tax-explanation">(check on Explanation of Gaming Taxes)</Link> for more details on Gaming Taxes. <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> if the taxpayer has any problems when validating annexures.
          </p>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholdings Tab</h3>
          <p className="content-paragraph">
            This tab is applicable for any taxpayer who has withheld tax of 15% (except on gambling proceeds) or 3%.
          </p>
          <p className="content-paragraph">
            The 'Withholdings' tab has 8 columns. Each row is for a separate transaction where tax has been withheld. For each transaction, enter details on:
          </p>
          <ul className="content-list">
            <li>Withholdee's TIN – Enter the Taxpayer Identification Number (TIN) of the taxpayer receiving the income, from whom tax is being withheld and paid on their behalf. If they do not have a TIN, enter '999999999' (nine '9's).</li>
            <li>Withholdee's Name – Enter the name of the taxpayer receiving the income, from whom tax is being withheld and paid on their behalf.</li>
            <li>Invoice/Transaction Number - Enter the unique invoice number of the transaction.</li>
            <li>Date of Withholding (dd/mm/yyyy) – Enter the date of the transaction, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
            <li>Nature of Goods/Services - Enter a brief description of the goods or services for which income is being withheld.</li>
            <li>Amount on which to Withhold – Enter the total amount of income which is subject to withholding tax, excluding other taxes.</li>
            <li>Rate Used – Enter the rate of tax withheld, without the percentage symbol. For example, withholding tax of 3% should be entered as '3'.</li>
            <li>Amount – Enter the amount of tax withheld. This should equal 'Amount on Which to Withhold' multiplied by 'Rate Used'%.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Withholding Taxes declaration</h2>
          <p className="content-paragraph">
            Once the relevant annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the declaration, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declaration.
          </p>
          <p className="content-paragraph">
            However, as previously mentioned it is important to note that each type of withholding tax, including the different types of income subject to withholding 15%, must be declared separately.
          </p>
          <p className="content-paragraph">
            In addition, it is important to select the correct type of withholding tax, with the different types of income subject to WHT 15% listed as 'WOP – INTEREST', 'WOP – DIVIDEND' and so on. Withholding tax of 15% on payments for goods and services supplied by non-registered taxpayers is listed as 'WOP – SERVICES'. Finally, WHT 3% is listed as 'WOP – PUBLIC SUPPLIES'. WOP refers to 'Withholding On Payments'.
          </p>
          <p className="content-paragraph">
            The withholding taxes declaration forms require similar data to the annexures that have previously been completed. The important distinction is that in the withholding taxes declaration forms, the total combined values for all transactions for the withholding type during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 44</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              An example WHT 15% declaration form is entered below. This is a withholding tax of 15% on dividends. The WHT 15% due for this taxpayer in this tax period is FRW 877,500.
            </p>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/wht_declaration_01.png" alt="WHT 15% Declaration Form">
              <img
                src="/images/wht_declaration_01.png"
                alt="WHT 15% Declaration Form"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            After saving the declaration form, upload the annexures and then compare with the declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declarations.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 45</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Continuing the example of the WHT 15% declaration above, the comparison between this WHT 15% declaration and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted.
            </p>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/wht_declaration_02.png" alt="WHT Declaration Comparison">
              <img
                src="/images/wht_declaration_02.png"
                alt="WHT Declaration Comparison"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/lump_sum_03.png" alt="WHT Declaration Submitted">
              <img
                src="/images/lump_sum_03.png"
                alt="WHT Declaration Submitted"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <p className="content-paragraph">
            Click 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. <Link to="/methods-of-paying-taxes">(check on Methods of Paying Taxes)</Link> for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines.
          </p>
        </section>

        <section className="content-section">
          <h2>Who must pay withholding taxes penalties and fines?</h2>
          <p className="content-paragraph">
            Any penalties and fines are the liability of the 'withholding agent', where the withholding agent is defined as the source of the taxable income who is required to declare and pay the withholding tax.
          </p>
        </section>

        <section className="content-section">
          <h2>What if the withholding agent fails to withhold tax?</h2>
          <p className="content-paragraph">
            A withholding agent who fails to withhold tax at the point of transaction, is still liable to declare and pay the withholding tax, including any penalties and fines.
          </p>
          <p className="content-paragraph">
            However, the withholding agent is entitled to recover the principal amount from the recipient of the income.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WithholdingTaxesDeclaration;
