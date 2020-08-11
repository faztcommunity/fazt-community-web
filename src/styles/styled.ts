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

export type Theme = {
  light: IPalette & {
    background: string;
  };
  normal: IPalette;
  dark: DarkPalette;
  neutrale: NeutralePalette;
};

export default styled as CreateStyled<Theme>;
