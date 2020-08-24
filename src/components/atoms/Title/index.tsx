import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type TitleProps = {
  size?: 'lg' | 'md' | 'sm' | 'xs' | 'sub1' | 'sub2';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  white?: boolean;
};

const StyledTitle = styled.h1<TitleProps>`
  font-family: 'Open Sans';
  font-weight: 700;
  text-align: ${({ align }) => (align ? `${align}` : 'left')};
  font-size: ${({ theme, size }) => theme.title[size || 'md'].fontSize};
  line-height: ${({ theme, size }) => theme.title[size || 'md'].lineHeight};
  color: ${({ theme, white }) => (white ? theme.neutrale.gray[100] : theme.neutrale.gray[900])};
`;

const Title: React.FC<TitleProps> = ({ children, size, as, white, align }) => (
  <StyledTitle as={as} size={size} white={white} align={align}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs', 'sub1', 'sub2']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  white: PropTypes.bool
};

Title.defaultProps = {
  size: 'md',
  as: 'h1',
  white: false,
  align: 'left'
};

export default Title;
