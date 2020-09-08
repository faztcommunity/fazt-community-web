import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import theme from '@Styles/theme';

type IconProps = {
  size?: 'sm' | 'rl';
  icon?: string;
  dark?: boolean;
};

const getColor = (toggle?: boolean) => (toggle ? theme.color.gray[800] : 'white');

const IconWrapper = styled.div<IconProps>`
  display: inline-block;
  width: ${({ size }) => (size === 'sm' ? '24px' : '32px')};
  height: ${({ size }) => (size === 'sm' ? '24px' : '32px')};

  svg {
    width: ${({ size }) => (size === 'sm' ? '24px' : '32px')};
    height: ${({ size }) => (size === 'sm' ? '24px' : '32px')};
    color: ${({ dark }) => getColor(dark)};
    fill: currentColor;
  }
`;

const Icon: React.FC<IconProps> = ({ icon, size, dark }) => {
  const DynamicIcon = dynamic(() =>
    import(`@Assets/icons/${icon}.svg`).catch(() => {
      return false;
    })
  );

  if (DynamicIcon) {
    return (
      <IconWrapper icon={icon} size={size} dark={dark}>
        <DynamicIcon />
      </IconWrapper>
    );
  }

  return null;
};

Icon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'rl']),
  dark: PropTypes.bool
};

Icon.defaultProps = {
  size: 'rl',
  icon: 'web',
  dark: false
};

export default Icon;
