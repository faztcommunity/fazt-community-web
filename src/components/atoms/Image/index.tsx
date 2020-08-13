import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type ImageProps = {
  width?: string;
  height?: string;
  image?: string;
  variant?: 'round' | 'square';
};

const StyledImage = styled.div<ImageProps>`
  position: relative;
  margin: 1rem;
  background: url(${({image})=>(image? image:"https://res.cloudinary.com/design-code-mx/image/upload/v1596589817/ReadMeFaztCommunity/logo_ztizcm.svg")}) center/cover no-repeat;;
  background-color: #f66c42;
  width: ${({width})=>(width? width:"100%")};
  height: ${({height})=>(height? height:"100%")};
  border-radius: ${({ variant }) => (variant === 'round' ? '50%' : '8px')};
`;

const Image: React.FC<ImageProps> = ({ image, width,height,variant }) => (
  <StyledImage image={image} width={width} height={height} variant={variant}/>
);

export default Image;
  