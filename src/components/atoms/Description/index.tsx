import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';

type DescriptionProps = {
  size?: 'xl' | 'lg' | 'md';
  align?: 'left' | 'forceLeft' | 'center' | 'right';
  white?: boolean;
};

export const StyledDescription = styled.p<DescriptionProps>`
  font-family: ${({ theme }) => theme.texts.fontFamily.Roboto};
  text-align: ${({ align }) => (align === 'forceLeft' ? 'left' : 'center')};
  font-size: ${({ theme, size }) =>
    size === 'md' ? theme.texts.size.MBody.FontSize : theme.texts.size.LBody.FontSize};
  line-height: ${({ theme, size }) =>
    size === 'md' ? theme.texts.size.MBody.LineHeight : theme.texts.size.LBody.LineHeight};
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: ${({ theme, white }) => (white ? theme.colors.white : theme.colors.gray[500])};

  ${({ theme }) => theme.mediaquery.medium} {
    text-align: ${({ align }) => (align ? `${align}` : 'left')};
  }
  ${({ theme }) => theme.mediaquery.large} {
    font-size: ${({ theme }) => theme.texts.size.XLBody.FontSize};
    line-height: ${({ theme }) => theme.texts.size.XLBody.LineHeight};
  }
`;

const Description: React.FC<DescriptionProps> = ({ children, size, align, white }) => (
  <StyledDescription size={size} align={align} white={white}>
    {children}
  </StyledDescription>
);

Description.propTypes = {
  size: PropTypes.oneOf(['xl', 'lg', 'md']),
  align: PropTypes.oneOf(['left', 'forceLeft', 'center', 'right']),
  white: PropTypes.bool
};

Description.defaultProps = {
  size: 'xl',
  align: 'left',
  white: false
};

export default Description;
