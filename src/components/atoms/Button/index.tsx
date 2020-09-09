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
  background-color: ${({ theme, variant, color }) =>
    variant !== 'outline' ? theme.color[color || 'primary'].dark : 'transparent'};
  border-radius: 8px;
  border: 1px solid
    ${({ theme, variant, color }) =>
      variant === 'fill' ? theme.color[color || 'primary'].dark : theme.color[color || 'primary'].light};
  box-shadow: ${({ variant, shadow }) =>
    shadow && variant !== 'outline' ? '0px 5px 15px rgba(255, 41, 95, 0.5)' : 'none'};
  color: ${({ theme, variant }) => (variant === 'fill' ? theme.color.white : theme.color.secondary.light)};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme, size }) => theme.button[size || 'rl'].fontSize};
  font-weight: bold;
  line-height: ${({ theme }) => theme.button.lineHeight};
  margin: 1rem;
  outline: none;
  padding: ${({ theme, size }) => theme.button[size || 'rl'].padding};
  position: relative;
  transition: all 0.3s ease-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: ${({ theme, color }) =>
      color === 'primary' ? theme.color.primary.light : theme.color.secondary.light};
    border: 1px solid
      ${({ theme, color }) => (color === 'primary' ? theme.color.primary.light : theme.color.secondary.light)};
    color: ${({ theme }) => theme.color.white};
  }

  &::after {
    border-radius: 8px;
    bottom: 0;
    box-shadow: inset 0px 6px 3px
      ${({ theme, color }) => (color === 'primary' ? theme.color.primary.dark : theme.color.secondary.dark)};
    display: block;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
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
