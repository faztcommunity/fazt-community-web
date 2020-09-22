import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type SubtitleProps = {
  size?: 'Sub1' | 'Sub2' | 'Sub3' | 'Sub4';
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  white?: boolean;
};

const StyledSubtitle = styled.h2<SubtitleProps>`
  font-family: ${({ theme }) => theme.texts.fontFamily.OpenSans};
  font-weight: 700;
  text-align: center;
  font-size: ${({ theme, size }) => theme.texts.size[size || 'Sub1'].FontSize};
  line-height: ${({ theme, size }) => theme.texts.size[size || 'Sub1'].LineHeight};
  color: ${({ theme, white }) => (white ? theme.colors.white : theme.colors.black)};
`;

const Subtitle: React.FC<SubtitleProps> = ({ children, size, as, white, align }) => (
  <StyledSubtitle as={as} size={size} white={white} align={align}>
    {children}
  </StyledSubtitle>
);

Subtitle.propTypes = {
  size: PropTypes.oneOf(['Sub1', 'Sub2', 'Sub3', 'Sub4']),
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  white: PropTypes.bool
};

Subtitle.defaultProps = {
  size: 'Sub1',
  as: 'h2',
  white: false,
  align: 'left'
};

export default Subtitle;
