import styled, { CreateStyled } from '@emotion/styled';

interface IColor {
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

interface IGray {
  900: string;
  800: string;
  600: string;
  500: string;
  300: string;
  100: string;
}

interface IPalette {
  primary: IColor;
  secondary: IColor;
  accent: IAccent;
  gray: IGray;
  white: string;
  black: string;
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
  color: IPalette;
  fontFamily: IFontFamily;
  button: IButton;
  title: ITitle;
  subtitle: ISubtitle;
  body: IBody;
};

export type MediaQuery = (bp: 'sm' | 'md' | 'lg' | 'xl') => string;

export default styled as CreateStyled<Theme>;
