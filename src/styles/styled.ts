import styled, { CreateStyled } from '@emotion/styled';

interface IColor {
  primary: string;
  secondary: string;
}

interface IAccent {
  info: string;
  success: string;
  active: string;
}

interface IPalette {
  color: IColor;
  accent: IAccent;
}

interface DarkPalette {
  background: string;
  color: {
    secondary: string;
  };
}

interface NeutralePalette {
  gray: {
    900: string;
    800: string;
    600: string;
    500: string;
    300: string;
    100: string;
  };
}

type ButtonProps = {
  fontSize: string;
  padding: string;
};

type TextProps = {
  fontSize: string;
  lineHeight: string;
};

interface IFontFamily {
  title: string;
  body: string;
}

interface IButton {
  lg: ButtonProps;
  rl: ButtonProps;
  md: ButtonProps;
  sm: ButtonProps;
  xs: ButtonProps;
  lineHeight: number;
  borderRadius: string;
}

interface ITitle {
  lg: TextProps;
  md: TextProps;
  sm: TextProps;
}

interface ISubtitle {
  sub1: TextProps;
  sub2: TextProps;
  sub3: TextProps;
  sub4: TextProps;
}

interface IBody {
  xl: TextProps;
  lg: TextProps;
  md: TextProps;
  sm: TextProps;
}

export type Theme = {
  light: IPalette & {
    background: string;
  };
  normal: IPalette;
  dark: DarkPalette;
  neutrale: NeutralePalette;
  fontFamily: IFontFamily;
  button: IButton;
  title: ITitle;
  subtitle: ISubtitle;
  body: IBody;
};

export type MediaQuery = (bp: 'sm' | 'md' | 'lg' | 'xl') => string;

export default styled as CreateStyled<Theme>;
