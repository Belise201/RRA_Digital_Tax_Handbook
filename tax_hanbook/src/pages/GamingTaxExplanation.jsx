import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamingTaxExplanation = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Explanation of Gaming Taxes</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are Gaming Taxes?</h2>
                    <p className="content-paragraph">
                        Gaming taxes includes Gaming Tax and Withholding Tax of 25% on Gambling Proceeds, also referred to as Withholding on Payments (WOP) on Gaming or 'WOP-Gaming'. These taxes are applied on the proceeds of gambling activities and can therefore help to reduce the negative social impacts associated with gambling.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the differences between Gaming Tax and WOP-Gaming?</h2>
                    <p className="content-paragraph">
                        These tax types are both types of withholding taxes. In both cases, they are withheld and paid by the betting company, referred to as the taxpayer. However, Gaming Tax is paid by the taxpayer on their income from gaming activities, whilst WOP-Gaming is withheld on behalf of the player on the player's gambling proceeds. In each case, the taxpayer or player who is withheld from is then able to claim the tax paid back in income declarations.
                    </p>
                    <p className="content-paragraph">
                        There is also a difference in the rates and thresholds of Gaming Tax and WOP-Gaming, <Link to="/gaming-tax-explanation">(check on Gaming Tax Explanation)</Link> for details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Gaming Taxes?</h2>
                    <p className="content-paragraph">
                        Any operator of gaming activities is required to register for both Gaming Tax and WOP-Gaming.
                    </p>
                    <p className="content-paragraph">
                        Gaming activities refers to any game played with cards, dices, tickets, equipment or any machine where the result depends upon the skill of the player or operator, the element of chance, or both, and is played for money or any representative of value. However, national lottery is exempted from Gaming tax and WOP-Gaming.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are 'gambling proceeds?</h2>
                    <p className="content-paragraph">
                        Gambling proceeds are defined as the difference between the winnings of a player and the amount of money invested by the player from the start until the end of the game.
                    </p>
                    <p className="content-paragraph">
                        If this amount is negative, i.e., the taxpayer received more money than they paid out, then the gambling proceeds are subject to Gaming Tax.
                    </p>
                    <p className="content-paragraph">
                        If this amount is positive, i.e., the player received more money than they paid out, then the gambling proceeds are subject to WOP-Gaming.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the rate of Gaming Tax?</h2>
                    <p className="content-paragraph">
                        All gambling proceeds to the taxpayer are subject to Gaming Tax of 40%.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 46</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Rukundo places a bet of FRW 24,000 with ABC Betting Ltd. He loses the bet. Therefore, his gambling proceeds are equal to:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            FRW 0 (winnings) – FRW 24,000 (amount invested) = FRW -24,000
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                            As the gambling proceeds are negative, the taxpayer is required to declare and pay Gaming Tax. ABC Betting Ltd is required to pay Gaming Tax of:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            FRW 24,000 * 40% = FRW 9,600
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            This FRW 9,600 is declared and paid by ABC Betting Ltd. ABC Betting Ltd.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>What is the rate of WOP-Gaming?</h2>
                    <p className="content-paragraph">
                        Gambling proceeds are subject to WOP-Gaming of 25%. This means that all the gambling proceeds are taxed at 25%.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 47</h3>
                        <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>
                            Lucie cashes in FRW 160,000 with Rwanda Casinos Ltd. She plays blackjack and cashes out FRW 280,000 (including her initial buy-in). Therefore, her gambling proceeds are equal to:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            FRW 280,000 – FRW 160,000 = FRW 120,000
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                            As the gambling proceeds are positive, the taxpayer is required to declare and pay WOP-Gaming. Rwanda Casinos Ltd is required to withhold WOP-Gaming of:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            FRW 120,000 * 25% = FRW 30,000
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                            Therefore, the net amount that is transmitted by Rwanda Casinos Ltd to Lucie is:
                        </p>
                        <p style={{ margin: '0.5rem 0', fontWeight: 'bold' }}>
                            FRW 280,000 – FRW 30,000 = FRW 250,000
                        </p>
                        <p className="content-paragraph" style={{ marginTop: '0.5rem', marginBottom: 0 }}>
                            The FRW 30,000 WOP-Gaming was withheld by Rwanda Casinos Ltd on behalf of Lucie.
                        </p>
                    </div>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Gaming Taxes?</h2>
                    <p className="content-paragraph">
                        Both Gaming Tax and WOP-Gaming are declared and paid on a monthly basis. The declaration must be submitted and any tax paid within fifteen (15) days of the end of the tax period in which the payment was made.
                    </p>
                    <p className="content-paragraph">
                        This means that declarations concerning the tax period between March 1st and March 31st must be declared to RRA and paid by April 15th. Then declarations concerning the tax period between April 1st and April 30th must be declared to RRA and paid by May 15th and so on throughout the year.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default GamingTaxExplanation;

