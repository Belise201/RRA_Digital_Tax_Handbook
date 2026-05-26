import { Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import './Foreword.css';

const Foreword = () => {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslations(currentLanguage);

    const paragraphs = [
        t('foreword.paragraph1'),
        t('foreword.paragraph2'),
        t('foreword.paragraph3'),
        t('foreword.paragraph4'),
        t('foreword.paragraph5'),
    ];

    return (
        <div className="foreword-page notranslate" translate="no">

            {/* Page title */}
            <h1 className="foreword-title">{t('foreword.title')}</h1>

            {/* Commissioner profile */}
            <div className="foreword-profile">
                <div className="foreword-profile__photo-wrap">
                    <img
                        src="./images/General_Commisioner.png"
                        alt={t('foreword.commissionerGeneral')}
                        className="foreword-profile__photo"
                    />
                </div>
                <div className="foreword-profile__info">
                    <p className="foreword-profile__name">{t('foreword.commissionerName')}</p>
                    <p className="foreword-profile__role">{t('foreword.commissionerTitle')}</p>
                    <p className="foreword-profile__org">Rwanda Revenue Authority</p>
                    <div className="foreword-profile__divider" />
                    <p className="foreword-profile__tagline">
                        "Here For You, To Serve"
                    </p>
                </div>
            </div>

            {/* Message */}
            <div className="foreword-message">
                <div className="foreword-message__header">
                    <Quote size={20} className="foreword-message__icon" />
                    <span>A Personal Message</span>
                </div>
                <div className="foreword-message__body">
                    {paragraphs.map((para, i) => (
                        <p key={i} className="foreword-message__para">{para}</p>
                    ))}
                </div>
                <div className="foreword-message__sign">
                    <p className="foreword-message__sign-name">{t('foreword.commissionerName')}</p>
                    <p className="foreword-message__sign-title">{t('foreword.commissionerTitle')}</p>
                </div>
            </div>

        </div>
    );
};

export default Foreword;
