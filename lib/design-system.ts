// Design System - Colors, Typography, Spacing

export const colors = {
  primary: '#262622',
  secondary: '#545454',
  background: {
    beige: '#F2EDE7',
    white: '#FFFFFF',
    dark: '#1a1a1a',
  },
  text: {
    primary: '#262622',
    secondary: '#545454',
    white: '#FFFFFF',
  },
} as const;

export const typography = {
  fontFamily: {
    inter: 'var(--font-inter)',
    bricolage: 'var(--font-bricolage)',
    crimson: 'var(--font-crimson)',
  },
  fontSize: {
    xs: '11px',
    sm: '13px',
    base: '14px',
    md: '18px',
    lg: '24px',
    xl: '32px',
    '2xl': '40px',
    '3xl': '64px',
  },
  lineHeight: {
    none: '1',
    tight: '30.8px',
    normal: '38px',
    relaxed: '44px',
    loose: '64px',
  },
} as const;

export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '80px',
} as const;

export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
} as const;
