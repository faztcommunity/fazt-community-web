import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type ButtonProps = {
  text?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'rl' | 'lg';
  onClick?: any;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, variant, color }) =>
    color && variant !== 'outline' ? theme.light.color[color] : 'transparent'};
  padding: ${({ theme, size }) => theme.button[size || 'rl'].padding};
  font-size: ${({ theme, size }) => theme.button[size || 'rl'].fontSize};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  line-height: ${({ theme }) => theme.button.lineHeight};
  cursor: pointer;
  position: relative;
  font-weight: bold;
  transition: all 0.3s ease-out;
  border: 1px solid ${({ theme, color }) => color && theme.light.color[color]};
  margin: 1rem;
  outline: none;
  box-shadow: ${(
    { theme, variant, color } // #color + 80 = color with 50% opacity
  ) => (color && variant !== 'outline' ? `0px 10px 15px ${theme.light.color[color]}80` : 'transparent')};
  color: ${({ theme, color, variant }) =>
    variant !== 'fill' && color ? theme.light.color[color] : theme.light.background};

  &:hover {
    background-color: ${({ theme, variant, color = 'primary' }) =>
      variant !== 'outline' ? theme.normal.color[color] : theme.light.color[color]};
    color: ${({ variant, theme }) => variant === 'outline' && theme.light.background};
    box-shadow: ${(
      { theme, variant, color } // #color + 80 = color with 50% opacity
    ) => (color && variant ? `0px 10px 15px ${theme.light.color[color]}80` : 'transparent')};
  }

  &::after {
    content: '';
    left: 0;
    top: 0;
    display: block;
    right: 0;
    bottom: 0;
    width: 100%;
    border-radius: 8px;
    box-shadow: inset 0px 6px 3px rgba(15, 79, 125, 0.5);
    position: absolute;
    transition: opacity 0.2s ease-in-out;
    opacity: 0;
  }

  &:active:after {
    opacity: 1;
  }

  :active {
    box-shadow: unset;
  }
`;

const Button: React.FC<ButtonProps> = ({ color, variant, text, size, onClick }) => (
  <StyledButton size={size} color={color} variant={variant} onClick={onClick}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['fill', 'outline']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'rl', 'lg'])
};

Button.defaultProps = {
  text: 'some text',
  color: 'primary',
  variant: 'fill',
  size: 'rl'
};

export default Button;
