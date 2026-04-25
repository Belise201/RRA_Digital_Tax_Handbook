import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Receipt, FileText, Monitor, AlertTriangle } from 'lucide-react';

const VatUnified = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Value Added Tax (VAT)",
            description: "Complete guide to VAT including explanation, declaration process, and compliance requirements",
            sections: [
                {
                    id: 'explanation',
                    title: 'VAT Explanation',
                    icon: <Receipt size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "What is VAT?"
                        },
                        {
                            type: "paragraph",
                            text: "VAT is a tax on the consumption of goods and services. It is indirectly paid by the final consumer of the goods or service. However, it is paid on their behalf by taxpayers on the value added at each stage of production."
                        },
                        {
                            type: "paragraph",
                            text: "VAT is applied to as wide a range of products as possible to ensure fairness across business sectors. However, there are some goods and services that are exempt or zero-rated for VAT. This is usually because tax on these goods and services may be unfairly burdensome on the poor or because those goods and services have benefits to efficiency across the rest of the economy."
                        },
                        {
                            type: "paragraph",
                            text: "VAT registered taxpayers are required to have at least one Electronic Invoicing System (EIS), such as an EBM, each of their sales locations, and use these to provide EIS invoices for all sales transactions."
                        },
                        {
                            type: "heading",
                            text: "Who must register for VAT?"
                        },
                        {
                            type: "paragraph",
                            text: "A taxpayer must register for VAT if their turnover is above FRW 20,000,000 for any twelve-month period, or above FRW 5,000,000 for three consecutive months. This includes all taxable, exempt and zero-rated sales."
                        },
                        {
                            type: "paragraph",
                            text: "In addition, any taxpayer may choose to register for VAT."
                        },
                        {
                            type: "heading",
                            text: "What are the obligations of VAT registered taxpayers?"
                        },
                        {
                            type: "paragraph",
                            text: "VAT registered taxpayers must:"
                        },
                        {
                            type: "list",
                            items: [
                                "Display clearly the VAT registration certificate in plain view at the place of business",
                                "Use an Electronic Invoicing System (EIS), a type of EBM to issue VAT invoices",
                                "Issue an EBM invoice to all customers with every transaction",
                                "Submit a monthly or quarterly VAT declaration within fifteen days after the end of the tax period",
                                "Be available at all times to receive RRA officers and to make available books of accounts"
                            ]
                        },
                        {
                            type: "heading",
                            text: "What is the tax rate of VAT?"
                        },
                        {
                            type: "paragraph",
                            text: "The normal rate of VAT is 18%. There is also a zero-rate (0%) and exemptions applicable for certain types of goods and services."
                        },
                        {
                            type: "heading",
                            text: "Who pays VAT?"
                        },
                        {
                            type: "paragraph",
                            text: "VAT is indirectly paid by the final consumer of the goods or service. However, taxpayers pay on their behalf on the value added at each stage of production."
                        },
                        {
                            type: "paragraph",
                            text: "This means that taxpayers charge VAT on their sales, output VAT, whilst claiming back VAT paid on their inputs, input VAT. The amount each taxpayer pays is therefore equal to output VAT minus input VAT."
                        }
                    ]
                },
                {
                    id: 'declaration',
                    title: 'VAT Declaration Process',
                    icon: <FileText size={20} />,
                    content: [
                        {
                            type: "paragraph",
                            text: "The declaration process for VAT is similar to other domestic taxes. Follow the step-by-step guide below to complete your VAT declaration."
                        },
                        {
                            type: "heading",
                            text: "Annexures"
                        },
                        {
                            type: "paragraph",
                            text: "Firstly, download the VAT Annexures from the E-Tax website. The VAT Annexure file has five tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved."
                        },
                        {
                            type: "heading",
                            text: "Sales Tab"
                        },
                        {
                            type: "paragraph",
                            text: "This tab is applicable for taxpayer who has made sales during the tax period. These must be entered regardless of whether the sales were taxable, exempt, zero-rated or exported."
                        },
                        {
                            type: "paragraph",
                            text: "This sales data can be entered manually, or can be copied from the Electronic Invoicing System (EIS), a type of EBM Back Office and pasted into the Sales tab."
                        },
                        {
                            type: "heading",
                            text: "Purchases Tab"
                        },
                        {
                            type: "paragraph",
                            text: "This tab is applicable to any taxpayer who has purchased inputs from within Rwanda during the tax period for use in their goods and services sold."
                        },
                        {
                            type: "paragraph",
                            text: "The 'Purchases' tab is very similar to the 'Sales' tab except that it refers to the locally purchased inputs that have gone into the goods and services listed in 'Sales'."
                        },
                        {
                            type: "heading",
                            text: "VAT Importation Tab"
                        },
                        {
                            type: "paragraph",
                            text: "This tab is applicable for any taxpayer who has imported inputs during the tax period for use in their goods and services sold. This tab uses information from the customs declaration of the imported inputs."
                        },
                        {
                            type: "heading",
                            text: "VAT Declaration"
                        },
                        {
                            type: "paragraph",
                            text: "After all the applicable annexures have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the declaration."
                        },
                        {
                            type: "paragraph",
                            text: "The declaration form requires similar data to the annexures that have previously been completed. The important distinction is that in the declaration form, the total combined values for all transactions during that tax period must be entered."
                        }
                    ]
                },
                {
                    id: 'compliance',
                    title: 'Compliance & Penalties',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "When is the deadline to declare and pay VAT?"
                        },
                        {
                            type: "paragraph",
                            text: "VAT is declared and paid on a monthly basis. Alternatively, taxpayers with annual turnover below FRW 200,000,000 may request to declare on a quarterly basis."
                        },
                        {
                            type: "paragraph",
                            text: "Whether monthly or quarterly, the VAT declaration must be submitted and paid by the 15th of the month following the end of the tax period."
                        },
                        {
                            type: "heading",
                            text: "Penalties for Non-Compliance"
                        },
                        {
                            type: "paragraph",
                            text: "A taxpayer who is not registered for VAT but is required to be registered for VAT is subject to a penalty of:"
                        },
                        {
                            type: "list",
                            items: [
                                "Fifty percent (50%) of the amount of value added tax output for the entire period of operation without value added tax output, where Value Added Tax registration is required",
                                "An administrative fine of one hundred (100%) of the tax indicated on any invoice issued by a retailer not registered for VAT and pays the tax indicated on that invoice"
                            ]
                        }
                    ]
                }
            ]
        },
        fr: {
            title: "Taxe sur la Valeur Ajoutée (TVA)",
            description: "Guide complet de la TVA incluant l'explication, le processus de déclaration et les exigences de conformité",
            sections: [
                {
                    id: 'explanation',
                    title: 'Explication de la TVA',
                    icon: <Receipt size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Qu'est-ce que la TVA ?"
                        },
                        {
                            type: "paragraph",
                            text: "La TVA est un impôt sur la consommation de biens et services. Elle est indirectement payée par le consommateur final des biens ou services. Cependant, elle est payée en leur nom par les contribuables sur la valeur ajoutée à chaque étape de production."
                        }
                    ]
                },
                {
                    id: 'declaration',
                    title: 'Processus de Déclaration TVA',
                    icon: <FileText size={20} />,
                    content: [
                        {
                            type: "paragraph",
                            text: "Le processus de déclaration pour la TVA est similaire aux autres impôts domestiques. Suivez le guide étape par étape ci-dessous pour compléter votre déclaration TVA."
                        }
                    ]
                },
                {
                    id: 'compliance',
                    title: 'Conformité et Pénalités',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Quand est l'échéance pour déclarer et payer la TVA ?"
                        },
                        {
                            type: "paragraph",
                            text: "La TVA est déclarée et payée sur une base mensuelle. Alternativement, les contribuables avec un chiffre d'affaires annuel inférieur à 200 000 000 FRW peuvent demander à déclarer sur une base trimestrielle."
                        }
                    ]
                }
            ]
        },
        rw: {
            title: "Umusoro w'Agaciro kwongewemo (TVA)",
            description: "Ubuyobozi buzuye bw'Umusoro w'Agaciro kwongewemo harimo gusobanura, uburyo bwo kwemeza, n'ibyemezo by'ukurikiza",
            sections: [
                {
                    id: 'explanation',
                    title: 'Gusobanura Umusoro w\'Agaciro kwongewemo',
                    icon: <Receipt size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Ni iki Umusoro w'Agaciro kwongewemo ?"
                        },
                        {
                            type: "paragraph",
                            text: "Umusoro w'Agaciro kwongewemo ni umusoro w'ibicuruzwa n'ibikoreshwa. Wakurwa n'umukoresha w'ibicuruzwa cyangwa serivisi. Ariko, wakurwa n'abakoresha ku bwabo ku gaciro kwongewemo ku gice kimwe na kimwe cy'ubwoba."
                        }
                    ]
                },
                {
                    id: 'declaration',
                    title: 'Uburyo bwo Kwemeza Umusoro w\'Agaciro kwongewemo',
                    icon: <FileText size={20} />,
                    content: [
                        {
                            type: "paragraph",
                            text: "Uburyo bwo kwemeza Umusoro w'Agaciro kwongewemo ni nk'ubundi musoro wo mu Rwanda. Kurikira ubuyobozi bukurikirana amabwiriza hepfo kugira ngo wuzuze ibyemezo byawe by'Umusoro w'Agaciro kwongewemo."
                        }
                    ]
                },
                {
                    id: 'compliance',
                    title: 'Kurikiza n\'Ibihano',
                    icon: <AlertTriangle size={20} />,
                    content: [
                        {
                            type: "heading",
                            text: "Ni ryari igihe cyo kwemeza no kwishyura Umusoro w'Agaciro kwongewemo ?"
                        },
                        {
                            type: "paragraph",
                            text: "Umusoro w'Agaciro kwongewemo wemezwa kandi wishyurwa buri kwezi. Cyangwa, abakoresha bafite umusaruro w'umwaka utarenga FRW 200,000,000 bashobora gusaba kwemeza buri gice cy'umwaka."
                        }
                    ]
                }
            ]
        }
    };

    const currentContent = content[currentLanguage] || content.en;

    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Receipt size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">{currentContent.title}</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                {currentContent.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <div className="landing-page-intro">
                    <p className="content-paragraph">
                        This comprehensive guide covers all aspects of Value Added Tax (VAT) in Rwanda, from understanding the basics to completing declarations and maintaining compliance. Whether you're new to VAT or need a refresher, this page provides everything you need to know.
                    </p>
                </div>

                {currentContent.sections.map((section, sectionIndex) => (
                    <section key={sectionIndex} className="content-section">
                        <div className="section-header">
                            <div className="section-icon">
                                {section.icon}
                            </div>
                            <h2 className="content-heading">{section.title}</h2>
                        </div>

                        <div className="section-content">
                            {section.content.map((item, itemIndex) => {
                                if (item.type === 'paragraph') {
                                    return <p key={itemIndex} className="content-paragraph">{item.text}</p>;
                                } else if (item.type === 'heading') {
                                    return <h3 key={itemIndex} className="content-subheading">{item.text}</h3>;
                                } else if (item.type === 'list') {
                                    return (
                                        <ul key={itemIndex} className="minimal-list">
                                            {item.items.map((listItem, listIndex) => (
                                                <li key={listIndex} className="content-list-item">{listItem}</li>
                                            ))}
                                        </ul>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </section>
                ))}

                <section className="content-section">
                    <h2 className="content-heading">Declaration Methods</h2>
                    <div className="declaration-methods">
                        <div className="method-card">
                            <div className="method-icon">
                                <Monitor size={24} />
                            </div>
                            <h3>E-Tax Portal</h3>
                            <p>Online tax declaration system for comprehensive VAT management</p>
                            <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="method-link">
                                Access E-Tax →
                            </a>
                        </div>
                        <div className="method-card">
                            <div className="method-icon">
                                <FileText size={24} />
                            </div>
                            <h3>Annexures</h3>
                            <p>Download and complete VAT annexures for detailed transaction reporting</p>
                            <span className="method-info">Available through E-Tax portal</span>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Related Sections</h2>
                    <div className="related-sections">
                        <a href="/other-taxes" className="related-section-card">
                            <h3>Other Taxes</h3>
                            <p>Back to main other taxes section</p>
                        </a>
                        <a href="/eis-unified" className="related-section-card">
                            <h3>EIS / EBMs</h3>
                            <p>Electronic Invoicing System information</p>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VatUnified;
