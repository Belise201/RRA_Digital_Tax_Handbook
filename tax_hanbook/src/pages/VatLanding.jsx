import React from 'react';
import { Link } from 'react-router-dom';
import {
    Receipt,
    FileText,
    Calculator,
    Gift,
    Layers
} from 'lucide-react';

const VatLanding = () => {
    const vatItems = [
        {
            title: "VAT Explanation",
            description: "Understanding Value Added Tax system",
            icon: <FileText size={24} />,
            link: "/vat-explanation",
            color: "blue"
        },
        {
            title: "VAT Declaration",
            description: "How to declare and pay VAT",
            icon: <Calculator size={24} />,
            link: "/vat-declaration",
            color: "green"
        },
        {
            title: "VAT Reward",
            description: "VAT reward system and benefits",
            icon: <Gift size={24} />,
            link: "/vat-reward",
            color: "purple"
        },
        {
            title: "VAT Unified",
            description: "Unified VAT declaration system",
            icon: <Layers size={24} />,
            link: "/vat-unified",
            color: "orange"
        }
    ];

    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Receipt size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">VAT</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Value Added Tax - Complete guide to VAT registration, calculation, and declaration
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>VAT Topics</h2>
                    <p className="content-paragraph">
                        Explore all aspects of Value Added Tax (VAT) in Rwanda.
                        Learn about VAT rates, calculation methods, declaration processes, and special programs.
                    </p>

                    <div className="landing-grid">
                        {vatItems.map((item, index) => (
                            <Link key={index} to={item.link} className={`landing-card ${item.color}`}>
                                <div className="landing-card-icon">
                                    {item.icon}
                                </div>
                                <div className="landing-card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="landing-card-arrow">
                                    →
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VatLanding;
