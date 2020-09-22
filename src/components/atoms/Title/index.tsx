import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type TitleProps = {
  size?: 'LTitle' | 'MTitle' | 'STitle';
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
  white?: boolean;
};

const StyledTitle = styled.h1<TitleProps>`
  font-family: ${({ theme }) => theme.texts.fontFamily.OpenSans};
  font-weight: 700;
  text-align: center;
  width: max-content;
  font-size: ${({ theme, size }) => theme.texts.size[size || 'LTitle'].FontSize};
  line-height: ${({ theme, size }) => theme.texts.size[size || 'LTitle'].LineHeight};
  color: ${({ theme, white }) => (white ? theme.colors.white : theme.colors.black)};
`;

const Title: React.FC<TitleProps> = ({ children, size, as, white, align }) => (
  <StyledTitle as={as} size={size} white={white} align={align}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  white: PropTypes.bool
};

Title.defaultProps = {
  as: 'h1',
  white: false,
  align: 'left'
};

export default Title;
