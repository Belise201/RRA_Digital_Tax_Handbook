import React from 'react';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DecentralisedEntities = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <FileText size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Taxes and Fees levied by Decentralised Entities</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Introduction to taxes and fees levied by decentralised entities</h2>
                    <h3 style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>What are Local Government Taxes?</h3>
                    <p className="content-paragraph">
                        Taxes and fees levied by decentralised entities commonly known as Local Government Taxes (LGT) and fees are revenues collected by RRA on behalf of the district authorities. Decentralised entities ensure that landowners, landlords and business owners contribute towards the good governance and improvement of their local communities. In addition, decentralised entities ensure that taxpayers occupying public areas, or taxpayers requiring certain services, pay fair and consistent fees wherever they are in the country.
                    </p>
                    <p className="content-paragraph">
                        Combined, taxes and fees levied by decentralised entities provide revenues for local government to deliver valuable community development and social protection projects.
                    </p>
                    <p className="content-paragraph">
                        There are three types of taxes levied by decentralised entities:
                    </p>
                    <ul className="content-list">
                        <li>Immovable Property Tax, <Link to="/immovable-property-tax">(check on Immovable Property Tax)</Link> for details.</li>
                        <li>Trading License Tax, <Link to="/trading-license-tax">(check on Trading License Tax)</Link> for details.</li>
                        <li>Rental Income Tax, <Link to="/rental-income-tax">(check on Rental Income Tax)</Link> for details.</li>
                    </ul>
                    <p className="content-paragraph">
                        There are also a wide range of decentralised entities fees. These can be for taxpayers who conduct profit-oriented activities or who require services or authorisations from District Offices. <Link to="/fee-levied-decentralised-entities">(check on Fee Levied Decentralised Entities)</Link> for details of decentralised entities fees.
                    </p>
                    <p className="content-paragraph">
                        The process of declaring each type of taxes and fees for decentralised entities on the LGT system is explained <Link to="/registering-decentralised-entities">(check on Registering Decentralised Entities)</Link>.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What is the relationship between RRA and the Districts?</h2>
                    <p className="content-paragraph">
                        The mandate for collecting taxes and fees levied by decentralised entities was transferred from the district authorities themselves to RRA in 2014. Within RRA, taxes and fees levied by decentralised entities are administered by the Provincial and Decentralized Revenues Division. The mandate was changed because of the greater experience and capacity of RRA in collecting revenues, facilitating taxpayers and modernising processes, which means that taxes and fees levied by decentralised entities can be collected more fairly and efficiently by RRA than by the districts themselves. The collected revenues are directly paid to the corresponding Districts bank account.
                    </p>
                </section>

                <section className="content-section">
                    <h2>How do taxpayers declare taxes and fees levied by decentralised entities?</h2>
                    <p className="content-paragraph">
                        Taxpayers must declare taxes and fees levied by decentralised entities using the Rwanda Automated Local Government Taxes Management System, referred to as the LGT system. This can be done online. For more details on taxes and fees levied by decentralised entities contact RRA-tax centres, <Link to="/tax-centres">(check on Tax Centres)</Link> or decentralised entity offices.
                    </p>
                    <p className="content-paragraph">
                        Some taxes and fees levied by decentralised entities can also be declared using M-declaration – <Link to="/m-declaration-motor-vehicle">(check on M-Declaration Motor Vehicle)</Link>.
                    </p>
                    <p className="content-paragraph">
                        This Tax Handbook aims to provide all the information necessary for taxpayers to be able declare online or using M-declaration.
                    </p>
                </section>

                <section className="content-section">
                    <h2>What are the advantages of declaring online using the LGT system or using M-declaration?</h2>
                    <p className="content-paragraph">
                        The LGT system has been designed with taxpayers in mind to make it as easy as possible to declare the required taxes and fees. The advantages of declaring online using the LGT system or using M-declaration are:
                    </p>
                    <ul className="content-list">
                        <li>Declare taxes anytime, from anywhere.</li>
                        <li>Avoid travel costs of visiting RRA offices.</li>
                        <li>Avoid queuing times at RRA offices.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>How do taxpayers register and login to the LGT system?</h2>
                    <p className="content-paragraph">
                        Taxpayers must visit an RRA office to register with the LGT system. After registering, declarations of taxes and fees levied by decentralised entities and fees can be done online, or with the help of staff at RRA offices. <Link to="/registering-decentralised-entities">(check on Registering Decentralised Entities)</Link> for more details.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default DecentralisedEntities;

