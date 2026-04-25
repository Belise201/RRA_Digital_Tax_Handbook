import React from 'react';
import { FileText, Calculator, TrendingUp, Car, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import '../styles/Diagrams.css';

const IncomeTaxExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Income Tax</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What is Income Tax?</h2>
                    <p className="content-paragraph">
                        Income Tax is a tax on income resulting from business, self-employment and investment activities. Income Tax ensures that all businesses benefiting from Rwanda's infrastructure, security and prosperity contribute their fair share towards the nation's development.
                    </p>
                    <p className="content-paragraph">
                        Income Tax includes both Personal Income Tax (PIT) and Corporate Income Tax (CIT). The process of declaring these two tax types is similar so they are combined in this chapter of the Tax Handbook. A taxpayer only has to declare one of these two tax types.
                    </p>
                    <p className="content-paragraph">
                        Income Tax has different 'regimes' available for taxpayers of different levels of income. There is also Motor Vehicle Income Tax available to taxpayers who receive motor vehicle transport income. These options make the process of declaring and paying Income Tax simpler for lower Income taxpayers, including being able to declare on mobile phones using M-Declaration.
                    </p>
                    <p className="content-paragraph">
                        The main declaration of Income Tax is submitted on an annual basis. Instalment Quarterly Prepayments (IQP) are also declared and paid each quarter based on the annual declaration. This helps taxpayers to smooth out their tax obligations over the year.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the differences between PIT and CIT?</h2>
                    <p className="content-paragraph">
                        PIT is for individual traders and unincorporated businesses, whilst CIT is for companies. The rates of PIT and CIT are the same for all types of Income Tax regimes with the exception of 'Real Regime', <Link to="/income-tax-explanation">(check on Explanation of Income Tax)</Link> for more details.
                    </p>
                    <p className="content-paragraph">
                        This Tax Handbook will refer to 'Income Tax' if the information applies to both PIT and CIT. If the information is specific to only one tax type, the Tax Handbook will refer to 'PIT' or 'CIT' separately.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Income Tax?</h2>
                    <p className="content-paragraph">
                        Any taxpayer who receives taxable income during the tax period must register for Income Tax. Taxpayers are automatically registered for the relevant tax type when registering their business with RDB.
                    </p>
                    <p className="content-paragraph">
                        Taxpayers must register their business with RDB within seven days of beginning taxable activities or establishing the company, <Link to="/registration-guide">(check on Step-by-Step Guide to Business Registration)</Link> for more details on business registration. Whether they are registered for PIT or CIT depends upon the type of business.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is taxable income?</h2>
                    <p className="content-paragraph">
                        Taxable income includes all income sourced in Rwanda resulting from business, employment or investment activities and activities performed abroad by a resident of Rwanda. This includes:
                    </p>
                    <ul className="content-list">
                        <li>services and employment;</li>
                        <li>activities of a crafts person, singer, artist and a player;</li>
                        <li>sports, cultural and leisure activities;</li>
                        <li>activities carried out by a non-resident in Rwanda through a permanent establishment in Rwanda;</li>
                        <li>use, sale, lease and free transfer of business movable assets;</li>
                        <li>sale, lease and free transfer of immovable assets allocated to the business;</li>
                        <li>agricultural, fishing and forestry activities;</li>
                        <li>usufruct and other rights attached to immovable assets and their sale if such rights are allocated to the business;</li>
                        <li>investments in shares of companies;</li>
                        <li>direct or indirect sale or transfer of shares or debentures; change of profits into shares that increases the capital of partners, except for financial institution with paid-up capital below the minimum requirement set by the National bank of Rwanda;</li>
                        <li>distribution of profits among partners;</li>
                        <li>lending, deposits and other similar income-generating activities;</li>
                        <li>transfer, sale and lease of intellectual property;</li>
                        <li>digital services;</li>
                        <li>gaming activities</li>
                        <li>any other income generating activity.</li>
                    </ul>
                    <p className="content-paragraph">
                        Note that payment made by a resident of Rwanda for a service consumed abroad is not subject to withholding tax.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Which taxpayers are exempt from Income Tax?</h2>
                    <p className="content-paragraph">
                        Taxpayers that are exempt from Income Tax are not required to declare and pay Income Tax. Taxpayers that are exempt from Income Tax includes:
                    </p>
                    <ul className="content-list">
                        <li>The Government of Rwanda;</li>
                        <li>The City of Kigali;</li>
                        <li>The district</li>
                        <li>The National Bank of Rwanda;</li>
                        <li>Organisations that carry out only faith-oriented activities, humanitarian, charitable, scientific or educational character unless the revenue received exceeds the corresponding expenses or if those entities conduct a business;</li>
                        <li>International organisations or agencies of technical cooperation if such exemption is provided for by international agreements or an agreement concluded between these organisations and the Government of Rwanda;</li>
                        <li>Qualified pension funds;</li>
                        <li>Public institution in charge of social security;</li>
                        <li>Development Bank of Rwanda;</li>
                        <li>Agaciro Development Fund Corporate Trust;</li>
                        <li>Business Development Fund limited, "BDF Ltd";</li>
                        <li>Special purpose vehicle, unless the revenue received exceeds the corresponding expenses;</li>
                        <li>Common benefit foundations;</li>
                        <li>Resident trustee for income earned by a foreign trust.</li>
                    </ul>
                    <p className="content-paragraph">
                        However, they are required to submit their financial statements on E-Tax by the 31st of March after the tax period or three (3) months following specific tax period granted to taxpayers by the Minister of Finance and Economic Planning (MINECOFIN).
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the exemptions for agricultural income?</h2>
                    <p className="content-paragraph">
                        Income below FRW 12,000,000 resulting from agricultural and livestock activities is exempt from Income Tax. It is important to note that only the income above the threshold is taxable.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 12</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Amahoro is a farmer. In one tax period, she earns income of FRW 25,000,000 resulting from agricultural and livestock activities. Only the income above the threshold is taxable. Therefore, Amahoro's taxable income is:
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0, fontWeight: '600' }}>
                            FRW 25,000,000 – FRW 12,000,000 = FRW 13,000,000
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            Amahoro must declare and pay Income Tax on this FRW 13,000,000 as normal.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What other incentives are available for Income Tax?</h2>
                    <p className="content-paragraph">
                        There are additional exemptions or discounts that can be applied if the taxpayer fulfils certain criteria. The types of tax discounts allowed are subject to the Law on investment promotion and facilitation and Law establishing Taxes on Income, see the Rwanda Development Board (RDB) and RRA websites respectively for the latest versions of these laws.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the different Income Tax regimes?</h2>
                    <p className="content-paragraph">
                        Income Tax has three 'regimes' available for taxpayers of different amounts of annual turnover. These make the process of declaring and paying Income Tax simpler for lower income taxpayers. The regimes, and their corresponding turnover categories, are displayed below:
                    </p>
                    <div className="table-container" style={{ margin: '2rem 0' }}>
                        <table className="content-table" style={{ border: '1px solid #e2e8f0', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th className="table-header" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Annual Turnover</th>
                                    <th className="table-header" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Regime</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 2,000,000 – FRW 12,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Flat Tax</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 12,000,001 – FRW 20,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Lump Sum</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Above FRW 20,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Real Regime</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="content-paragraph">
                        However, for small businesses with an annual turnover below FRW 20,000,000 have an option to file income tax under simplified regime.
                    </p>
                    <p className="content-paragraph">
                        In addition to these regimes, there is also a different option available for taxpayers earning motor vehicle transport income. This is referred to as Motor Vehicle Income Tax, <Link to="/declaring-motor-vehicle-income-tax">(check on Declaring Motor Vehicle Income Tax using M-Declaration)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the Flat Tax regime?</h2>
                    <p className="content-paragraph">
                        The Flat Tax regime is available to taxpayers with an annual turnover between FRW 2,000,000 and FRW 12,000,000. The taxpayer must pay a specific 'Flat' amount of annual tax due depending upon their annual turnover, as displayed below.
                    </p>
                    <div className="table-container" style={{ margin: '2rem 0' }}>
                        <table className="content-table" style={{ border: '1px solid #e2e8f0', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th className="table-header" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Annual Turnover</th>
                                    <th className="table-header" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Annual Tax Due</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 2,000,000 – FRW 4,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 60,000</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 4,000,001 – FRW 7,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 120,000</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 7,000,001 – FRW 10,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 210,000</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 10,000,001 – FRW 12,000,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 300,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="content-paragraph">
                        Note that taxpayers with annual turnover below FRW 2,000,000 are required to submit their Income Tax declaration, but are not required to pay any Income Tax.
                    </p>
                    <p className="content-paragraph">
                        Flat Tax regime can be declared using M-Declaration or E-Tax, <Link to="/declaring-flat-tax-lump-sum-iqp">(check on Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration)</Link> and <Link to="/declaring-lump-sum-e-tax">(check on Declaring Lump Sum Income Tax using E-Tax)</Link> respectively for details.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 13</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Rukundo has a business fixing bikes. His annual turnover between January 1st and December 31st was FRW 8,750,500. This is within the third annual turnover category and so his annual 'Flat Tax' Income Tax due is FRW 210,000.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is the Lump Sum Income Tax?</h2>
                    <p className="content-paragraph">
                        The Lump Sum regime is available to taxpayers with an annual turnover between FRW 12,000,001 and FRW 20,000,000. The taxpayer must pay a specific 'Lump Sum' tax due equal to 3% of their annual turnover.
                    </p>
                    <p className="content-paragraph">
                        Lump Sum regime can be declared using M-Declaration or E-Tax, <Link to="/declaring-flat-tax-lump-sum-iqp">(check on Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration)</Link> and <Link to="/declaring-lump-sum-e-tax">(check on Declaring Lump Sum Income Tax using E-Tax)</Link> respectively for details.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 14</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Ubumwe Ltd is a carpentry business making furniture. Their annual turnover between January 1st and December 31st was FRW 17,400,200. Their annual 'Lump Sum' Income Tax due is:
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0, fontWeight: '600' }}>
                            FRW 17,400,200 * 3% = FRW 522,006.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is the Real Regime Income Tax?</h2>
                    <p className="content-paragraph">
                        The Real Regime is required for all taxpayers with an annual turnover above FRW 20,000,000, as well as all liberal professions. Liberal professions include, but are not limited to, accountants, company auditors, tax consultants, architects, real estate agents, lawyers, bailiffs, doctors, dentists and other similar professions. In addition, any taxpayer may choose to use the Real Regime, but cannot then change this decision for a period of three years from the date that RRA is informed of this choice.
                    </p>
                    <p className="content-paragraph">
                        The most important distinction of Real Regime is the rate applies to profit, not to turnover. This allows taxpayers to deduct expenses allowances against the income. For more details on the additional differences of Real Regime, <Link to="/real-regime-details">(check on Real Regime Details)</Link>.
                    </p>
                    <p className="content-paragraph">
                        In addition, it is important to note that unlike the other Income Tax regimes, the tax rate for Real Regime is slightly different for PIT and for CIT.
                    </p>
                    <p className="content-paragraph">
                        The tax rate for CIT is a uniform rate of 28% on the profit.
                    </p>
                    <p className="content-paragraph">
                        The tax rate for PIT is progressive, as shown below:
                    </p>
                    <div className="table-container" style={{ margin: '2rem 0' }}>
                        <table className="content-table" style={{ border: '1px solid #e2e8f0', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th className="table-header" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Annual taxable income (profit)</th>
                                    <th className="table-header" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Marginal PIT Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 0 – FRW 720,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>0%</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 720,001 – FRW1,200,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>10%</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>FRW 1,200,001 – FRW 2,400,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>20%</td>
                                </tr>
                                <tr>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>Above FRW 2,400,000</td>
                                    <td className="table-cell" style={{ border: '1px solid #e2e8f0', padding: '0.75rem' }}>30%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="content-paragraph">
                        It is important to note that these tax rates are marginal. This means that for each Real Regime PIT taxpayer each year, the first FRW 720,000 that they earn is taxed at 0%, the next FRW 480,000 is taxed at 10%, the next 1,200,000 is taxed at 20% and any remaining income is taxed at 30%. This means that no taxpayer is made worse off by receiving income in a higher tax bracket.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 15</h3>
                        <p className="content-paragraph">
                            Amahoro is the owner of a supermarket. Her annual turnover between January 1st and December 31st was FRW 62,000,000. Her deductible expenses, depreciation and allowances total FRW 54,000,000.
                        </p>
                        <p className="content-paragraph">
                            Her annual taxable profit is therefore:
                        </p>
                        <p className="content-paragraph" style={{ fontWeight: '600' }}>
                            FRW 62,000,000 – FRW 54,000,000 = FRW 8,000,000
                        </p>
                        <p className="content-paragraph">
                            Her annual Real Regime PIT due is:
                        </p>
                        <p className="content-paragraph" style={{ fontWeight: '600' }}>
                            (FRW 720,000 * 0%) + (FRW 480,000 * 10%) + (FRW 1,200,000 * 20%) + (FRW 6,800,000 * 30%) = FRW 0 + FRW 48,000 + FRW 240,000 + FRW 1,680,000 = FRW 1,968,000.
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            <Link to="/real-regime-details">(check on Real Regime Details)</Link> for a more comprehensive display of the formulas calculating Real Regime Income Tax.
                        </p>
                    </div>
                    <p className="content-paragraph">
                        Real Regime can only be declared using E-Tax, <Link to="/declaring-real-regime-e-tax">(check on Declaring Real Regime Income Tax using E-Tax)</Link> for more details on the process.
                    </p>
                    <p className="content-paragraph">
                        Small taxpayers who opt to pay tax on actual profit are able to avail of a simplified accounting method. These taxpayers are required to record:
                    </p>
                    <ul className="content-list">
                        <li>A record of all daily sales.</li>
                        <li>A record of all daily purchases.</li>
                        <li>A record of all monetary transactions.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What is the Motor Vehicle Income Tax?</h2>
                    <p className="content-paragraph">
                        The Motor Vehicle Income Tax is available to taxpayers who receive motor vehicle transport income. This means that taxpayers who receive income for transporting goods or passengers may declare and pay a flat amount of tax per quarter depending upon the type of motor vehicle or declare according to the real regime.
                    </p>
                    <p className="content-paragraph">
                        Motor Vehicle Income Tax must be declared on a mobile phone using M-Declaration or E-Tax. This is intended to make it easier for self-employed moto/taxi/bus/truck drivers to declare and pay their taxes. <Link to="/declaring-motor-vehicle-income-tax">(check on Declaring Motor Vehicle Income Tax using M-Declaration)</Link> for the process on declaring Motor Vehicle Income Tax using M-Declaration.
                    </p>
                    <p className="content-paragraph">
                        This process is the same as for declaring Motor Vehicle Instalment Quarterly Prepayments (IQP).
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer receives additional income that is not from motor vehicle transport, this must be declared separately.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 16</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Rukundo has a small shop, and owns a twelve-seater bus used for transport income. Rukundo earns annual income of FRW 15,000,000 from the shop, and FRW 5,000,000 from the bus. Therefore, he declares the FRW 15,000,000 as Lump Sum, and declares Motor Vehicle Income Tax on the bus.
                        </p>
                    </div>
                    <p className="content-paragraph">
                        The tax rate per quarter for the different types of motor vehicle please refer to the annex of the law establishing taxes on income. Note that a new owned moto vehicle does not pay quarters in the first of its acquisition.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 17</h3>
                        <p className="content-paragraph">
                            Continuing the example above, Rukundo owns a twelve-seater bus used for transport income. Regardless of the actual income received, Rukundo is required to declare and pay FRW 3,000 per seat capacity per quarter.
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0, fontWeight: '600' }}>
                            Therefore, Rukundo's Motor Vehicle Income Tax due is:
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0, fontWeight: '600' }}>
                            FRW 3,000 per seat * 18 seats = FRW 54,000 per quarter.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is M-Declaration?</h2>
                    <p className="content-paragraph">
                        M-Declaration is a mobile phone-based system designed to allow taxpayers accessing certain tax services including income tax declaration, moto vehicle income tax declaration, business income tax declaration, local government tax and fees declaration and some EBM services. The types Income Tax that can be declared using M-Declaration are displayed diagrammatically <Link to="/income-tax-explanation">(check on Explanation of Income Tax)</Link>.
                    </p>
                    <p className="content-paragraph">
                        The process for declaring income tax using M-Declaration is slightly different when declaring Flat Tax or Lump Sum Income Tax compared to Motor Vehicle Income Tax, <Link to="/declaring-flat-tax-lump-sum-iqp">(check on Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration)</Link> and <Link to="/declaring-motor-vehicle-income-tax">(check on Declaring Motor Vehicle Income Tax using M-Declaration)</Link> respectively for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Which types of Income Tax are declared using E-Tax or M-Declaration?</h2>

                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/graph.png" alt="Income Tax Declaration Methods Flowchart">
                            <img
                                src="/images/graph.png"
                                alt="Income Tax Declaration Methods Flowchart"
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
                    <h2>When is the deadline to declare and pay Income Tax?</h2>
                    <p className="content-paragraph">
                        Income Tax is required to be declared and paid on an annual basis. The tax period is the calendar year, from 1st January until 31st December. The deadline to declare and pay Income Tax is by 31st March of the following year.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 18</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Rukundo must declare and pay his annual PIT declaration for the 2019 tax period, from 1st January 2019 until 31st December 2019, by the deadline of 31st March 2020.
                        </p>
                    </div>
                    <p className="content-paragraph">
                        If they have strong reasons, a CIT registered taxpayer may request to change their tax period to any other twelve (12) month period. The taxpayer must continue to declare and pay as normal until the request is approved.
                    </p>
                    <p className="content-paragraph">
                        In addition, Instalment Quarterly Prepayments (IQPs) are required to be declared and paid within three months by the deadlines of the following 30th June, 30th September and 31st December. IQPs are explained in more detail below.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is Instalment Quarterly Prepayments (IQPs)?</h2>
                    <p className="content-paragraph">
                        In addition to the annual Income Tax declaration, Instalment Quarterly Prepayments (IQPs) are required to be declared and paid by the deadlines of the following 30th June, 30th September and 31st December. Note that when the deadline for the quarter with deadline of 30th June falls on holydays or weekends, its deadline comes on the previous working day. Quarterly prepayment tax is calculated from tax paid for the previous annual tax period divided by the turnover of the same tax period, times the current quarterly turnover. All IQP Income Tax that is paid can then be claimed back in the following year's annual Income Tax declaration.
                    </p>
                    <p className="content-paragraph">
                        IQP declarations can be declared using M-Declaration or E-Tax, <Link to="/declaring-flat-tax-lump-sum-iqp">(check on Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration)</Link> and <Link to="/declaring-iqp-income-tax">(check on Declaring Instalment Quarterly Prepayment (IQP) Income Tax)</Link> respectively for more details. It is important to note that only declarations using E-Tax can deduct withholding taxes paid on behalf of the taxpayer within the preceding quarter, <Link to="/declaring-iqp-income-tax">(check on Declaring Instalment Quarterly Prepayment (IQP) Income Tax)</Link> for more details.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 19</h3>
                        <p className="content-paragraph">
                            In the fiscal year 2023 Jean-Baptiste declared Income Tax payable of FRW 540,000 in March 2024 from an annual turnover of FRW 18,000,000 under lumpsum regime. In the fiscal 2024, he realised a turnover of FRW 9,000,000 between April and June 2024. His second IQP is calculated by:
                        </p>
                        <p className="content-paragraph" style={{ fontWeight: '600' }}>
                            FRW (540,000/18,000,000) * 9,000,000= FRW 270,000
                        </p>
                        <p className="content-paragraph">
                            Jean-Baptiste must declare and pay the second IQP of FRW 270,000 by the deadline of 30th September 2024.
                        </p>
                        <p className="content-paragraph">
                            Assume that in May 2024 he pays WHT 5% of FRW 50,000. This is deducted against the IQP of the quarter. Therefore, his IQP due by 30th September 2024 equals to:
                        </p>
                        <p className="content-paragraph" style={{ fontWeight: '600' }}>
                            FRW 270,000 – FRW 50,000= FRW 220,000.
                        </p>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            Overall, Jean-Baptiste has to pay for the second IQP of FRW 220,000.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What if tax is withheld on behalf of the taxpayer?</h2>
                    <p className="content-paragraph">
                        A taxpayer may have had tax withheld and paid on their behalf from the following tax types:
                    </p>
                    <ul className="content-list">
                        <li>Withholding tax of 15% (WHT 15%)</li>
                        <li>Withholding tax of 3% (WHT 3%)</li>
                        <li>Withholding tax on imports of 5% (WHT 5%)</li>
                        <li>Pay As You Earn (PAYE)</li>
                        <li>Mining Royalty Tax</li>
                        <li>Capital Gain (10%)</li>
                    </ul>
                    <p className="content-paragraph">
                        If any of those tax types have been withheld and paid on behalf of the taxpayer during the tax period, the tax paid may be claimed back in their Income Tax declarations. However, the withholder must provide, in the annexure, the details of the whithholdee - including TIN, invoice number, date, and amount withheld - to enable the whithholdee to claim the withheld amount as advance tax. This can only be claimed when declaring using E-Tax, <Link to="/withholding-taxes-explanation">(check on Explanation of Withholding Taxes)</Link> for more details on the withholding annexures.
                    </p>
                    <p className="content-paragraph">
                        If this results in a tax credit situation, <Link to="/appeals">(check on Appeals)</Link> for details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When do taxpayers declare Capital Gains Tax instead?</h2>
                    <p className="content-paragraph">
                        Capital gain tax is charged on the direct or indirect sale or transfer of shares, licenses, debt instruments, options, guarantees and similar assets.
                    </p>
                    <p className="content-paragraph">
                        The capital gain is the difference between the acquisition value of shares and their selling or transfer price. The tax rate on capital gain is five percent (10%) applicable on the gain declared and paid within fifteen (15) days following the month in which the sale or transfer of shares occurred.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default IncomeTaxExplanation;

