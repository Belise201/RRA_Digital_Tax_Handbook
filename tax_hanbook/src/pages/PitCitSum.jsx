import React from 'react';
import { FileText } from 'lucide-react';

const PitCitSum = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Income Tax (PIT and CIT) Summary</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>What are the two types of Income Tax?</h2>
                    <p className="content-paragraph">
                        There are two types of Income Tax. Personal Income Tax (PIT) is for individual businesses. Corporate Income Tax (CIT) is for companies.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Who must register for Income Tax?</h2>
                    <p className="content-paragraph">
                        Taxpayers are automatically registered for the correct type of Income Tax, either PIT or CIT, when registering their business with RDB.
                    </p>
                </section>

                <section className="content-section">
                    <h2>When is the deadline to declare and pay Income Tax?</h2>
                    <p className="content-paragraph">
                        The tax period for Income Tax is the calendar year, from 1st January until 31st December. The deadline for declaring and paying is March 31st of the following year.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are Instalment Quarterly Prepayments (IQP)?</h2>
                    <p className="content-paragraph">
                        In addition, taxpayers are required to declare and pay Instalment Quarterly Prepayments (IQP) if he or she has had a taxable revenue in the previous fiscal year by the deadlines of the following: 30th June, 30th September and 31st December.
                    </p>
                    <p className="content-paragraph">
                        All IQPs that are paid can then be claimed back in that tax year's annual Income Tax declarations.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the tax regimes and rates for Income Tax?</h2>
                    <p className="content-paragraph">
                        Income Tax has three 'regimes' available for taxpayers:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Annual Turnover</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Tax Regime</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 2,000,000 – FRW 12,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Flat Tax</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 12,000,001 – FRW 20,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Lump Sum</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Above FRW 20,000,001</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Real Regime</td></tr>
                        </tbody>
                    </table>
                    <p className="content-paragraph">
                        Taxpayers earning motor vehicle transport income may also separately declare Motor Vehicle Income Tax.
                    </p>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Flat Tax</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Annual Turnover</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Annual Tax Due</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 2,000,000 – FRW 4,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 60,000</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 4,000,001 – FRW 7,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 120,000</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 7,000,001 – FRW 10,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 210,000</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 10,000,001 – FRW 12,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 300,000</td></tr>
                        </tbody>
                    </table>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Lump Sum</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Annual Turnover</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Income Tax Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 12,000,001 – FRW 20,000,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>3% of Turnover</td></tr>
                        </tbody>
                    </table>

                    <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Real Regime</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Annual taxable income (profit)</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>PIT Rate</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>CIT Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 0 – FRW 720,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>0%</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>28%</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 720,001 – FRW 1,200,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>10%</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 1,200,001 – FRW 2,400,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>20%</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Above FRW 2,400,000</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>30%</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}></td></tr>
                        </tbody>
                    </table>
                </section>

                <section className="content-section">
                    <h2>What are the rates for Motor Vehicle Income Tax?</h2>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f0f0f0' }}>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Type of Vehicle</th>
                                <th style={{ border: '1px solid #ddd', padding: '0.75rem', textAlign: 'left' }}>Tax Rate per Quarter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Motorcycle cc below 100</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 9,000</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Motorcycle cc above 100</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 18,000</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Car</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 22,050</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Bus/Minibus</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 3,000 per seat capacity</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Pick-up/Truck with maximum load capacity below 7 tonnes</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 15,000 per tonne of capacity, rounded to the nearest half-tonne</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Pick-up/Truck with maximum load capacity between 7 - 30 tonnes</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 19,500 per tonne of capacity, rounded to the nearest half-tonne</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Private Ambulance/ Hearse</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 25,000</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Wheeled construction/ breakdown/ towing vehicle</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 76,800</td></tr>
                            <tr><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>Caterpillar-tracked vehicle</td><td style={{ border: '1px solid #ddd', padding: '0.75rem' }}>FRW 195,000</td></tr>
                        </tbody>
                    </table>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Flat Tax or Lump Sum regime or IQP using M-Declaration</h2>
                    <p className="content-paragraph">
                        Flat Tax, Lump Sum or Instalment Quarterly Prepayments (IQP) Income Tax can be declared on mobile phones using M-Declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Keep records of all income</p>
                    <p className="content-paragraph">
                        Keep records of all income to calculate annual turnover.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Register for M-Declaration</p>
                    <p className="content-paragraph">
                        Using the mobile phone, dial *800#. Select a language, '2. Other Business Activities' and then '1. Registration'. Enter the TIN and Rwanda National ID number. This step is only required the first-time using M-Declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: M-Declaration of Income Tax</p>
                    <p className="content-paragraph">
                        Using the mobile phone, dial *800#. Select a language, '2. Other Business Activities' and then '2. Declaration. Enter the tax period, whether the taxpayer is 'new' or 'usual' to M-Declaration and the tax period business income.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Receive payment details and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Motor Vehicle Income Tax or IQP using M-Declaration</h2>
                    <p className="content-paragraph">
                        Motor Vehicle Income Tax must be declared on mobile phones using M-Declaration. The process is the same when declaring Motor Vehicle Income Tax Instalment Quarterly Prepayments (IQP).
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Register Motor Vehicle for Transport Income use</p>
                    <p className="content-paragraph">
                        Visit any RRA offices and register the motor vehicle for transport income use. This use also requires specific insurance to be purchased for the motor vehicle. This step is only required the first-time using M-Declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: M-Declaration of Income Tax</p>
                    <p className="content-paragraph">
                        Using your mobile phone, dial *800#. Select a language, '1. Motor Cycles/Vehicles'. Enter the TIN, number plate of the motor vehicle, tax period and whether you are a 'new' taxpayer or a 'usual taxpayer'.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Receive payment details and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Flat Tax regime using E-Tax</h2>
                    <p className="content-paragraph">
                        Flat Tax Income Tax can be declared online or with the help of staff at RRA offices with E-Tax.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Keep records of all income</p>
                    <p className="content-paragraph">
                        Keep records of all income to calculate annual turnover.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
                    <p className="content-paragraph">
                        Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Complete form and submit</p>
                    <p className="content-paragraph">
                        Complete the declaration form and submit the Income Tax declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: View acknowledgement receipt and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Lump Sum regime using E-Tax</h2>
                    <p className="content-paragraph">
                        Lump Sum regime PIT or CIT can be declared online or with the help of staff at RRA offices with E-Tax.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Keep records of all income</p>
                    <p className="content-paragraph">
                        Keep records of all income to calculate annual turnover.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
                    <p className="content-paragraph">
                        Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Download, complete, validate and save annexures</p>
                    <p className="content-paragraph">
                        Download, complete, validate and save any applicable Lump Sum Annexures.
                    </p>
                    <p className="content-paragraph">
                        This step is only required if the taxpayer has had any tax withheld and paid on their behalf during the tax period.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Complete declaration form, upload annexures and submit</p>
                    <p className="content-paragraph">
                        Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.
                    </p>
                    <p className="content-paragraph">
                        Only upload annexures if the taxpayer has had any tax withheld and paid on their behalf during the tax period.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: View acknowledgement receipt and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Real Regime using E-Tax</h2>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Bookkeeping</p>
                    <p className="content-paragraph">
                        Ensure accurate bookkeeping of all business matters.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Certify the financial statements</p>
                    <p className="content-paragraph">
                        Submit the financial statements to ICPAR members for validation.
                    </p>
                    <p className="content-paragraph">
                        This step is only required if the taxpayer had annual turnover of more than FRW 600,000,000.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Login to E-Tax</p>
                    <p className="content-paragraph">
                        Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Download, complete, validate and save annexures</p>
                    <p className="content-paragraph">
                        Download, complete, validate and save the applicable Real Regime annexures, including the Balance Sheet, Profit and Loss Statement and Company Representative annexures.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: Upload certified financials</p>
                    <p className="content-paragraph">
                        Approved certifying audit firm upload certified financials on behalf of their clients through their E-Tax portals.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 6: Complete form, upload annexures and submit</p>
                    <p className="content-paragraph">
                        Complete the declaration form, upload annexures, confirm accuracy and submit the Income Tax declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 7: View acknowledgement receipt and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Step-by-Step guide to declaring and paying Instalment Quarterly Prepayments (IQP) using E-Tax</h2>
                    <p className="content-paragraph">
                        Lump Sum regime PIT or CIT can be declared online or with the help of staff at RRA offices with E-Tax.
                    </p>
                    <p className="content-paragraph">
                        If the taxpayer has had any tax withheld and paid on their behalf during the tax period, also follow the italics steps.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 1: Bookkeeping</p>
                    <p className="content-paragraph">
                        Keep records of all tax withheld and paid on their behalf.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 2: Login to E-Tax</p>
                    <p className="content-paragraph">
                        Login at <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">https://etax.rra.gov.rw</a>.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 3: Download, complete, validate and save annexures</p>
                    <p className="content-paragraph">
                        Download, complete, validate and save any applicable IQP Annexures.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 4: Complete declaration form, upload annexures and submit</p>
                    <p className="content-paragraph">
                        Complete the declaration form, upload annexures, confirm accuracy and submit the IQP declaration.
                    </p>

                    <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Step 5: View acknowledgement receipt and pay taxes</p>
                    <p className="content-paragraph">
                        Note the RRA reference number and pay all tax due with E-Payment, MTN/Airtel Mobile Money, Mobicash, or at a bank.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PitCitSum;

