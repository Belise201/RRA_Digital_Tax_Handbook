import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const VatExplanation = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Explanation of VAT</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What is VAT?</h2>
          <p className="content-paragraph">
            VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers on the value added at each stage of production.
          </p>
          <p className="content-paragraph">
            VAT is applied to as wide a range of products as possible to ensure fairness across business sectors. However, there are some goods and services that are exempt or zero-rated for VAT. This is usually because tax on these goods and services may be unfairly burdensome on the poor or because those goods and services have benefits to efficiency across the rest of the economy.
          </p>
          <p className="content-paragraph">
            VAT registered taxpayers are required to have at least one Electronic Invoicing System (EIS), such as an EBM, each of their sales locations, and use these to provide EIS invoices for all sales transactions, <Link to="/electronic-invoicing-system-explanation">(check on Explanation of Electronic Invoicing System)</Link> for details on EISs.
          </p>
        </section>

        <section className="content-section">
          <h2>Who must register for VAT?</h2>
          <p className="content-paragraph">
            A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes all taxable, exempt and zero-rated sales.
          </p>
          <p className="content-paragraph">
            In addition, any taxpayer may choose to register for VAT.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the obligations of VAT registered taxpayers?</h2>
          <p className="content-paragraph">
            VAT registered taxpayers must:
          </p>
          <ul className="content-list">
            <li>Display clearly the VAT registration certificate in plain view at the place of business, <Link to="/certificates">(check on Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs))</Link> for how to obtain a VAT certificate.</li>
            <li>Use an Electronic Invoicing System (EIS), a type of EBM to issue VAT invoices.</li>
            <li>Issue an EBM invoice to all customers with every transaction.</li>
            <li>Submit a monthly or quarterly VAT declaration within fifteen days after the end of the tax period.</li>
            <li>Be available at all times to receive RRA officers and to make available books of accounts.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What is the tax rate of VAT?</h2>
          <p className="content-paragraph">
            The normal rate of VAT is 18%. There is also a zero-rate (0%) and exemptions applicable for certain types of goods and services, <Link to="/vat-explanation">(check on Explanation of VAT)</Link> for more details.
          </p>
        </section>

        <section className="content-section">
          <h2>Who pays VAT?</h2>
          <p className="content-paragraph">
            VAT is indirectly paid by the final consumer of the goods or service. However, taxpayers pay on their behalf on the value added at each stage of production.
          </p>
          <p className="content-paragraph">
            This means that taxpayers charge VAT on their sales, output VAT, whilst claiming back VAT paid on their inputs, input VAT. The amount each taxpayer pays is therefore equal to output VAT minus input VAT.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/vat_explanation_01.png" alt="VAT Payment Flow">
              <img
                src="/images/vat_explanation_01.png"
                alt="VAT Payment Flow"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
        </section>

        <section className="content-section">
          <h2>What do VAT inclusive and VAT exclusive prices mean?</h2>
          <p className="content-paragraph">
            The VAT inclusive price means the price of the goods or service including VAT. The VAT exclusive price means the price of the goods or service that is not the final cost, to which VAT has not yet been added.
          </p>
          <p className="content-paragraph">
            Goods and services supplied by VAT registered taxpayers must always be sold at the VAT inclusive price. However, when completing the VAT declaration form, the total VAT exclusive price of all sales is entered, <Link to="/vat-declaration">(check on Declaring VAT)</Link>. The invoice supplied to the customer must show the VAT exclusive price, amount of VAT and VAT inclusive price.
          </p>
          <p className="content-paragraph">
            To calculate the VAT inclusive or VAT exclusive price of taxable goods and services:
          </p>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            VAT exclusive price * 1.18 = VAT inclusive price.
          </p>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            VAT inclusive price / 1.18 = VAT exclusive price.
          </p>
        </section>

        <section className="content-section">
          <h2>Which goods and services are taxable for VAT?</h2>
          <p className="content-paragraph">
            All goods and services supplied in Rwanda are considered either taxable or exempt.
          </p>
          <p className="content-paragraph">
            Services are considered to be supplied in Rwanda if the services provider:
          </p>
          <ul className="content-list">
            <li>Has their headquarters in Rwanda.</li>
            <li>Is usually resident in Rwanda.</li>
            <li>Or if the recipient of the services benefits from it within Rwanda, for further details see the VAT Reverse Charge section <Link to="/vat-explanation">(check on Explanation of VAT)</Link>.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Which goods and services are zero-rated for VAT?</h2>
          <p className="content-paragraph">
            Zero-rated for VAT purposes means that no output VAT is charged on the goods or services, but input VAT can still be claimed.
          </p>
          <p className="content-paragraph">
            The list of zero-rated goods and services, detailed in Article 7 of Law N°049/2023 of 05/09/2023, includes:
          </p>
          <ul className="content-list">
            <li>Exported goods and their auxiliary services, including those that are already exempted;</li>
            <li>Exported services;</li>
            <li>Minerals sold on the domestic market;</li>
            <li>International transportation services of goods entering Rwanda and transportation services of goods in transit in Rwanda to other countries and related services;</li>
            <li>Commission fee charged to a tourist for all-inclusive tour package booking service;</li>
            <li>Goods sold in the shops that are exempted from tax as provided for by the law governing customs;</li>
            <li>Goods supplied in the shop intended for persons working in such security organs as provided for by the legislation governing such a shop;</li>
            <li>Goods and services intended for special categories of persons that are used in their missions:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>diplomats accredited to Rwanda;</li>
                <li>international organisations having signed agreements with the Republic of Rwanda;</li>
                <li>local non-governmental organizations to which goods and services are donated and acquired through funding by countries or international organizations having signed agreements with the Republic of Rwanda;</li>
                <li>projects funded by partners having signed agreements with the Republic of Rwanda;</li>
                <li>locally assembled electric automotive vehicles, hybrid automotive vehicles, relevant batteries and their electric charging station equipment.</li>
              </ul>
            </li>
          </ul>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 32</h3>
            <p className="content-paragraph">
              Innocent designs and manufactures clothes. He sells within Rwanda but also exports some to Kenya. The goods sold within Rwanda are subject to VAT as normal. The goods exported to Kenya are zero-rated. He pays input VAT on the material used in the manufacturing.
            </p>
            <p className="content-paragraph">
              He sells FRW 236,000 (VAT inclusive) within Rwanda, with VAT paid on inputs of FRW 10,000. He exports FRW 300,000 (VAT exclusive) to Kenya, with VAT paid on inputs of FRW 30,000.
            </p>
            <p className="content-paragraph">
              The total (VAT exclusive) sales is therefore:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              (FRW 236,000 / 1.18) + FRW 300,000 = FRW 200,000 + FRW 300,000 = FRW 500,000.
            </p>
            <p className="content-paragraph">
              The taxable sales exclude the exports so is FRW 200,000. The output VAT is therefore:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              FRW 200,000 * 18% = FRW 36,000.
            </p>
            <p className="content-paragraph">
              The input VAT includes the VAT paid for the taxable sales, as well as the zero-rated sales. The input VAT is therefore:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              FRW 10,000 + FRW 30,000 = FRW 40,000
            </p>
            <p className="content-paragraph">
              Therefore, Innocent's VAT due is equal to:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              FRW 36,000 – FRW 40,000 = FRW -4,000.
            </p>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Innocent requests a VAT refund from RRA of FRW 4,000.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Which goods and services are exempt for VAT?</h2>
          <p className="content-paragraph">
            Exempt for VAT purposes means that no output VAT is charged on the goods or services, and no input VAT can be claimed. The list of exempt goods and services, detailed in Article 1 of law No 009/2025 of 27/05/2025 emending article 8 of Law N°049/2023 of 05/09/2023, includes:
          </p>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            (1) The following goods and services are exempted from value added tax:
          </p>
          <ul className="content-list">
            <li>(a) water supply and environmental conservation services for non- profit-making purposes with the exception of sewage pump-out services;</li>
            <li>(b) the following goods and services for health-related purposes:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>(i) health and medical services;</li>
                <li>(ii) equipment intended for persons with disabilities;</li>
                <li>(iii) goods and pharmaceutical products appearing on the list established by the Minister in charge of health and approved by the Minister, which are imported or locally manufactured by a person authorised by the competent authority</li>
                <li>(iv) sanitary pads;</li>
              </ul>
            </li>
            <li>(c) educational materials, services and equipment supplied physically or online that appear on the list established by the Minister in charge of education and approved by the Minister;</li>
            <li>(d) books, newspapers and journals;</li>
            <li>(e) the following transportation services carried out by a licensed person:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>(i) transportation of persons by land in a motor vehicle with a capacity of 14 persons or more;</li>
                <li>(ii) transportation of persons by air;</li>
                <li>(iii) transportation of persons or goods by boat;</li>
                <li>(iv) transportation of household solid waste;</li>
              </ul>
            </li>
            <li>(f) lending, lease and sale of the following:
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>(i) sale or lease of land;</li>
                <li>(ii) sale of whole or part of a building for residential use;</li>
                <li>(iii) renting or grant of the right to occupy a building used as a place of residence for one person or a family if the period of accommodation for a continuous term exceeds 90 days;</li>
                <li>(iv) lease of a movable property made by a licensed financial institution or by or for a special purpose vehicle;</li>
              </ul>
            </li>
            <li>(g) financial and insurance services determined by an Order of the Minister in charge of finance;</li>
            <li>(h) goods and services in connection with burial or cremation of a dead body that appear on the list established by the Minister in charge of cemeteries and approved by the Minister;</li>
            <li>(i) energy supply equipment that appears on the list established by the Minister in charge of energy and approved by the Minister;</li>
            <li>(j) exempted goods under lease;</li>
            <li>(k) agricultural and livestock products, except processed ones. However, processed maize, rice and milk, excluding powdered milk and milk- derived products, are exempted from this tax;</li>
            <li>(l) agricultural and livestock insurance services;</li>
            <li>(m) services, agricultural inputs, agricultural and livestock materials and machinery that appear on the list established by the Minister in charge of agriculture and animal resources and approved by the Minister;</li>
            <li>(n) gaming activities;</li>
            <li>(o) personal effects of a Rwandan diplomat returning from a foreign mission, those of a Rwandan national who was residing abroad and is returning to Rwanda as well as those of any other Rwandan national returning to Rwanda and entitled to tax exemption in accordance with the customs legislation. In relation to the motor vehicle they possess, with the exception of returning Rwandan diplomats, other persons referred to in this Subparagraph are required to have owned the motor vehicle for a period of at least 12 months for being exempted;</li>
            <li>(p) goods and services intended for special economic zone imported by a licensed zone user;</li>
            <li>(q) goods, materials, supplies, machinery and motor vehicles intended for public organs in charge of national defence and security determined by law;</li>
            <li>(r) goods sold in customs before payment of taxes and duties;</li>
            <li>(s) machinery and capital assets of industries as well as raw materials used in industries that appear on the list established by the Minister in charge of industry and approved by the Minister;</li>
            <li>(t) aircraft, their spare parts and maintenance tools that appear on the list established by the Minister in charge of transport and approved by the Minister;</li>
            <li>(u) transfer of assets between related persons residing in Rwanda at the time of the restructuring of their business, activity if –
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>(i) the business activity of a person that acquires assets persists for a period of not less than three years; or</li>
                <li>(ii) the person transferring the assets has the actual business of supplying or providing exempted goods or services;</li>
              </ul>
            </li>
            <li>(v) equipment for conservation of bodies of victims of the Genocide against the Tutsi and its related evidence that appear on the list established by the Minister in charge of commemoration of the Genocide against the Tutsi and approved by the Minister;</li>
            <li>(w) goods or services which are purchased, sold, assigned, exchanged or otherwise transferred to or by a special purpose vehicle as a consequence of entering into an asset-backed securitisation transaction if the transaction has been approved or authorised based on the law regulating the capital market in Rwanda and the special purpose vehicle is a taxpayer registered in Rwanda;</li>
            <li>(x) imported pure electric motor vehicles, relevant batteries and their electric charging station equipment.</li>
          </ul>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            (2) Entities that import or locally manufacture the exempted equipment for health-related purposes referred to in Paragraph (1)(b) are those recognised by the Rwandan legislation as public organs, social welfare organisations and any other form of voluntary or charitable organisations.
          </p>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            (3) The exemption of the goods referred to in Paragraph (1) is applied as follows:
          </p>
          <ul className="content-list">
            <li>(a) the energy supply equipment referred to in Paragraph (1)(i) is exempted until 30 June 2028;</li>
            <li>(b) machinery and capital assets of industries as well as raw materials used in industries referred to in Paragraph (1)(s) are exempted until 30 June 2026;</li>
            <li>(c) imported pure electric motor vehicles, relevant batteries and their electric charging station equipment referred to in Paragraph (1)(x) are exempted until 30 June 2028.</li>
          </ul>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            (4) The equipment intended for persons with disabilities referred to in Paragraph (1)(b)(ii) is the one confirmed by a recognised medical doctor as being related to the disability of target users if the importer or the local manufacturer is a natural person.
          </p>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            (5) Processed agricultural and livestock products referred to in Paragraph (1)(k) are the following:
          </p>
          <ul className="content-list">
            <li>(a) products whose added value is created by the use of machinery or of any other method up to the stage of being consumed or used;</li>
            <li>(b) products whose added value is created in the manner that changes the number of the harmonized system code and related duty rates used in the customs system.</li>
          </ul>
          <p className="content-paragraph" style={{ fontWeight: '600' }}>
            (6) An Order of the Minister determines requirements for an industry to be exempted from payment of value added tax on machinery and capital assets of industries as well as raw materials used in industries referred to in Paragraph (1)(s).
          </p>
          <p className="content-paragraph">
            However, some supplies of goods have a sunset date. These are:
          </p>
          <ul className="content-list">
            <li>Energy supply equipment that appears on the list established by the Minister in charge of energy and approved by the Minister are exempted until 30 June 2028.</li>
            <li>Machinery and capital assets of industries as well as raw materials used in industries that appear on the list established by the Minister in charge of industry and approved by the Minister are exempted until 30 June 2026.</li>
            <li>Imported pure electric motor vehicles, relevant batteries and their electric charging station equipment are exempted until 30 June 2028.</li>
          </ul>
          <p className="content-paragraph">
            If it is not possible to distinguish whether the VAT paid on inputs directly, or indirectly, contributed to taxable sales or exempted sales, then the allowable input VAT can be equal to the ratio of taxable (or zero-rated) sales to total sales multiplied by the total input VAT.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 33</h3>
            <p className="content-paragraph">
              Lucie sells processed and unprocessed agricultural products. The processed agricultural products are subject to VAT as normal. The unprocessed agricultural products are exempt.
            </p>
            <p className="content-paragraph">
              She sells FRW 3,540,000 (VAT inclusive) of processed agricultural products. She sells FRW 1,000,000 (VAT exclusive) of unprocessed agricultural products.
            </p>
            <p className="content-paragraph">
              The total (VAT exclusive) sales are therefore:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              (FRW 3,540,000 / 1.18) + FRW 1,000,000 = FRW 3,000,000 + FRW 1,000,000 = FRW 4,000,000.
            </p>
            <p className="content-paragraph">
              The taxable sales exclude the exempt sales so is FRW 3,000,000. The output VAT is therefore:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              FRW 3,000,000 * 18% = FRW 540,000.
            </p>
            <p className="content-paragraph">
              She paid VAT on inputs of FRW 500,000 but cannot distinguish between which inputs contributed to which sales Therefore, the allowable input VAT is equal to:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600' }}>
              (FRW 3,000,000 / FRW 4,000,000) * FRW 500,000 = 0.75 * FRW 500,000 = FRW 375,000
            </p>
            <p className="content-paragraph">
              Therefore, Amahoro's VAT due is equal to:
            </p>
            <p className="content-paragraph" style={{ fontWeight: '600', marginBottom: 0 }}>
              FRW 540,000 – FRW 375,000 = FRW 165,000.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Can taxpayers that only sell exempt goods and services be exempted from VAT registration?</h2>
          <p className="content-paragraph">
            Taxpayers exclusively making exempt or zero-rated sales may write to the Commissioner General of RRA requesting exemption from the requirement to register for VAT. This letter should:
          </p>
          <ul className="content-list">
            <li>Identify the taxpayer's name and TIN.</li>
            <li>State the request to be exempted from the requirement to register for VAT.</li>
            <li>Contain all supporting documents proving the taxpayer does not make any taxable sales.</li>
          </ul>
          <p className="content-paragraph">
            Taxpayers whose business is totally exempted from VAT is exempted from the obligation to register for VAT. However, taxpayers making zero-rated sales who intend to claim input tax credits must register for VAT to do so.
          </p>
        </section>

        <section className="content-section">
          <h2>What is VAT Reverse Charge?</h2>
          <p className="content-paragraph">
            If a local taxpayer is the recipient of services from a foreign supplier, the local taxpayer is required to pay the VAT on this service. The local taxpayer must declare and pay 18% of the value of the services received.
          </p>
          <p className="content-paragraph">
            This VAT may be offset as an input tax only if the services recieved are not available in the local market. Services are considered not to be available in Rwanda if there is no one who can deliver identical or similar services on the local market. The taxpayer who wants to acquire a service not available in Rwanda must request for authorization from the Ministry of Finance and Economic Planning.
          </p>
          <p className="content-paragraph">
            If the services are available on the local market, then the VAT may not be offset as an input tax. This is to encourage taxpayers to work with domestic businesses.
          </p>
        </section>

        <section className="content-section">
          <h2>What is VAT Retained by Public Institutions?</h2>
          <p className="content-paragraph">
            Government and public institutions must withhold 18% VAT on all taxable supplies within public tenders. The taxpayer who has won the tender is required to declare the taxable supplies as output VAT, but can offset the VAT Retained by Public Institutions. The VAT is paid by the public institution on behalf of the taxpayer.
          </p>
          <p className="content-paragraph">
            The taxpayer must keep proof that this VAT was withheld. The public institution must pay the VAT to RRA by the fifteenth day of the following month, from the date of the invoice, as with regular VAT payments.
          </p>
        </section>

        <section className="content-section">
          <h2>What is a VAT refund?</h2>
          <p className="content-paragraph">
            It is possible for the final VAT due of a taxpayer to be negative. In this case, the taxpayer is due a VAT refund. There is no further action required of the taxpayer.
          </p>
          <p className="content-paragraph">
            An example of what this may look like on the tax declaration is shown below.
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/vat_explanation_02.png" alt="VAT Refund Example">
              <img
                src="/images/vat_explanation_02.png"
                alt="VAT Refund Example"
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
            If the VAT refund claimed is a small amount relative to the size of the business, as decided by RRA, this will be carried forward and will automatically be used to offset against future VAT payments. This is determined by the scale of the business as below:
          </p>
          <ul className="content-list">
            <li>Small taxpayer carries forward up to FRW 500,000</li>
            <li>Medium taxpayers carry forward up to FRW 2,000,000</li>
            <li>Large taxpayer carries forward up to FRW 5,000,000</li>
          </ul>
          <p className="content-paragraph">
            If the VAT refund claimed is a larger than these thresholds RRA will audit the refund and may contact the taxpayer for further evidence. If the refund is correct and accurate, RRA will contact the taxpayer and provide a bank cheque for the refund amount.
          </p>
          <p className="content-paragraph">
            If a taxpayer is in a refund position, they are required to provide a valid bank account for the deposit of the refund. The following is the procedure for submitting bank account details: E-Tax &gt; Update details
          </p>
          <div style={{ margin: '2rem 0', textAlign: 'center' }}>
            <ImageModal src="/images/vat_explanation_03.png" alt="E-Tax Update Details">
              <img
                src="/images/vat_explanation_03.png"
                alt="E-Tax Update Details"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                }}
              />
            </ImageModal>
          </div>
        </section>

        <section className="content-section">
          <h2>When is the deadline to declare and pay VAT?</h2>
          <p className="content-paragraph">
            VAT is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis.
          </p>
          <p className="content-paragraph">
            Whether monthly or quarterly, the VAT declaration must be submitted and paid by the 15th of the month following the end of the tax period.
          </p>
          <p className="content-paragraph">
            This means that monthly declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year.
          </p>
          <p className="content-paragraph">
            The quarters for taxpayers declaring VAT on a quarterly basis concern the tax period between:
          </p>
          <ul className="content-list">
            <li>1st January to 31st March must be declared and paid by 15th April;</li>
            <li>1st April to 30th June must be declared and paid by 15th July;</li>
            <li>1st July to 30th September must be declared and paid by 15th October;</li>
            <li>1st October to 31st December must be declared and paid by 15th January.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>What is a VAT Refund for Privileged Persons?</h2>
          <p className="content-paragraph">
            VAT Refund for 'privileged persons' refers to the refund available to certain consumers on the VAT paid on their goods or services. Where 'privileged persons' refers to:
          </p>
          <ul className="content-list">
            <li>diplomats or individuals on diplomatic missions.</li>
            <li>non-governmental organisations (NGOs), inter-governmental organisations (IGOs) or donor-funded projects.</li>
          </ul>
          <p className="content-paragraph">
            Privileged persons claim refunds online using the E-tax system.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VatExplanation;
