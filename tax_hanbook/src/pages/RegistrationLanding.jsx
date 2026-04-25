import React from 'react';
import { Link } from 'react-router-dom';
import {
    UserPlus,
    FileText,
    BookOpen,
    Settings,
    Building
} from 'lucide-react';

const RegistrationLanding = () => {
    const registrationItems = [
        {
            title: "Registration Overview",
            description: "Complete guide to tax registration processes and requirements",
            icon: <UserPlus size={24} />,
            link: "/registration-original",
            color: "blue"
        },
        {
            title: "Registration Explanation",
            description: "Understanding the registration process and requirements",
            icon: <FileText size={24} />,
            link: "/registration-explanation",
            color: "green"
        },
        {
            title: "Registration Guide",
            description: "Step-by-step guide to registering for taxes",
            icon: <BookOpen size={24} />,
            link: "/registration-guide",
            color: "purple"
        },
        {
            title: "LGT Registration",
            description: "Local Government Tax registration procedures",
            icon: <Building size={24} />,
            link: "/lgt-registration",
            color: "red"
        }
    ];

    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <UserPlus size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">Registration</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                Complete guide to tax registration processes and requirements in Rwanda
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <section className="content-section">
                    <h2>Registration Topics</h2>
                    <p className="content-paragraph">
                        Learn about the various registration processes required for different tax types.
                        Get your Taxpayer Identification Number (TIN) and register for the appropriate taxes.
                    </p>

                    <div className="landing-grid">
                        {registrationItems.map((item, index) => (
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

export default RegistrationLanding;
