import React from 'react';
import styled from '@Styles/styled';

const DEFAULT_IMG = 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg';

type ImageProps = {
  size?: string;
  image?: string;
  variant?: 'round' | 'square';
  alt?: string;
  href?: string;
};

export const StyledImage = styled.img<ImageProps>`
  position: relative;
  margin: 1rem;
  background: url(${({ image }) => image || DEFAULT_IMG}) center/cover no-repeat;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  width: ${({ size }) => size || '100%'};
  height: ${({ size }) => size || '100%'};
  border-radius: ${({ variant }) => (variant === 'round' ? '50%' : '8px')};
  z-index: ${({ theme }) => theme.zindex.zNormal};
  cursor: pointer;
`;

const Image: React.FC<ImageProps> = ({ alt, image, size, variant, href }) => (
  <a href={href}>
    <StyledImage href={href} alt={alt} src={image} size={size} variant={variant} />
  </a>
);

export default Image;
