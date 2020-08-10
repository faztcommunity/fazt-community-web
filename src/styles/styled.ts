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

export type Theme = {
  light: IPalette & {
    background: string;
  };
  normal: IPalette;
  dark: DarkPalette;
};

export default styled as CreateStyled<Theme>;
