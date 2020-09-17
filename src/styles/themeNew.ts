import { Theme } from './styledNew';
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
  mediaquery: ThemeMediaQuery
};

export default theme;
