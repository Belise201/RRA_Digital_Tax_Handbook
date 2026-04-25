import { Shield } from 'lucide-react';

const VDS = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Shield size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Voluntary Disclosure Scheme (VDS)</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                {/* What is VDS Section */}
                <section className="content-section">
                    <h2>What is VDS?</h2>
                    <p className="content-paragraph">
                        VDS is an opportunity provided by the Law to non-compliant persons to declare and pay their tax with reduced sanctions. VDS facilitates the following:
                    </p>
                    <ul className="content-list">
                        <li>Automatic waiver of penalties and interests for late payment;</li>
                        <li>Payment effected in 30 days;</li>
                        <li>A certificate for Voluntary Disclosure</li>
                    </ul>
                </section>

                {/* Basis of VDS Section */}
                <section className="content-section">
                    <h2>What is the basis of VDS?</h2>
                    <p className="content-paragraph">
                        Article 94 of Law No. 020/2023 of 31/03/2023 on Tax Procedures provides that interest and penalties do not apply to taxpayers who voluntarily disclose.
                    </p>
                    <p className="content-paragraph">
                        To implement Article 94, Ministerial Order No. 001/24/03/TC of 08/03/2024 set out the procedures and conditions for accessing voluntary disclosure incentives.
                    </p>
                </section>

                {/* Eligibility Section */}
                <section className="content-section">
                    <h2>Who is eligible for VDS?</h2>
                    <ul className="content-list">
                        <li>A registered taxpayer before being notified of audit;</li>
                        <li>A taxpayer not registered;</li>
                        <li>A taxpayer with tax period beyond five years of being audited;</li>
                        <li>Any other status as may be communicated by the Minister.</li>
                    </ul>
                </section>

                {/* Where to Apply Section */}
                <section className="content-section">
                    <h2>Where to apply for VDS?</h2>
                    <p className="content-paragraph">
                        During VDS period, applications are submitted online via RRA website <a href="https://www.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="content-link">www.rra.gov.rw</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default VDS;
