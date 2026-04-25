import React from 'react';
import { FileText } from 'lucide-react';

const TaxCentres = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Tax Centres</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <p className="content-paragraph">
                        In order to facilitate taxpayers, RRA has a widespread network across the country. RRA has established tax centres at district level. Taxpayers can register for decentralised entities taxes and Fees, and be assisted at each of these tax centres. The working hours of each tax centre are 09:00 to 17:00 from Monday to Friday, excluding national holidays.
                    </p>
                    <p className="content-paragraph">
                        If there are any difficulties in finding a tax centre, or any problems of access or service, please contact the regional coordinator listed for each province. The list of tax centres by province are displayed below:
                    </p>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>City of Kigali</h3>
                    <p className="content-paragraph">
                        Head of RRA One Stop Service Centre Contact Number: +250 788185802
                    </p>
                    <ul className="content-list">
                        <li>RRA HQ,</li>
                        <li>Kicukiro;</li>
                        <li>Gasabo;</li>
                        <li>Nyarugenge.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Eastern Province</h3>
                    <p className="content-paragraph">
                        Region Coordinator Contact Number: +250 78818 5777
                    </p>
                    <ul className="content-list">
                        <li>Bugesera;</li>
                        <li>Gatsibo;</li>
                        <li>Kayonza;</li>
                        <li>Kirehe;</li>
                        <li>Ngoma;</li>
                        <li>Nyagatare;</li>
                        <li>Rwamagana.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Southern Province</h3>
                    <p className="content-paragraph">
                        Region Coordinator Contact Number: +250 78818 5580
                    </p>
                    <ul className="content-list">
                        <li>Gisagara;</li>
                        <li>Huye;</li>
                        <li>Kamonyi</li>
                        <li>Nyamagabe;</li>
                        <li>Nyanza;</li>
                        <li>Nyaruguru;</li>
                        <li>Ruhango.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Western Province</h3>
                    <p className="content-paragraph">
                        Region Coordinator Contact Number: +250 78818 5782
                    </p>
                    <ul className="content-list">
                        <li>Karongi;</li>
                        <li>Ngororero;</li>
                        <li>Nyabihu;</li>
                        <li>Nyamasheke;</li>
                        <li>Rubavu;</li>
                        <li>Rusizi;</li>
                        <li>Rutsiro.</li>
                    </ul>

                    <h3 style={{ marginTop: '2rem', color: 'var(--primary)' }}>Northern Province</h3>
                    <p className="content-paragraph">
                        Region Coordinator Contact Number: +250 78818 5787
                    </p>
                    <ul className="content-list">
                        <li>Burera;</li>
                        <li>Gakenke;</li>
                        <li>Gicumbi;</li>
                        <li>Musanze;</li>
                        <li>Rulindo.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default TaxCentres;

