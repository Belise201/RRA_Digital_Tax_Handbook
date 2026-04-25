# RRA Tax Handbook 2025

A comprehensive, user-friendly web application providing complete guidance on Rwanda's tax system. This digital handbook contains all the information from the official RRA Tax Handbook 2025, presented in an interactive, searchable format.

## 🌟 Features

### 📚 Comprehensive Content

- **Complete Tax Information**: All tax types covered including Income Tax, VAT, PAYE, Customs, and more
- **Step-by-Step Guides**: Detailed procedures for registration, declaration, and payment
- **Real Examples**: Practical examples and calculations for better understanding
- **Updated Information**: Based on the latest 2025 RRA Tax Handbook

### 🎨 Modern Design

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **User-Friendly Interface**: Clean, intuitive navigation with clear sections
- **Professional Styling**: Modern UI with consistent branding and typography
- **Accessibility**: Designed with accessibility best practices

### 🔍 Easy Navigation

- **Search Functionality**: Quick search across all content
- **Organized Sections**: Logical grouping of related information
- **Quick Links**: Direct access to commonly needed information
- **Breadcrumb Navigation**: Easy to track your location

### 📱 Digital Services Integration

- **Direct Links**: Quick access to E-Tax, M-Declaration, and other RRA systems
- **Payment Methods**: Comprehensive guide to all payment options
- **Contact Information**: Direct access to RRA support channels

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tax_handbook
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in your terminal)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
tax_handbook/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx     # Main navigation header
│   │   ├── Sidebar.jsx    # Navigation sidebar
│   │   └── *.css          # Component styles
│   ├── pages/             # Main content pages
│   │   ├── Home.jsx       # Landing page
│   │   ├── Introduction.jsx # Tax system overview
│   │   ├── IncomeTax.jsx  # Income tax guide
│   │   ├── VAT.jsx        # VAT guide
│   │   ├── Customs.jsx    # Customs procedures
│   │   ├── PayingTaxes.jsx # Payment methods
│   │   └── ...            # Other tax type pages
│   ├── styles/            # Page-specific styles
│   │   ├── Home.css       # Home page styles
│   │   ├── Pages.css      # Common page styles
│   │   └── IncomeTax.css  # Income tax page styles
│   ├── App.jsx            # Main application component
│   ├── App.css            # App-level styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎯 Key Pages

### Home Page

- **Hero Section**: Overview of the handbook with key statistics
- **Quick Links**: Direct access to major sections
- **Tax Overview**: Summary of all tax types and rates
- **Digital Services**: Links to RRA online systems
- **Contact Information**: Support channels and office locations

### Income Tax

- **Three Tax Regimes**: Flat Tax, Lump Sum, and Real Regime
- **Detailed Rates**: Complete tax rate tables
- **Declaration Methods**: E-Tax and M-Declaration guides
- **IQP Information**: Instalment Quarterly Prepayments
- **Step-by-Step Guides**: Complete declaration procedures

### VAT

- **Registration Requirements**: When and how to register
- **Calculation Methods**: VAT formula and examples
- **EIS System**: Electronic Invoicing System guide
- **Declaration Process**: Complete VAT declaration steps
- **Annexure Requirements**: Required documentation

### Customs

- **Border Posts**: Complete list with operating hours
- **Customs Duties**: All duty types and rates
- **Declaration Process**: Import/export procedures
- **Facilitation Schemes**: Available trade facilitation
- **Clearing Agents**: Requirements and responsibilities

### Paying Taxes

- **Payment Methods**: E-Payment, Mobile Money, Bank payments
- **Acknowledgement Receipts**: How to access and understand
- **Bank Payment Details**: Cash deposit and cheque instructions
- **Troubleshooting**: Common issues and solutions

## 🛠️ Technology Stack

- **React 19**: Modern React with latest features
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **ESLint**: Code quality and consistency

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#1e40af) - Main brand color
- **Secondary**: Gray (#64748b) - Supporting text
- **Accent**: Orange (#f59e0b) - Call-to-action elements
- **Success**: Green (#10b981) - Positive actions
- **Warning**: Orange (#f59e0b) - Caution elements
- **Error**: Red (#ef4444) - Error states

### Typography

- **Font Family**: Inter - Clean, modern sans-serif
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Components

- **Cards**: Consistent card design for content sections
- **Buttons**: Primary, secondary, and outline variants
- **Forms**: Clean, accessible form elements
- **Navigation**: Responsive header and sidebar

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with touch-friendly elements
- **Mobile**: Mobile-first design with collapsible navigation

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

### Code Style

- **ESLint**: Enforces consistent code style
- **Prettier**: Automatic code formatting
- **React Hooks**: Modern React patterns
- **Component Structure**: Organized, reusable components

## 📄 Content Sources

This application is based on the official **RRA Tax Handbook 2025**, including:

- All tax rates and calculations
- Official procedures and deadlines
- Contact information and office locations
- Digital service links and instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For technical support or questions about the application:

- **RRA Call Center**: 3004 (toll-free)
- **RRA Website**: [www.rra.gov.rw](https://www.rra.gov.rw)
- **E-Tax System**: [etax.rra.gov.rw](https://etax.rra.gov.rw)

## 📄 License

This project is based on the official RRA Tax Handbook 2025. All content is subject to RRA's official guidelines and may be updated as tax legislation changes.

## 🔄 Updates

The application will be updated to reflect:

- Changes in tax legislation
- Updates to RRA procedures
- New digital services
- User feedback and improvements

---

**© Rwanda Revenue Authority 2025**  
_First published 2018. Second published 2025._
