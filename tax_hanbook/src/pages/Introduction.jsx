import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  BookOpen,
  Scale,
  BarChart3,
  Search,
  DollarSign,
  Gavel,
  CreditCard,
  FileText as FileTextIcon,
  Gift,
  Mail,
  Smartphone,
  Car,
  User,
  ClipboardList,
  AlertTriangle,
  Calculator,
  Calendar,
  Monitor,
  Receipt,
  RefreshCw,
  Building,
  Globe,
  Laptop,
  FileSpreadsheet,
  Shield,
  HelpCircle
} from 'lucide-react';

const Introduction = () => {
  const quickLinks = [
    { path: '/foreword', label: 'Foreword', icon: <BookOpen size={20} /> },
    { path: '/rra-info', label: 'RRA Information', icon: <Building size={20} /> },
    { path: '/definitions', label: 'Tax Definitions', icon: <Scale size={20} /> },
    { path: '/acronyms', label: 'Acronyms & Abbreviations', icon: <FileTextIcon size={20} /> },
    { path: '/laws-rulings', label: 'Laws & Rulings', icon: <Gavel size={20} /> },
    { path: '/obligations', label: 'Obligations and Bookkeeping', icon: <BarChart3 size={20} /> },
    { path: '/audits', label: 'Audits', icon: <Search size={20} /> },
    { path: '/refunds', label: 'Refunds/Tax Credits', icon: <RefreshCw size={20} /> },
    { path: '/appeals', label: 'Appeals', icon: <AlertTriangle size={20} /> },
    { path: '/debt-management', label: 'Debt Management', icon: <DollarSign size={20} /> },
    { path: '/certificates', label: 'Certificates – VAT, Compliance Certificates and Tax Clearance Certificates (TCCs)', icon: <Shield size={20} /> },
    { path: '/vds', label: 'Voluntary Disclosure', icon: <FileSpreadsheet size={20} /> },
    { path: '/vat-reward', label: 'VAT Reward', icon: <Gift size={20} /> },
    { path: '/communicate-rra', label: 'Communicate to RRA in Writing', icon: <Mail size={20} /> },
    { path: '/online-requests', label: 'Online Requests', icon: <Monitor size={20} /> },
    { path: '/exchange-info', label: 'Exchange of Information', icon: <Globe size={20} /> },
    { path: '/motor-vehicle', label: 'Motor Vehicle', icon: <Car size={20} /> },
  ];

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <BookOpen size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">INTRODUCTION</h1>
              <div className="professional-title-divider"></div>

            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="content-section">
          <h2>Quick Access to Tax Information</h2>
          <p>
            Access comprehensive tax information and resources through our organized collection of guides,
            forms, and reference materials. Each section provides detailed information to help you understand
            your tax obligations and navigate the tax system effectively.
          </p>

          <div className="quick-links-grid">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.path} className="quick-link-card">
                <div className="professional-title-icon">
                  {link.icon}
                </div>
                <div className="quick-link-content">
                  <h3 className="quick-link-title">{link.label}</h3>
                  <p className="quick-link-description">
                    {link.path === '/foreword' && 'Commissioner\'s message and introduction'}
                    {link.path === '/rra-info' && 'About Rwanda Revenue Authority'}
                    {link.path === '/definitions' && 'Tax terminology and definitions'}
                    {link.path === '/acronyms' && 'Common tax acronyms and abbreviations'}
                    {link.path === '/laws-rulings' && 'Tax laws and administrative rulings'}
                    {link.path === '/obligations' && 'Taxpayer obligations and requirements'}
                    {link.path === '/audits' && 'Tax audit processes and procedures'}
                    {link.path === '/refunds' && 'Tax refund processes and eligibility'}
                    {link.path === '/appeals' && 'Appeal procedures and dispute resolution'}
                    {link.path === '/debt-management' && 'Managing tax debt and payment plans'}
                    {link.path === '/certificates' && 'Tax certificates and compliance documents'}
                    {link.path === '/vds' && 'Voluntary disclosure scheme information'}
                    {link.path === '/vat-reward' && 'VAT reward program details'}
                    {link.path === '/communicate-rra' && 'How to contact and communicate with RRA'}
                    {link.path === '/online-requests' && 'Online services and digital requests'}
                    {link.path === '/exchange-info' && 'Foreign exchange and currency information'}
                    {link.path === '/motor-vehicle' && 'Motor vehicle tax and registration'}
                  </p>
                </div>
                <div className="quick-link-arrow">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h2>Getting Started</h2>
          <p>
            If you're new to the tax system or need guidance on where to begin, we recommend starting with:
          </p>
          <ul>
            <li><strong>Definitions</strong> - Understanding tax terminology</li>
            <li><strong>Obligations</strong> - Learning your tax responsibilities</li>
            <li><strong>RRA Information</strong> - Getting to know the tax authority</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
