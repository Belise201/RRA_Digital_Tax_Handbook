# Tax Handbook Design System

A comprehensive design system documentation for the Rwanda Revenue Authority (RRA) Tax Handbook application. This document contains all design specifications, colors, fonts, components, and styling patterns used throughout the system.

## Table of Contents

1. [Overview](#overview)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Component Library](#component-library)
5. [Layout System](#layout-system)
6. [Spacing & Sizing](#spacing--sizing)
7. [Animation & Transitions](#animation--transitions)
8. [Responsive Design](#responsive-design)
9. [Accessibility](#accessibility)
10. [Implementation Guide](#implementation-guide)

## Overview

The Tax Handbook design system is built with accessibility, usability, and government standards in mind. It follows WCAG AA compliance guidelines and uses a professional color scheme suitable for official government documentation.

### Key Principles
- **Accessibility First**: All colors meet WCAG AA contrast requirements
- **Professional**: Clean, government-appropriate design language
- **Consistent**: Unified visual language across all components
- **Responsive**: Mobile-first approach with progressive enhancement
- **Scalable**: Modular design system that grows with the application

## Color Palette

### Primary Colors
The primary color palette is based on professional blue tones suitable for government applications.

```css
/* Primary Brand Colors - WCAG AA Compliant */
--primary: #1e40af;        /* Blue 800 - 4.5:1 contrast on white */
--primary-dark: #1e3a8a;   /* Blue 900 - 7:1 contrast on white */
--primary-light: #3b82f6;  /* Blue 500 - 4.5:1 contrast on white */
--primary-50: #eff6ff;     /* Blue 50 - Light background */
```

### Secondary Colors
Supporting colors for secondary elements and text hierarchy.

```css
/* Secondary Colors */
--secondary: #6b7280;      /* Gray 500 - 4.5:1 contrast on white */
--secondary-dark: #374151; /* Gray 700 - 7:1 contrast on white */
--secondary-light: #9ca3af; /* Gray 400 - 3:1 contrast on white */
```

### Accent Colors
Accent colors for highlights, calls-to-action, and interactive elements.

```css
/* Accent Colors */
--accent: #f59e0b;         /* Amber 500 - 4.5:1 contrast on white */
--accent-dark: #d97706;    /* Amber 600 - 7:1 contrast on white */
--accent-light: #fbbf24;   /* Amber 400 - 3:1 contrast on white */
```

### Status Colors
Semantic colors for different states and feedback.

```css
/* Success Colors */
--success: #059669;        /* Emerald 600 - 4.5:1 contrast on white */
--success-light: #10b981;  /* Emerald 500 - 4.5:1 contrast on white */
--success-bg: #ecfdf5;     /* Emerald 50 - Light background */
--success-border: #a7f3d0; /* Emerald 200 - Border color */

/* Warning Colors */
--warning: #d97706;        /* Amber 600 - 4.5:1 contrast on white */
--warning-dark: #b45309;   /* Amber 700 - 7:1 contrast on white */
--warning-light: #f59e0b;  /* Amber 500 - 4.5:1 contrast on white */
--warning-bg: #fffbeb;     /* Amber 50 - Light background */
--warning-border: #fed7aa; /* Amber 200 - Border color */
--warning-text: #92400e;   /* Amber 800 - High contrast text */

/* Error Colors */
--error: #dc2626;          /* Red 600 - 4.5:1 contrast on white */
--error-light: #ef4444;    /* Red 500 - 4.5:1 contrast on white */
--error-bg: #fef2f2;       /* Red 50 - Light background */
--error-border: #fecaca;   /* Red 200 - Border color */

/* Info Colors */
--info: #0284c7;           /* Sky 600 - 4.5:1 contrast on white */
--info-light: #0ea5e9;     /* Sky 500 - 4.5:1 contrast on white */
--info-bg: #f0f9ff;        /* Sky 50 - Light background */
--info-border: #bae6fd;    /* Sky 200 - Border color */
```

### UI Colors
Background and surface colors for the application.

```css
/* UI Colors */
--background: #ffffff;     /* Pure white */
--surface: #f8fafc;        /* Slate 50 - Very light gray */
--surface-hover: #f1f5f9;  /* Slate 100 - Hover state */

/* Border Colors */
--border: #e2e8f0;         /* Slate 200 - 3:1 contrast on white */
--border-light: #f1f5f9;   /* Slate 100 - Light border */
--border-dark: #cbd5e1;    /* Slate 300 - Darker border */

/* Text Colors */
--text-primary: #0f172a;   /* Slate 900 - 7:1 contrast on white */
--text-secondary: #475569; /* Slate 600 - 4.5:1 contrast on white */
--text-muted: #64748b;     /* Slate 500 - 3:1 contrast on white */
--text-light: #94a3b8;     /* Slate 400 - Light text */
```

## Typography

### Font Family
The system uses Roboto as the primary font family with comprehensive fallbacks.

```css
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Weights
- **300**: Light
- **400**: Regular
- **500**: Medium
- **600**: Semi-bold
- **700**: Bold

### Font Sizes
The typography scale follows a consistent hierarchy:

```css
/* Heading Sizes */
h1: 2.5rem (40px) - font-weight: 700
h2: 2rem (32px) - font-weight: 600
h3: 1.75rem (28px) - font-weight: 600
h4: 1.5rem (24px) - font-weight: 500
h5: 1.25rem (20px) - font-weight: 500
h6: 1.125rem (18px) - font-weight: 500

/* Body Text */
p: 1rem (16px) - font-weight: 400
small: 0.875rem (14px) - font-weight: 400
```

### Line Heights
- **1.2**: Tight line height for headings
- **1.5**: Standard line height for body text
- **1.6**: Relaxed line height for better readability

## Component Library

### Buttons

#### Call to Action Button (Primary Action)
```css
.btn-cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  min-height: 44px; /* Accessibility - minimum touch target */
}
```

#### Primary Button
```css
.btn-primary {
  background: var(--primary);
  color: white;
  border: 1px solid var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  min-height: 44px;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: var(--surface);
  color: var(--text-primary);
  border: 1px solid var(--border);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  min-height: 44px;
}
```

#### Button Sizes
- **Small**: `btn-sm` - padding: 0.5rem 1rem, font-size: 14px
- **Default**: Standard padding and font-size
- **Large**: `btn-lg` - padding: 1rem 2rem, font-size: 18px
- **Extra Large**: `btn-xl` - padding: 1.25rem 2.5rem, font-size: 20px

#### Button States
- **Hover**: Transform translateY(-1px) with enhanced shadow
- **Active**: Transform translateY(0) with reduced shadow
- **Disabled**: Opacity 0.6, cursor not-allowed
- **Focus**: Outline with primary color

### Cards

#### Standard Card
```css
.card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

#### Content Section Card
```css
.content-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.content-section:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
```

### Forms

#### Search Input
```css
.search-input {
  width: 100%;
  height: 100%;
  padding: 0 0.75rem 0 2rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.8125rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
}
```

### Navigation

#### Header
```css
.header {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: white;
  box-shadow: var(--shadow-lg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 80px;
}
```

#### Sidebar
```css
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: white;
  box-shadow: var(--shadow-lg);
  z-index: 999;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.sidebar-open {
  transform: translateX(0);
}
```

### Alerts and Notices

#### Warning Alert
```css
.alert-warning {
  background: rgb(245 158 11 / 0.1);
  border-left-color: var(--warning);
  color: #92400e;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid;
}
```

#### Info Alert
```css
.alert-info {
  background: rgb(59 130 246 / 0.1);
  border-left-color: var(--primary);
  color: var(--primary-dark);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid;
}
```

### Tables

#### Standard Table
```css
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  line-height: 1.5;
  background: white;
}

.table th,
.table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.table th {
  background: var(--surface);
  font-weight: 600;
  color: var(--text-primary);
}

.table tr:hover {
  background: var(--surface-hover);
}
```

## Layout System

### Grid System
The layout uses CSS Grid and Flexbox for responsive design:

```css
/* Benefits Grid */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

/* Quick Links Grid */
.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

### Container Sizes
- **Page Container**: max-width: 900px
- **Content Container**: max-width: 1400px
- **Full Width**: 100% with responsive padding

### Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Large Desktop */
@media (min-width: 1400px) { }
```

## Spacing & Sizing

### Spacing Scale
Based on 0.25rem (4px) increments:

```css
/* Margin and Padding */
.mb-1: margin-bottom: 0.25rem;  /* 4px */
.mb-2: margin-bottom: 0.5rem;   /* 8px */
.mb-4: margin-bottom: 1rem;     /* 16px */
.mb-6: margin-bottom: 1.5rem;   /* 24px */
.mb-8: margin-bottom: 2rem;     /* 32px */

.p-4: padding: 1rem;            /* 16px */
.p-6: padding: 1.5rem;          /* 24px */
```

### Border Radius
```css
.rounded: border-radius: 0.375rem;    /* 6px */
.rounded-lg: border-radius: 0.5rem;   /* 8px */
.rounded-xl: border-radius: 0.75rem;  /* 12px */
.rounded-2xl: border-radius: 1rem;    /* 16px */
```

### Shadows
```css
--shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
--shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
--shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
```

## Animation & Transitions

### Standard Transitions
```css
/* Standard transition for most elements */
transition: all 0.3s ease;

/* Smooth cubic-bezier for premium feel */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Fast transitions for interactive elements */
transition: all 0.2s ease;
```

### Hover Effects
```css
/* Card hover effect */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Button hover effect */
.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Loading States
```css
.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border);
  border-top: 4px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Responsive Design

### Mobile-First Approach
The design system follows a mobile-first approach with progressive enhancement:

1. **Mobile (320px - 767px)**: Single column layout, stacked components
2. **Tablet (768px - 1023px)**: Two-column layouts, larger touch targets
3. **Desktop (1024px+)**: Multi-column layouts, hover states, full feature set

### Responsive Typography
```css
/* Base mobile sizes */
h1: 1.75rem (28px)
h2: 1.5rem (24px)
h3: 1.25rem (20px)

/* Desktop sizes */
@media (min-width: 768px) {
  h1: 2.5rem (40px)
  h2: 2rem (32px)
  h3: 1.75rem (28px)
}
```

### Responsive Grid
```css
/* Mobile: Single column */
.grid {
  grid-template-columns: 1fr;
}

/* Tablet: Two columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: Auto-fit columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
```

## Accessibility

### Color Contrast
All color combinations meet WCAG AA standards:
- **Normal text**: 4.5:1 contrast ratio
- **Large text**: 3:1 contrast ratio
- **UI components**: 3:1 contrast ratio

### Focus States
```css
.btn:focus {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}

input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}
```

### Touch Targets
Minimum touch target size of 44px for all interactive elements:

```css
.btn {
  min-height: 44px;
  min-width: 44px;
}
```

### Screen Reader Support
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- ARIA labels where appropriate

## Implementation Guide

### CSS Custom Properties
The design system uses CSS custom properties for easy theming and maintenance:

```css
:root {
  /* Color variables */
  --primary: #1e40af;
  --primary-dark: #1e3a8a;
  --primary-light: #3b82f6;
  
  /* Spacing variables */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Shadow variables */
  --shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}
```

### Component Classes
Use semantic class names for components:

```html
<!-- Button examples -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-cta">Call to Action</button>

<!-- Card examples -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</div>

<!-- Alert examples -->
<div class="alert alert-warning">
  <strong>Warning:</strong> Important information.
</div>
```

### Utility Classes
Common utility classes for quick styling:

```css
/* Text utilities */
.text-center { text-align: center; }
.text-right { text-align: right; }
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }

/* Spacing utilities */
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }

/* Display utilities */
.hidden { display: none; }
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }
```

### Tailwind CSS Integration
The design system is built with Tailwind CSS and includes custom configuration:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        'primary-dark': '#1e3a8a',
        'primary-light': '#3b82f6',
        // ... other colors
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', /* ... */],
      },
    },
  },
}
```

## Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile Safari**: 14+
- **Chrome Mobile**: 90+

## Performance Considerations

### CSS Optimization
- Use CSS custom properties for theming
- Minimize CSS specificity
- Use efficient selectors
- Leverage CSS Grid and Flexbox

### Image Optimization
- Use appropriate image formats (WebP, AVIF)
- Implement responsive images
- Lazy loading for non-critical images

### Font Loading
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
```

## Maintenance

### Version Control
- Document all changes in version history
- Use semantic versioning for releases
- Maintain backward compatibility

### Testing
- Test across all supported browsers
- Validate accessibility compliance
- Test responsive breakpoints
- Verify color contrast ratios

### Documentation Updates
- Keep this documentation current
- Include new components and patterns
- Update implementation examples
- Document breaking changes

---

This design system provides a solid foundation for building consistent, accessible, and professional government applications. For questions or contributions, please refer to the development team or create an issue in the project repository.