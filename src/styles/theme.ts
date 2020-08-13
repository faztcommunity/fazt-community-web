import { Theme } from './styled';

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
  }
};

export default theme;
