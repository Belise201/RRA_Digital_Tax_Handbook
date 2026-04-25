import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { User, Quote, Calendar, Building } from 'lucide-react';

const Foreword = () => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    const paragraphs = [
        t('foreword.paragraph1'),
        t('foreword.paragraph2'),
        t('foreword.paragraph3'),
        t('foreword.paragraph4'),
        t('foreword.paragraph5')
    ];

    return (
        <div className="page-container">
            <div className="professional-header">
                <div className="professional-header-content">
                    <div className="professional-title-container">
                        <div className="professional-title-icon">
                            <User size={24} />
                        </div>
                        <div className="professional-title-text">
                            <h1 className="professional-main-title">{t('foreword.title')}</h1>
                            <div className="professional-title-divider"></div>
                            <p className="professional-title-description">
                                A personal message from the Commissioner General of Rwanda Revenue Authority
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <div className="foreword-new-layout">
                    <div className="foreword-main-content">
                        <div className="foreword-message">
                            <div className="foreword-quote-header">
                                <Quote size={28} />
                                <p className="foreword-subtitle">A Personal Message</p>
                            </div>

                            <div className="foreword-text-content">
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index} className="foreword-paragraph">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="foreword-commissioner-section">
                            <div className="commissioner-profile">
                                <img
                                    src="./images/General_Commisioner.png"
                                    alt={t('foreword.commissionerGeneral')}
                                    className="commissioner-image"
                                />
                                <div className="commissioner-details">
                                    <h3 className="commissioner-name">{t('foreword.commissionerName')}</h3>
                                    <p className="commissioner-role">{t('foreword.commissionerTitle')}</p>
                                    <div className="commissioner-organization">
                                        <Building size={14} />
                                        <span>Rwanda Revenue Authority</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foreword;
