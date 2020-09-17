import styled, { CreateStyled } from '@emotion/styled';

interface IPrimary {
  base: string;
  light: string;
}
interface ISecondary {
  base: string;
  dark: string;
  light: string;
}
interface IAccent {
  active: string;
  activeLight: string;
  success: string;
  successLight: string;
  info: string;
}

interface ITheme {
  primary: IPrimary;
  secondary: ISecondary;
  accent: IAccent;
}

interface IGray {
  900: string;
  800: string;
  600: string;
  500: string;
  300: string;
  100: string;
}

interface IColors {
  themes: ITheme[];
  gray: IGray;
  white: string;
  black: string;
}

interface IFontFamily {
  OpenSans: string;
  Roboto: string;
}
interface ISizeTextProperties {
  FontSize: string;
  LineHeight: string;
}
interface ISizeText {
  LTitle: ISizeTextProperties;
  MTitle: ISizeTextProperties;
  STitle: ISizeTextProperties;
  Sub1: ISizeTextProperties;
  Sub2: ISizeTextProperties;
  Sub3: ISizeTextProperties;
  Sub4: ISizeTextProperties;
  XLBody: ISizeTextProperties;
  LBody: ISizeTextProperties;
  MBody: ISizeTextProperties;
  SBody: ISizeTextProperties;
  Button: ISizeTextProperties;
  Overlay: ISizeTextProperties;
}

interface IText {
  fontFamily: IFontFamily;
  size: ISizeText;
}

interface IShadows {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
  level6: string;
}

interface ISpace {
  xxlSpace: string;
  xlSpace: string;
  lSpace: string;
  mdSpace: string;
  Space: string;
  smSpace: string;
}

interface IZindex {
  zBack: string;
  zNormal: string;
  zTooltip: string;
  zFixed: string;
  zModal: string;
}

interface IMediaQuery {
  small: string;
  medium: string;
  large: string;
  extralarge: string;
}

export type Theme = {
  colors: IColors;
  texts: IText;
  shadows: IShadows;
  spaces: ISpace;
  borders: string;
  zindex: IZindex;
  mediaquery: IMediaQuery;
};

export default styled as CreateStyled<Theme>;
