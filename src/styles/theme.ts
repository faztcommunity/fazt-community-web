import { Theme } from './styled';

const theme: Theme = {
  light: {
    color: {
      primary: '#ff295f',
      secondary: '#37a6f6'
    },
    accent: {
      active: '#FD8E3E',
      success: '#04ab5b',
      info: '#4468E7'
    },
    background: '#FAFAFA'
  },
  normal: {
    color: {
      primary: '#EC0B2B',
      secondary: '#2c9beb'
    },
    accent: {
      active: '#f66c42',
      success: '#04ab5b',
      info: '#4468e7'
    }
  },
  dark: {
    color: {
      secondary: '#0776c6'
    },
    background: '#262626'
  }
};

export default theme;
