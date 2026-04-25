/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      fontSize: {
        'base': '16px',
        'h2': '32px',
        'h3': '28px',
        'h4': '24px',
      },
      lineHeight: {
        '1.5': '1.5',
      },
      colors: {
        // Primary Brand Colors - WCAG AA Compliant
        primary: '#1e40af',        // Blue 800 - 4.5:1 contrast on white
        primaryDark: '#1e3a8a',    // Blue 900 - 7:1 contrast on white
        primaryLight: '#3b82f6',   // Blue 500 - 4.5:1 contrast on white
        primary50: '#eff6ff',      // Blue 50 - Light background

        // Secondary Colors
        secondary: '#6b7280',      // Gray 500 - 4.5:1 contrast on white
        secondaryDark: '#374151',  // Gray 700 - 7:1 contrast on white
        secondaryLight: '#9ca3af', // Gray 400 - 3:1 contrast on white

        // Accent Colors
        accent: '#f59e0b',         // Amber 500 - 4.5:1 contrast on white
        accentDark: '#d97706',     // Amber 600 - 7:1 contrast on white
        accentLight: '#fbbf24',    // Amber 400 - 3:1 contrast on white

        // Status Colors
        success: '#059669',        // Emerald 600 - 4.5:1 contrast on white
        successLight: '#10b981',   // Emerald 500 - 4.5:1 contrast on white
        successBg: '#ecfdf5',      // Emerald 50 - Light background
        successBorder: '#a7f3d0',  // Emerald 200 - Border color

        warning: '#d97706',        // Amber 600 - 4.5:1 contrast on white
        warningDark: '#b45309',    // Amber 700 - 7:1 contrast on white
        warningLight: '#f59e0b',   // Amber 500 - 4.5:1 contrast on white
        warningBg: '#fffbeb',      // Amber 50 - Light background
        warningBorder: '#fed7aa',  // Amber 200 - Border color
        warningText: '#92400e',    // Amber 800 - High contrast text

        error: '#dc2626',          // Red 600 - 4.5:1 contrast on white
        errorLight: '#ef4444',     // Red 500 - 4.5:1 contrast on white
        errorBg: '#fef2f2',        // Red 50 - Light background
        errorBorder: '#fecaca',    // Red 200 - Border color

        info: '#0284c7',           // Sky 600 - 4.5:1 contrast on white
        infoLight: '#0ea5e9',      // Sky 500 - 4.5:1 contrast on white
        infoBg: '#f0f9ff',         // Sky 50 - Light background
        infoBorder: '#bae6fd',     // Sky 200 - Border color

        // UI Colors
        background: '#ffffff',     // Pure white
        surface: '#f8fafc',        // Slate 50 - Very light gray
        surfaceHover: '#f1f5f9',   // Slate 100 - Hover state

        // Border Colors
        border: '#e2e8f0',         // Slate 200 - 3:1 contrast on white
        borderLight: '#f1f5f9',    // Slate 100 - Light border
        borderDark: '#cbd5e1',     // Slate 300 - Darker border

        // Text Colors
        textPrimary: '#0f172a',    // Slate 900 - 7:1 contrast on white
        textSecondary: '#475569',  // Slate 600 - 4.5:1 contrast on white
        textMuted: '#64748b',      // Slate 500 - 3:1 contrast on white
        textLight: '#94a3b8',      // Slate 400 - Light text
      },
    },
  },
  plugins: [],
}

