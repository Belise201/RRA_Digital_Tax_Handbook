import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const RealRegimeDetails = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Real Regime Details</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        There are aspects of Real Regime Income Tax that do not apply to the other regimes. These are discussed in turn below. The process of declaring Real Regime Income Tax is described <Link to="/declaring-real-regime-e-tax" className="content-link">(check on Declaring Real Regime Income Tax using E-Tax)</Link> for more details. The formula for calculation of Real Regime Income Tax is summarised in this chapter.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What expenses can be deducted in Real Regime?</h2>
                    <p className="content-paragraph">
                        Expenses are allowed to be deducted in Real Regime if they meet all of the following criteria:
                    </p>
                    <ul className="content-list">
                        <li>They are incurred for the direct purpose of the business and are directly chargeable to the income.</li>
                        <li>They correspond to a real expense and can be substantiated with proper invoice or receipts accepted by the tax administration.</li>
                        <li>They lead to a decrease in the net assets of the business.</li>
                        <li>They are used for activities related to the tax period in which they are incurred.</li>
                    </ul>
                    <p className="content-paragraph">
                        For example, this includes employee expenses and RSSB contributions on behalf of the employee, office supplies, rent costs, utility costs, advertising costs, insurance costs and legal fees. It also includes fees paid to member of the Board of directors and any other member of a similar organ, although companies are required to withhold 30% on these allowances.
                    </p>
                    <p className="content-paragraph">
                        The types of expenses that are not tax deductible include:
                    </p>
                    <ul className="content-list">
                        <li>Dividends declared and profits paid-out to their beneficiaries;</li>
                        <li>Reserve allowances, savings and other special-purpose funds unless otherwise provided for by this Law;</li>
                        <li>Fines and similar penalties;</li>
                        <li>Donations, except donations given to non-profit making organisations whose value does not exceed one percent (1%) of the turnover;</li>
                        <li>Income tax paid in accordance with this Law or paid abroad on business profit and recoverable value added tax;</li>
                        <li>Personal consumption expenses;</li>
                        <li>Entertainment expenses except expenses on general sporting activities for employees;</li>
                        <li>Twenty per cent (20%) of expenses paid on business overheads including telephone, water, electricity and fuel whose private and business use cannot be practically separable;</li>
                        <li>The aggregate of expenses of management activities, technical services and royalty fees paid to a non-resident related person exceeding two percent (2%) of the turnover of the taxpayer;</li>
                        <li>Interest arising from loans between related persons paid or due on total loans in excess of four (4) times of the amount of paid-up equity which excludes provisions or reserves and retained earnings according to the balance sheet, which is drawn up in accordance with the generally accepted accounting principles;</li>
                        <li>Realised foreign exchange loss arising from total loans between related persons in excess of four (4) times of the amount of paid-up equity which excludes provisions or reserves and retained earnings according to the balance sheet, which is drawn up in accordance with the generally accepted accounting principles.</li>
                        <li>Unrealised foreign exchange losses.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>What is the basis of depreciation in Real Regime?</h2>
                    <p className="content-paragraph">
                        Depreciation reflects the reduction of the value of an asset over time, in particular because of wear and tear.
                    </p>
                    <p className="content-paragraph">
                        Assets purchased with the value below FRW 500,000 are considered as expenses and cannot be depreciated. Depreciation of all other business assets can be deducted in Real Regime on the basis described below.
                    </p>
                    <p className="content-paragraph">
                        The cost of purchasing, constructing and improving buildings, equipment and heavy machinery that is fixed in walls depreciates by 5% annually of the cost price.
                    </p>
                    <p className="content-paragraph">
                        The cost of purchasing, constructing and improving intangible assets that have been purchased from a third party depreciates by 10% annually of the cost price.
                    </p>
                    <p className="content-paragraph">
                        The assets in the following two categories are depreciated in a pooling system on the basis of the following rates:
                    </p>
                    <ul className="content-list">
                        <li>Computers and accessories, information and communication systems, software products and data equipment depreciate at the rate of 50%.</li>
                        <li>All other business assets (that have not otherwise been mentioned) depreciate at the rate of 25%.</li>
                    </ul>
                    <p className="content-paragraph">
                        The pooling system means that all similar items of these categories can be aggregated and the cost depreciated as single items.
                    </p>
                    <p className="content-paragraph">
                        Land, fine arts, antiquities, jewellery and any other assets that are not subject to wear and tear and cannot become outdated or obsolete are not depreciated.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What incentives are available for Real Regime?</h2>
                    <p className="content-paragraph">
                        There are exemptions or discounts that can be applied if the taxpayer fulfils certain criteria. The types of tax discounts, incentives and exemptions allowed are subject to the Law on investment promotion and facilitation and Law establishing taxes on income, see the Rwanda Development Board (RDB) and RRA websites respectively for the latest versions of these laws.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What if a Real Regime taxpayer does not make a profit?</h2>
                    <p className="content-paragraph">
                        If a taxpayer's taxable income (as calculated on page 2) is less than zero, this is referred to as a net loss. If a taxpayer declares a net loss in an Income Tax declaration, this loss may be carried forward and deducted from the Income Tax declarations of the next five tax periods, with earlier losses being deducted before later losses.
                    </p>
                    <p className="content-paragraph">
                        However, a taxpayer who applies to the tax administration may be allowed to carry forward the loss for more than five (5) tax periods but without exceedingly further five (5) tax periods, if he or she fulfils the requirements that are provided for by ministerial order.
                    </p>
                    <p className="content-paragraph">
                        In addition, a taxpayer who declares a net loss in their Income Tax declaration is not required to declare and pay IQP in the following tax period.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the related persons and transfer pricing requirements?</h2>
                    <p className="content-paragraph">
                        A 'related person' refers to any individual(s) who acts or is likely to act in accordance with the directive, opinions or wishes, communicated or not communicated, of other individual(s). This includes:
                    </p>
                    <ul className="content-list">
                        <li>An individual and their spouse, direct lineal ascendants (i.e., parents or grandparents) or descendants (i.e., children or grandchildren).</li>
                        <li>A company and any individual or company who owns directly or indirectly 50% or more, by value or number, of the voting rights in the company.</li>
                    </ul>
                    <p className="content-paragraph">
                        Any transactions between related persons is required to be entered into the related party transactions tab. This tab is required to be completed and uploaded with all Real Regime declarations, regardless of whether the taxpayer transacted with related persons, <Link to="/declaring-real-regime-e-tax" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the additional documents required for declaring Real Regime?</h2>
                    <p className="content-paragraph">
                        As well as the Real Regime annexures, three mandatory documents are required to be submitted for Real Regime declarations. This means that when downloading annexures for Real Regime PIT or CIT declarations, the taxpayer must download the following annexures:
                    </p>
                    <ul className="content-list">
                        <li>Balance Sheet</li>
                        <li>Profit and Loss</li>
                        <li>Company-Representative</li>
                    </ul>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/real_regime_01.png" alt="Real Regime Annexures">
                            <img
                                src="/images/real_regime_01.png"
                                alt="Real Regime Annexures"
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
                        These annexures can each be downloaded as normal. <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details on downloading annexures.
                    </p>
                    <p className="content-paragraph">
                        The process of completing, validating and saving is different for the balance sheet, profit and loss statement and the company representative and is described in more detail below.
                    </p>
                    <p className="content-paragraph">
                        The balance sheet and profit and loss statements typically require the expertise of trained accountants. However, the taxpayer is ultimately responsible for the accurate completion of these documents.
                    </p>
                    <p className="content-paragraph">
                        Income tax annexures counts for optional tabs:
                    </p>
                    <ul className="content-list">
                        <li>Depreciation tab;</li>
                        <li>Debtor's tab;</li>
                        <li>Tax discounts tab;</li>
                        <li>Ledger accounts tab;</li>
                        <li>Creditor's tab;</li>
                        <li>Withholding tab;</li>
                        <li>5% withholding tab;</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Balance Sheet</h3>
                    <p className="content-paragraph">
                        A balance sheet is a financial statement summarising the assets, liabilities and capital at the end of the tax period.
                    </p>
                    <p className="content-paragraph">
                        In order to upload this annexure, the balance sheet spreadsheet must be validated and saved on PC/RRA Folder.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Profit and Loss</h3>
                    <p className="content-paragraph">
                        A profit and loss statement is a financial statement summarising the revenues, costs and expenses incurred during a tax period.
                    </p>
                    <p className="content-paragraph">
                        In order to upload this annexure, the profit and loss spreadsheet must be validated and saved on PC/RRA Folder.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Company Representative</h3>
                    <p className="content-paragraph">
                        The taxpayer must nominate at least one individual to represent the company. The nominated individual(s) should be available for contact, and be able to stand for the company in any correspondence or tax matters.
                    </p>
                    <p className="content-paragraph">
                        The nominated individual(s) can be the owner, shareholder or employee within the company, or even external to the company, such as private tax advisors.
                    </p>
                    <p className="content-paragraph">
                        Taxpayers are encouraged to provide more than one company representative to ensure that any important communication between RRA and the taxpayer can be quickly transmitted.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the additional requirements for 'Certified Financial Statements'?</h2>
                    <p className="content-paragraph">
                        A taxpayer with annual turnover of equal to or above FRW 600,000,000 is also required to submit 'Certified Financial Statements'.
                    </p>
                    <p className="content-paragraph">
                        To submit certified financial statements, the balance sheet and profit and loss statement, as well as any supporting documents, must be validated by qualified accounting professionals recognised by the Institute of Certified Public Accountants Rwanda (ICPAR) and approved by RRA.
                    </p>
                    <p className="content-paragraph">
                        The certified financial statements must be uploaded by approved qualified professionals and made available on the client side by RRA system.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default RealRegimeDetails;
