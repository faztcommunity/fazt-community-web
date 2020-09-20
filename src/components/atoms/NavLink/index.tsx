import React from 'react';
import styled from '@Styles/styled';
import { useRouter, NextRouter } from 'next/router';
import Link from 'next/link';

type NavlinkProps = {
  text?: string;
  href: string;
  router?: NextRouter;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  color?: string;
  id?: string;
};

const StyledNavlink = styled.a<NavlinkProps>`
  font-family: ${({ theme }) => theme.texts.fontFamily.Roboto};
  margin: 1rem;
  font-size: ${({ theme }) => theme.texts.size.MBody.FontSize};
  line-height: ${({ theme }) => theme.texts.size.MBody.LineHeight};
  text-decoration: none;
  color: ${({ theme, router, href, color }) =>
    router?.pathname === href ? theme.colors.themes[0].secondary.dark : color} !important;
  -webkit-tap-highlight-color: transparent;
`;

const Navlink: React.FC<NavlinkProps> = ({ text, href, onClick, color, id }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <StyledNavlink id={id} href={href} router={router} onClick={onClick} color={color}>
        {text}
      </StyledNavlink>
    </Link>
  );
};

Navlink.defaultProps = {
  text: 'Navlink',
  href: '/',
  color: 'rgba(29, 29, 29, 0.38)'
};

export default Navlink;
