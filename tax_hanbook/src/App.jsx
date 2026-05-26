import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useState, lazy, Suspense, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContextProvider';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AnalyticsTracker from './components/AnalyticsTracker';
import AdminBackBar from './components/AdminBackBar';
import PageWrapper from './components/PageWrapper';
import AdminRoute from './components/AdminRoute';
import GoogleTranslateSync from './components/GoogleTranslateSync';
import './App.css';
import './styles/LandingPages.css';

const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Home = lazy(() => import('./pages/Home'));
const Introduction = lazy(() => import('./pages/Introduction'));
const RRAInfo = lazy(() => import('./pages/RRAInfo'));
const Definitions = lazy(() => import('./pages/Definitions'));
const Acronyms = lazy(() => import('./pages/Acronyms'));
const LawsRulings = lazy(() => import('./pages/LawsRulings'));
const Obligations = lazy(() => import('./pages/Obligations'));
const Audits = lazy(() => import('./pages/Audits'));
const Refunds = lazy(() => import('./pages/Refunds'));
const Appeals = lazy(() => import('./pages/Appeals'));
const DebtManagement = lazy(() => import('./pages/DebtManagement'));
const Certificates = lazy(() => import('./pages/Certificates'));
const VATReward = lazy(() => import('./pages/VATReward'));
const CommunicateRRA = lazy(() => import('./pages/CommunicateRRA'));
const OnlineRequests = lazy(() => import('./pages/OnlineRequests'));
const MotorVehicle = lazy(() => import('./pages/MotorVehicle'));
const MyRRA = lazy(() => import('./pages/MyRRA'));
const Registration = lazy(() => import('./pages/Registration'));
const DomesticTaxes = lazy(() => import('./pages/DomesticTaxes'));
const VAT = lazy(() => import('./pages/VAT'));
const ExciseExplanation = lazy(() => import('./pages/ExciseExplanation'));
const ExciseDeclaration = lazy(() => import('./pages/ExciseDeclaration'));
const WithholdingTaxes = lazy(() => import('./pages/WithholdingTaxes'));
const WithholdingTaxesExplanation = lazy(() => import('./pages/WithholdingTaxesExplanation'));
const WithholdingTaxesDeclaration = lazy(() => import('./pages/WithholdingTaxesDeclaration'));
const GamingTaxExplanation = lazy(() => import('./pages/GamingTaxExplanation'));
const GamingTaxDeclaration = lazy(() => import('./pages/GamingTaxDeclaration'));
const GamingTaxPenalties = lazy(() => import('./pages/GamingTaxPenalties'));
const RegistrationExplanation = lazy(() => import('./pages/RegistrationExplanation'));
const RegistrationGuide = lazy(() => import('./pages/RegistrationGuide'));
const DomesticDeclaration = lazy(() => import('./pages/DomesticDeclaration'));
const DomesticPenalties = lazy(() => import('./pages/DomesticPenalties'));
const MiningRoyaltyExplanation = lazy(() => import('./pages/MiningRoyaltyExplanation'));
const MiningRoyaltyDeclaration = lazy(() => import('./pages/MiningRoyaltyDeclaration'));
const CapitalGainsTaxExplanation = lazy(() => import('./pages/CapitalGainsTaxExplanation'));
const CapitalGainsTaxDeclaration = lazy(() => import('./pages/CapitalGainsTaxDeclaration'));
const DecentralisedPenalties = lazy(() => import('./pages/DecentralisedPenalties'));
const DecentralisedEntities = lazy(() => import('./pages/DecentralisedEntities'));
const ImmovablePropertyTax = lazy(() => import('./pages/ImmovablePropertyTax'));
const TradingLicenseTax = lazy(() => import('./pages/TradingLicenseTax'));
const RentalIncomeTax = lazy(() => import('./pages/RentalIncomeTax'));
const FeeLeviedDecentralisedEntities = lazy(() => import('./pages/FeeLeviedDecentralisedEntities'));
const TaxCentres = lazy(() => import('./pages/TaxCentres'));
const RegisteringDecentralisedEntities = lazy(() => import('./pages/RegisteringDecentralisedEntities'));
const DeclaringDecentralisedEntitiesLgt = lazy(() => import('./pages/DeclaringDecentralisedEntitiesLgt'));
const RoadMaintenanceExplanation = lazy(() => import('./pages/RoadMaintenanceExplanation'));
const RoadMaintenanceDeclaration = lazy(() => import('./pages/RoadMaintenanceDeclaration'));
const TourismTaxExplanation = lazy(() => import('./pages/TourismTaxExplanation'));
const TourismTaxDeclaration = lazy(() => import('./pages/TourismTaxDeclaration'));
const CustomsExplanation = lazy(() => import('./pages/CustomsExplanation'));
const CustomDuties = lazy(() => import('./pages/CustomDuties'));
const ClearingAgents = lazy(() => import('./pages/ClearingAgents'));
const BorderPortsAndDryPorts = lazy(() => import('./pages/BorderPortsAndDryPorts'));
const DeclaringImportsAndExport = lazy(() => import('./pages/DeclaringImportsAndExport'));
const FacilitationSchema = lazy(() => import('./pages/FacilitationSchema'));
const ImportingMotoVehicle = lazy(() => import('./pages/ImportingMotoVehicle'));
const CustomsPenalties = lazy(() => import('./pages/CustomsPenalties'));
const MethodsOfPayingTaxes = lazy(() => import('./pages/MethodsOfPayingTaxes'));
const AcknowledgementReceipt = lazy(() => import('./pages/AcknowledgementReceipt'));
const PayingUsingBankingAndEpayment = lazy(() => import('./pages/PayingUsingBankingAndEpayment'));
const EPaymentMobileMoney = lazy(() => import('./pages/EPaymentMobileMoney'));
const EPaymentMobicash = lazy(() => import('./pages/EPaymentMobicash'));
const PayingAtBank = lazy(() => import('./pages/PayingAtBank'));
const PayingTaxes = lazy(() => import('./pages/PayingTaxes'));
const RegistrationSummary = lazy(() => import('./pages/RegistrationSummary'));
const DomesticETax = lazy(() => import('./pages/DomesticETax'));
const PitCitSum = lazy(() => import('./pages/PitCitSum'));
const PayeSum = lazy(() => import('./pages/PayeSum'));
const VatSum = lazy(() => import('./pages/VatSum'));
const EisSum = lazy(() => import('./pages/EisSum'));
const ExciseSum = lazy(() => import('./pages/ExciseSum'));
const WhtSum = lazy(() => import('./pages/WhtSum'));
const CustomsSum = lazy(() => import('./pages/CustomsSum'));
const PayingSum = lazy(() => import('./pages/PayingSum'));
const Deregistration = lazy(() => import('./pages/Deregistration'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const Faq = lazy(() => import('./pages/Faq'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const VATCalculatorPage = lazy(() => import('./pages/VATCalculatorPage'));
const IncomeTaxCalculatorPage = lazy(() => import('./pages/IncomeTaxCalculatorPage'));
const PAYECalculatorPage = lazy(() => import('./pages/PAYECalculatorPage'));
const WithholdingTaxCalculatorPage = lazy(() => import('./pages/WithholdingTaxCalculatorPage'));
const Foreword = lazy(() => import('./pages/Foreword'));
const VDS = lazy(() => import('./pages/VDS'));
const ExchangeInfo = lazy(() => import('./pages/ExchangeInfo'));
const IncomeTaxExplanation = lazy(() => import('./pages/IncomeTaxExplanation'));
const RealRegimeDetails = lazy(() => import('./pages/RealRegimeDetails'));
const MDeclarationFlatLumpIQP = lazy(() => import('./pages/MDeclarationFlatLumpIQP'));
const MDeclarationMotorVehicle = lazy(() => import('./pages/MDeclarationMotorVehicle'));
const DeclaringFlatTaxLumpSumIQP = lazy(() => import('./pages/DeclaringFlatTaxLumpSumIQP'));
const DeclaringMotorVehicleIncomeTax = lazy(() => import('./pages/DeclaringMotorVehicleIncomeTax'));
const DeclaringFlatTaxETax = lazy(() => import('./pages/DeclaringFlatTaxE-Tax'));
const DeclaringLumpSumETax = lazy(() => import('./pages/DeclaringLumpSumE-Tax'));
const DeclaringRealRegimeETax = lazy(() => import('./pages/DeclaringRealRegimeE-Tax'));
const DeclaringIQPIncomeTax = lazy(() => import('./pages/DeclaringIQPIncomeTax'));
const InstalmentPayments = lazy(() => import('./pages/InstalmentPayments'));
const PayeExplanation = lazy(() => import('./pages/PayeExplanation'));
const PayeDeclaration = lazy(() => import('./pages/PayeDeclaration'));
const VatExplanation = lazy(() => import('./pages/VatExplanation'));
const VatDeclaration = lazy(() => import('./pages/VatDeclaration'));
const ElectronicInvoicingSystemExplanation = lazy(() => import('./pages/ElectronicInvoicingSystemExplanation'));
const EisEbmsPenalties = lazy(() => import('./pages/EisEbmsPenalties'));
const IntroductionLanding = lazy(() => import('./pages/IntroductionLanding'));
const RegistrationLanding = lazy(() => import('./pages/RegistrationLanding'));
const VatLanding = lazy(() => import('./pages/VatLanding'));
const OtherTaxesLanding = lazy(() => import('./pages/OtherTaxesLanding'));
const OtherTaxesEntities = lazy(() => import('./pages/OtherTaxesEntities'));
const PitCitLanding = lazy(() => import('./pages/PitCitLanding'));
const OtherTaxSubmenuLanding = lazy(() => import('./pages/OtherTaxSubmenuLanding'));
const VatUnified = lazy(() => import('./pages/VatUnified'));

function RouteLoading() {
  return (
    <div className="route-loading" role="status" aria-live="polite" aria-label="Loading page">
      <div className="route-loading-spinner" />
    </div>
  );
}

// Layout wrapper for all handbook pages (Header + Footer)
// contentKey forces only the <main> to remount when switching back to English,
// giving fresh DOM without GT artifacts — Header/Footer stay mounted.
const HandbookLayout = ({ searchQuery, setSearchQuery, contentKey }) => {
  const { user, isAdmin } = useAuth();
  const adminBrowsing = user && isAdmin();
  return (
    <div className={`app${adminBrowsing ? ' admin-viewing' : ''}`}>
      {adminBrowsing && <AdminBackBar />}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="main-container">
        <main className="content" key={contentKey}>
          <PageWrapper>
            <Outlet context={{ setSearchQuery }} />
          </PageWrapper>
        </main>
      </div>
      <Footer />
    </div>
  );
};

function AppRoutes({ searchQuery, setSearchQuery, contentKey }) {
  return (
    <Suspense fallback={<RouteLoading />}>
        <Routes>
            {/* Admin route — full-page, no Header/Footer */}
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />

            {/* All handbook routes — wrapped in HandbookLayout */}
            <Route element={<HandbookLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery} contentKey={contentKey} />}>

                <Route path="/" element={<Home />} />
                <Route path="/introduction" element={<IntroductionLanding />} />
                <Route path="/introduction-original" element={<Introduction />} />
                <Route path="/foreword" element={<Foreword />} />
                <Route path="/rra-info" element={<RRAInfo />} />
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/acronyms" element={<Acronyms />} />
                <Route path="/laws-rulings" element={<LawsRulings />} />
                <Route path="/obligations" element={<Obligations />} />
                <Route path="/audits" element={<Audits />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/appeals" element={<Appeals />} />
                <Route path="/debt-management" element={<DebtManagement />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/vds" element={<VDS />} />
                <Route path="/vat-reward" element={<VATReward />} />
                <Route path="/communicate-rra" element={<CommunicateRRA />} />
                <Route path="/online-requests" element={<OnlineRequests />} />
                <Route path="/exchange-info" element={<ExchangeInfo />} />
                <Route path="/motor-vehicle" element={<MotorVehicle />} />
                <Route path="/myrra" element={<MyRRA />} />
                <Route path="/registration" element={<RegistrationLanding />} />
                <Route path="/registration-original" element={<Registration />} />
                <Route path="/registration-explanation" element={<RegistrationExplanation />} />
                <Route path="/registration-guide" element={<RegistrationGuide />} />
                <Route path="/domestic-taxes" element={<DomesticTaxes />} />
                <Route path="/domestic-declaration" element={<DomesticDeclaration />} />
                <Route path="/domestic-penalties" element={<DomesticPenalties />} />
                <Route path="/income-tax-explanation" element={<IncomeTaxExplanation />} />
                <Route path="/real-regime-details" element={<RealRegimeDetails />} />
                <Route path="/m-declaration-flat-lump-iqp" element={<MDeclarationFlatLumpIQP />} />
                <Route path="/m-declaration-motor-vehicle" element={<MDeclarationMotorVehicle />} />
                <Route path="/declaring-flat-tax-lump-sum-iqp" element={<DeclaringFlatTaxLumpSumIQP />} />
                <Route path="/declaring-motor-vehicle-income-tax" element={<DeclaringMotorVehicleIncomeTax />} />
                <Route path="/declaring-flat-tax-e-tax" element={<DeclaringFlatTaxETax />} />
                <Route path="/declaring-lump-sum-e-tax" element={<DeclaringLumpSumETax />} />
                <Route path="/declaring-real-regime-e-tax" element={<DeclaringRealRegimeETax />} />
                <Route path="/declaring-iqp-income-tax" element={<DeclaringIQPIncomeTax />} />
                <Route path="/instalment-payments" element={<InstalmentPayments />} />
                <Route path="/paye-explanation" element={<PayeExplanation />} />
                <Route path="/paye-declaration" element={<PayeDeclaration />} />
                <Route path="/vat-explanation" element={<VatExplanation />} />
                <Route path="/vat-declaration" element={<VatDeclaration />} />
                <Route path="/electronic-invoicing-system-explanation" element={<ElectronicInvoicingSystemExplanation />} />
                <Route path="/eis-ebms-penalties" element={<EisEbmsPenalties />} />
                <Route path="/vat" element={<VatLanding />} />
                <Route path="/vat-original" element={<VAT />} />
                <Route path="/excise-explanation" element={<ExciseExplanation />} />
                <Route path="/excise-declaration" element={<ExciseDeclaration />} />
                <Route path="/withholding-taxes" element={<WithholdingTaxes />} />
                <Route path="/withholding-taxes-explanation" element={<WithholdingTaxesExplanation />} />
                <Route path="/withholding-taxes-declaration" element={<WithholdingTaxesDeclaration />} />
                <Route path="/gaming-tax-explanation" element={<GamingTaxExplanation />} />
                <Route path="/gaming-tax-declaration" element={<GamingTaxDeclaration />} />
                <Route path="/gaming-tax-penalties" element={<GamingTaxPenalties />} />
                <Route path="/mining-royalty-explanation" element={<MiningRoyaltyExplanation />} />
                <Route path="/mining-royalty-declaration" element={<MiningRoyaltyDeclaration />} />
                <Route path="/capital-gains-tax-explanation" element={<CapitalGainsTaxExplanation />} />
                <Route path="/capital-gains-tax-declaration" element={<CapitalGainsTaxDeclaration />} />
                <Route path="/decentralisedpenalties" element={<DecentralisedPenalties />} />
                <Route path="/decentralised-entities" element={<DecentralisedEntities />} />
                <Route path="/immovable-property-tax" element={<ImmovablePropertyTax />} />
                <Route path="/trading-license-tax" element={<TradingLicenseTax />} />
                <Route path="/rental-income-tax" element={<RentalIncomeTax />} />
                <Route path="/fee-levied-decentralised-entities" element={<FeeLeviedDecentralisedEntities />} />
                <Route path="/tax-centres" element={<TaxCentres />} />
                <Route path="/registering-decentralised-entities" element={<RegisteringDecentralisedEntities />} />
                <Route path="/declaring-decentralised-entities-lgt" element={<DeclaringDecentralisedEntitiesLgt />} />
                <Route path="/road-maintenance-explanation" element={<RoadMaintenanceExplanation />} />
                <Route path="/road-maintenance-declaration" element={<RoadMaintenanceDeclaration />} />
                <Route path="/tourism-tax-explanation" element={<TourismTaxExplanation />} />
                <Route path="/tourism-tax-declaration" element={<TourismTaxDeclaration />} />
                <Route path="/customs-explanation" element={<CustomsExplanation />} />
                <Route path="/custom-duties" element={<CustomDuties />} />
                <Route path="/clearing-agents" element={<ClearingAgents />} />
                <Route path="/border-ports-and-dry-ports" element={<BorderPortsAndDryPorts />} />
                <Route path="/declaring-imports-and-export" element={<DeclaringImportsAndExport />} />
                <Route path="/facilitation-schema" element={<FacilitationSchema />} />
                <Route path="/importing-moto-vehicle" element={<ImportingMotoVehicle />} />
                <Route path="/customs-penalties" element={<CustomsPenalties />} />
                <Route path="/methods-of-paying-taxes" element={<MethodsOfPayingTaxes />} />
                <Route path="/acknowledgement-receipt" element={<AcknowledgementReceipt />} />
                <Route path="/paying-using-banking-and-epayment" element={<PayingUsingBankingAndEpayment />} />
                <Route path="/e-payment-mobile-money" element={<EPaymentMobileMoney />} />
                <Route path="/e-payment-mobicash" element={<EPaymentMobicash />} />
                <Route path="/paying-at-bank" element={<PayingAtBank />} />
                <Route path="/paying-taxes" element={<PayingTaxes />} />
                <Route path="/registration-summary" element={<RegistrationSummary />} />
                <Route path="/domestic-e-tax" element={<DomesticETax />} />
                <Route path="/pit-cit-sum" element={<PitCitSum />} />
                <Route path="/paye-sum" element={<PayeSum />} />
                <Route path="/vat-sum" element={<VatSum />} />
                <Route path="/eis-sum" element={<EisSum />} />
                <Route path="/excise-sum" element={<ExciseSum />} />
                <Route path="/wht-sum" element={<WhtSum />} />
                <Route path="/customs-sum" element={<CustomsSum />} />
                <Route path="/paying-sum" element={<PayingSum />} />
                <Route path="/deregistration" element={<Deregistration />} />
                <Route path="/search" element={<SearchResults searchQuery={searchQuery} />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/profile" element={<UserProfile />} />

                <Route path="/calculator/vat" element={<VATCalculatorPage />} />
                <Route path="/calculator/income-tax" element={<IncomeTaxCalculatorPage />} />
                <Route path="/calculator/paye" element={<PAYECalculatorPage />} />
                <Route path="/calculator/withholding-tax" element={<WithholdingTaxCalculatorPage />} />
                <Route path="/other-taxes-entities" element={<OtherTaxesEntities />} />
                <Route path="/pit-cit" element={<PitCitLanding />} />
                <Route path="/other-taxes" element={<OtherTaxesLanding />} />
                <Route path="/other-taxes-original" element={<OtherTaxesLanding />} />
                <Route path="/other-tax-submenu" element={<OtherTaxSubmenuLanding />} />
                <Route path="/vat-unified" element={<VatUnified />} />
            </Route>
          </Routes>
    </Suspense>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contentKey, setContentKey] = useState(0);

  // Listen for the "restore to English" signal from LanguageContextProvider.
  // Incrementing contentKey remounts only <main> — Header/Footer stay mounted —
  // replacing any GT-modified DOM with clean React-rendered DOM.
  useEffect(() => {
    const handler = () => setContentKey((k) => k + 1);
    window.addEventListener('rra-restore-english', handler);
    return () => window.removeEventListener('rra-restore-english', handler);
  }, []);

  return (
    <AuthProvider>
      <LanguageProvider>
        <Router
          future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true,
          }}
        >
          <ScrollToTop />
          <AnalyticsTracker />
          <GoogleTranslateSync />
          <AppRoutes searchQuery={searchQuery} setSearchQuery={setSearchQuery} contentKey={contentKey} />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
