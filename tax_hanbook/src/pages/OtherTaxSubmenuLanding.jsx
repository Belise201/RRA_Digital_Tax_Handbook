import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FileText, Gamepad2, Mountain, TrendingUp, Car, Plane, Building, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OtherTaxSubmenuLanding = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "Other Tax Submenu",
            description: "Additional specialized taxes and levies for specific activities and sectors",
            taxTypes: [
                {
                    path: '/withholding-taxes-explanation',
                    label: 'Withholding Tax (WHT)',
                    icon: <FileText size={20} />,
                    description: 'Tax deducted at source from payments to suppliers and contractors'
                },
                {
                    path: '/gaming-taxes-explanation',
                    label: 'Gaming Taxes',
                    icon: <Gamepad2 size={20} />,
                    description: 'Taxes on gaming and gambling activities'
                },
                {
                    path: '/mining-royalty-explanation',
                    label: 'Mining Royalty Tax',
                    icon: <Mountain size={20} />,
                    description: 'Tax on mining activities and mineral extraction'
                },
                {
                    path: '/capital-gains-tax-explanation',
                    label: 'Capital Gains Tax',
                    icon: <TrendingUp size={20} />,
                    description: 'Tax on gains from the sale of capital assets'
                },
                {
                    path: '/road-maintenance-explanation',
                    label: 'Road Maintenance Levy',
                    icon: <Car size={20} />,
                    description: 'Levy for road maintenance and infrastructure development'
                },
                {
                    path: '/tourism-tax-explanation',
                    label: 'Tourism Tax',
                    icon: <Plane size={20} />,
                    description: 'Tax on tourism-related activities and services'
                },
                {
                    path: '/local-government-taxes-explanation',
                    label: 'Decentralized Entities',
                    icon: <Building size={20} />,
                    description: 'Local government taxes and decentralized entity obligations'
                }
            ]
        },
        fr: {
            title: "Sous-menu Autres Impôts",
            description: "Impôts spécialisés et prélèvements supplémentaires pour des activités et secteurs spécifiques",
            taxTypes: [
                {
                    path: '/withholding-taxes-explanation',
                    label: 'Prélèvement à la Source (WHT)',
                    icon: <FileText size={20} />,
                    description: 'Impôt prélevé à la source sur les paiements aux fournisseurs et entrepreneurs'
                },
                {
                    path: '/gaming-taxes-explanation',
                    label: 'Impôts sur les Jeux',
                    icon: <Gamepad2 size={20} />,
                    description: 'Impôts sur les activités de jeux et de paris'
                },
                {
                    path: '/mining-royalty-explanation',
                    label: 'Taxe de Royalty Minière',
                    icon: <Mountain size={20} />,
                    description: 'Impôt sur les activités minières et l\'extraction de minéraux'
                },
                {
                    path: '/capital-gains-tax-explanation',
                    label: 'Impôt sur les Plus-values',
                    icon: <TrendingUp size={20} />,
                    description: 'Impôt sur les gains de la vente d\'actifs en capital'
                },
                {
                    path: '/road-maintenance-explanation',
                    label: 'Prélèvement d\'Entretien Routier',
                    icon: <Car size={20} />,
                    description: 'Prélèvement pour l\'entretien des routes et le développement des infrastructures'
                },
                {
                    path: '/tourism-tax-explanation',
                    label: 'Taxe de Tourisme',
                    icon: <Plane size={20} />,
                    description: 'Impôt sur les activités et services liés au tourisme'
                },
                {
                    path: '/local-government-taxes-explanation',
                    label: 'Entités Décentralisées',
                    icon: <Building size={20} />,
                    description: 'Impôts des gouvernements locaux et obligations des entités décentralisées'
                }
            ]
        },
        rw: {
            title: "Gahunda y'Imisoro Yandi",
            description: "Imisoro yihariye n'imisoro yongewemo y'ibikorwa n'ubwoko bw'ubucuruzi",
            taxTypes: [
                {
                    path: '/withholding-taxes-explanation',
                    label: 'Umusoro wakurwa mu gihe (WHT)',
                    icon: <FileText size={20} />,
                    description: 'Umusoro wakurwa mu gihe ku kwishyura abatanga serivisi n\'abakora'
                },
                {
                    path: '/gaming-taxes-explanation',
                    label: 'Imisoro y\'Imikino',
                    icon: <Gamepad2 size={20} />,
                    description: 'Imisoro y\'ibikorwa by\'imikino n\'amagambo'
                },
                {
                    path: '/mining-royalty-explanation',
                    label: 'Umusoro w\'Ubwoba bw\'Ubwoba',
                    icon: <Mountain size={20} />,
                    description: 'Umusoro w\'ibikorwa by\'ubwoba n\'gukuraho amabuye y\'agaciro'
                },
                {
                    path: '/capital-gains-tax-explanation',
                    label: 'Umusoro w\'Inyungu z\'Ubwoba',
                    icon: <TrendingUp size={20} />,
                    description: 'Umusoro w\'inyungu z\'ubwoba z\'ubwoba bw\'ubwoba'
                },
                {
                    path: '/road-maintenance-explanation',
                    label: 'Umusoro w\'Ubwoba bw\'Ubwoba',
                    icon: <Car size={20} />,
                    description: 'Umusoro w\'ubwoba bw\'ubwoba bw\'ubwoba bw\'ubwoba'
                },
                {
                    path: '/tourism-tax-explanation',
                    label: 'Umusoro w\'Ubwoba bw\'Ubwoba',
                    icon: <Plane size={20} />,
                    description: 'Umusoro w\'ibikorwa n\'serivisi z\'ubwoba bw\'ubwoba'
                },
                {
                    path: '/local-government-taxes-explanation',
                    label: 'Ubwoba bw\'Ubwoba bw\'Ubwoba',
                    icon: <Building size={20} />,
                    description: 'Imisoro y\'ubwoba bw\'ubwoba n\'ibyemezo by\'ubwoba bw\'ubwoba'
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
                            <FileText size={24} />
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
                        This section covers specialized taxes and levies that apply to specific activities, sectors, or circumstances. These taxes complement the main tax system and are designed to address particular economic activities or policy objectives.
                    </p>
                </div>

                <section className="content-section">
                    <h2 className="content-heading">Quick Links</h2>
                    <div className="quick-links-grid">
                        {currentContent.taxTypes.map((tax, index) => (
                            <Link key={index} to={tax.path} className="quick-link-card">
                                <div className="quick-link-icon">
                                    {tax.icon}
                                </div>
                                <div className="quick-link-content">
                                    <h3 className="quick-link-title">{tax.label}</h3>
                                    <p className="quick-link-description">{tax.description}</p>
                                </div>
                                <div className="quick-link-arrow">
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Important Notes</h2>
                    <div className="important-notes">
                        <div className="note-card">
                            <h3>Compliance Requirements</h3>
                            <p>Each specialized tax has specific compliance requirements and deadlines. Ensure you understand the obligations for your particular activities.</p>
                        </div>
                        <div className="note-card">
                            <h3>Registration Requirements</h3>
                            <p>Some specialized taxes may require separate registration or specific permits. Check the requirements for each tax type that applies to your business.</p>
                        </div>
                        <div className="note-card">
                            <h3>Declaration Methods</h3>
                            <p>Different taxes may have different declaration methods and frequencies. Some use E-Tax, others may use specialized systems.</p>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Related Sections</h2>
                    <div className="quick-links-grid">
                        <Link to="/other-taxes" className="quick-link-card">
                            <div className="quick-link-icon">
                                <FileText size={20} />
                            </div>
                            <div className="quick-link-content">
                                <h3 className="quick-link-title">Other Taxes</h3>
                                <p className="quick-link-description">Back to main other taxes section</p>
                            </div>
                            <div className="quick-link-arrow">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                        <Link to="/core-taxes" className="quick-link-card">
                            <div className="quick-link-icon">
                                <FileText size={20} />
                            </div>
                            <div className="quick-link-content">
                                <h3 className="quick-link-title">Core Taxes</h3>
                                <p className="quick-link-description">PIT, CIT, and PAYE information</p>
                            </div>
                            <div className="quick-link-arrow">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default OtherTaxSubmenuLanding;
