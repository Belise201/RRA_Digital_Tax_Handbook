import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { DollarSign, FileText, Monitor, Smartphone, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PitCitLanding = () => {
    const { currentLanguage } = useLanguage();

    const content = {
        en: {
            title: "PIT & CIT",
            description: "Personal Income Tax and Corporate Income Tax declarations and explanations",
            quickLinks: [
                {
                    path: '/income-tax-explanation',
                    label: 'Income Tax Explanation',
                    icon: <DollarSign size={20} />,
                    description: 'Understanding Personal and Corporate Income Tax'
                },
                {
                    path: '/real-regime-details',
                    label: 'Real Regime Details',
                    icon: <FileText size={20} />,
                    description: 'Details about the real regime tax system'
                },
                {
                    path: '/m-declaration-flat-lump-iqp',
                    label: 'M-Declaration: Flat Tax, Lump Sum & IQP',
                    icon: <Smartphone size={20} />,
                    description: 'Mobile declaration for various income tax types'
                },
                {
                    path: '/m-declaration-motor-vehicle',
                    label: 'M-Declaration: Motor Vehicle Tax',
                    icon: <Smartphone size={20} />,
                    description: 'Mobile declaration for motor vehicle tax'
                },
                {
                    path: '/flat-tax-declaration',
                    label: 'Flat Tax Declaration',
                    icon: <Monitor size={20} />,
                    description: 'How to declare flat tax through E-Tax'
                },
                {
                    path: '/lump-sum-declaration',
                    label: 'Lump Sum Declaration',
                    icon: <Monitor size={20} />,
                    description: 'Lump sum tax declaration process'
                },
                {
                    path: '/real-regime-declaration',
                    label: 'Real Regime Declaration',
                    icon: <Monitor size={20} />,
                    description: 'Step-by-step guide for E-Tax declarations'
                },
                {
                    path: '/instalment-payments',
                    label: 'Instalment Quarterly Prepayment (IQP)',
                    icon: <Calendar size={20} />,
                    description: 'Quarterly prepayment system'
                }
            ]
        },
        fr: {
            title: "IRP & IRS",
            description: "Déclarations et explications de l'Impôt sur le Revenu Personnel et des Sociétés",
            quickLinks: [
                {
                    path: '/income-tax-explanation',
                    label: 'Explication de l\'Impôt sur le Revenu',
                    icon: <DollarSign size={20} />,
                    description: 'Comprendre l\'Impôt sur le Revenu Personnel et des Sociétés'
                },
                {
                    path: '/real-regime-details',
                    label: 'Détails du Régime Réel',
                    icon: <FileText size={20} />,
                    description: 'Détails sur le système fiscal du régime réel'
                },
                {
                    path: '/m-declaration-flat-lump-iqp',
                    label: 'M-Declaration: Taxe Forfaitaire, Somme Forfaitaire & IQP',
                    icon: <Smartphone size={20} />,
                    description: 'Déclaration mobile pour divers types d\'impôts sur le revenu'
                },
                {
                    path: '/m-declaration-motor-vehicle',
                    label: 'M-Declaration: Taxe sur Véhicule',
                    icon: <Smartphone size={20} />,
                    description: 'Déclaration mobile pour la taxe sur véhicule'
                },
                {
                    path: '/flat-tax-declaration',
                    label: 'Déclaration Taxe Forfaitaire',
                    icon: <Monitor size={20} />,
                    description: 'Comment déclarer la taxe forfaitaire via E-Tax'
                },
                {
                    path: '/lump-sum-declaration',
                    label: 'Déclaration Somme Forfaitaire',
                    icon: <Monitor size={20} />,
                    description: 'Processus de déclaration de somme forfaitaire'
                },
                {
                    path: '/real-regime-declaration',
                    label: 'Déclaration Régime Réel',
                    icon: <Monitor size={20} />,
                    description: 'Guide étape par étape pour les déclarations E-Tax'
                },
                {
                    path: '/instalment-payments',
                    label: 'Paiement Trimestriel par Versements (IQP)',
                    icon: <Calendar size={20} />,
                    description: 'Système de prépaiement trimestriel'
                }
            ]
        },
        rw: {
            title: "IRP & IRS",
            description: "Gusobanura n'ibyemezo by'Umusoro w'ingengo y'umuntu n'ubucuruzi",
            quickLinks: [
                {
                    path: '/income-tax-explanation',
                    label: 'Gusobanura Umusoro w\'Ingengo',
                    icon: <DollarSign size={20} />,
                    description: 'Gusobanura Umusoro w\'Ingengo y\'Umuntu n\'Ubucuruzi'
                },
                {
                    path: '/real-regime-details',
                    label: 'Ibyerekeye Sisiteme Nkomeye',
                    icon: <FileText size={20} />,
                    description: 'Ibyerekeye sisiteme y\'imisoro nkomeye'
                },
                {
                    path: '/m-declaration-flat-lump-iqp',
                    label: 'M-Declaration: Umusoro w\'Uruhare, Umusoro w\'Uruhare n\'IQP',
                    icon: <Smartphone size={20} />,
                    description: 'Ibyemezo bya telefone y\'ubwoko bw\'imisoro y\'ingengo'
                },
                {
                    path: '/m-declaration-motor-vehicle',
                    label: 'M-Declaration: Umusoro w\'Imoteri',
                    icon: <Smartphone size={20} />,
                    description: 'Ibyemezo bya telefone y\'umusoro w\'imoteri'
                },
                {
                    path: '/flat-tax-declaration',
                    label: 'Ibyemezo by\'Umusoro w\'Uruhare',
                    icon: <Monitor size={20} />,
                    description: 'Uburyo bwo kwemeza umusoro w\'uruhare ukoresheje E-Tax'
                },
                {
                    path: '/lump-sum-declaration',
                    label: 'Ibyemezo by\'Umusoro w\'Uruhare',
                    icon: <Monitor size={20} />,
                    description: 'Uburyo bwo kwemeza umusoro w\'uruhare'
                },
                {
                    path: '/real-regime-declaration',
                    label: 'Ibyemezo bya Sisiteme Nkomeye',
                    icon: <Monitor size={20} />,
                    description: 'Ubuyobozi bukurikirana amabwiriza y\'ibyemezo bya E-Tax'
                },
                {
                    path: '/instalment-payments',
                    label: 'Kwishyura ku Gice cya Kwezi (IQP)',
                    icon: <Calendar size={20} />,
                    description: 'Sisiteme y\'ishyura ry\'imbere ry\'ukwezi'
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
                            <DollarSign size={24} />
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
                        Personal Income Tax (PIT) and Corporate Income Tax (CIT) are fundamental components of Rwanda's tax system. This section provides comprehensive guidance on understanding these taxes and completing the necessary declarations through various platforms including E-Tax and M-Declaration.
                    </p>
                </div>

                <section className="content-section">
                    <h2 className="content-heading">Quick Links</h2>
                    <div className="quick-links-grid">
                        {currentContent.quickLinks.map((link, index) => (
                            <Link key={index} to={link.path} className="quick-link-card">
                                <div className="quick-link-icon">
                                    {link.icon}
                                </div>
                                <div className="quick-link-content">
                                    <h3 className="quick-link-title">{link.label}</h3>
                                    <p className="quick-link-description">{link.description}</p>
                                </div>
                                <div className="quick-link-arrow">
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Declaration Methods</h2>
                    <div className="declaration-methods">
                        <div className="method-card">
                            <div className="method-icon">
                                <Monitor size={24} />
                            </div>
                            <h3>E-Tax Portal</h3>
                            <p>Online tax declaration system for comprehensive tax management</p>
                            <a href="https://etax.rra.gov.rw" target="_blank" rel="noopener noreferrer" className="method-link">
                                Access E-Tax →
                            </a>
                        </div>
                        <div className="method-card">
                            <div className="method-icon">
                                <Smartphone size={24} />
                            </div>
                            <h3>M-Declaration</h3>
                            <p>Mobile-based declaration system for quick and easy submissions</p>
                            <span className="method-info">Dial *800# on your mobile phone</span>
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <h2 className="content-heading">Related Sections</h2>
                    <div className="related-sections">
                        <Link to="/paye" className="related-section-card">
                            <h3>PAYE</h3>
                            <p>Pay As You Earn tax system for employees</p>
                        </Link>
                        <Link to="/core-taxes" className="related-section-card">
                            <h3>Core Taxes</h3>
                            <p>Back to main core taxes section</p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PitCitLanding;
