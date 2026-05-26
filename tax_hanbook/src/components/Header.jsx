import { X, Menu, BookOpen, HelpCircle, UserPlus, UserMinus, Calculator, Receipt, Building, Truck, ChevronDown, Search, LogOut, User, Bell, ExternalLink, ArrowRight, Mic, MicOff, LayoutGrid } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import LanguageSelector from './LanguageSelector';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { useUserNotifications } from '../hooks/useUserNotifications';
import { getAutocompleteSuggestions, normalizeSearchQuery } from '../data/searchData';
import { getApiRoot } from '../config/api';
import './LanguageSelector.css';
import './Header.css';

/** Strip hash and ensure leading slash — matches CMS `pagePath` keys. */
function normalizeHandbookPath(link) {
  if (!link) return '';
  const i = link.indexOf('#');
  const raw = i >= 0 ? link.slice(0, i) : link;
  const t = String(raw).trim();
  if (!t) return '';
  return t.startsWith('/') ? t : `/${t}`;
}

/** Remove dropdown / top-level links whose path is CMS-hidden (non-admins only via `showAllNav`). */
function filterHandbookNavItems(menuItems, hiddenSet, showAllNav) {
  if (showAllNav || !hiddenSet?.size) return menuItems;
  const hidden = (link) => hiddenSet.has(normalizeHandbookPath(link));

  return menuItems
    .map((item) => {
      if (item.dropdown) {
        const nextDrop = item.dropdown
          .map((sub) => {
            if (sub.submenu?.length) {
              const sm = sub.submenu.filter((ss) => !hidden(ss.link));
              if (sm.length === 0) return null;
              return { ...sub, submenu: sm };
            }
            if (hidden(sub.link)) return null;
            return sub;
          })
          .filter(Boolean);
        if (nextDrop.length === 0) return null;
        return { ...item, dropdown: nextDrop };
      }
      if (item.link && hidden(item.link)) return null;
      return item;
    })
    .filter(Boolean);
}

const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const { t } = useTranslations(currentLanguage);
  const { user, logout, isAdmin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // menu item `id` string, or null
  const [activeSubmenu, setActiveSubmenu] = useState(null); // `${menuId}-${subIndex}`
  const [showLogin, setShowLogin]   = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifPanel, setShowNotifPanel] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= 1023 : false,
  );
  const notifRef = useRef(null);

  // ── Autocomplete state ──────────────────────────────────────
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const searchRef = useRef(null);
  const debounceTimer = useRef(null);

  // ── Voice search state ───────────────────────────────────────
  const [isListening, setIsListening] = useState(false);
  const [voiceError,  setVoiceError]  = useState('');
  const recognitionRef = useRef(null);
  const voiceSupported =
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  // Notification bell — only for logged-in taxpayers
  const isTaxpayer = user && user.role === 'TAXPAYER';
  const { notifications, unreadCount, markRead, markAllRead } =
    useUserNotifications(isTaxpayer, user?.token);

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileViewport(window.innerWidth <= 1023);
      if (window.innerWidth > 1023) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openLogin  = () => { setShowLogin(true);  setShowSignUp(false); };
  const openSignUp = () => { setShowSignUp(true); setShowLogin(false);  };
  const closeAll   = () => { setShowLogin(false); setShowSignUp(false); };

  /** After login or sign-up: land on home with a clean handbook session (no stale route/search). */
  const handleAuthSuccess = useCallback(() => {
    setSearchQuery('');
    navigate('/', { replace: true });
  }, [navigate, setSearchQuery]);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Live autocomplete: debounce 150 ms
  const handleSearchInput = useCallback((e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setActiveSuggestion(-1);
    clearTimeout(debounceTimer.current);
    if (val.trim().length >= 2) {
      debounceTimer.current = setTimeout(() => {
        const s = getAutocompleteSuggestions(val.trim(), 7);
        setSuggestions(s);
        setShowSuggestions(s.length > 0);
      }, 150);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [setSearchQuery]);

  // Keyboard navigation inside the suggestion dropdown
  const handleSearchKeyDown = (e) => {
    if (!showSuggestions) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(i => Math.max(i - 1, -1));
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setActiveSuggestion(-1);
    } else if (e.key === 'Enter' && activeSuggestion >= 0) {
      e.preventDefault();
      const hit = suggestions[activeSuggestion];
      setSearchQuery(hit.title);
      setShowSuggestions(false);
      navigate(hit.path);
    }
  };

  // Close suggestions on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Voice search handler ─────────────────────────────────────
  const handleVoiceSearch = useCallback(() => {
    // Stop if already listening
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    if (!voiceSupported) {
      setVoiceError('Voice search is not supported in this browser.');
      setTimeout(() => setVoiceError(''), 3500);
      return;
    }

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognitionRef.current = recognition;

    const langMap = { en: 'en-US', fr: 'fr-FR', rw: 'rw-RW' };
    recognition.lang = langMap[currentLanguage] || 'en-US';
    recognition.continuous       = false;
    recognition.interimResults   = false;
    recognition.maxAlternatives  = 1;

    recognition.onstart = () => {
      setIsListening(true);
      setVoiceError('');
    };

    recognition.onend = () => setIsListening(false);

    recognition.onresult = (e) => {
      const parts = [];
      for (let i = 0; i < e.results.length; i += 1) {
        if (e.results[i].isFinal) {
          parts.push(e.results[i][0].transcript);
        }
      }
      const rawJoined = parts.length > 0 ? parts.join(' ') : e.results[0][0].transcript;
      const raw = rawJoined.trim();
      const transcript = normalizeSearchQuery(raw) || raw.replace(/[.!?,;:]+$/g, '').trim().toLowerCase();
      if (!transcript || transcript.length < 2) {
        setVoiceError('Could not catch that. Try speaking closer to the microphone.');
        setTimeout(() => setVoiceError(''), 3500);
        setIsListening(false);
        return;
      }
      setSearchQuery(transcript);
      setIsListening(false);
      setShowSuggestions(false);
      navigate(`/search?q=${encodeURIComponent(transcript)}`);
    };

    recognition.onerror = (e) => {
      setIsListening(false);
      if (e.error === 'not-allowed' || e.error === 'permission-denied') {
        setVoiceError('Microphone access denied. Check browser settings.');
      } else if (e.error === 'no-speech') {
        setVoiceError('No speech detected. Please try again.');
      } else if (e.error === 'network') {
        setVoiceError('Network error. Check your connection.');
      } else {
        setVoiceError('Could not recognise speech. Try again.');
      }
      setTimeout(() => setVoiceError(''), 3500);
    };

    try {
      recognition.start();
    } catch {
      setVoiceError('Could not start voice search.');
      setTimeout(() => setVoiceError(''), 3000);
    }
  }, [isListening, voiceSupported, setSearchQuery, navigate, currentLanguage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menuId) => {
    setActiveDropdown(activeDropdown === menuId ? null : menuId);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menuId, submenuIndex) => {
    const key = `${menuId}-${submenuIndex}`;
    setActiveSubmenu(activeSubmenu === key ? null : key);
  };

  const menuItems = useMemo(() => [
    {
      id: 'overview',
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
      id: 'registration',
      title: t('nav.registration'),
      icon: <UserPlus size={20} />,
      link: "/registration",
      dropdown: [
        { title: "Explanation of Registration", link: "/registration-explanation" },
        { title: "Step-by-Step Guide to Business Registration", link: "/registration-guide" }
      ]
    },
    {
      id: 'domestic',
      title: t('nav.domesticTaxes'),
      icon: <LayoutGrid size={20} />,
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
      id: 'decentralised',
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
      id: 'customs',
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
      id: 'paying',
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
      id: 'deregistration',
      title: t('nav.deregistration'),
      icon: <UserMinus size={20} />,
      link: "/deregistration",
      dropdown: [
        { title: "De-Registration", link: "/deregistration" },
      ],
    },
    {
      id: 'faq',
      title: t('nav.faqs'),
      icon: <HelpCircle size={20} />,
      link: "/faq",
      dropdown: [
        ...(user && isAdmin() ? [] : [{ title: "Submit a new question", link: "/faq" }]),
        { title: "Registration", link: "/registration-summary" },
        { title: "Domestic Taxes and E-Tax", link: "/domestic-e-tax" },
        { title: "Income Tax (PIT and CIT)", link: "/pit-cit-sum" },
        { title: "Pay As You Earn (PAYE)", link: "/paye-sum" },
        { title: "Value Added Tax (VAT)", link: "/vat-sum" },
        { title: "Electronic Invoicing System (EIS)", link: "/eis-sum" },
        { title: "Excise Duty", link: "/excise-sum" },
        { title: "Withholding Taxes", link: "/wht-sum" },
        { title: "Customs", link: "/customs-sum" },
        { title: "Paying Taxes", link: "/paying-sum" },
      ],
    },
    {
      id: 'calculators',
      title: "Tax Calculators & Tools",
      icon: <Calculator size={20} />,
      link: "/calculator/vat",
      requiresAuth: true,
      requiresTaxpayer: true,
      dropdown: [
        { title: "VAT Calculator", link: "/calculator/vat" },
        { title: "Income Tax Calculator", link: "/calculator/income-tax" },
        { title: "PAYE Calculator", link: "/calculator/paye" },
        { title: "Withholding Tax Calculator", link: "/calculator/withholding-tax" },
      ],
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [currentLanguage, user?.role]);

  const showAllNav = Boolean(user && isAdmin());
  const [hiddenPathSet, setHiddenPathSet] = useState(() => new Set());

  useEffect(() => {
    if (showAllNav) {
      setHiddenPathSet(new Set());
      return undefined;
    }
    let cancelled = false;
    const loadHiddenPaths = async () => {
      try {
        const r = await fetch(`${getApiRoot()}/api/content/hidden-paths`);
        if (!r.ok || cancelled) return;
        const arr = await r.json();
        const next = new Set(
          (Array.isArray(arr) ? arr : [])
            .map((p) => normalizeHandbookPath(p))
            .filter(Boolean),
        );
        if (!cancelled) setHiddenPathSet(next);
      } catch {
        if (!cancelled) setHiddenPathSet(new Set());
      }
    };
    loadHiddenPaths();
    const onVis = () => {
      if (document.visibilityState === 'visible') loadHiddenPaths();
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [showAllNav]);

  const navMenuItems = useMemo(
    () => filterHandbookNavItems(menuItems, hiddenPathSet, showAllNav),
    [menuItems, hiddenPathSet, showAllNav],
  );

  const pathFromMenuLink = (link) => {
    if (!link) return '';
    const i = link.indexOf('#');
    return i >= 0 ? link.slice(0, i) : link;
  };

  // Check if a menu item or dropdown item is active
  const isMenuItemActive = (item) => {
    if (item.link && location.pathname === item.link) {
      return true;
    }
    if (item.dropdown) {
      return item.dropdown.some(subItem => {
        if (subItem.link && location.pathname === pathFromMenuLink(subItem.link)) return true;
        if (subItem.submenu) {
          return subItem.submenu.some(subSubItem => location.pathname === subSubItem.link);
        }
        return false;
      });
    }
    return false;
  };

  const isDropdownItemActive = (link) => {
    if (!link) return false;
    const i = link.indexOf('#');
    const path = i >= 0 ? link.slice(0, i) : link;
    const hash = i >= 0 ? link.slice(i) : '';
    if (location.pathname !== path) return false;
    if (hash) return location.hash === hash;
    return !location.hash;
  };

  const hasActiveSubmenuItem = (submenu) => {
    if (!submenu) return false;
    return submenu.some(item => location.pathname === item.link);
  };

  // Auto-expand the sidebar section that contains the current page (stable menu ids — works with filtered nav)
  useEffect(() => {
    let openMenuId = null;
    let subKey = null;

    for (const item of navMenuItems) {
      if (!item.dropdown || !item.id) continue;
      for (let subIndex = 0; subIndex < item.dropdown.length; subIndex += 1) {
        const subItem = item.dropdown[subIndex];
        if (subItem.link && location.pathname === pathFromMenuLink(subItem.link)) {
          openMenuId = item.id;
          subKey = subItem.submenu ? `${item.id}-${subIndex}` : null;
          break;
        }
        if (subItem.submenu?.some((subSub) => location.pathname === subSub.link)) {
          openMenuId = item.id;
          subKey = `${item.id}-${subIndex}`;
          break;
        }
      }
      if (openMenuId) break;
    }

    setActiveDropdown(openMenuId);
    setActiveSubmenu(subKey);
  }, [location.pathname, navMenuItems]);

  return (
    <>
      <header className="header notranslate" translate="no">
        <div className="header-container">
          <div className="header-left">
            <button className="menu-toggle" onClick={toggleMenu}>
              <Menu size={20} />
              <span>{t('nav.menu')}</span>
            </button>
            <Link to="/" className="logo">
              <div className="logo-content">
                <img
                  src="/images/rra-logo.png"
                  alt="RRA Logo"
                  className="logo-image"
                />
              </div>
            </Link>
          </div>

          <div className="header-center">
            <form onSubmit={handleSearch} className="search-form" ref={searchRef}>
              <div className="search-container">
                <input
                  type="text"
                  placeholder={t('header.searchPlaceholder')}
                  value={searchQuery}
                  onChange={handleSearchInput}
                  onKeyDown={handleSearchKeyDown}
                  onFocus={() => {
                    if (suggestions.length > 0) setShowSuggestions(true);
                  }}
                  className="search-input"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      setSuggestions([]);
                      setShowSuggestions(false);
                    }}
                    className="clear-search"
                  >
                    <X size={16} />
                  </button>
                )}

                {/* ── Voice search mic button ── */}
                <button
                  type="button"
                  className={`voice-search-btn${isListening ? ' voice-search-btn--listening' : ''}${!voiceSupported ? ' voice-search-btn--disabled' : ''}`}
                  onClick={handleVoiceSearch}
                  title={
                    !voiceSupported
                      ? 'Voice search not supported in this browser'
                      : isListening
                      ? 'Tap to stop listening'
                      : 'Search by voice'
                  }
                  aria-label={isListening ? 'Stop voice search' : 'Start voice search'}
                >
                  {isListening ? <MicOff size={14} /> : <Mic size={14} />}
                  {isListening && <span className="voice-search-btn__ring" aria-hidden="true" />}
                  {isListening && <span className="voice-search-btn__ring voice-search-btn__ring--2" aria-hidden="true" />}
                </button>

                {/* ── Voice listening indicator inside dropdown ── */}
                {isListening && (
                  <div className="voice-listening-panel">
                    <div className="voice-listening-panel__waves">
                      <span /><span /><span /><span /><span />
                    </div>
                    <p className="voice-listening-panel__text">Listening… speak now</p>
                    <button
                      type="button"
                      className="voice-listening-panel__stop"
                      onClick={handleVoiceSearch}
                    >
                      <MicOff size={13} /> Stop
                    </button>
                  </div>
                )}

                {/* ── Voice error toast ── */}
                {voiceError && (
                  <div className="voice-error-toast" role="alert">
                    <MicOff size={13} />
                    {voiceError}
                  </div>
                )}

                {/* ── Live Autocomplete Dropdown ── */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="search-autocomplete">
                    <div className="search-autocomplete__header">
                      <Search size={12} />
                      <span>Suggestions</span>
                    </div>
                    {suggestions.map((s, idx) => (
                      <button
                        key={s.id}
                        type="button"
                        className={`search-autocomplete__item${idx === activeSuggestion ? ' search-autocomplete__item--active' : ''}`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setSearchQuery(s.title);
                          setShowSuggestions(false);
                          navigate(s.path);
                        }}
                        onMouseEnter={() => setActiveSuggestion(idx)}
                      >
                        <div className="search-autocomplete__item-left">
                          <span className="search-autocomplete__badge">{s.category}</span>
                          <span className="search-autocomplete__title">{s.title}</span>
                        </div>
                        <ArrowRight size={13} className="search-autocomplete__arrow" />
                      </button>
                    ))}
                    <button
                      type="submit"
                      className="search-autocomplete__all"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <Search size={13} />
                      See all results for &ldquo;{searchQuery}&rdquo;
                    </button>
                  </div>
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
                  {/* Read uploaded photo from localStorage */}
                  {(() => {
                    const avatarPhoto = localStorage.getItem(`rra_avatar_${user.email}`);
                    return (
                      <>
                        <button
                          id="user-avatar-btn"
                          className="hum__avatar-btn"
                          type="button"
                          onClick={() => setShowUserMenu(!showUserMenu)}
                          aria-label="Account menu"
                        >
                          <span className="hum__circle">
                            {avatarPhoto
                              ? <img src={avatarPhoto} alt="" className="hum__circle-photo" />
                              : (user.firstName ? user.firstName[0].toUpperCase() : <User size={16} />)
                            }
                          </span>
                          <ChevronDown size={14} className={`hum__chevron${showUserMenu ? ' hum__chevron--open' : ''}`} />
                        </button>

                        {showUserMenu && (
                          <div className="hum__panel">
                            {/* "Currently in" section */}
                            <p className="hum__section-label">{t('auth.userMenu.currentlyIn')}</p>
                            <div className="hum__identity">
                              <span className="hum__identity-circle">
                                {avatarPhoto
                                  ? <img src={avatarPhoto} alt="" className="hum__circle-photo" />
                                  : (user.firstName ? user.firstName[0].toUpperCase() : <User size={14} />)
                                }
                              </span>
                        <div className="hum__identity-text">
                          <span className="hum__identity-name">
                            {user.firstName} {user.lastName}
                          </span>
                          <span className="hum__identity-role">
                            {user.role === 'ADMIN' ? 'Administrator' : 'Taxpayer'}
                          </span>
                          <span className="hum__identity-email">{user.email}</span>
                        </div>
                      </div>

                      <hr className="hum__divider" />

                      {user.role === 'TAXPAYER' && (
                        <button
                          type="button"
                          className="hum__item"
                          onClick={() => {
                            setShowUserMenu(false);
                            navigate('/profile');
                          }}
                        >
                          <User size={15} />
                          {t('auth.userMenu.editProfile')}
                        </button>
                      )}

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
                      </>
                    );
                  })()}
                </div>
              ) : (
                /* ---- Login button ---- */
                <button
                  id="header-login-btn"
                  type="button"
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
          {navMenuItems
            .filter(item => {
              if (item.requiresAuth && !user) return false;
              if (item.requiresTaxpayer && user?.role !== 'TAXPAYER') return false;
              return true;
            })
            .map((item) => (
            <div key={item.id} className="sidebar-item">
              {item.dropdown ? (
                <div className="sidebar-dropdown">
                  <button
                    className={`sidebar-dropdown-toggle ${isMenuItemActive(item) ? 'sidebar-dropdown-toggle-active' : ''}`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span className="sidebar-icon">{item.icon}</span>
                    <span className="sidebar-text notranslate" translate="no">{item.title}</span>
                    <ChevronDown
                      size={16}
                      className={`dropdown-arrow ${activeDropdown === item.id ? 'dropdown-arrow-open' : ''}`}
                    />
                  </button>
                  <div className={`sidebar-dropdown-menu ${activeDropdown === item.id ? 'sidebar-dropdown-open' : ''}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <div key={subIndex} className="sidebar-dropdown-item-wrapper">
                        {subItem.submenu ? (
                          <>
                            <div className="sidebar-dropdown-link sidebar-dropdown-link-with-submenu">
                              {subItem.link ? (
                                <Link
                                  to={subItem.link}
                                  className={`sidebar-dropdown-link-text ${hasActiveSubmenuItem(subItem.submenu) || isDropdownItemActive(subItem.link) ? 'sidebar-dropdown-link-active' : ''}`}
                                  onClick={() => setIsMenuOpen(false)}
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
                                  toggleSubmenu(item.id, subIndex);
                                }}
                                aria-label="Toggle submenu"
                              >
                                <ChevronDown
                                  size={14}
                                  className={`dropdown-arrow dropdown-arrow-nested ${activeSubmenu === `${item.id}-${subIndex}` ? 'dropdown-arrow-open' : ''}`}
                                />
                              </button>
                            </div>
                            <div className={`sidebar-submenu ${activeSubmenu === `${item.id}-${subIndex}` ? 'sidebar-submenu-open' : ''}`}>
                              {subItem.submenu.map((subSubItem, subSubIndex) => (
                                <Link
                                  key={subSubIndex}
                                  to={subSubItem.link}
                                  className={`sidebar-dropdown-link sidebar-submenu-link ${isDropdownItemActive(subSubItem.link) ? 'sidebar-dropdown-link-active' : ''}`}
                                  onClick={() => setIsMenuOpen(false)}
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
                            onClick={() => setIsMenuOpen(false)}
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
                  <span className="sidebar-text notranslate" translate="no">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && isMobileViewport && (
        <div className="sidebar-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Auth Modals */}
      {showLogin  && (
        <LoginModal
          onClose={closeAll}
          onSwitchToSignUp={openSignUp}
          onAuthenticated={handleAuthSuccess}
        />
      )}
      {showSignUp && (
        <SignUpModal
          onClose={closeAll}
          onSwitchToLogin={openLogin}
          onAuthenticated={handleAuthSuccess}
        />
      )}
    </>
  );
};

export default Header;

