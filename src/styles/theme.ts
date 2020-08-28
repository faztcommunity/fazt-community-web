import { Theme, MediaQuery } from './styled';

const breakpoint = { sm: 576, md: 768, lg: 992, xl: 1200 };

const theme: Theme = {
  light: {
    color: {
      primary: '#FF295F',
      secondary: '#37A6F6'
    },
    accent: {
      active: '#FD8E3E',
      success: '#04AB5B',
      info: '#4468E7'
    },
    background: '#FAFAFA'
  },
  normal: {
    color: {
      primary: '#EC0B2B',
      secondary: '#2C9BEB'
    },
    accent: {
      active: '#F66C42',
      success: '#04AB5B',
      info: '#4468E7'
    }
  },
  dark: {
    color: {
      secondary: '#0776c6'
    },
    background: '#262626'
  },
  neutrale: {
    gray: {
      900: '#1D1D1D',
      800: '#272727',
      600: '#787878',
      500: '#909090',
      300: '#D9D9D9',
      100: '#FAFAFA'
    }
  },
  fontFamily: {
    title:
      "'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
    body: "'Roboto', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  button: {
    lg: {
      fontSize: '1.125rem',
      padding: '1.5rem'
    },
    rl: {
      fontSize: '1.125rem',
      padding: '1rem'
    },
    md: {
      fontSize: '1rem',
      padding: '0.5rem 1.5rem'
    },
    sm: {
      fontSize: '0.875rem',
      padding: '1rem 0.5rem'
    },
    xs: {
      fontSize: '0.875rem',
      padding: '0.5rem'
    },
    lineHeight: 1.5,
    borderRadius: '8px'
  },
  title: {
    lg: {
      fontSize: '4rem',
      lineHeight: '80px'
    },
    md: {
      fontSize: '3.5rem',
      lineHeight: '65px'
    },
    sm: {
      fontSize: '3rem',
      lineHeight: '54px'
    }
  },
  subtitle: {
    sub1: {
      fontSize: '2.5rem',
      lineHeight: '46px'
    },
    sub2: {
      fontSize: '2rem',
      lineHeight: '35px'
    },
    sub3: {
      fontSize: '1.5rem',
      lineHeight: '30px'
    },
    sub4: {
      fontSize: '1rem',
      lineHeight: '21px'
    }
  },
  body: {
    xl: {
      fontSize: '1.5rem',
      lineHeight: '35px'
    },
    lg: {
      fontSize: '1.125rem',
      lineHeight: '24px'
    },
    md: {
      fontSize: '1rem',
      lineHeight: '21px'
    },
    sm: {
      fontSize: '0.8125rem',
      lineHeight: '18px'
    }
  }
};

export const index = (num: 0 | 10 | 20 | 30 | 40 | 50) => `z-index: ${num};`;

export const screen: MediaQuery = (bp) => `@media screen and (min-width: ${breakpoint[bp]}px)`;

export default theme;
