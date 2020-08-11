import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type DescriptionProps = {
  size?: 'md' | 'lg' | 'xl';
  center?: boolean;
  white?: boolean;
};

const getSize = (size: DescriptionProps['size']) => {
  switch (size) {
    case 'md':
      return { fontSize: '1rem', lineHeight: '21px' };
    case 'lg':
      return { fontSize: '1.125rem', lineHeight: '24px' };
    default:
      return { fontSize: '1.5rem', lineHeight: '35px' };
  }
};

const StyledDescription = styled.p<DescriptionProps>`
  color: ${({ theme, white }) => (white ? '#FFF' : theme.neutrale.gray[600])};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-family: 'Roboto';
  font-size: ${({ size }) => getSize(size).fontSize};
  line-height: ${({ size }) => getSize(size).lineHeight};
  margin: 1rem;
`;

const Description: React.FC<DescriptionProps> = ({ children, size, center, white }) => (
  <StyledDescription size={size} center={center} white={white}>
    {children}
  </StyledDescription>
);

Description.propTypes = {
  size: PropTypes.oneOf(['md', 'lg', 'xl']),
  center: PropTypes.bool,
  white: PropTypes.bool
};

Description.defaultProps = {
  size: 'xl',
  center: false,
  white: false
};

export default Description;
