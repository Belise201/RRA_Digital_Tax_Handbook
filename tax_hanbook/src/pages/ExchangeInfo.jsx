import { Network } from 'lucide-react';

const ExchangeInfo = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Network size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Exchange of Information</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* Overview Section */}
                <section className="content-section">
                    <p className="content-paragraph">
                        In 2017, Rwanda joined the international crusade against tax evasion and fraud by becoming a member of Global Forum on Transparency and Exchange of Information for Tax purposes and acceded to the convention on Mutual Administrative Assistance in Tax Matters as amended by the 2010 Protocol on 11 August 2021. This section discusses the Exchange of Information on Request (EOIR) and Automatic Exchange of Information (AEOI).
                    </p>
                </section>

                {/* EOIR Section */}
                <section className="content-section">
                    <h2>What is Exchange of Information on Request (EOIR)?</h2>
                    <p className="content-paragraph">
                        Rwanda implemented the Exchange of Information on Request (EOIR) standard of the Global Forum that allows tax authorities to request specific financial and legal information from other countries to support audits and investigations and ensure compliance with tax laws.
                    </p>
                </section>

                {/* EOIR Requirements Section */}
                <section className="content-section">
                    <h2>What is required to the EOIR partner countries?</h2>
                    <p className="content-paragraph">
                        Country partner of EOIR is required to provide partner jurisdictions with access to:
                    </p>
                    <ul className="content-list">
                        <li>Bank account information</li>
                        <li>Legal and beneficial ownership records</li>
                        <li>Accounting and financial documentation.</li>
                    </ul>
                    <p className="content-paragraph">
                        Partner jurisdictions of Rwanda are also required to avail the above-mentioned information for Rwanda to access them.
                    </p>
                </section>

                {/* Taxpayer Impact Section */}
                <section className="content-section">
                    <h2>What does this mean for taxpayers and entities?</h2>
                    <p className="content-paragraph">
                        All individuals, businesses, and legal entities must maintain complete and accurate financial and ownership records, including the identity of beneficial owners. These records may be shared with other partner jurisdictions upon request, so as they can share the same information with Rwanda upon request.
                    </p>
                </section>

                {/* Non-Compliance Consequences */}
                <section className="content-section">
                    <h2>What are EOIR Non-compliance consequences to taxpayers?</h2>
                    <p className="content-paragraph">
                        Failure to provide required information or intentional non-disclosure may result in fines, legal action, or criminal prosecution, in accordance with the Tax Procedure Law.
                    </p>
                </section>

                {/* AEOI Section */}
                <section className="content-section">
                    <h2>What is Automatic Exchange of Information (AEOI)?</h2>
                    <p className="content-paragraph">
                        It is a country commitment to implementing the Automatic Exchange of Information (AEOI) standard under the OECD's Common Reporting Standard (CRS). This allows for the annual automatic exchange of financial account information between jurisdictions.
                    </p>
                    <p className="content-paragraph">
                        All financial institutions in Rwanda must report information on financial accounts held by non-residents through the AEOI portal, not later than 30 April each year. The first data exchange is scheduled for September 2025.
                    </p>
                </section>

                {/* AEOI Non-Compliance Consequences */}
                <section className="content-section">
                    <h2>What are consequences of AEOI non-compliance by financial institutions?</h2>
                    <p className="content-paragraph">
                        The Tax Administration is vested with powers to impose administrative sanctions for the faults provided for under law n° 021/2023 of 31/03/2023 governing the automatic exchange of information for tax purposes.
                    </p>
                </section>

                {/* Information Security Section */}
                <section className="content-section">
                    <h2>What is the level of Information Security on shared information in Rwanda?</h2>
                    <p className="content-paragraph">
                        The Government of Rwanda is committed to high standards of data security and confidentiality. Information collected locally or from foreign jurisdictions is strictly protected and used solely for tax purposes, in line with national laws and international agreements.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default ExchangeInfo;
