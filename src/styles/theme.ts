import { Theme } from './styled';
import ThemeColors from './themes/themeColors';
import ThemeText from './themes/themeTexts';
import ThemeShadows from './themes/themeShadows';
import ThemeSpaces from './themes/themeSpaces';
import ThemeZindex from './themes/themeZIndex';
import ThemeMediaQuery from './themes/themeMediaQuery';

const theme: Theme = {
  colors: ThemeColors,
  texts: ThemeText,
  shadows: ThemeShadows,
  spaces: ThemeSpaces,
  borders: '8px',
  zindex: ThemeZindex,
  mediaquery: ThemeMediaQuery,
  breakpoints: {
    xs: 480,
    s: 768,
    m: 1024,
    l: 1280,
    xl: 1440,
    xxl: 1920
  },
  spacings: {
    xs: 12,
    s: 12,
    m: 34,
    l: 34,
    xl: 155,
    xxl: 125
  }
};

export default theme;
