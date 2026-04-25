import { X, Menu, BookOpen, UserPlus, Calculator, Receipt, Building, Truck, ChevronDown, Search, LogIn, LogOut, User, Bell, ExternalLink } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { useUserNotifications } from '../hooks/useUserNotifications';
import './LanguageSelector.css';
import './Header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);
  const { user, logout, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [showLogin, setShowLogin]   = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  const notifRef = useRef(null);

  // Notification bell — only for logged-in taxpayers
  const isTaxpayer = user && user.role === 'TAXPAYER';
  const { notifications, unreadCount, markRead, markAllRead } =
    useUserNotifications(isTaxpayer);

  // Close notification panel on outside click
  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifPanel(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const openLogin  = () => { setShowLogin(true);  setShowSignUp(false); };
  const openSignUp = () => { setShowSignUp(true); setShowLogin(false);  };
  const closeAll   = () => { setShowLogin(false); setShowSignUp(false); };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubmenu(null); // Close any open submenu when opening/closing main dropdown
  };

  const toggleSubmenu = (parentIndex, submenuIndex) => {
    const key = `${parentIndex}-${submenuIndex}`;
    setActiveSubmenu(activeSubmenu === key ? null : key);
  };

  const menuItems = useMemo(() => [
    {
      title: t('nav.overview'),
      icon: <BookOpen size={20} />,
      link: "/introduction",
      dropdown: [
        { title: "Foreword by the Commissioner General", link: "/foreword" },
        { title: "Introduction", link: "/introduction" },
        { title: "RRA Contact Details", link: "/rra-info" },
        { title: "Definitions", link: "/definitions" },
        { title: "Acronyms", link: "/acronyms" },
        { title: "Laws, Ministerial Orders and Rulings", link: "/laws-rulings" },
        { title: "Obligations and Bookkeeping", link: "/obligations" },
        { title: "Audits", link: "/audits" },
        { title: "Refunds/Tax credits", link: "/refunds" },
        { title: "Appeals", link: "/appeals" },
        { title: "Debt Management", link: "/debt-management" },
        { title: "Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs)", link: "/certificates" },
        { title: "Voluntary Disclosure Scheme (VDS)", link: "/vds" },
        { title: "VAT Reward", link: "/vat-reward" },
        { title: "Communicate to RRA in writing", link: "/communicate-rra" },
        { title: "Online Requests", link: "/online-requests" },
        { title: "Motor Vehicle", link: "/motor-vehicle" },
        { title: "MyRRA", link: "/myrra" },
        { title: "Exchange of Information", link: "/exchange-info" }
      ]
    },
    {
      title: t('nav.registration'),
      icon: <UserPlus size={20} />,
      link: "/registration",
      dropdown: [
        { title: "Explanation of Registration", link: "/registration-explanation" },
        { title: "Step-by-Step Guide to Business Registration", link: "/registration-guide" }
      ]
    },
    {
      title: t('nav.domesticTaxes'),
      icon: <Calculator size={20} />,
      link: "/domestic-taxes",
      dropdown: [
        { title: "Explanation of Domestic Taxes and E-Tax", link: "/domestic-taxes" },
        { title: "Step-by-Step guide to declaring domestic taxes", link: "/domestic-declaration" },
        { title: "Domestic Taxes Penalties and Fines", link: "/domestic-penalties" },
        {
          title: "Income Tax (PIT and CIT)",
          link: "/income-tax-explanation",
          submenu: [
            { title: "Explanation of Income Tax", link: "/income-tax-explanation" },
            { title: "Real Regime Details", link: "/real-regime-details" },
            { title: "Declaring Flat Tax, Lump Sum and IQP Income Tax using M-Declaration", link: "/declaring-flat-tax-lump-sum-iqp" },
            { title: "Declaring Motor Vehicle Income Tax using M-Declaration", link: "/declaring-motor-vehicle-income-tax" },
            { title: "Declaring Flat Tax Income Tax using E-Tax", link: "/declaring-flat-tax-e-tax" },
            { title: "Declaring Lump Sum Income Tax using E-Tax", link: "/declaring-lump-sum-e-tax" },
            { title: "Declaring Real Regime Income Tax using E-Tax", link: "/declaring-real-regime-e-tax" },
            { title: "Declaring Instalment Quarterly Prepayment (IQP) Income Tax", link: "/declaring-iqp-income-tax" }
          ]
        },
        {
          title: "Pay As You Earn (PAYE)",
          link: "/paye-explanation",
          submenu: [
            { title: "Explanation of PAYE", link: "/paye-explanation" },
            { title: "Declaring PAYE", link: "/paye-declaration" }
          ]
        },
        {
          title: "Value Added Tax (VAT)",
          link: "/vat-explanation",
          submenu: [
            { title: "Explanation of VAT", link: "/vat-explanation" },
            { title: "Declaring VAT", link: "/vat-declaration" }
          ]
        },
        {
          title: "Electronic Invoicing System (EIS)",
          link: "/electronic-invoicing-system-explanation",
          submenu: [
            { title: "Explanation of Electronic Invoicing System", link: "/electronic-invoicing-system-explanation" },
            { title: "EIS/EBMs Penalties and Fines", link: "/eis-ebms-penalties" }
          ]
        },
        {
          title: "Excise Duty",
          link: "/excise-explanation",
          submenu: [
            { title: "Explanation of Excise Duty", link: "/excise-explanation" },
            { title: "Declaring Excise Duty", link: "/excise-declaration" }
          ]
        },
        {
          title: "Withholding Taxes (WHT 15% and WHT 3%)",
          link: "/withholding-taxes-explanation",
          submenu: [
            { title: "Explanation of Withholding Taxes", link: "/withholding-taxes-explanation" },
            { title: "Declaring Withholding Taxes (WHT 15% and WHT 3%)", link: "/withholding-taxes-declaration" }
          ]
        },
        {
          title: "Gaming Taxes",
          link: "/gaming-tax-explanation",
          submenu: [
            { title: "Explanation of Gaming Taxes", link: "/gaming-tax-explanation" },
            { title: "Declaring Gaming Taxes", link: "/gaming-tax-declaration" },
            { title: "Gaming Taxes Penalties and Fines", link: "/gaming-tax-penalties" },
            { title: "Mining Royalty Tax", link: "/mining-royalty-explanation" },
            { title: "Explanation of Mining Royalty Tax", link: "/mining-royalty-explanation" },
            { title: "Declaring Mining Royalty Tax", link: "/mining-royalty-declaration" }
          ]
        },
        {
          title: "Capital Gains Tax",
          link: "/capital-gains-tax-explanation",
          submenu: [
            { title: "Explanation of Capital Gains Tax", link: "/capital-gains-tax-explanation" },
            { title: "Declaring Capital Gains Tax", link: "/capital-gains-tax-declaration" }
          ]
        },
        {
          title: "Road Maintenance Levy",
          link: "/road-maintenance-explanation",
          submenu: [
            { title: "Explanation of Road Maintenance Levy", link: "/road-maintenance-explanation" },
            { title: "Declaring Road Maintenance Levy", link: "/road-maintenance-declaration" }
          ]
        },
        {
          title: "Tourism Tax",
          link: "/tourism-tax-explanation",
          submenu: [
            { title: "Explanation of Tourism Tax", link: "/tourism-tax-explanation" },
            { title: "Declaring Tourism Tax", link: "/tourism-tax-declaration" }
          ]
        }
      ]
    },
    {
      title: t('nav.decentralised'),
      icon: <Building size={20} />,
      link: "/decentralised-entities",
      dropdown: [
        { title: "Introduction to taxes and fees levied by decentralised entities", link: "/decentralised-entities" },
        { title: "Immovable Property Tax", link: "/immovable-property-tax" },
        { title: "Trading License Tax", link: "/trading-license-tax" },
        { title: "Rental Income Tax", link: "/rental-income-tax" },
        { title: "Fees Levied by Decentralised Entities", link: "/fee-levied-decentralised-entities" },
        { title: "Tax Centres", link: "/tax-centres" },
        { title: "Registering for Decentralised Entities Taxes and Fees", link: "/registering-decentralised-entities" },
        { title: "Declaring Decentralised Entities Taxes and Fees using the LGT system", link: "/declaring-decentralised-entities-lgt" },
        { title: "Decentralised Entities Taxes and Fees Penalties and Fines", link: "/decentralisedpenalties" }
      ]
    },
    {
      title: t('nav.customs'),
      icon: <Truck size={20} />,
      link: "/customs-explanation",
      dropdown: [
        { title: "Explanation of Customs", link: "/customs-explanation" },
        { title: "Customs Duties", link: "/custom-duties" },
        { title: "Clearing Agents", link: "/clearing-agents" },
        { title: "Border Posts and Dry Ports", link: "/border-ports-and-dry-ports" },
        { title: "Declaring Imports and Exports", link: "/declaring-imports-and-export" },
        { title: "Facilitation Schemes", link: "/facilitation-schema" },
        { title: "Importing Motor Vehicles", link: "/importing-moto-vehicle" },
        { title: "Customs Penalties and Fines", link: "/customs-penalties" }
      ]
    },
    {
      title: t('nav.payingTaxes'),
      icon: <Receipt size={20} />,
      link: "/paying-taxes",
      dropdown: [
        { title: "Methods of Paying Taxes", link: "/methods-of-paying-taxes" },
        { title: "Acknowledgement Receipts", link: "/acknowledgement-receipt" },
        { title: "Paying Taxes online using Internet Banking and E-Payment", link: "/paying-using-banking-and-epayment" },
        { title: "Paying taxes on mobile phones using MTN Mobile Money/Airtel Mobile Money", link: "/e-payment-mobile-money" },
        { title: "Paying taxes through agents with Mobicash", link: "/e-payment-mobicash" },
        { title: "Paying taxes at a Bank", link: "/paying-at-bank" }
      ]
    },
    {
      title: t('nav.deregistration'),
      icon: <UserPlus size={20} />,
      link: "/deregistration",
      dropdown: [
        { title: "De-Registration", link: "/deregistration" }
      ]
    },
    {
      title: t('nav.faqs'),
      icon: <BookOpen size={20} />,
      link: "/registration-summary",
      dropdown: [
        { title: "Registration", link: "/registration-summary" },
        { title: "Domestic Taxes and E-Tax", link: "/domestic-e-tax" },
        { title: "Income Tax (PIT and CIT)", link: "/pit-cit-sum" },
        { title: "Pay As You Earn (PAYE)", link: "/paye-sum" },
        { title: "Value Added Tax (VAT)", link: "/vat-sum" },
        { title: "Electronic Invoicing System (EIS)", link: "/eis-sum" },
        { title: "Excise Duty", link: "/excise-sum" },
        { title: "Withholding Taxes", link: "/wht-sum" },
        { title: "Customs", link: "/customs-sum" },
        { title: "Paying Taxes", link: "/paying-sum" }
      ]
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [currentLanguage]);

  // Check if a menu item or dropdown item is active
  const isMenuItemActive = (item) => {
    if (item.link && location.pathname === item.link) {
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some(subItem => {
        if (subItem.link && location.pathname === subItem.link) return true;
        if (subItem.submenu) {
          return subItem.submenu.some(subSubItem => location.pathname === subSubItem.link);
        }
        return false;
      });
    }
    return false;
  };

  const isDropdownItemActive = (link) => {
    return location.pathname === link;
  };

  const hasActiveSubmenuItem = (submenu) => {
    if (!submenu) return false;
    return submenu.some(item => location.pathname === item.link);
  };

  // Auto-expand dropdown if a child is active
  useEffect(() => {
    menuItems.forEach((item, index) => {
      if (item.dropdown) {
        item.dropdown.forEach((subItem, subIndex) => {
          if (subItem.link && location.pathname === subItem.link) {
            setActiveDropdown(index);
            if (subItem.submenu) {
              setActiveSubmenu(`${index}-${subIndex}`);
            }
          }
          if (subItem.submenu && subItem.submenu.some(subSubItem => location.pathname === subSubItem.link)) {
            setActiveDropdown(index);
            setActiveSubmenu(`${index}-${subIndex}`);
          }
        });
      }
    });
  }, [location.pathname, menuItems]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleMenu}>
              <Menu size={20} />
              <span>{t('nav.menu')}</span>
            </button>
            <Link to="/" className="logo">
              <div className="logo-content">
                <img
                  src="./images/rra-logo.png"
                  alt="RRA Logo"
                  className="logo-image"
                />
              </div>
            </Link>
          </div>

          <div className="header-center">
            <form onSubmit={handleSearch} className="search-form">
              <div className="search-container">
                <input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="clear-search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              <button type="submit" className="search-button">
                <span className="search-button-text">{t('header.searchButton')}</span>
                <Search size={18} className="search-button-icon" />
              </button>
            </form>
          </div>

          <div className="header-right">
            <div className="header-actions">
              <LanguageSelector />
              
              {/* ── Notification bell (taxpayers only) ── */}
              {isTaxpayer && (
                <div className="header-notif" ref={notifRef}>
                  <button
                    className="header-notif__btn"
                    onClick={() => setShowNotifPanel(p => !p)}
                    aria-label="Notifications"
                  >
                    <Bell size={20} />
                    {unreadCount > 0 && (
                      <span className="header-notif__badge">{unreadCount > 9 ? '9+' : unreadCount}</span>
                    )}
                  </button>

                  {showNotifPanel && (
                    <div className="header-notif__panel">
                      <div className="header-notif__head">
                        <span className="header-notif__title">{t('nav.updates')}</span>
                        {unreadCount > 0 && (
                          <button className="header-notif__read-all" onClick={markAllRead}>
                            {t('nav.markAllRead')}
                          </button>
                        )}
                      </div>

                      {notifications.length === 0 ? (
                        <div className="header-notif__empty">{t('nav.noUpdates')}</div>
                      ) : (
                        <ul className="header-notif__list">
                          {notifications.map(n => {
                            const readIds = JSON.parse(
                              localStorage.getItem('rra_read_notif_ids') || '[]'
                            );
                            const isUnread = !readIds.includes(n.id);
                            // For page-update notifs strip the "Page Updated:" prefix for a clean name
                            const isPageUpdate = Boolean(n.pagePath);
                            const pageName = isPageUpdate
                              ? (n.title.replace(/^page updated:\s*/i, '').trim() || n.pagePath)
                              : null;

                            return (
                              <li
                                key={n.id}
                                className={`header-notif__item${isUnread ? ' header-notif__item--unread' : ''}`}
                              >
                                <div className="header-notif__item-content">
                                  {/* Left: dot + text */}
                                  <div className="header-notif__item-left">
                                    {isUnread && <span className="header-notif__dot" />}
                                    <div className="header-notif__item-text">
                                      {isPageUpdate ? (
                                        <span className="header-notif__item-changed">
                                          📄 <strong>{pageName}</strong> {t('nav.wasChanged')}
                                        </span>
                                      ) : (
                                        <span className="header-notif__item-changed">
                                          🔔 <strong>{n.title}</strong>
                                        </span>
                                      )}
                                      <span className="header-notif__item-msg">{n.message}</span>
                                      <span className="header-notif__item-time">
                                        {new Date(n.createdAt).toLocaleDateString('en-GB', {
                                          day: 'numeric', month: 'short',
                                          hour: '2-digit', minute: '2-digit',
                                        })}
                                      </span>
                                    </div>
                                  </div>

                                  {/* "View Page" only for page-specific notifications */}
                                  {isPageUpdate && (
                                    <button
                                      className="header-notif__view-btn"
                                      onClick={() => {
                                        markRead(n.id);
                                        setShowNotifPanel(false);
                                        navigate(n.pagePath);
                                      }}
                                    >
                                      {t('nav.viewPage')}
                                      <ExternalLink size={11} />
                                    </button>
                                  )}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}

              {user ? (
                /* ── Compact avatar button + Pinterest-style dropdown ── */
                <div className="hum" ref={null} onMouseLeave={() => setShowUserMenu(false)}>
                  <button
                    id="user-avatar-btn"
                    className="hum__avatar-btn"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    aria-label="Account menu"
                  >
                    <span className="hum__circle">
                      {user.firstName ? user.firstName[0].toUpperCase() : <User size={16} />}
                    </span>
                    <ChevronDown size={14} className={`hum__chevron${showUserMenu ? ' hum__chevron--open' : ''}`} />
                  </button>

                  {showUserMenu && (
                    <div className="hum__panel">
                      {/* "Currently in" section */}
                      <p className="hum__section-label">{t('auth.userMenu.currentlyIn')}</p>
                      <div className="hum__identity">
                        <span className="hum__identity-circle">
                          {user.firstName ? user.firstName[0].toUpperCase() : <User size={14} />}
                        </span>
                        <div className="hum__identity-text">
                          <span className="hum__identity-name">
                            {user.firstName} {user.lastName}
                          </span>
                          <span className="hum__identity-role">
                            {user.role === 'ADMIN' ? '⚡ Admin' : '👤 Taxpayer'}
                          </span>
                          <span className="hum__identity-email">{user.email}</span>
                        </div>
                      </div>

                      <hr className="hum__divider" />

                      <button
                        id="logout-btn"
                        className="hum__item hum__item--logout"
                        onClick={handleLogout}
                      >
                        <LogOut size={15} />
                        {t('auth.userMenu.logout')}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* ---- Login button ---- */
                <button
                  id="header-login-btn"
                  className="header-login-btn"
                  onClick={openLogin}
                >
                  <span>{t('nav.login')}</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          {menuItems.map((item, index) => (
            <div key={index} className="sidebar-item">
              {item.dropdown ? (
                <div className="sidebar-dropdown">
                  <button
                    className={`sidebar-dropdown-toggle ${isMenuItemActive(item) ? 'sidebar-dropdown-toggle-active' : ''}`}
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="sidebar-text">{item.title}</span>
                    <ChevronDown
                      size={16}
                      className={`dropdown-arrow ${activeDropdown === index ? 'dropdown-arrow-open' : ''}`}
                    />
                  </button>
                  <div className={`sidebar-dropdown-menu ${activeDropdown === index ? 'sidebar-dropdown-open' : ''}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <div key={subIndex} className="sidebar-dropdown-item-wrapper">
                        {subItem.submenu ? (
                          <>
                            <div className="sidebar-dropdown-link sidebar-dropdown-link-with-submenu">
                              {subItem.link ? (
                                <Link
                                  to={subItem.link}
                                  className={`sidebar-dropdown-link-text ${hasActiveSubmenuItem(subItem.submenu) || isDropdownItemActive(subItem.link) ? 'sidebar-dropdown-link-active' : ''}`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                    setActiveSubmenu(null);
                                  }}
                                >
                                  {subItem.title}
                                </Link>
                              ) : (
                                <span className="sidebar-dropdown-link-text">{subItem.title}</span>
                              )}
                              <button
                                className="sidebar-submenu-toggle"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  toggleSubmenu(index, subIndex);
                                }}
                                aria-label="Toggle submenu"
                              >
                                <ChevronDown
                                  size={14}
                                  className={`dropdown-arrow dropdown-arrow-nested ${activeSubmenu === `${index}-${subIndex}` ? 'dropdown-arrow-open' : ''}`}
                                />
                              </button>
                            </div>
                            <div className={`sidebar-submenu ${activeSubmenu === `${index}-${subIndex}` ? 'sidebar-submenu-open' : ''}`}>
                              {subItem.submenu.map((subSubItem, subSubIndex) => (
                                <Link
                                  key={subSubIndex}
                                  to={subSubItem.link}
                                  className={`sidebar-dropdown-link sidebar-submenu-link ${isDropdownItemActive(subSubItem.link) ? 'sidebar-dropdown-link-active' : ''}`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveDropdown(null);
                                    setActiveSubmenu(null);
                                  }}
                                >
                                  {subSubItem.title}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            to={subItem.link}
                            className={`sidebar-dropdown-link ${isDropdownItemActive(subItem.link) ? 'sidebar-dropdown-link-active' : ''}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                              setActiveSubmenu(null);
                            }}
                          >
                            {subItem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`sidebar-link ${isMenuItemActive(item) ? 'sidebar-link-active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="sidebar-icon">{item.icon}</span>
                  <span className="sidebar-text">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && <div className="sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>}

      {/* Auth Modals */}
      {showLogin  && <LoginModal  onClose={closeAll} onSwitchToSignUp={openSignUp} />}
      {showSignUp && <SignUpModal onClose={closeAll} onSwitchToLogin={openLogin}   />}
    </>
  );
};

export default Header;

