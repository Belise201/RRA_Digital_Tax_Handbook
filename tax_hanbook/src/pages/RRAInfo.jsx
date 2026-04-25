import { Phone, Mail, MapPin, Globe, Users, Facebook, Instagram, Youtube } from 'lucide-react';
import TikTokIcon from '../components/TikTokIcon';

const RRAInfo = () => {
  // Helper function to format phone number for tel: link
  const formatPhoneForTel = (phone) => {
    // Remove spaces and parentheses, but keep the + sign for international numbers
    return phone.replace(/\s+/g, '').replace(/[()]/g, '');
  };

  // Helper function to create clickable phone link
  const PhoneLink = ({ phone, children }) => {
    const telLink = `tel:${formatPhoneForTel(phone)}`;
    return (
      <a
        href={telLink}
        style={{
          color: '#093e61',
          textDecoration: 'underline',
          fontWeight: 500,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.color = '#5B9BD5'}
        onMouseLeave={(e) => e.target.style.color = '#093e61'}
      >
        {children || phone}
      </a>
    );
  };

  // Twitter Icon Component - using classic Twitter bird logo
  const XIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ color }}
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  // WhatsApp Icon Component
  const WhatsAppIcon = ({ size = 16, color = 'currentColor' }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      style={{ color }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );

  const socialMediaLinks = [
    {
      url: "https://www.instagram.com/rwandarevenue/",
      icon: Instagram,
      username: "Rwandarevenue",
      iconClass: "instagram"
    },
    {
      url: "https://x.com/rrainfo",
      icon: XIcon,
      username: "rrainfo",
      iconClass: "twitter"
    },
    {
      url: "https://www.youtube.com/@rwandarevenueauthority6148",
      icon: Youtube,
      username: "Rwanda Revenue Authority",
      iconClass: "youtube"
    },
    {
      url: "https://www.facebook.com/RwandaRevenueAuthority",
      icon: Facebook,
      username: "Rwanda Revenue Authority",
      iconClass: "facebook"
    },
    {
      url: "https://whatsapp.com/channel/0029Va5vwyEBadmXBapTbw3o",
      icon: WhatsAppIcon,
      username: "Rwanda Revenue Authority",
      iconClass: "whatsapp"
    },
    {
      url: "https://www.tiktok.com/@rrataxtoks?_t=ZM-8vk7aIeu8XP&_r=1",
      icon: TikTokIcon,
      username: "@rrataxtoks",
      iconClass: "tiktok"
    }
  ];

  const domesticTaxCentres = {
    "City of Kigali": [
      { name: "RRA Headquarters", phone: "078818 5516" },
      { name: "Gasabo", phone: "078818 5784" },
      { name: "Kicukiro", phone: "078818 5579" },
      { name: "Nyarugenge", phone: "078818 5515" }
    ],
    "Eastern Province": [
      { name: "Bugesera", phone: "078818 5781" },
      { name: "Gatsibo", phone: "078818 5606" },
      { name: "Kayonza", phone: "078818 5806" },
      { name: "Kirehe", phone: "078818 5805" },
      { name: "Ngoma", phone: "078818 5821" },
      { name: "Nyagatare", phone: "078818 5542" },
      { name: "Rwamagana", phone: "078818 5569" }
    ],
    "Southern Province": [
      { name: "Gisagara", phone: "078818 5815" },
      { name: "Huye", phone: "078818 5604" },
      { name: "Kamonyi", phone: "078818 5810" },
      { name: "Nyamagabe", phone: "078818 5533" },
      { name: "Nyanza", phone: "078818 5536" },
      { name: "Nyaruguru", phone: "078818 5666" },
      { name: "Ruhango", phone: "078818 5535" }
    ],
    "Western Province": [
      { name: "Karongi", phone: "078818 5532" },
      { name: "Ngororero", phone: "078818 5811" },
      { name: "Nyabihu", phone: "078818 5838" },
      { name: "Nyamasheke", phone: "078818 5549" },
      { name: "Rubavu", phone: "078818 5629" },
      { name: "Rusizi", phone: "078818 5537" },
      { name: "Rutsiro", phone: "078818 5813" }
    ],
    "Northern Province": [
      { name: "Burera", phone: "078818 5812" },
      { name: "Gakenke", phone: "078818 5808" },
      { name: "Gicumbi", phone: "078818 5568" },
      { name: "Musanze", phone: "078818 5628" },
      { name: "Rulindo", phone: "078818 5832" }
    ]
  };


  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <Users size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">RRA Contact Details</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                RRA is "Here For You, To Serve" and is available to be contacted in many ways.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* Contact Information Section */}
        <section className="content-section">
          <h2>By telephone:</h2>
          <ul className="content-list">
            <li><strong>RRA Call Centre:</strong> <PhoneLink phone="3004">3004</PhoneLink></li>
            <li><strong>RRA Internatianal Calls:</strong> <PhoneLink phone="+250 (0) 788 185 500">+250 (0) 788 185 500</PhoneLink></li>
          </ul>
        </section>

        <section className="content-section">
          <h2>By email:</h2>
          <p className="content-paragraph">
            <a href="https://ecms.rra.gov.rw/home " target="_blank" rel="noopener noreferrer" className="content-link">
              https://ecms.rra.gov.rw/home?lang=en
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>On the RRA website 'Contact Us' section at:</h2>
          <p className="content-paragraph">
            <a href="https://www.rra.gov.rw/en/contact-us" target="_blank" rel="noopener noreferrer" className="content-link">
              https://www.rra.gov.rw/en/contact-us
            </a>
          </p>
        </section>

        <section className="content-section">
          <h2>By post:</h2>
          <div className="address-block">
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda Revenue Authority,</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Silver Back Mall</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kicukiro - Sonatube</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kigali</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda</p>
            <p className="content-paragraph" style={{ marginBottom: '0' }}>P. O. Box 3987</p>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="content-section">
          <h2>By social media:</h2>
          <ul className="social-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {socialMediaLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <li key={index} style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      textDecoration: 'none',
                      color: '#093e61',
                      fontWeight: 500
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#5B9BD5';
                      const icon = e.target.querySelector('.social-icon');
                      if (icon) icon.style.color = '#5B9BD5';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#093e61';
                      const icon = e.target.querySelector('.social-icon');
                      if (icon) icon.style.color = '#093e61';
                    }}
                  >
                    <span className="social-icon" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#093e61',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <IconComponent size={16} />
                    </span>
                    <span className="social-text">{social.username}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Departments/Divisions Section */}
        <section className="content-section">
          <h2>By departments/divisions:</h2>
          <p className="content-paragraph">
            The contact details for the Commissioner General, Deputy Commissioner General and Commissioner for Corporate Services as well as for each operational or support department/division are listed on the RRA website. Visit the 'About Us' section of the RRA website at:
          </p>
          <p className="content-paragraph">
            <a href="https://www.rra.gov.rw/en/about-us/rra-profile" target="_blank" rel="noopener noreferrer" className="content-link">
              https://www.rra.gov.rw/en/about-us/rra-profile
            </a>
          </p>
          <p className="content-paragraph" style={{ marginTop: '1.5rem' }}>
            In particular, the contact details for the Commissioner for Customs Services Department (CSD) are:
          </p>
          <div className="address-block" style={{ marginTop: '1rem' }}>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Commissioner for Customs Services Department,</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda Revenue Authority</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Doubai Port World (DPW)</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kicukiro/Masaka</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Kigali</p>
            <p className="content-paragraph" style={{ marginBottom: '0.5rem' }}>Rwanda</p>
            <p className="content-paragraph" style={{ marginBottom: '0' }}>P. O. Box 3987</p>
          </div>

          <h3 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.25rem' }}>At Domestic Tax Centres:</h3>
          <p className="content-paragraph">
            Domestic Tax Centres can be used to register and declare both domestic taxes and local government taxes and fees. In addition, domestic tax offices are available to help with a wide range of issues facing taxpayers.
          </p>
          <p className="content-paragraph">
            There is at least one Domestic Tax Centre in every District. The opening hours of each domestic tax centre is 09:00 to 17:00 on Monday to Friday, excluding national holidays.
          </p>
          <p className="content-paragraph" style={{ marginTop: '1.5rem' }}>
            The contact details of Domestic Tax Centres are listed by province below:
          </p>

          {Object.entries(domesticTaxCentres).map(([province, centres]) => (
            <div key={province} style={{ marginTop: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{province}</h3>
              <ul className="content-list">
                {centres.map((centre, index) => (
                  <li key={index}>
                    <strong>{centre.name}</strong> - <PhoneLink phone={centre.phone}>{centre.phone}</PhoneLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Border Posts and Dry Ports Section */}
        <section className="content-section">
          <h2>At Border Posts and Dry Ports:</h2>
          <p className="content-paragraph">
            RRA Border Posts and Dry Ports can be used for imports, exports and other customs processes. The contact details of RRA Border Posts and Dry Ports are listed <Link to="/border-ports-and-dry-ports" className="content-link">(check on Border Posts and Dry Ports)</Link> for more details.
          </p>
        </section>

        {/* Local Government Tax Centres Section */}
        <section className="content-section">
          <h2>At Local Government Tax Centres</h2>
          <p className="content-paragraph">
            Local Government Tax Centres can be used to register and declare Local Government Taxes (LGT) and fees. The contact details of Local Government Tax Centres are listed <Link to="/tax-centres" className="content-link">(check on Tax Centres)</Link> for more details.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RRAInfo;
