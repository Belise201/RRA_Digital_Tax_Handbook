import React from 'react';
import { BookOpen, Quote } from 'lucide-react';

const IntroductionLanding = () => {
    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <BookOpen size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Introduction</h1>
                            <div className="professional-title-divider"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <div className="quote-section">
                        <div className="quote-card">
                            <Quote size={20} className="quote-icon" />
                            <p className="quote-text">
                                "We cannot rely on foreign aid forever. We are a population of 13.2 million people and those paying taxes are doing a good thing; however, … if the national budget is to be fully supported by Rwandans, then we must… carry on sensitizing people on their role of contributing to the country's development.
                            </p>
                            <p className="quote-text">
                                If we work hard and ensure that our budget is fully funded by domestic resources, then we shall have only one master – our people."
                            </p>
                            <p className="quote-author">His Excellency Paul Kagame, President of Rwanda speaking at the 2013 Taxpayers Appreciation Day</p>
                        </div>

                        <div className="quote-card">
                            <Quote size={20} className="quote-icon" />
                            <p className="quote-text">
                                "I like paying taxes. With them, I buy civilisation."
                            </p>
                            <p className="quote-author">Oliver Wendell Holmes Jr, Associate Justice of the Supreme Court of the United States of America in 1938</p>
                        </div>
                    </div>

                    <p className="content-paragraph">
                        Taxes are the mandatory contribution from citizens to a government in order to fund public expenditures.
                    </p>

                    <p className="content-paragraph">
                        Since 1997, Rwanda Revenue Authority (RRA) has been legally mandated by the Government of Rwanda with the task of assessing, collecting and accounting for taxes, customs duties, local government taxes and fees and non-tax revenues.
                    </p>

                    <p className="content-paragraph">
                        RRA's vision is "to be a model revenue administration optimally financing national needs" and RRA's mission statement is to "efficiently mobilise revenue and facilitate trade through transparent and innovative services to drive economic growth."
                    </p>
                </section>

                <section className="content-section">
                    <h2>Purpose of the RRA Tax Handbook</h2>
                    <p className="content-paragraph">
                        The RRA Tax Handbook is intended as a simplified guide to understand the tax laws and procedures for all tax types in Rwanda. It covers how to register, declare and pay each of the domestic taxes, Local Government Taxes (LGT) and fees, and customs duties.
                    </p>
                    <p className="content-paragraph">
                        This Tax Handbook will be updated periodically. If there are any tax policy or administration changes in the interim, RRA uses the media, the RRA website and seminars to try and reach all taxpayers and ensure they are made aware of the new policies and procedures. In addition, an updated Tax Handbook is available on the RRA website.
                    </p>
                    <p className="content-paragraph">
                        However, it is important to note that this Tax Handbook is intended for the purpose of guidance only. It does not override the tax laws, and in the case of any uncertainty, please refer to these laws, ministerial orders and rulings available on the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/laws-policies-and-rulings" target="_blank" rel="noopener noreferrer" className="content-link">
                            https://www.rra.gov.rw/en/laws-policies-and-rulings
                        </a>
                    </p>
                    <p className="content-paragraph">
                        The Tax Handbook explains the process of registering, declaring domestic taxes, LGT and fees, and customs duties, and paying all taxes in turn. Summary pages are at the end of the Tax Handbook for easy reference.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Benefits of Taxes</h2>
                    <p className="content-paragraph">
                        Taxes are a vital and hugely beneficial requirement of modern society. Taxes are necessary to pay for public goods and services, which provide benefits to all members of the population. Some of these are more tangible such as:
                    </p>
                    <ul className="content-list">
                        <li>Infrastructure</li>
                        <li>National security</li>
                        <li>Education</li>
                        <li>Healthcare</li>
                        <li>Access to utilities such as water and electricity</li>
                    </ul>
                    <p className="content-paragraph">
                        There are also a range of less tangible benefits that arise from taxes, such as:
                    </p>
                    <ul className="content-list">
                        <li><strong>Good governance</strong> – when citizens are paying taxes, the government is held more responsible for improving public services</li>
                        <li><strong>Social responsibility</strong> – citizens are more likely to protect those public services, and can be proud of contributing to Rwanda's development</li>
                        <li><strong>Self-reliance</strong> – tax revenues are the backbone of national self-reliance, reducing the country's dependency on unpredictable foreign aid and donors</li>
                    </ul>
                    <p className="content-paragraph">
                        The following pages illustrate some of the many ways in which revenues from taxes are immediately and transparently benefiting social and economic development across Rwanda:
                    </p>
                    <ul className="content-list">
                        <li>Agricultural productivity, food security and rural incomes benefiting from agricultural infrastructure</li>
                        <li>Without taxes, the government would not have the funds to modernise/build infrastructure such as stadium.</li>
                        <li>Safe, secure and peaceful society ensured by the Rwandan Defence Force and the Rwanda National Police.</li>
                        <li>In addition to expanding infrastructure, recruiting more teachers, and integrating technology, the government also implemented a school feeding program to enhance student welfare and learning outcomes.</li>
                        <li>Trained nurses and doctors in modern hospitals with modern equipment increasing life expectancies and quality of life.</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>Principles of Taxation</h2>
                    <p className="content-paragraph">
                        There are four key principles of good taxation systems, which RRA strives to attain and uphold:
                    </p>
                    <ul className="content-list">
                        <li><strong>Equity</strong> – taxes are fair such that the tax system does not discriminate between taxpayers, but that those with higher incomes, and who are more able to, pay a higher proportion of taxes.</li>
                        <li><strong>Certainty</strong> – taxpayers should know how much, when, where, how and why they have to pay. This increases trust with the taxpayer and enables them to manage their income and expenditure.</li>
                        <li><strong>Convenience</strong> – tax authorities should make every effort to reduce the difficulties of paying taxes, taking into account locations, methods and times of tax declarations and payment.</li>
                        <li><strong>Economy</strong> – tax authorities should try to minimise the administrative costs of collecting taxes to ensure the greatest benefits to the government and taxpayers.</li>
                    </ul>
                    <p className="content-paragraph">
                        This Tax Handbook is an example of RRA's efforts to uphold both the Certainty and Convenience principles, by clearly explaining the laws and procedures of paying taxes and the new convenient methods of declaring and paying taxes over the internet or on mobile phones.
                    </p>
                </section>

                <section className="content-section">
                    <h2>History of Taxes in Rwanda</h2>
                    <p className="content-paragraph">
                        The formal, monetary tax system in Rwanda has been in effect for more than one hundred years, when the first property tax was implemented in August 1912. This was joined by a profit tax established in June 1925.
                    </p>
                    <p className="content-paragraph">
                        After independence, taxes were formally inducted into Rwandan law in the June 1964 law on profit tax, and the July 1968 law on customs and excise duties.
                    </p>
                    <p className="content-paragraph">
                        Up to this point, administration of taxes had been carried out by the Ministry of Finance and Economic Planning (MINECOFIN). However, after the Genocide against the Tutsi in 1994, the ambitious new government identified the benefits of improved tax administration to a growing economy, leading to the creation of the semi-autonomous Rwanda Revenue Authority (RRA) in November 1997.
                    </p>
                </section>

                <section className="content-section">
                    <h2>RRA Modernisation and Reforms</h2>
                    <p className="content-paragraph">
                        Since its creation, RRA has implemented a wide range of reforms, and the Government of Rwanda has introduced new tax types, to bring Rwandan tax policy and administration in line with 21st century best practices. The introduction of Value Added Tax (VAT) in 2001 and the introduction of the E-Tax system in 2012 are two notable examples of this dedication to improve and modernise revenue collections.
                    </p>
                    <p className="content-paragraph">
                        A further milestone was reached in 2009 when Rwanda joined the East African Community (EAC) customs union. Allowing duty free trade within the EAC, and a common external tariff with trade from outside the EAC, has benefited Rwanda greatly through the increase in trade, regional integration and larger export markets. RRA continues to facilitate trade through Northern and Central Corridor Integration projects, one-stop border posts, Rwanda electronic Single Window (ReSW) system, Authorised Economic Operator (AEO) and the Rwanda electronic Cargo Tracking System (ReCTS) amongst other initiatives.
                    </p>
                    <p className="content-paragraph">
                        To further consolidate the goals of the Customs Union and to address the challenges experienced, the Summit of Heads of State decided on the implementation of the Single Customs Territory which commenced in July 2014. This was a major milestone and final stage towards the attainment of fully fledged Customs Union. Under SCT assessment and payment of duties is done at the destination Partner State while goods are still at the first point of entry.
                    </p>
                    <p className="content-paragraph">
                        The Single Customs Territory has been implemented to facilitate faster clearance and improvement in cargo movement along the two corridors (Northern and Central) and the now Standard Gauge Railway line.
                    </p>
                    <p className="content-paragraph">
                        The AfCFTA entered into force on May 30, 2019, after 24 Member States deposited their Instruments of Ratification following a series of continuous continental engagements spanning since 2012. It was launched at the 12th Extraordinary Session of the AU Assembly of Heads of State and Government in Niamey – Niger, in July 2019. The commencement of trading under the AfCFTA was in January 1, 2021.
                    </p>
                    <p className="content-paragraph">
                        RRA's focus on facilitating taxpayers for voluntary tax compliance has been highlighted in the launch of the "Here For You, To Serve" campaign in 2016. The focus of the campaign is a promise to serve taxpayers in a friendly, helpful and professional manner. The long-term intention of RRA is to increase revenue collections through reducing the costs of compliance and making it as easy as possible to declare and pay taxes. This Tax Handbook is intended to support this "Here For You, To Serve" promise and further promote voluntary tax compliance.
                    </p>
                </section>

                <section className="content-section">
                    <h2>Overview of Tax Types</h2>
                    <p className="content-paragraph">
                        In Rwanda, the types of domestic taxes are:
                    </p>
                    <ul className="content-list">
                        <li>Income Tax, including
                            <ul className="content-sublist">
                                <li>Personal Income Tax (PIT)</li>
                                <li>Corporate Income Tax (CIT)</li>
                            </ul>
                        </li>
                        <li>Pay as You Earn (PAYE)</li>
                        <li>Value Added Tax (VAT)</li>
                        <li>Excise Duty</li>
                        <li>Withholding Taxes</li>
                        <li>Gaming Tax</li>
                        <li>Capital Gains Tax</li>
                        <li>Mining Royalty Tax</li>
                        <li>Motor vehicle Registration Fee</li>
                        <li>Road Maintenance Levy</li>
                        <li>Tourism Tax</li>
                    </ul>
                    <p className="content-paragraph">
                        The types of local government taxes and fees are:
                    </p>
                    <ul className="content-list">
                        <li>Immovable Property Tax</li>
                        <li>Trading License Tax</li>
                        <li>Rental Income Tax</li>
                        <li>Local Government Fees</li>
                    </ul>
                    <p className="content-paragraph">
                        The types of Customs Duties are:
                    </p>
                    <ul className="content-list">
                        <li>Value Added Tax (VAT)</li>
                        <li>Excise Duty</li>
                        <li>Import Duty</li>
                        <li>Withholding Tax of 5% (WHT 5%)</li>
                        <li>Infrastructure Development Levy (IDL)</li>
                        <li>Strategic Reserves Levy (SRL)</li>
                        <li>African Union Levy (AUL)</li>
                        <li>Export Duty on Raw Hides and Skins</li>
                        <li>Computer Processing Fee</li>
                        <li>Quality Inspection Fee (QIF)</li>
                        <li>Road Maintenance Fund</li>
                        <li>Export Tax – Minerals</li>
                        <li>Environmental Levy</li>
                    </ul>
                </section>

                <section className="content-section">
                    <h2>RRA Structure</h2>
                    <p className="content-paragraph">
                        RRA is a semi-autonomous revenue authority accountable to the Ministry of Finance and Economic Planning (MINECOFIN). RRA collects tax revenues on behalf of the Government of Rwanda. RRA is also responsible for advising the Government of Rwanda on matters relating to tax policy and revenue collections.
                    </p>
                    <p className="content-paragraph">
                        The RRA is governed by a Board of Directors under a Board Chairperson who is appointed by the Cabinet. The Board is responsible for the formulation and monitoring the implementation of the corporate strategy of RRA.
                    </p>
                    <p className="content-paragraph">
                        The Commissioner General is the head of the authority and is responsible for its daily management. The Deputy Commissioner General and Commissioner for Corporate Services assists the Commissioner General in his everyday duties and coordinates activities of all support departments.
                    </p>
                    <p className="content-paragraph">
                        The Commissioner General and Deputy Commissioner General and Commissioner for Corporate Services shall be respectively appointed by a Presidential Order and a Prime Minister's Order. The overall management is supported by the Executive Organ (EO) and Senior Management Team (SMT).
                    </p>
                    <p className="content-paragraph">
                        The departments within RRA are categorised in terms of operational departments and support departments. The operational departments directly collect taxes. The support departments provide a range of services to facilitate the operational departments and taxpayers.
                    </p>
                    <p className="content-paragraph">
                        The operational departments are disaggregated into Customs Services Department (CSD) and Domestic Taxes Department (DTD).
                    </p>
                    <p className="content-paragraph">
                        Customs Services Department further disaggregates into:
                    </p>
                    <ul className="content-list">
                        <li>Customs Operations</li>
                        <li>Customs Operations Support</li>
                    </ul>
                    <p className="content-paragraph">
                        The Domestic Taxes department further disaggregates into:
                    </p>
                    <ul className="content-list">
                        <li>Taxpayer Audit Division</li>
                        <li>Debt Management Division</li>
                        <li>Provincial and Decentralized Revenue Division</li>
                        <li>Tax Control and Operational Support Division</li>
                        <li>Filing and Payment Monitoring Division</li>
                    </ul>
                    <p className="content-paragraph">
                        The support departments and divisions include:
                    </p>
                    <ul className="content-list">
                        <li>Legal Services and Board Affairs Department</li>
                        <li>IT and Digital Transformation</li>
                        <li>Finance Department</li>
                        <li>Strategy and Risk Analysis Department</li>
                        <li>Internal Audit and Integrity Department</li>
                        <li>Strategic Intelligence and Investigation Division</li>
                        <li>Taxpayer Services and Communications Division</li>
                        <li>Human Resources Division</li>
                        <li>Administration and Logistics Division</li>
                        <li>Single Project Implementation Unit</li>
                    </ul>
                    <p className="content-paragraph">
                        For more details on the mission statement, strategic objectives and contact details for each department, visit the 'About Us' section of the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/about-us/rra-profile" target="_blank" rel="noopener noreferrer" className="content-link">
                            https://www.rra.gov.rw/en/about-us/rra-profile
                        </a>
                    </p>
                </section>

                <section className="content-section">
                    <h2>RRA Service Charter</h2>
                    <p className="content-paragraph">
                        The RRA Service Charter contains details on taxpayers' rights, taxpayers' obligations and the range of services offered by RRA. Some of these services, such as issuance of tax clearance certificates or motor vehicle number plates, charge a cost. The RRA Service Charter contains the requirements, timelines and costs of each of these services. To view the RRA Service Charter, visit the 'Publication' section of the RRA website at:
                    </p>
                    <p className="content-paragraph">
                        <a href="https://www.rra.gov.rw/en/rra-service-charter-iv" target="_blank" rel="noopener noreferrer" className="content-link">
                            https://www.rra.gov.rw/en/rra-service-charter-iv
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default IntroductionLanding;
