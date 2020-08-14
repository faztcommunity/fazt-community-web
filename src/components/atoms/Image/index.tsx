import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type ImageProps = {
  width?: string;
  height?: string;
  image?: string;
  variant?: 'round' | 'square';
};
const defaultImg = 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg';
const StyledImage = styled.div<ImageProps>`
  position: relative;
  margin: 1rem;
  background: url(${({ image }) => image || defaultImg}) center/cover no-repeat;
  background-color: #f66c42;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-radius: ${({ variant }) => (variant === 'round' ? '50%' : '8px')};
`;

const Image: React.FC<ImageProps> = ({ image, width, height, variant }) => (
  <StyledImage image={image} width={width} height={height} variant={variant} />
);

Image.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  variant: PropTypes.oneOf(['round', 'square'])
};

Image.defaultProps = {
  width: '100%',
  height: '100%',
  image: 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg',
  variant: 'square'
};

export default Image;
