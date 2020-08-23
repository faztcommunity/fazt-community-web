import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type TitleProps = {
  size?: 'lg' | 'md' | 'sm' | 'xsm' | 'sub1' | 'sub2';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  white?: boolean;
  align?: 'center' | 'left' | 'right' | 'justify';
};

const getSizes = (size: TitleProps['size']) => {
  switch (size) {
    case 'lg':
      return { fontSize: '4rem', lineHeight: '80px' };
    case 'md':
      return { fontSize: '3.5rem', lineHeight: '65px' };
    case 'sm':
      return { fontSize: '3rem', lineHeight: '54px' };
    case 'xsm':
      return { fontSize: '1.125rem', lineHeight: '20px' };
    case 'sub1':
      return { fontSize: '2.5rem', lineHeight: '46px' };
    case 'sub2':
      return { fontSize: '2rem', lineHeight: '35px' };

    default:
      return { fontSize: '3.5rem', lineHeight: '65px' };
  }
};

const StyledTitle = styled.h1<TitleProps>`
  font-size: ${({ size }) => getSizes(size).fontSize};
  font-family: 'Open Sans';
  /* line-height: ${({ size }) => getSizes(size).lineHeight}; */
  font-weight: 700;
  text-align: ${({ align }) => (align ? `${align}` : 'left')};
  color: ${({ theme, white }) => (white ? theme.neutrale.gray[100] : theme.neutrale.gray[900])};
`;

const Title: React.FC<TitleProps> = ({ children, size, as, white, align }) => (
  <StyledTitle as={as} size={size} white={white} align={align}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xsm']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  white: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify'])
};

Title.defaultProps = {
  size: 'md',
  as: 'h1',
  white: false,
  align: 'left'
};

export default Title;
