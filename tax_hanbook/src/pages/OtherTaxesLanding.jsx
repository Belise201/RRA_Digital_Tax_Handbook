import React from 'react';
import { Link } from 'react-router-dom';
import {
    Package,
    FileText,
    Calculator,
    Gamepad2,
    Mountain,
    TrendingUp,
    MapPin,
    Plane,
    MoreHorizontal
} from 'lucide-react';

const OtherTaxesLanding = () => {
    const otherTaxesItems = [
        {
            title: "Excise Duty",
            description: "Tax on specific products and services",
            icon: <Package size={24} />,
            link: "/excise-duty",
            color: "blue"
        },
        {
            title: "Withholding Taxes",
            description: "Taxes deducted at source",
            icon: <FileText size={24} />,
            link: "/withholding-taxes",
            color: "green"
        },
        {
            title: "Withholding Taxes Explanation",
            description: "Understanding withholding tax system",
            icon: <FileText size={24} />,
            link: "/withholding-taxes-explanation",
            color: "green"
        },
        {
            title: "Withholding Taxes Declaration",
            description: "How to declare withholding taxes",
            icon: <Calculator size={24} />,
            link: "/withholding-taxes-declaration",
            color: "green"
        },
        {
            title: "Gaming Taxes",
            description: "Taxes on gaming and entertainment",
            icon: <Gamepad2 size={24} />,
            link: "/gaming-taxes",
            color: "purple"
        },
        {
            title: "Mining Royalty Explanation",
            description: "Understanding mining royalty system",
            icon: <Mountain size={24} />,
            link: "/mining-royalty-explanation",
            color: "orange"
        },
        {
            title: "Mining Royalty Declaration",
            description: "How to declare mining royalties",
            icon: <Calculator size={24} />,
            link: "/mining-royalty-declaration",
            color: "orange"
        },
        {
            title: "Capital Gains Tax",
            description: "Tax on asset disposal gains",
            icon: <TrendingUp size={24} />,
            link: "/capital-gains-tax",
            color: "red"
        },
        {
            title: "Road Maintenance Explanation",
            description: "Understanding road maintenance tax",
            icon: <MapPin size={24} />,
            link: "/road-maintenance-explanation",
            color: "teal"
        },
        {
            title: "Road Maintenance Declaration",
            description: "How to declare road maintenance tax",
            icon: <Calculator size={24} />,
            link: "/road-maintenance-declaration",
            color: "teal"
        },
        {
            title: "Tourism Tax Explanation",
            description: "Understanding tourism tax system",
            icon: <Plane size={24} />,
            link: "/tourism-tax-explanation",
            color: "indigo"
        },
        {
            title: "Tourism Tax Declaration",
            description: "How to declare tourism tax",
            icon: <Calculator size={24} />,
            link: "/tourism-tax-declaration",
            color: "indigo"
        },
        {
            title: "Other Tax Submenu",
            description: "Additional tax categories and information",
            icon: <MoreHorizontal size={24} />,
            link: "/other-tax-submenu",
            color: "pink"
        }
    ];

    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <Package size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Other Taxes</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Additional tax types and specialized tax systems in Rwanda
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Other Tax Types</h2>
                    <p className="content-paragraph">
                        Explore various specialized tax types and systems beyond the main income and consumption taxes.
                        Learn about sector-specific taxes and their requirements.
                    </p>

                    <div className="landing-grid">
                        {otherTaxesItems.map((item, index) => (
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

export default OtherTaxesLanding;
