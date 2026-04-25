import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

const GamingTaxDeclaration = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Declaring Gaming Taxes</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        Gaming Tax (40%) and Withholding Tax of 25% on Gambling Proceeds (WOP-Gaming) must each be declared separately, but in a similar manner.
                    </p>
                    <p className="content-paragraph">
                        The declaration process for gaming taxes is similar to other domestic taxes, <Link to="/domestic-taxes" className="content-link">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Annexures</h2>
                    <p className="content-paragraph">
                        Firstly, for both types of gaming taxes, download the Withholding Annexures from the E-Tax website, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on downloading annexures.
                    </p>
                    <p className="content-paragraph">
                        However, it is important to note that both Gaming Tax and WOP-Gaming must complete their own annexure and declaration separately.
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding on Gaming 40% Tab</h3>
                    <p className="content-paragraph">
                        This tab refers to the Gaming Tax and is applicable to any transaction or game where the gambling proceeds are negative, i.e. where the betting company wins.
                    </p>
                    <p className="content-paragraph">
                        The 'Withholding on Gaming 40%' tab has 10 columns. Each row is for a separate transaction or game for which tax has been paid. For each transaction, enter details on:
                    </p>
                    <ul className="content-list">
                        <li>Withholdee's Name - Enter the name of the player who lost the money.</li>
                        <li>Betting Number by Withholdees – Enter the number of individual bets made during the course of the game.</li>
                        <li>Transaction Number – Enter the unique invoice number of the transaction.</li>
                        <li>Date of Withholding (dd/mm/yyyy) – Enter the date of the transaction, which must be entered in the format of dd/mm/yyyy such that 10th April 2017 is entered as 10/04/2017. Any other date format will not be accepted.</li>
                        <li>Nature of Bet – Enter a brief description of the type of bet, e.g 'Casino', 'Slots', or 'Sports Betting'.</li>
                        <li>Total Output – Enter the total amount won by the betting company.</li>
                        <li>Total Input – Enter the total amount wagered by the betting company.</li>
                        <li>Difference Subjected to Tax – Enter the gambling proceeds as defined on page 275. This should equal 'Total Output minus 'Total Input'.</li>
                        <li>Rate Used – Enter the rate of tax that is withheld. This should always be entered on '40' without including the percentage symbol.</li>
                        <li>Tax Due – Enter the amount of tax that was withheld. This should equal 'Difference Subjected to Tax' multiplied the 'Rate Used'%.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Withholding on Gaming 25% Tab</h3>
                    <p className="content-paragraph">
                        This tab refers to the WOP-Gaming and is applicable to any taxpayer who has paid out gambling proceeds to the player in a transaction or game.
                    </p>
                    <p className="content-paragraph">
                        The 'Withholding on Gaming 25%' tab is very similar to the 'Withholding on Gaming 40%' tab discussed above, with the exception of:
                    </p>
                    <ul className="content-list">
                        <li>Total Payment Received – Enter the total winnings of the player.</li>
                        <li>Total Amount Betted – Enter the total amount wagered by the player.</li>
                        <li>Rate Used – Enter the rate of Withholding Tax. This should always be entered as '25' without including the percentage symbol.</li>
                        <li>Tax Due – Enter the amount of tax that was withheld. This should equal ('Total Payment Received' minus 'Total Amount Betted') multiplied 'Rate Used'%.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Gaming Taxes declaration</h2>
                    <p className="content-paragraph">
                        Once both the relevant annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the declarations, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on selecting the relevant declarations.
                    </p>
                    <p className="content-paragraph">
                        The withholding taxes or gaming tax declaration forms require similar data to the annexures that have previously been completed. The important distinction is that in the withholding taxes or gaming tax declaration forms, the total combined values for all transactions during that tax period must be entered. Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 48</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            A player, Mucyo, placed a bet of FRW 20,000 on a football game and lost. The company, Y, with which Mucyo placed the bet, is required to pay a gaming tax of FRW 20,000 * 40% = FRW 8,000.
                        </p>
                    </div>
                    <p className="content-paragraph">
                        After saving the declaration form, upload the annexures and then compare with the declaration form, <Link to="/domestic-taxes">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more detail on uploading annexures and comparing with declarations.
                    </p>
                    <p className="content-paragraph">
                        Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load.
                    </p>
                    <div style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <ImageModal src="/images/lump_sum_03.png" alt="Gaming Tax Declaration Submitted">
                            <img
                                src="/images/lump_sum_03.png"
                                alt="Gaming Tax Declaration Submitted"
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
                    <p className="content-paragraph">
                        After submitting the Gaming Tax declaration and viewing the acknowledgement receipt, repeat the above process for WOP-Gaming.
                    </p>
                    <div style={{ margin: '2rem 1rem', padding: '1rem', backgroundColor: '#b5cbee', borderRadius: '0.5rem' }}>
                        <h3 style={{ marginTop: 0, color: 'var(--primary)' }}>Example 49</h3>
                        <p className="content-paragraph" style={{ marginBottom: 0 }}>
                            A player, Mucyo, placed a bet of FRW 40,000 on a football game and won at odds of 1.6. The company, Y, with which Mucyo placed the bet, is required to pay Mucyo the winning amount of FRW 40,000 * 1.6 = FRW 64,000, minus the Winnings of Players (WOP) gaming tax. The WOP tax is calculated on the profit portion, i.e., (FRW 64,000 – FRW 40,000) * 25% = FRW 6,000. Therefore, Y shall remit FRW 59,000 (i.e., FRW 64,000 – FRW 6,000) to Mucyo and FRW 6,000 to the tax administration as WOP gaming tax.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default GamingTaxDeclaration;

