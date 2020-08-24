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
  xs: TextProps;
  sub1: TextProps;
  sub2: TextProps;
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
  button: IButton;
  title: ITitle;
  body: IBody;
};

export default styled as CreateStyled<Theme>;
