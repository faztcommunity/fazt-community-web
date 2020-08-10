import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type ButtonProps = {
  text?: string;
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'secondary';
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl';
};

const getSizes = (size: ButtonProps['size']) => {
  switch (size) {
    case 'xsm':
      return { padding: '1rem 0.5rem', fontSize: '0.875rem' };
    case 'sm':
      return { padding: '0.5rem', fontSize: '0.875rem' };
    case 'md':
      return { padding: '0.5rem', fontSize: '1rem' };
    case 'lg':
      return { padding: '1rem', fontSize: '1.125rem' };
    case 'xl':
      return { padding: '1.5rem', fontSize: '1.125rem' };
    default:
      return { padding: '0.5rem', fontSize: '0.875rem' };
  }
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme, variant, color }) =>
    color && variant !== 'outline' ? theme.light.color[color] : 'transparent'};
  padding: ${({ size }) => getSizes(size).padding};
  font-size: ${({ size }) => getSizes(size).fontSize};
  border-radius: 8px;
  line-height: 1.5;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  transition: all 0.3s ease-out;
  border: 1px solid ${({ theme, color }) => color && theme.light.color[color]};
  margin: 1rem;
  outline: none;
  box-shadow: ${({ variant }) => variant !== 'outline' && '0px 10px 15px rgba(44, 155, 235, 0.5)'};
  color: ${({ theme, color, variant }) =>
    variant !== 'fill' && color ? theme.light.color[color] : theme.light.background};

  &:hover {
    background-color: ${({ theme, variant, color = 'primary' }) =>
      variant !== 'outline' ? theme.normal.color[color] : theme.light.color[color]};
    color: ${({ variant, theme }) => variant === 'outline' && theme.light.background};
    box-shadow: 0px 10px 15px rgba(44, 155, 235, 0.5);
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

const Button: React.SFC<ButtonProps> = ({ color, variant, text, size }) => (
  <StyledButton size={size} color={color} variant={variant}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(['fill', 'outline']),
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['xsm', 'sm', 'md', 'lg', 'xl'])
};

Button.defaultProps = {
  text: 'some text',
  color: 'primary',
  variant: 'fill',
  size: 'md'
};

export default Button;
