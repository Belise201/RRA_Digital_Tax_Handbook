import { AlertTriangle } from 'lucide-react';

const DomesticPenalties = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <AlertTriangle size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Domestic Taxes Penalties and Fines</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        There are penalties and fines for certain offences that are similar for the majority of domestic taxes. The penalties and fines for these offenses are explained in turn below. For penalties and fines that are relevant to specific tax types, see their respective chapters in this Tax Handbook.
                    </p>
                    <p className="content-paragraph">
                        If a taxpayer makes a voluntary self, the penalties and interest described in this section are waived.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for late declaration and late payment?</h2>
                    <p className="content-paragraph">
                        A taxpayer who has failed to submit a tax declaration and payment within the required deadline must still declare and pay, and is subject to:
                    </p>
                    <ul className="content-list">
                        <li>A fine for late payment, depending on the period:
                            <ul className="content-sublist">
                                <li>Twenty percent (20%) of the tax due if the time limit for declaration and payment has not been exceeded by thirty (30) days;</li>
                                <li>Forty percent (40%) of the tax due if the time limit for declaration and payment has been exceeded by thirty (30) days but has not been exceeded by sixty (60) days;</li>
                                <li>Sixty percent (60%) of due taxes if the time limit for declaration and payment has been exceeded by sixty (60) days.</li>
                            </ul>
                        </li>
                        <li>The rate of interests for late payment is fixed as follows:
                            <ul className="content-sublist">
                                <li>zero point five per cent (0.5), if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment;</li>
                                <li>one per cent (1%), if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months;</li>
                                <li>one point five percent (1.5%), if the taxpayer has recorded a delay of more than twelve (12) months.</li>
                            </ul>
                        </li>
                        <li>Fixed administrative fine of:
                            <ul className="content-sublist">
                                <li>FRW 50,000 for taxpayers with annual turnover below FRW 20,000,000;</li>
                                <li>FRW 300,000 for taxpayers with annual turnover above FRW 20,000,000, a public institution or a non-profit making organization,</li>
                                <li>FRW 500,000 for taxpayers who have been informed by RRA that they are in the category of 'large' taxpayers</li>
                            </ul>
                        </li>
                    </ul>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 10</h3>
                        <p className="content-paragraph">
                            Ubumwe declared his monthly Value Added Tax (VAT) for the tax period of January 2024 late. Instead of declaring by the 15th February 2024, he declared and paid on 25th February 2024. The VAT Due for this tax period was FRW 80,000. Ubumwe is a small taxpayer. This was the first time that Ubumwe had declared late.
                        </p>
                        <p className="content-paragraph">
                            Ubumwe's penalty for declaring late is:
                        </p>
                        <ul className="content-list">
                            <li>FRW 80,000 * 20% = FRW 16,000</li>
                            <li>FRW 80,000 * 0.5% * 1 month = FRW 400 interest</li>
                            <li>FRW 50,000 administrative fine</li>
                        </ul>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            In addition to the FRW 80,000 tax due, Ubumwe must pay: FRW 16,000 + FRW 400 + FRW 50,000 = FRW 66,400.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are the penalties if tax due is declared on time but paid late?</h2>
                    <p className="content-paragraph">
                        A taxpayer who declared the requisite tax on time, but did not pay the declared tax is subject to:
                    </p>
                    <ul className="content-list">
                        <li>A fine for late payment, depending on the period:
                            <ul className="content-sublist">
                                <li>Five percent (5%) of the tax due when the time limit for payment has not been exceeded by thirty (30) days;</li>
                                <li>Ten percent (10%) of the tax due when the time limit for payment has been exceeded by thirty (30) days but not exceeded by sixty (60) days;</li>
                                <li>Thirty percent (30%) of due taxes if the time limit for payment has been exceeded by sixty (60) days.</li>
                            </ul>
                        </li>
                        <li>The rate of interests for late payment is fixed as follows:
                            <ul className="content-sublist">
                                <li>zero point five per cent (0.5), if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment;</li>
                                <li>one per cent (1%), if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months;</li>
                                <li>one point five percent (1.5%), if the taxpayer has recorded a delay of more than twelve (12) months.</li>
                            </ul>
                        </li>
                        <li>Fixed administrative fine for late filing:
                            <ul className="content-sublist">
                                <li>FRW 50,000 for taxpayers with annual turnover below FRW 20,000,000</li>
                                <li>FRW 300,000 for taxpayers with annual turnover above FRW 20,000,000, a public institution or a non-profit making organization,</li>
                                <li>FRW 500,000 for taxpayers who have been informed by RRA that they are in the category of 'large' taxpayers</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        Administrative fines double for a second late filing and triple for the third and subsequent offenses of the same tax type if repeated within five years.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the penalties for a taxpayer who declares less than the correct tax due?</h2>
                    <p className="content-paragraph">
                        The penalties for under-declaration depend on whether the taxpayer rectifies their own tax declaration or whether the taxpayer is found by RRA to have declared less than the correct amount.
                    </p>
                    <p className="content-paragraph">
                        A taxpayer who submits a declaration, and is found by RRA to have declared lower tax due that is at least of 10% of the correct amount but not exceeding 20% of the correct amount, must pay the difference and is subject to:
                    </p>
                    <ul className="content-list">
                        <li>A fine of 10% of the amount of the understatement</li>
                        <li>The rate of interests for late payment is fixed as follows:
                            <ul className="content-sublist">
                                <li>zero point five per cent (0.5), if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment;</li>
                                <li>one per cent (1%), if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months;</li>
                                <li>one point five percent (1.5%), if the taxpayer has recorded a delay of more than twelve (12) months.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        A taxpayer who submits a declaration, and is found by RRA to have declared lower tax due that is more than 20% of correct amount, must pay the difference and is subject to:
                    </p>
                    <ul className="content-list">
                        <li>A fine of 20% of the amount of the understatement</li>
                        <li>1.5% interest on a monthly basis. The rate of interests for late payment is fixed as follows:
                            <ul className="content-sublist">
                                <li>zero point five per cent (0.5), if the taxpayer has recorded a delay not exceeding six (6) months with respect to the time limit for payment;</li>
                                <li>one per cent (1%), if the taxpayer has recorded a delay of six (6) months in tax payment but not more than twelve (12) months;</li>
                                <li>one point five percent (1.5%), if the taxpayer has recorded a delay of more than twelve (12) months.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="content-paragraph">
                        A taxpayer who submits a declaration, but realises that they have declared a lower amount due than the correct amount and conducts self-reassessment after the deadline but before notification of an imminent audit, must pay the difference and:
                    </p>
                    <p className="content-paragraph">A fine of:</p>
                    <ul className="content-list">
                        <li>Five percent (5%) of the tax due, if the time limit for declaration and payment has not been exceeded by thirty (30) days;</li>
                        <li>Ten percent (10%) of the tax due, if the time limit for declaration and payment has been exceeded by thirty (30) days but not exceeded by sixty (60) days;</li>
                        <li>Thirty percent (30%) of the tax due, if the time limit for declaration and payment has been exceeded by sixty (60) days;</li>
                    </ul>
                    <p className="content-paragraph">
                        A taxpayer to whom the Commissioner General granted extension for submitting tax declaration is not subject to administrative fine for late payment, unless the taxpayer failed to respect the extension period. However, interests for late payment remain due.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 11</h3>
                        <p className="content-paragraph">
                            Immaculée declares Pay As You Earn (PAYE) due of FRW 125,000 for a tax period. However, during an audit four months later RRA discovers that she should have declared PAYE due of FRW 165,000. The understatement is:
                        </p>
                        <p className="content-paragraph">
                            1 – (FRW 125,000 / FRW 165,000) = 24.2%.
                        </p>
                        <p className="content-paragraph">
                            Immaculée has to pay the FRW 40,000 difference and the penalty and interests of:
                        </p>
                        <ul className="content-list">
                            <li>FRW 40,000 * 1.5% * 4 months = FRW 2,400</li>
                            <li>FRW 40,000 * 10% * 2 = FRW 8,000</li>
                        </ul>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            In addition to paying the FRW 40,000 difference, Immaculée must pay FRW 8,000 + FRW 2,400 = FRW 10,400.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What are the rules concerning interest, fixed administrative fines and repeat offenders?</h2>
                    <p className="content-paragraph">
                        Interest is non-compounding. This means that interest is always on the principal amount, i.e., the tax due, there is no interest charged on interest. Interest is charged from the first day after the tax should have been paid until the day of payment, which is included. Every month that begins is considered as a complete month. The interest cannot exceed 100% of the original tax due.
                    </p>
                    <p className="content-paragraph">
                        If an offence is repeated on another occasion within two years, the fixed administrative fine is doubled. If the offence is repeated on any other occasions within two years, the fixed administrative fine is quadrupled. Taxpayers are informed by RRA whether they are categorised as small, medium or large taxpayers.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the rule for payment allocation between principal tax, penalties, and interest?</h2>
                    <p className="content-paragraph">
                        When a taxpayer makes a payment after being subjected to penalties and interest, the system allocates the payment as follows:
                    </p>
                    <ul className="content-list">
                        <li>Principal tax</li>
                        <li>Penalties</li>
                        <li>Interests</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default DomesticPenalties;

