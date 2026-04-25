import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const VatDeclaration = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Declaring VAT</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <p className="content-paragraph">
            The declaration process for VAT is similar to other domestic taxes, see the guide to Declaring Domestic Taxes using E-Tax <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Annexures</h2>
          <p className="content-paragraph">
            Firstly, download the VAT Annexures from the E-Tax website, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details on downloading annexures.
          </p>
          <p className="content-paragraph">
            The VAT Annexure file has five tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> if the taxpayer has any problems when validating annexures.
          </p>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Sales Tab</h3>
          <p className="content-paragraph">
            This tab is applicable for taxpayer who has made sales during the tax period. These must be entered regardless of whether the sales were taxable, exempt, zero-rated or exported.
          </p>
          <p className="content-paragraph">
            This sales data can be entered manually, or can be copied from the Electronic Invoicing System (EIS), a type of EBM Back Office and pasted into the Sales tab. For more information on copying sales data from the EBM Back Office, see the EIS section <Link to="/vat-declaration">(check on Declaring VAT)</Link>.
          </p>
          <p className="content-paragraph">
            The 'Sales' tab has 11 columns. Each row is for a separate transaction. For each transaction, enter details on:
          </p>
          <ul className="content-list">
            <li>Buyer TIN – For sales to other businesses, enter the Taxpayer Identification Number (TIN) of the buyer. For sales to final consumers, this can be left empty, where the system will convert it to '999999999' (nine '9's).</li>
            <li>Buyer Name – As above, for sales to other businesses, enter the name of the buyer. For sales to final consumers, this can be left empty.</li>
            <li>Nature of Goods – Enter a brief description of the goods or services that have been sold.</li>
            <li>Invoice Number – Enter the unique invoice number of the transaction; for example, SDC001000000/001.</li>
            <li>Invoice Date (dd/mm/yyyy) – Enter the date of the transaction in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
            <li>Total Amount of Sales (VAT Exclusive) – Enter the value of the transaction, excluding VAT.</li>
            <li>Exempted Sales Amount – Enter the value of sales of goods or services that were exempt from VAT.</li>
            <li>Zero Rated Sales Amount – Enter the value of sales of goods or services that were zero-rated for VAT purposes. Although exports are also zero-rated, do not include these in this column, instead enter exports in the 'Exports Amount column'.</li>
            <li>Exports Amount – Enter the value of sales of goods or services that were exported and sold outside Rwanda and therefore zero-rated for VAT purposes.</li>
            <li>Taxable Sales – Enter the total value of taxable sales. This is equal to 'Total Amount of Sales (VAT Exclusive)' minus ('Exempted Sales Amount' + 'Zero Rated Sales Amount' + 'Exports Amount').</li>
            <li>VAT – Enter the total output VAT. This is equal to 'Taxable Sales' * 18%.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Purchases Tab</h3>
          <p className="content-paragraph">
            This tab is applicable to any taxpayer who has purchased inputs from within Rwanda during the tax period for use in their goods and services sold.
          </p>
          <p className="content-paragraph">
            The 'Purchases' tab is very similar to the 'Sales' tab except that it refers to the locally purchased inputs that have gone into the goods and services listed in 'Sales'.
          </p>
          <p className="content-paragraph">
            Fill in the details in the same manner as before, except that it is now the Supplier TIN and Supplier Name that is required. In addition, there is no longer differentiation for exempt, zero-rated or exports, just the 'Amount without VAT' and the 'VAT' paid on local purchases.
          </p>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>VAT Importation Tab</h3>
          <p className="content-paragraph">
            This tab is applicable for any taxpayer who has imported inputs during the tax period for use in their goods and services sold. This tab uses information from the customs declaration of the imported inputs.
          </p>
          <p className="content-paragraph">
            The 'VAT Importation' tab has 7 columns. Each row is for a separate import transaction. For each transaction, enter details on:
          </p>
          <ul className="content-list">
            <li>Customs Station – Enter the border post where the goods or services were imported. This is listed under the 'Office of Destination' in the top right of the customs declaration.</li>
            <li>Customs Declaration (DD COM) Number – Enter the unique customs declaration number, for example: 'C39012'. This is listed under the 'Customs Reference' in the top right of the customs declaration.</li>
            <li>Customs Declaration Date – Enter the date of the importation, which must be entered in the format of DD/MM/YYYY such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted. This is listed next to the 'Customs Reference' in the top right of the customs declaration.</li>
            <li>Nature of Goods – Enter a brief description of the goods that have been imported. This is listed in the 'Packages and descriptions of goods' section in the middle of the customs declaration.</li>
            <li>Origin – Enter the name of the country where the goods or services purchased from. This means that if a product first comes from the United Kingdom but arrives via boat to Kenya and lorry through Uganda to the Gatuna border, the origin country is United Kingdom. This is listed under the 'Country of Origin' or 'Cty. orig. Code' in the middle of the customs declaration.</li>
            <li>Customs Value (CIF) – Enter the value of the goods or services upon entering Rwanda in Rwandan Francs. CIF stands for Cost, Insurance and Freight which means that this value includes the cost of the goods and services from when they originated, but also includes the costs of insurance and freight or transport in getting the goods to Rwanda. The value in FRW is under the 'Statistical Value' in the middle right of the customs declaration.</li>
            <li>VAT Paid – Enter the VAT paid on the imports. This is equal to the 'V02' Amount in the 'Calculation of Taxes' section in the middle of the customs declaration.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Deductible VAT Reverse Tab</h3>
          <p className="content-paragraph">
            This tab is applicable to any taxpayer who has received services from foreign suppliers during the tax period.
          </p>
          <p className="content-paragraph">
            The 'Deductible VAT Reverse' tab has 6 columns. Each row is for a separate transaction. For each transaction, enter details on:
          </p>
          <ul className="content-list">
            <li>Suppliers Name – Enter the name of the foreign supplier who provided the services. Note: The Taxpayer Identification Number (TIN) is not required as VAT Reverse Charge is only required from taxpayers who received services from non-resident suppliers who are not registered in Rwanda if the services are not available in the local market.</li>
            <li>Nature of Services Supplied – Described above.</li>
            <li>Invoice Number – Described above.</li>
            <li>Invoice Date (dd/mm/yyyy) – Described above.</li>
            <li>Total Invoice Amount – Enter the total amount paid for the services to the foreign supplier, excluding VAT.</li>
            <li>VAT Reverse Charge Amount – Enter the VAT to be paid by the taxpayer. If all services are taxable, this is equal to 'Total Invoice Amount' * 18%.</li>
          </ul>

          <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>VAT Retained Tab</h3>
          <p className="content-paragraph">
            This tab is applicable to any taxpayer who has sold goods or services to public institutions and had the VAT withheld and paid on their behalf by the public institution.
          </p>
          <p className="content-paragraph">
            The 'VAT Retained' tab has 8 columns. Each row is for a separate import transaction. For each transaction, enter details on:
          </p>
          <ul className="content-list">
            <li>Public Institution's TIN – Enter the Taxpayer Identification Number (TIN) of the public institution to which the goods or service were sold.</li>
            <li>Public Institution's Name – Enter the name of the public institution to which the goods or service were sold.</li>
            <li>Nature of Goods or Services – Described above.</li>
            <li>Invoice Number – Described above.</li>
            <li>Date of Invoice – Described above.</li>
            <li>Date Delivered – Enter the date the goods or services were delivered or completed, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
            <li>Amount on Invoice (VAT Exclusive) – Enter the amount of the invoice, excluding VAT.</li>
            <li>Withheld Amount (18%) – Enter the amount of VAT that was withheld and paid on the taxpayers' behalf by the public institution, typically Invoice (VAT Exclusive) * 18%.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>VAT Declaration</h2>
          <p className="content-paragraph">
            After all the applicable annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the declaration, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declaration.
          </p>
          <p className="content-paragraph">
            The declaration form requires similar data to the annexures that have previously been completed. The important distinction is that in the declaration form, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 34</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              An example VAT declaration form is entered below. The final VAT due for this taxpayer in this tax period is FRW 18,900.
            </p>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/vat_declaration_01.png" alt="VAT Declaration Form Part 1">
              <img
                src="/images/vat_declaration_01.png"
                alt="VAT Declaration Form Part 1"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/vat_declaration_02.png" alt="VAT Declaration Form Part 2">
              <img
                src="/images/vat_declaration_02.png"
                alt="VAT Declaration Form Part 2"
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
            After saving the declaration form, upload the annexures and then compare with the declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declaration forms.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 35</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Continuing the example of the VAT declaration form above, the comparison between this VAT declaration form and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted.
            </p>
          </div>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/vat_declaration_03.png" alt="VAT Declaration Comparison">
              <img
                src="/images/vat_declaration_03.png"
                alt="VAT Declaration Comparison"
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
            <ImageModal src="/images/vat_declaration_04.png" alt="VAT Declaration Submitted">
              <img
                src="/images/vat_declaration_04.png"
                alt="VAT Declaration Submitted"
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
          <h2>What are the penalties for a taxpayer who is not registered for VAT, but is required to be?</h2>
          <p className="content-paragraph">
            A taxpayer who is not registered for VAT but is required to be registered for VAT is subject to a penalty of:
          </p>
          <ul className="content-list">
            <li>Fifty percent (50%) of the amount of value added tax output for the entire period of operation without value added tax output, where Value Added Tax registration is required</li>
            <li>An administrative fine of one hundred (100%) of the tax indicated on any invoice issued by a retailer not registered for VAT and pays the tax indicated on that invoice</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VatDeclaration;
