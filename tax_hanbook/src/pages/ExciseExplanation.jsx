import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExciseExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Excise Duty</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is Excise Duty?</h2>
                    <p className="content-paragraph">
                        Excise Duty is a tax applied to specific products. This means that it is able to discourage consumption with negative social impacts. This can reduce the costs of healthcare and policing, whilst raising significant revenues for further government spending. As Excise Duties are charged on the consumption of certain products, it is also referred to as a 'excise tax'.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Excise Duty?</h2>
                    <p className="content-paragraph">
                        Any manufacturer or importer of a product that is subject to Excise Duty by the law is required to declare and pay Excise Duty. There is no threshold on company size for Excise Duty. A taxpayer who manufactures taxable products must declare and pay Excise Duty regardless of the size of the business.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the obligations of taxpayers registered for Excise Duty?</h2>
                    <p className="content-paragraph">
                        The obligations of Excise Duty registered taxpayers are detailed in Chapter 2, section one of the Law Nº 011/2025 Of 27/05/2025 Establishing the Excise Duty. Excise Duty registered taxpayers must:
                    </p>
                    <ul className="content-list">
                        <li>Keeping registers</li>
                        <li>Affixing a tax stamp on a taxable product</li>
                        <li>Submission to the Tax Administration of a reconciliation statement on the usage of tax stamps</li>
                        <li>Keeping books of accounts</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Who pays Excise Duty?</h2>
                    <p className="content-paragraph">
                        Excise Duty is paid by the manufacturer or importer of the taxable products. However, it is expected that these costs will be passed onto consumers in the form of higher selling prices.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the valuation methods of Excise Duty?</h2>
                    <p className="content-paragraph">
                        The rates of excise duties can be charged on a 'specific', 'ad valorem' or 'mixed' basis as follows:
                    </p>
                    <ul className="content-list">
                        <li>A specific Excise Duty charges a certain amount of tax per unit of the product. For example, Excise Duty is charged on premium oil in Rwanda at a rate of FRW 183 per litre.</li>
                        <li>An ad valorem Excise Duty charges a percentage of the taxable value of the product. For example, Excise Duty is charged on beer in Rwanda at 65% of the taxable value.</li>
                        <li>A mixed Excise Duty charges both a certain amount of tax per unit and as a percentage of the taxable value of the product. For example, Excise Duty is charged on cigarettes in Rwanda at a rate of 36% of the retail price in addition to FRW 230 per pack of 20 individual cigarettes.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What are the taxable products and rates of Excise Duty?</h2>
                    <p className="content-paragraph">
                        The tax rates for Excise Duty vary depending upon the product. The taxable products and tax rates are:
                    </p>
                    <p className="content-paragraph">
                        The taxable base for ad valorem Excise Duty on locally manufactured products is calculated according to the selling price, excluding all other taxes.
                    </p>
                    <p className="content-paragraph">
                        The rates of Excise Duty are the same for both domestic and imported products. For more details on the taxable value of Excise Duty on imported products, <Link to="/excise-explanation">(check on Excise Explanation)</Link>.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 37</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Amahoro produces fruit juice. In one tax period she manufactures and sells 10,000 small bottles for a pre-tax selling price of FRW 400 each for a total taxable sale during that tax period of FRW 4,000,000. Amahoro must pay ad valorem Excise Duty of:
                        </p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            FRW 4,000,000 * 10% = FRW 400,000.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 38</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Ubumwe produces cigarettes. In one tax period he manufactures and sells 400 packs (of 20 cigarettes) for a pre-tax selling price of FRW 300 each for a total taxable sale during that tax period of FRW 120,000. Ubumwe must pay mixed Excise Duty of:
                        </p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            (FRW 120,000 * 36%) + (400 * FRW 230) = FRW 135,200.
                        </p>
                    </div>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 39</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Lucie produces banana wine using ingredients sourced in Rwanda. In one tax period she manufactures and sells 200 bottles for a pre-tax selling price of FRW 850 each for a total taxable sale during that period of FRW 170,000. Lucie must pay ad valorem Excise Duty of:
                        </p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            FRW 170,000 * 40% = FRW 68,000.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Excise Duty?</h2>
                    <p className="content-paragraph">
                        Excise Duty is declared on a monthly basis and must be declared and paid within five days after the end of each tax period.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the exemptions for Excise Duty?</h2>
                    <p className="content-paragraph">
                        The following goods are exempt from Excise Duty:
                    </p>
                    <ul className="content-list">
                        <li>Goods for charitable organizations;</li>
                        <li>Vehicles assembled in Rwanda;</li>
                        <li>One personal vehicles of a returning Rwandan diplomat;</li>
                        <li>one vehicle of a Rwandan returnee or any other person returning back from a foreign country who fulfils exemption conditions set forth under the Customs Law;</li>
                        <li>minibus and bus that can carry not less than 14 persons, lorries and single cabin pickups manufactured to carry goods, refrigerating vehicles, tourist vehicles, ambulances and vehicles designed for persons with disabilities;</li>
                        <li>Products which are specifically manufactured for export;</li>
                        <li>Products which are sold to duty free shops and other specific persons legally determined</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Should Excise Duty be paid on exports?</h2>
                    <p className="content-paragraph">
                        Taxable products are exempt from Excise Duty if they were specifically manufactured for export.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are tax stamps?</h2>
                    <p className="content-paragraph">
                        A tax stamp is a sign affixed on some products subject to Excise Duty to show retailers and consumers that excise duty has been paid. The products requiring tax stamps are cigarettes (each pack of 20 cigarettes), wines and liquors (each bottle). Tax stamps can be purchased (at cost price) from RRA. Call 3004 for details on purchasing tax stamps.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ExciseExplanation;

