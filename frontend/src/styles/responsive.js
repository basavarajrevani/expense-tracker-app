// Responsive breakpoints and utilities for consistent design across the app

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
  largeDesktop: '1440px'
};

// Media query helpers
export const device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
  largeDesktop: `(max-width: ${breakpoints.largeDesktop})`,
  
  // Min-width queries for mobile-first approach
  mobileUp: `(min-width: ${breakpoints.mobile})`,
  tabletUp: `(min-width: ${breakpoints.tablet})`,
  laptopUp: `(min-width: ${breakpoints.laptop})`,
  desktopUp: `(min-width: ${breakpoints.desktop})`,
  
  // Specific ranges
  mobileOnly: `(max-width: ${breakpoints.tablet})`,
  tabletOnly: `(min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop})`,
  laptopOnly: `(min-width: ${breakpoints.laptop}) and (max-width: ${breakpoints.desktop})`,
  
  // Touch devices
  touch: '(hover: none) and (pointer: coarse)',
  hover: '(hover: hover) and (pointer: fine)'
};

// Responsive spacing scale
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
  
  // Responsive spacing functions
  responsive: {
    xs: 'clamp(0.25rem, 1vw, 0.5rem)',
    sm: 'clamp(0.5rem, 2vw, 1rem)',
    md: 'clamp(1rem, 3vw, 1.5rem)',
    lg: 'clamp(1.5rem, 4vw, 2rem)',
    xl: 'clamp(2rem, 5vw, 3rem)',
    xxl: 'clamp(3rem, 6vw, 4rem)'
  }
};

// Responsive typography scale
export const typography = {
  fontSize: {
    xs: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    sm: 'clamp(0.875rem, 2vw, 1rem)',
    base: 'clamp(1rem, 2.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 3vw, 1.25rem)',
    xl: 'clamp(1.25rem, 3.5vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 4vw, 2rem)',
    '3xl': 'clamp(2rem, 5vw, 2.5rem)',
    '4xl': 'clamp(2.5rem, 6vw, 3rem)'
  },
  
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75'
  }
};

// Common responsive mixins
export const responsiveMixins = {
  // Container with responsive padding
  container: `
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${spacing.md};
    
    @media ${device.tablet} {
      padding: 0 ${spacing.sm};
    }
    
    @media ${device.mobile} {
      padding: 0 ${spacing.xs};
    }
  `,
  
  // Responsive grid
  grid: (columns = 'repeat(auto-fit, minmax(300px, 1fr))', gap = spacing.lg) => `
    display: grid;
    grid-template-columns: ${columns};
    gap: ${gap};
    
    @media ${device.tablet} {
      grid-template-columns: 1fr;
      gap: ${spacing.md};
    }
  `,
  
  // Responsive flex
  flex: (direction = 'row', gap = spacing.md) => `
    display: flex;
    flex-direction: ${direction};
    gap: ${gap};
    
    @media ${device.tablet} {
      flex-direction: column;
      gap: ${spacing.sm};
    }
  `,
  
  // Touch-friendly interactive elements
  touchTarget: `
    min-height: 44px;
    min-width: 44px;
    
    @media ${device.touch} {
      min-height: 48px;
      min-width: 48px;
    }
  `,
  
  // Responsive card
  card: `
    background: white;
    border-radius: 20px;
    padding: ${spacing.xl};
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    
    @media ${device.tablet} {
      padding: ${spacing.lg};
      border-radius: 15px;
    }
    
    @media ${device.mobile} {
      padding: ${spacing.md};
      border-radius: 12px;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    }
  `,
  
  // Responsive button
  button: `
    padding: 0.8rem 1.6rem;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    
    @media ${device.tablet} {
      padding: 0.7rem 1.4rem;
      border-radius: 25px;
    }
    
    @media ${device.mobile} {
      padding: 0.6rem 1.2rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    &:active {
      transform: translateY(0);
    }
  `,
  
  // Responsive form input
  input: `
    width: 100%;
    padding: 0.8rem 1rem;
    border: 2px solid #fff;
    border-radius: 8px;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    transition: all 0.3s ease;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    
    @media ${device.tablet} {
      padding: 0.7rem 0.9rem;
      border-radius: 6px;
    }
    
    @media ${device.mobile} {
      padding: 0.6rem 0.8rem;
      border-radius: 5px;
      font-size: 0.9rem;
    }
    
    &:focus {
      outline: none;
      border-color: var(--color-green);
      box-shadow: 0px 1px 15px rgba(66, 173, 0, 0.2);
    }
    
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  `
};

// Responsive visibility utilities
export const visibility = {
  hideOnMobile: `
    @media ${device.mobile} {
      display: none !important;
    }
  `,
  
  hideOnTablet: `
    @media ${device.tablet} {
      display: none !important;
    }
  `,
  
  showOnMobileOnly: `
    display: none;
    
    @media ${device.mobile} {
      display: block !important;
    }
  `,
  
  showOnTabletOnly: `
    display: none;
    
    @media ${device.tabletOnly} {
      display: block !important;
    }
  `
};

// Animation utilities for responsive design
export const animations = {
  fadeIn: `
    opacity: 0;
    animation: fadeIn 0.3s ease forwards;
    
    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `,
  
  slideUp: `
    transform: translateY(20px);
    opacity: 0;
    animation: slideUp 0.4s ease forwards;
    
    @keyframes slideUp {
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  
  scaleIn: `
    transform: scale(0.9);
    opacity: 0;
    animation: scaleIn 0.3s ease forwards;
    
    @keyframes scaleIn {
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `
};

export default {
  breakpoints,
  device,
  spacing,
  typography,
  responsiveMixins,
  visibility,
  animations
};
