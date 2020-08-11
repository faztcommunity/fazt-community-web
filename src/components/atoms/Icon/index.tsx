import React, { useEffect, useRef, useState } from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

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
  const importedIconRef = useRef<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getIcon = async () => {
      try {
        const { default: SVG } = await import(`@Assets/icons/${icon}.svg`);
        importedIconRef.current = SVG;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    getIcon();
  }, []);

  if (!loading && importedIconRef.current) {
    const { current: IconComponent } = importedIconRef;
    return (
      <IconWrapper icon={icon} size={size}>
        <IconComponent />
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
