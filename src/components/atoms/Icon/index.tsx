import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

type IconProps = {
  size?: 'sm' | 'rl';
  icon?: 'api' | 'bot' | 'database' | 'discord' | 'github' | 'web';
};

const IconWrapper = styled.div<IconProps>`
  display: inline-block;
  width: ${({ size }) => (size === 'sm' ? '24px' : '32px')};
  height: ${({ size }) => (size === 'sm' ? '24px' : '32px')};

  svg {
    width: ${({ size }) => (size === 'sm' ? '24px' : '32px')};
    height: ${({ size }) => (size === 'sm' ? '24px' : '32px')};
  }
`;

const Icon: React.FC<IconProps> = ({ icon, size }) => {
  const DynamicIcon = dynamic(() =>
    import(`@Assets/icons/${icon}.svg`).catch(() => {
      return false;
    })
  );

  if (DynamicIcon) {
    return (
      <IconWrapper icon={icon} size={size}>
        <DynamicIcon />
      </IconWrapper>
    );
  }

  return null;
};

Icon.propTypes = {
  icon: PropTypes.oneOf(['api', 'web', 'bot', 'discord', 'github', 'database']),
  size: PropTypes.oneOf(['sm', 'rl'])
};

Icon.defaultProps = {
  size: 'rl',
  icon: 'web'
};

export default Icon;
