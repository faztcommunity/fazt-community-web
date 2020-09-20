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
  font-size: ${({ theme }) => theme.texts.size.STitle.FontSize};
  line-height: ${({ theme }) => theme.texts.size.STitle.LineHeight};
  color: ${({ theme, white }) => (white ? theme.colors.white : theme.colors.black)};

  ${({ theme }) => theme.mediaquery.medium} {
    text-align: ${({ align }) => (align ? `${align}` : 'left')};
    font-size: ${({ theme, size }) => (size !== 'STitle' ? theme.texts.size.MTitle.FontSize : null)};
    line-height: ${({ theme, size }) => (size !== 'STitle' ? theme.texts.size.MTitle.LineHeight : null)};
  }

  ${({ theme }) => theme.mediaquery.large} {
    font-size: ${({ theme, size }) => theme.texts.size[size || 'LTitle'].FontSize};
    line-height: ${({ theme, size }) => theme.texts.size[size || 'LTitle'].LineHeight};
  }
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
