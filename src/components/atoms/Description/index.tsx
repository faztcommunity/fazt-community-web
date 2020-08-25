import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import { screen } from '@Styles/theme';

type DescriptionProps = {
  size?: 'xl' | 'lg' | 'md';
  align?: 'left' | 'forceLeft' | 'center' | 'right';
  white?: boolean;
};

export const StyledDescription = styled.p<DescriptionProps>`
  font-family: 'Roboto';
  text-align: ${({ align }) => (align === 'forceLeft' ? 'left' : 'center')};
  font-size: ${({ theme, size }) => (size === 'md' ? theme.body.md.fontSize : theme.body.lg.fontSize)};
  line-height: ${({ theme, size }) => (size === 'md' ? theme.body.md.lineHeight : theme.body.lg.lineHeight)};
  color: ${({ theme, white }) => (white ? '#FFF' : theme.neutrale.gray[600])};

  ${screen('sm')} {
    text-align: ${({ align }) => (align ? `${align}` : 'left')};
  }

  ${screen('lg')} {
    font-size: ${({ theme, size }) => theme.body[size || 'xl'].fontSize};
    line-height: ${({ theme, size }) => theme.body[size || 'xl'].lineHeight};
  }
`;

const Description: React.FC<DescriptionProps> = ({ children, size, align, white }) => (
  <StyledDescription size={size} align={align} white={white}>
    {children}
  </StyledDescription>
);

Description.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md']),
  align: PropTypes.oneOf(['left', 'forceLeft', 'center', 'right']),
  white: PropTypes.bool
};

Description.defaultProps = {
  size: 'xl',
  align: 'left',
  white: false
};

export default Description;
