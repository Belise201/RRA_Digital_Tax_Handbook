import React from 'react';
import { FileText } from 'lucide-react';

const ImmovablePropertyTax = () => {
  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">Immovable Property Tax</h1>
              <div className="professional-title-divider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <section className="content-section">
          <h2>What is the Immovable Property Tax?</h2>
          <p className="content-paragraph">
            Immovable Property Tax is a tax levied on the market value of a building and the surface of a plot of land. The land and buildings are referred to as the 'Immovable Property'. In order to facilitate taxpayers, the market value of the building only needs to be assessed every five years, unless major changes in the building and structures occur.
          </p>
        </section>

        <section className="content-section">
          <h2>Who is subject to the Immovable Property Tax?</h2>
          <p className="content-paragraph">
            The immovable property tax is declared and paid by:
          </p>
          <ul className="content-list">
            <li>the owner, the usufructuary or any other person considered to be the owner.</li>
            <li>The proxy of an owner who lives abroad;</li>
          </ul>
          <p className="content-paragraph">
            The tax liability on immovable property is not terminated or deferred if the owner of immovable property has disappeared without leaving behind a proxy or other person to manage the immovable property on his or her behalf. If any land or properties is owned by more than one co-owner, the co-owners shall appoint and authorise one owner or any other person as a proxy to represent them collectively as a group of taxpayers.
          </p>
          <p className="content-paragraph">
            If co-owners of immovable property did not appoint a co-owner or a proxy to represent them collectively as a group of taxpayers, the tax obligations related to the immovable property are settled in accordance with laws regulating co-owned property.
          </p>
        </section>

        <section className="content-section">
          <h2>What is the tax base of the Immovable Property Tax?</h2>
          <p className="content-paragraph">
            The tax base of the immovable property is:
          </p>
          <ul className="content-list">
            <li>The market value of a building and related plot;</li>
            <li>The surface of land designated for construction but without any construction; the surface of land not designated for residential use;</li>
            <li>The surface of a plot of land with a building exempted from immovable property tax.</li>
          </ul>
          <p className="content-paragraph">
            However, if the immovable property consists of a plot of land, a building and its improvements, the tax on immovable property is calculated on the market value of both the building and the related plot of land if the two are subject to tax.
          </p>
        </section>

        <section className="content-section">
          <h2>What is the taxable value of the Immovable Property?</h2>
          <p className="content-paragraph">
            If there is no building on a plot of land, the tax is calculated on each square metre of the whole surface of the plot of land. If there is a building on a plot of land, the tax is calculated on each square metre of the whole surface of the plot of land and the market value of the building.
          </p>
        </section>

        <section className="content-section">
          <h2>How is the building being valued?</h2>
          <p className="content-paragraph">
            The valuation of a building and its improvements must be carried out by a certified valuer of the Institute of Real Property Valuers in Rwanda (IRPV) or by a computerised mass valuation system. The approved list of valuers is displayed on the IRPV website at: https://www.irpv.rw/ or call on +250 (0)788 788 122 / +250 783 177 760.
          </p>
          <p className="content-paragraph">
            However, if the taxpayer presents supporting documents to the RRA, the acquisition value or the construction value of a building can be used until valuation by a certified valuer or by computerised mass valuation system is effective. The purchase price is considered to be the market value if all of the following three conditions are fulfilled:
          </p>
          <ul className="content-list">
            <li>The immovable property was bought within the previous five years in the free market</li>
            <li>The property value has not changed by more than twenty percent (20%) since the acquisition</li>
            <li>The acquisition contract is presented to the RRA</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>When must the Immovable Property be valued?</h2>
          <p className="content-paragraph">
            The market value of each immovable property is required to be valued on the basis of a five-year cycle.
          </p>
          <p className="content-paragraph">
            The first valuation of the immovable property is 1st January of the first taxable year. Unless significant changes to the value of the property occur, no subsequent valuations are required within the five-year assessment cycle. At the beginning of each five-year assessment cycle, the market value of the building is revised.
          </p>
        </section>

        <section className="content-section">
          <h2>What happens during the five-year assessment cycle?</h2>
          <p className="content-paragraph">
            Although valuation generally only takes place once in the five-year assessment cycle, declaration and payment must be made every year.
          </p>
          <p className="content-paragraph">
            This five-year cycle can be disturbed if, due to major changes in the building and structures, the value of the immovable property increases or decreases by more than 20% within an assessment cycle.
          </p>
          <p className="content-paragraph">
            If the RRA believes that a taxpayer's self-assessment on the value of the building is undervalued, it will proceed to a counter-valuation. The value from the counter-valuation will be considered as the final market value only if the difference between the taxpayer's self-assessment and RRA's counter-valuation is more than 20%.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the exemptions for Immovable Property Tax?</h2>
          <p className="content-paragraph">
            The following immovable properties are exempted from the immovable property tax:
          </p>
          <ul className="content-list">
            <li>One building intended by the owner to be occupied as his or her dwelling and its annex buildings located in a residential plot for one family. That building remains considered as his or her dwelling even when he/she does not occupy it for various reasons;</li>
            <li>Immovable property determined by the district Council or the Council of the City of Kigali as owned by vulnerable persons;</li>
            <li>Immovable property owned by the State, decentralized entities and public institutions, except if they are used for profit-making activities or for leasing;</li>
            <li>Immovable property belonging to foreign diplomatic missions in Rwanda if their countries do not levy tax on immovable property of Rwanda's diplomatic missions;</li>
            <li>Land used for agricultural, livestock or forestry activities whose area is equal to or less than two hectares;</li>
            <li>Land reserved for construction of residential houses but where no basic infrastructure has been erected;</li>
            <li>Plot of land on which a condominium is built or meant for construction of a condominium.</li>
          </ul>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 56</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Amahoro is a farmer and lives in a small house on her 30,000m2 farm. As the land usage is agricultural, the first 20,000m2 of land is exempted. Therefore, Amahoro is only required to pay the Immovable Property Tax on the remaining 10,000m2 of land.
            </p>
          </div>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 57</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              As Musafiri intends to live with his family on his residential property, the building component is not subject to property tax. Therefore, Musafiri is only required to pay tax for the plot of land.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>What is the tax rate on immovable property?</h2>
          <p className="content-paragraph">
            The tax rate on immovable property is determined as follows:
          </p>
          <ul className="content-list">
            <li>zero to FRW 80 per square meter of the surface of land</li>
            <li>0.5% of the market value of both the building and related plot of land for residential use;</li>
            <li>0.3% of the market value of both building and related plot of land for commercial use;</li>
            <li>0.1% of the market value of both the building and related plot of land for industrial use, building and plot belonging to micro-enterprises and small business.</li>
          </ul>
          <p className="content-paragraph">
            However, special consideration is given to the following:
          </p>
          <ul className="content-list">
            <li>a plot and a building for residential use of three floors are taxed at the rate of 0.25% of their market value;</li>
            <li>a plot and a building for residential use with more than three floors are taxed at the rate of 0.1% of their market value;</li>
            <li>in determining the taxable value of a commercial or industrial building, machinery and other equipment attached to the building are not considered.</li>
          </ul>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 58</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              In the year 2024, Amahoro owns two residential buildings. Both buildings are located in Isange village where the land tax rate is FRW 80 per square meter. Each building is valued at FRW 10,000,000 and constructed on a plot of 400 Square meters. Each plot is valued at FRW 3,000,000. Amahoro and his family occupy the first house. Using information above mentioned, let's us compute the tax to be paid by Amahoro.
            </p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Since the first house is exempted as the dwelling of the family, Immovable Property Tax is: FRW 80*400=FRW 32,000.
            </p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              For the second owned property, the Immovable Property Tax is: (FRW 10,000,000 + FRW 3,000,000) * 0.5%=FRW 65,000
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              The total Immovable Property Tax to be paid by Amahoro in 2024 is: FRW 32,000 + FRW 65,000=FRW 97,000.
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              Suppose the second property is a commercial building. Amahoro would pay: FRW 32,000 + (FRW 10,000,000 + FRW 3,000,000) * 0.3%=FRW 71,000
            </p>
          </div>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 59</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Amahoro owns a residential building with three floors plus a basement floor. The building is valued at FRW 10,000,000. As Amahoro does not intend occupying the house with her family and the building has four floors, the tax due on the building in 2019 is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              FRW 10,000,000 * 0.25% * 50% (reduction) = FRW 12,500
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>How is the land component valued?</h2>
          <p className="content-paragraph">
            The tax rate on the surface of plot of land is determined by the location of the land and the land use:
          </p>
          <ul className="content-list">
            <li>FRW 0 – FRW 80 per square metre per year (set by the District Council).</li>
            <li>First 20,000 square metres are exempt if the land is used for agriculture or livestock activities.</li>
          </ul>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 60</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              Amahoro owns a coffee farm, which is 30,000m2 in size. As her land is used for agriculture, the first 20,000m2 of land are exempted from Immovable Property Tax. Therefore, Amahoro is only required to pay the Immovable Property Tax on the remaining 10,000m2 of land. As the District Council set the rate on agriculture at FRW 0.4 per square metre at her location, the tax due is on land is:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              (30,000m2 farm - 20,000m2 exempted) * FRW 0.4 = 10,000m2 taxable farm land * FRW 0.4 = FRW 4,000
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>When is the deadline to declare and pay Immovable Property Tax?</h2>
          <p className="content-paragraph">
            Immovable Property Tax declaration is required and paid on an annual basis, for each immovable property. The tax period is the calendar year, from 1st January until 31st December. The deadline to declare and pay Immovable Property Tax by is 31st December of the same year.
          </p>
          <p className="content-paragraph">
            However, in the event of changes in the value of the immovable property by more than 20% within an assessment cycle, the taxpayer must submit a new tax declaration reflecting these value changes and pay it within one month.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 61</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Nshuti owns a house with land liable to Immovable Property Tax. He must declare and pay his Immovable Property Tax for the tax period in 2023 – from 1st January 2023 until 31st December 2023 – by the deadline of 31st December 2023.
            </p>
            <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              Given that there will be no substantial change in the value of his immovable property, his declaration of the year 2023 will also determine the tax to be paid on the building in the following year – which is in the same tax assessment cycle.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>What happens if the Immovable Property changes ownership during the tax period?</h2>
          <p className="content-paragraph">
            If Immovable Property is purchased in a given tax period, the old owner must declare and pay the amount including the month of the ownership transfer. The new owner must declare and pay Immovable Property Tax for the remaining months.
          </p>
          <p className="content-paragraph">
            No transfer of ownership of an immovable property can take place without all due taxes having been paid to RRA.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 62</h3>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
              The most recent valuation of Rukundo's immovable property implied that the Immovable Property Tax to be paid is FRW 60,000 per year. As Rukundo sells his plot to Amahoro in August 2023, Rukundo needs to pay the Immovable Property Tax for eight months of 2023 before he can transfer the plot. Amahoro needs to pay the Immovable Property Tax for the remaining four months. The tax due in 2023 is as follows:
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              Tax due of Rukundo: FRW 60,000 * 8/12 = FRW 40,000
            </p>
            <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
              Tax due of Amahoro: FRW 60,000 * 4/12 = FRW 20,000
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>What are the rates for tax on sale of immovable property?</h2>
          <p className="content-paragraph">
            There is established a tax on sale of immovable property levied in accordance with the following rates and modalities:
          </p>
          <ul className="content-list">
            <li>a rate of 2% is levied on the sale value of an immovable property for commercial use if the seller is a taxpayer registered for income tax</li>
            <li>a rate of 2.5% is levied on the sale value of an immovable property sold by a person not registered for income tax</li>
          </ul>
          <p className="content-paragraph">
            This tax is levied on the balance of the sale value of the property after deduction of FRW 5,000,000 which is not subject to tax.
          </p>
        </section>

        <section className="content-section">
          <h2>What is the tax period for a tax on sale of immovable property?</h2>
          <p className="content-paragraph">
            There is no specific tax period for a tax on sale of immovable property. This tax is due on transfer of a property between seller and buyer.
          </p>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 63</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              ABC Ltd, an income tax registered taxpayer sold a commercial building at FRW 60,000,000. The tax on sale of Immovable Property to be paid is (FRW 60,000,000 – FRW 5,000,000) * 2% = FRW 1,100,000.
            </p>
          </div>
          <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 71</h3>
            <p className="content-paragraph" style={{ marginBottom: 0 }}>
              Ihirwe, a resident of Gasabo district sold his residential building at FRW 10,000,000. The tax on sale of Immovable Property to be paid is (FRW 10,000,000 – FRW 5,000,000) * 2.5% = FRW 125,000.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImmovablePropertyTax;
