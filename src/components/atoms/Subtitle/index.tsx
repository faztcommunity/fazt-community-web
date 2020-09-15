import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import { screen } from '@Styles/theme';

type SubtitleProps = {
  size?: 'sub1' | 'sub2' | 'sub3' | 'sub4' | 'sub5';
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  white?: boolean;
};

const StyledSubtitle = styled.h2<SubtitleProps>`
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-weight: 700;
  text-align: center;
  font-size: ${({ theme }) => theme.subtitle.sub3.fontSize};
  line-height: ${({ theme }) => theme.subtitle.sub3.lineHeight};
  color: ${({ theme, white }) => (white ? theme.color.white : theme.color.black)};

  ${screen('md')} {
    text-align: ${({ align }) => (align ? `${align}` : 'left')};
    font-size: ${({ theme, size }) => (size !== 'sub3' ? theme.subtitle.sub2.fontSize : null)};
    line-height: ${({ theme, size }) => (size !== 'sub3' ? theme.subtitle.sub2.lineHeight : null)};
  }

  ${screen('lg')} {
    font-size: ${({ theme, size }) => theme.subtitle[size || 'sub1'].fontSize};
    line-height: ${({ theme, size }) => theme.subtitle[size || 'sub1'].lineHeight};
  }
`;

const Subtitle: React.FC<SubtitleProps> = ({ children, size, as, white, align }) => (
  <StyledSubtitle as={as} size={size} white={white} align={align}>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = {
  size: PropTypes.oneOf(['sub1', 'sub2', 'sub3']),
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  white: PropTypes.bool
};

Subtitle.defaultProps = {
  size: 'sub1',
  as: 'h2',
  white: false,
  align: 'left'
};

export default Subtitle;
