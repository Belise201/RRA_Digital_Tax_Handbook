// Search data for all pages in the tax handbook
export const searchData = [
    // Introduction Pages
    {
        id: 'foreword',
        title: 'Foreword',
        path: '/foreword',
        category: 'Introduction',
        content: 'Welcome to the Rwanda Revenue Authority Tax Handbook. This comprehensive guide provides detailed information about tax laws, regulations, and procedures in Rwanda.',
        keywords: ['foreword', 'welcome', 'introduction', 'handbook', 'guide']
    },
    {
        id: 'rra-info',
        title: 'RRA Information',
        path: '/rra-info',
        category: 'Introduction',
        content: 'The Rwanda Revenue Authority (RRA) is the government agency responsible for collecting taxes and customs duties in Rwanda. RRA plays a crucial role in financing national development through efficient tax collection.',
        keywords: ['rra', 'revenue authority', 'tax collection', 'government', 'agency', 'customs']
    },
    {
        id: 'definitions',
        title: 'Definitions',
        path: '/definitions',
        category: 'Introduction',
        content: 'Important tax terms and definitions used throughout the tax system. Understanding these terms is essential for proper tax compliance and understanding of tax obligations.',
        keywords: ['definitions', 'terms', 'tax terms', 'glossary', 'meaning', 'explanation']
    },
    {
        id: 'acronyms',
        title: 'Acronyms',
        path: '/acronyms',
        category: 'Introduction',
        content: 'Common acronyms and abbreviations used in tax administration and compliance. These abbreviations are frequently used in tax documents and communications.',
        keywords: ['acronyms', 'abbreviations', 'short forms', 'initials', 'tax acronyms']
    },
    {
        id: 'laws-rulings',
        title: 'Laws & Rulings',
        path: '/laws-rulings',
        category: 'Introduction',
        content: 'Tax laws, regulations, and official rulings that govern tax administration in Rwanda. These legal frameworks provide the foundation for tax compliance and enforcement.',
        keywords: ['laws', 'regulations', 'rulings', 'legal', 'legislation', 'tax law']
    },
    {
        id: 'obligations',
        title: 'Tax Obligations',
        path: '/obligations',
        category: 'Introduction',
        content: 'Understanding taxpayer obligations and responsibilities under Rwandan tax law. This includes registration requirements, filing deadlines, and compliance procedures.',
        keywords: ['obligations', 'responsibilities', 'requirements', 'compliance', 'duties', 'taxpayer']
    },
    {
        id: 'audits',
        title: 'Tax Audits',
        path: '/audits',
        category: 'Introduction',
        content: 'Information about tax audit processes, procedures, and what taxpayers can expect during an audit. Understanding audit requirements helps ensure proper compliance.',
        keywords: ['audits', 'audit process', 'examination', 'review', 'inspection', 'compliance check']
    },

    // Registration Pages
    {
        id: 'registration-explanation',
        title: 'Registration Explanation',
        path: '/registration-explanation',
        category: 'Registration',
        content: 'Complete guide to tax registration processes and requirements. Learn about TIN registration, VAT registration, and other mandatory registrations for businesses.',
        keywords: ['registration', 'tin', 'taxpayer identification', 'vat registration', 'business registration', 'register']
    },
    {
        id: 'registration-guide',
        title: 'Registration Guide',
        path: '/registration-guide',
        category: 'Registration',
        content: 'Step-by-step guide to registering for taxes in Rwanda. Detailed instructions for different types of registrations and required documentation.',
        keywords: ['registration guide', 'how to register', 'step by step', 'instructions', 'process', 'documentation']
    },
    {
        id: 'lgt-registration',
        title: 'LGT Registration',
        path: '/lgt-registration',
        category: 'Registration',
        content: 'Local Government Tax registration procedures and requirements. Learn about registering for local government taxes and related compliance requirements.',
        keywords: ['lgt', 'local government tax', 'local registration', 'municipal taxes', 'district taxes']
    },

    // Income Tax Pages
    {
        id: 'income-tax-explanation',
        title: 'Income Tax Explanation',
        path: '/income-tax-explanation',
        category: 'Income Tax',
        content: 'Comprehensive explanation of income tax in Rwanda. Understanding income tax rates, calculations, exemptions, and filing requirements for individuals and businesses.',
        keywords: ['income tax', 'personal income tax', 'corporate tax', 'tax rates', 'calculations', 'exemptions']
    },
    {
        id: 'real-regime-details',
        title: 'Real Regime Details',
        path: '/real-regime-details',
        category: 'Income Tax',
        content: 'Details about the real regime tax system for businesses. Understanding real regime requirements, benefits, and compliance procedures for eligible businesses.',
        keywords: ['real regime', 'business tax', 'real regime system', 'business compliance', 'tax regime']
    },
    {
        id: 'm-declaration-flat-lump-iqp',
        title: 'M-Declaration Flat/Lump/IQP',
        path: '/m-declaration-flat-lump-iqp',
        category: 'Income Tax',
        content: 'Mobile declaration system for flat tax, lump sum, and IQP (Income Quarterly Payment) declarations. Learn how to use mobile platforms for tax filing.',
        keywords: ['m-declaration', 'mobile declaration', 'flat tax', 'lump sum', 'iqp', 'quarterly payment', 'mobile filing']
    },
    {
        id: 'm-declaration-motor-vehicle',
        title: 'M-Declaration Motor Vehicle',
        path: '/m-declaration-motor-vehicle',
        category: 'Income Tax',
        content: 'Mobile declaration for motor vehicle related taxes. Understanding vehicle tax obligations and how to declare them using mobile platforms.',
        keywords: ['motor vehicle', 'vehicle tax', 'car tax', 'vehicle declaration', 'transport tax']
    },
    {
        id: 'flat-tax-declaration',
        title: 'Flat Tax Declaration',
        path: '/flat-tax-declaration',
        category: 'Income Tax',
        content: 'Flat tax declaration procedures and requirements. Learn about the simplified tax system for small businesses and eligible taxpayers.',
        keywords: ['flat tax', 'simplified tax', 'small business tax', 'flat rate', 'simplified system']
    },
    {
        id: 'lump-sum-declaration',
        title: 'Lump Sum Declaration',
        path: '/lump-sum-declaration',
        category: 'Income Tax',
        content: 'Lump sum tax declaration process and requirements. Understanding when and how to make lump sum tax payments and declarations.',
        keywords: ['lump sum', 'lump sum tax', 'bulk payment', 'one-time payment', 'lump sum declaration']
    },
    {
        id: 'instalment-payments',
        title: 'Instalment Payments',
        path: '/instalment-payments',
        category: 'Income Tax',
        content: 'Instalment payment system for taxes. Learn about paying taxes in installments, eligibility criteria, and payment procedures.',
        keywords: ['instalments', 'installment payments', 'payment plan', 'monthly payments', 'quarterly payments']
    },
    {
        id: 'pit-cit',
        title: 'PIT/CIT',
        path: '/pit-cit',
        category: 'Income Tax',
        content: 'Personal Income Tax (PIT) and Corporate Income Tax (CIT) information. Understanding the differences between personal and corporate tax obligations.',
        keywords: ['pit', 'cit', 'personal income tax', 'corporate income tax', 'individual tax', 'company tax']
    },

    // PAYE Pages
    {
        id: 'paye-explanation',
        title: 'PAYE Explanation',
        path: '/paye-explanation',
        category: 'PAYE',
        content: 'Pay As You Earn (PAYE) tax system explanation. Understanding how PAYE works, employer responsibilities, and employee tax deductions.',
        keywords: ['paye', 'pay as you earn', 'payroll tax', 'employee tax', 'employer', 'salary tax', 'wage tax']
    },
    {
        id: 'paye-declaration',
        title: 'PAYE Declaration',
        path: '/paye-declaration',
        category: 'PAYE',
        content: 'PAYE declaration procedures and requirements. Learn how to file PAYE returns and comply with payroll tax obligations.',
        keywords: ['paye declaration', 'payroll declaration', 'paye return', 'payroll filing', 'employee returns']
    },

    // VAT Pages
    {
        id: 'vat-explanation',
        title: 'VAT Explanation',
        path: '/vat-explanation',
        category: 'VAT',
        content: 'Value Added Tax (VAT) comprehensive explanation. Understanding VAT rates, calculations, input/output tax, and compliance requirements.',
        keywords: ['vat', 'value added tax', 'sales tax', 'consumption tax', 'vat rates', 'input tax', 'output tax']
    },
    {
        id: 'vat-declaration',
        title: 'VAT Declaration',
        path: '/vat-declaration',
        category: 'VAT',
        content: 'VAT declaration procedures and filing requirements. Learn how to complete VAT returns and maintain proper VAT records.',
        keywords: ['vat declaration', 'vat return', 'vat filing', 'vat compliance', 'vat records']
    },
    {
        id: 'vat-reward',
        title: 'VAT Reward',
        path: '/vat-reward',
        category: 'VAT',
        content: 'VAT reward system and incentives for compliant taxpayers. Understanding VAT rewards and how to qualify for them.',
        keywords: ['vat reward', 'vat incentives', 'tax rewards', 'compliance rewards', 'vat benefits']
    },

    // Other Taxes Pages
    {
        id: 'excise-duty',
        title: 'Excise Duty',
        path: '/excise-duty',
        category: 'Other Taxes',
        content: 'Excise duty on specific goods and services. Understanding excise tax rates, applicable goods, and compliance requirements.',
        keywords: ['excise duty', 'excise tax', 'specific goods', 'luxury tax', 'sin tax', 'consumption tax']
    },
    {
        id: 'withholding-taxes',
        title: 'Withholding Taxes',
        path: '/withholding-taxes',
        category: 'Other Taxes',
        content: 'Withholding tax system and requirements. Learn about withholding tax rates, applicable payments, and compliance procedures.',
        keywords: ['withholding tax', 'tax withholding', 'deduction at source', 'withholding rates', 'payment withholding']
    },
    {
        id: 'gaming-taxes',
        title: 'Gaming Taxes',
        path: '/gaming-taxes',
        category: 'Other Taxes',
        content: 'Gaming and gambling tax obligations. Understanding tax requirements for gaming operators and related businesses.',
        keywords: ['gaming tax', 'gambling tax', 'casino tax', 'lottery tax', 'gaming operators']
    },
    {
        id: 'mining-royalty',
        title: 'Mining Royalty',
        path: '/mining-royalty-explanation',
        category: 'Other Taxes',
        content: 'Mining royalty system and mineral tax obligations. Understanding royalty rates and compliance requirements for mining operations.',
        keywords: ['mining royalty', 'mineral tax', 'mining tax', 'royalty rates', 'mining operations']
    },
    {
        id: 'capital-gains-tax',
        title: 'Capital Gains Tax',
        path: '/capital-gains-tax',
        category: 'Other Taxes',
        content: 'Capital gains tax on asset sales and investments. Understanding capital gains tax rates and applicable transactions.',
        keywords: ['capital gains', 'asset sales', 'investment tax', 'property sales', 'capital gains rate']
    },
    {
        id: 'road-maintenance',
        title: 'Road Maintenance Tax',
        path: '/road-maintenance-explanation',
        category: 'Other Taxes',
        content: 'Road maintenance tax and infrastructure funding. Understanding road tax obligations and payment procedures.',
        keywords: ['road maintenance', 'road tax', 'infrastructure tax', 'transport tax', 'road funding']
    },
    {
        id: 'tourism-tax',
        title: 'Tourism Tax',
        path: '/tourism-tax-explanation',
        category: 'Other Taxes',
        content: 'Tourism tax obligations and requirements. Understanding tourism-related tax compliance for hospitality businesses.',
        keywords: ['tourism tax', 'hospitality tax', 'hotel tax', 'tourism levy', 'accommodation tax']
    },

    // Local Government Taxes
    {
        id: 'local-government-taxes',
        title: 'Local Government Taxes',
        path: '/local-government-taxes-explanation',
        category: 'Local Government',
        content: 'Local government tax system and municipal tax obligations. Understanding district and municipal tax requirements.',
        keywords: ['local government tax', 'municipal tax', 'district tax', 'local taxes', 'municipal levy']
    },
    {
        id: 'immovable-property-tax',
        title: 'Immovable Property Tax',
        path: '/immovable-property-tax',
        category: 'Local Government',
        content: 'Property tax on immovable assets. Understanding property tax rates, assessments, and payment procedures.',
        keywords: ['property tax', 'immovable property', 'real estate tax', 'land tax', 'building tax']
    },
    {
        id: 'trading-license-tax',
        title: 'Trading License Tax',
        path: '/trading-license-tax',
        category: 'Local Government',
        content: 'Trading license tax and business permit requirements. Understanding local business licensing and tax obligations.',
        keywords: ['trading license', 'business license', 'permit tax', 'license fee', 'business permit']
    },
    {
        id: 'rental-income-tax',
        title: 'Rental Income Tax',
        path: '/rental-income-tax',
        category: 'Local Government',
        content: 'Tax on rental income from property. Understanding rental tax obligations and compliance requirements.',
        keywords: ['rental income', 'rental tax', 'property rental', 'rent tax', 'landlord tax']
    },

    // Customs Pages
    {
        id: 'eis-ebms',
        title: 'EIS/EBMs',
        path: '/eis-ebms',
        category: 'Customs',
        content: 'Electronic Invoicing System and Electronic Billing Machines. Understanding EIS requirements, EBM installation, and compliance procedures.',
        keywords: ['eis', 'ebm', 'electronic invoicing', 'billing machine', 'electronic billing', 'invoice system']
    },
    {
        id: 'paying-taxes',
        title: 'Paying Taxes',
        path: '/paying-taxes',
        category: 'Customs',
        content: 'Methods and procedures for paying taxes. Understanding payment options, deadlines, and compliance requirements.',
        keywords: ['paying taxes', 'tax payment', 'payment methods', 'payment deadlines', 'tax compliance']
    },
    {
        id: 'deregistration',
        title: 'Deregistration',
        path: '/deregistration',
        category: 'Customs',
        content: 'Tax deregistration procedures and requirements. Learn about when and how to deregister from tax obligations.',
        keywords: ['deregistration', 'tax deregistration', 'close business', 'stop trading', 'tax closure']
    }
];

// Search function
export const searchPages = (query) => {
    if (!query || query.trim().length < 2) {
        return [];
    }

    const searchTerm = query.toLowerCase().trim();
    const results = [];

    searchData.forEach(page => {
        let score = 0;
        const searchableText = `${page.title} ${page.content} ${page.keywords.join(' ')}`.toLowerCase();

        // Title matches get highest score
        if (page.title.toLowerCase().includes(searchTerm)) {
            score += 10;
        }

        // Content matches get medium score
        if (page.content.toLowerCase().includes(searchTerm)) {
            score += 5;
        }

        // Keyword matches get lower score
        if (page.keywords.some(keyword => keyword.includes(searchTerm))) {
            score += 3;
        }

        // Partial matches in content
        const words = searchTerm.split(' ');
        words.forEach(word => {
            if (word.length > 2 && searchableText.includes(word)) {
                score += 1;
            }
        });

        if (score > 0) {
            results.push({ ...page, score });
        }
    });

    // Sort by score (highest first) and then by title
    return results.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.title.localeCompare(b.title);
    });
};
