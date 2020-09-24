/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from '@Styles/styled';
import Link from 'next/link';

type ButtonProps = {
  text?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary';
  colorvariant?: 'base' | 'light' | 'dark';
  size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs';
  shadow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  href?: string;
  linkTo?: string;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, variant, color }) =>
    variant !== 'outline' ? theme.colors.themes[0][color || 'primary'].base : 'transparent'};
  ${({ theme, colorvariant, color }) =>
    colorvariant === 'dark' ? `background-color: ${theme.colors.themes[0][color || 'primary'].dark}` : ''};
  font-family: ${({ theme }) => theme.texts.fontFamily.Roboto};
  font-size: ${({ theme }) => theme.texts.size.Button.FontSize};
  font-style: normal;
  font-weight: 500;
  line-height: ${({ theme }) => theme.texts.size.Button.LineHeight};
  color: ${({ theme, variant, color }) =>
    variant !== 'outline' ? theme.colors.white : theme.colors.themes[0][color || 'primary'].light};
  padding: ${({ theme, size }) =>
    size ? `${theme.spaces[size]} ${theme.spaces.m} ` : `${theme.spaces.m} ${theme.spaces.m}`};
  ${({ theme, variant, color }) =>
    variant !== 'outline'
      ? `border: 0px solid`
      : `border: 1px solid ${theme.colors.themes[0][color || 'primary'].base}`};
  outline: none;
  border-radius: ${({ theme }) => theme.borders};
  ${({ theme, variant, color, colorvariant }) =>
    variant !== 'outline' && colorvariant !== 'dark'
      ? `box-shadow: inset 0px 0px 0px rgba(0, 0, 0, 0), 0px 7px 15px ${
          theme.colors.themes[0][color || 'primary'].base
        }66`
      : ''};
  :active {
    ${({ theme, variant, color, colorvariant }) =>
      variant !== 'outline' && colorvariant !== 'dark'
        ? `box-shadow: inset 0px 8px 3px rgba(29, 29, 29, 0.5), 0px 7px 15px ${
            theme.colors.themes[0][color || 'primary'].base
          }66`
        : `box-shadow: inset 0px 8px 3px rgba(29, 29, 29, 0.5), 0px 0px 0px rgba(0, 0, 0, 0)`};
    background-color: ${({ theme, variant, color, colorvariant }) =>
      variant === 'outline' && colorvariant !== 'dark'
        ? theme.colors.themes[0][color || 'primary'].base
        : ''};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme, variant, color }) =>
      variant !== 'outline'
        ? `border: 0px solid`
        : `border: 1px solid ${theme.colors.themes[0][color || 'primary'].base}`};
  }
  :hover {
    background-color: ${({ theme, variant, color }) =>
      variant === 'outline' ? theme.colors.themes[0][color || 'primary'].base : ''};
    color: ${({ theme }) => theme.colors.white};
    ${({ theme, variant, color }) =>
      variant !== 'outline'
        ? `border: 0px solid`
        : `border: 1px solid ${theme.colors.themes[0][color || 'primary'].base}`};
  }
  span {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Button: React.FC<ButtonProps> = ({
  color,
  variant,
  text,
  size,
  shadow,
  onClick,
  href,
  colorvariant,
  linkTo
}) => {
  if (linkTo) {
    return (
      <a href={linkTo}>
        <StyledButton
          colorvariant={colorvariant}
          color={color}
          variant={variant}
          size={size}
          shadow={shadow}
          onClick={onClick}
        >
          <span>{text}</span>
        </StyledButton>
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href}>
        <StyledButton
          colorvariant={colorvariant}
          color={color}
          variant={variant}
          size={size}
          shadow={shadow}
          onClick={onClick}
        >
          <span>{text}</span>
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton
      colorvariant={colorvariant}
      color={color}
      variant={variant}
      size={size}
      shadow={shadow}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
