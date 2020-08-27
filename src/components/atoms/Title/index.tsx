import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import { screen } from '@Styles/theme';

type TitleProps = {
  size?: 'lg' | 'md' | 'sm';
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center' | 'right';
  white?: boolean;
};

const StyledTitle = styled.h1<TitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: 700;
  text-align: center;
  font-size: ${({ theme }) => theme.subtitle.sub1.fontSize};
  line-height: ${({ theme }) => theme.subtitle.sub1.lineHeight};
  color: ${({ theme, white }) => (white ? theme.neutrale.gray[100] : theme.neutrale.gray[900])};

  ${screen('md')} {
    text-align: ${({ align }) => (align ? `${align}` : 'left')};
    font-size: ${({ theme, size }) => (size !== 'sm' ? theme.title.md.fontSize : null)};
    line-height: ${({ theme, size }) => (size !== 'sm' ? theme.title.md.lineHeight : null)};
  }

  ${screen('lg')} {
    font-size: ${({ theme, size }) => theme.title[size || 'lg'].fontSize};
    line-height: ${({ theme, size }) => theme.title[size || 'lg'].lineHeight};
  }
`;

const Title: React.FC<TitleProps> = ({ children, size, as, white, align }) => (
  <StyledTitle as={as} size={size} white={white} align={align}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  white: PropTypes.bool
};

Title.defaultProps = {
  size: 'lg',
  as: 'h1',
  white: false,
  align: 'left'
};

export default Title;
