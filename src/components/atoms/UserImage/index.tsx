import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type UserImageProps = {

  size?: 'xsm' | 'sm' | 'md' | 'rl' | 'lg';
  side?: 'left' | 'right';
  variant?: 'round' | 'square';
};

const getSizes = (size: UserImageProps['size']) => {
  switch (size) {

    case 'sm':
      return { width: '200px', fontSize: '0.875rem' };
    case 'lg':
      return { width: '400px', fontSize: '0.875rem' };
    default:
      return { width: '200px', fontSize: '0.875rem' };
  }
};

const StyledUserImage = styled.img<UserImageProps>`
  border-radius: ${({ variant }) => (variant === 'round' ? '50%' : '0px')};
  object-fit:cover;
  width: ${({ size }) => (size === 'sm' ? '400px' : '200px')};
  height: ${({ size }) => (size === 'sm' ? '400px' : '200px')};
`;


export default StyledUserImage;
