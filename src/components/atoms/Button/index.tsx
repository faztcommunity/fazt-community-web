/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import Link from 'next/link';

type ButtonProps = {
  text?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'rl' | 'lg';
  shadow?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  href?: string;
};

const StyledButton = styled.button<ButtonProps>`

  position: relative;

  background-color: ${({ theme, variant, color }) =>
    variant !== 'outline' ? theme.color[color || 'primary'].dark : 'transparent'};
  color: ${({ theme, variant }) => (variant === 'fill' ? theme.color.white : theme.color.secondary.light)};

  margin: 1rem;
  padding: ${({ theme, size }) => theme.button[size || 'rl'].padding};

  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme, size }) => theme.button[size || 'rl'].fontSize};
  font-weight: bold;
  line-height: ${({ theme }) => theme.button.lineHeight};

  border-radius: 8px;
  border: 1px solid
    ${({ theme, variant, color }) =>
      variant === 'fill' ? theme.color[color || 'primary'].dark : theme.color[color || 'primary'].light};

  box-shadow: ${(
    { theme, variant, color, shadow } // #color + 80 = color with 50% opacity
  ) =>
    !shadow
      ? 'none'
      : color && variant !== 'outline'
      ? color === 'primary'
        ? `0px 10px 15px ${theme.color.primary.dark}80`
        : `0px 10px 15px ${theme.color.secondary.dark}80`
      : 'transparent'};

  cursor: pointer;
  outline: none;

  transition: all 0.3s ease-out;

  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: ${({ theme, variant, color }) =>
      variant === 'outline'
        ? color === 'primary'
          ? `${theme.color.primary.light}`
          : `${theme.color.secondary.light}`
        : color === 'primary'
        ? `${theme.color.primary.light}`
        : `${theme.color.secondary.light}`};

    color: ${({ theme, variant }) => (variant === 'outline' ? theme.color.white : null)};

    box-shadow: ${(
      { theme, variant, color, shadow } // #color + 80 = color with 50% opacity
    ) =>
      !shadow
        ? 'none'
        : color && variant
        ? color === 'primary'
          ? `0px 10px 15px ${theme.color.primary.light}80`
          : `0px 10px 15px ${theme.color.secondary.light}80`
        : 'transparent'};
  }

  &::after {
    display: block;
    position: absolute;

    right: 0;
    top: 0;
    left: 0;
    bottom: 0;

    border-radius: 8px;
    box-shadow: inset 0px 6px 3px
      ${({ theme, color }) => (color === 'primary' ? theme.color.primary.dark : theme.color.secondary.dark)};

    opacity: 0;

    transition: opacity 0.2s ease-in-out;
  }

  &:active:after {
    opacity: 1;
  }

  &:active {
    box-shadow: unset;
  }
`;

const Button: React.FC<ButtonProps> = ({ color, variant, text, size, shadow, onClick, href }) => {
  if (href) {
    return (
      <Link href={href}>
        <StyledButton color={color} variant={variant} size={size} shadow={shadow} onClick={onClick}>
          {text}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton color={color} variant={variant} size={size} shadow={shadow} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['fill', 'outline']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'rl', 'lg']),
  shadow: PropTypes.bool
};

Button.defaultProps = {
  text: 'some text',
  color: 'primary',
  variant: 'fill',
  size: 'rl',
  shadow: true
};

export default Button;
