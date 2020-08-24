import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type DescriptionProps = {
  size?: 'md' | 'lg' | 'xl';
  align?: 'left' | 'center' | 'right';
  white?: boolean;
};

export const StyledDescription = styled.p<DescriptionProps>`
  font-family: 'Roboto';
  text-align: ${({ align }) => (align ? `${align}` : 'left')};
  font-size: ${({ theme, size }) => theme.body[size || 'md'].fontSize};
  line-height: ${({ theme, size }) => theme.body[size || 'md'].lineHeight};
  color: ${({ theme, white }) => (white ? '#FFF' : theme.neutrale.gray[600])};
`;

const Description: React.FC<DescriptionProps> = ({ children, size, align, white }) => (
  <StyledDescription size={size} align={align} white={white}>
    {children}
  </StyledDescription>
);

Description.propTypes = {
  size: PropTypes.oneOf(['md', 'lg', 'xl']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  white: PropTypes.bool
};

Description.defaultProps = {
  size: 'md',
  align: 'left',
  white: false
};

export default Description;
