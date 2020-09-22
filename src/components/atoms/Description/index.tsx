import React from 'react';
import styled from '@Styles/styled';

type DescriptionProps = {
  size?: 'SBody' | 'MBody' | 'LBody' | 'XLBody';
  align?: 'left' | 'forceLeft' | 'center' | 'right';
  white?: boolean;
};

export const StyledDescription = styled.p<DescriptionProps>`
  font-family: ${({ theme }) => theme.texts.fontFamily.Roboto};
  text-align: ${({ align }) => (align === 'forceLeft' ? 'left' : 'center')};
  font-size: ${({ theme, size }) => theme.texts.size[size || 'MBody'].FontSize};
  line-height: ${({ theme, size }) => theme.texts.size[size || 'MBody'].LineHeight};
  color: ${({ theme, white }) => (white ? theme.colors.white : theme.colors.gray[500])};
`;

const Description: React.FC<DescriptionProps> = ({ children, size, align, white }) => (
  <StyledDescription size={size} align={align} white={white}>
    {children}
  </StyledDescription>
);

export default Description;
