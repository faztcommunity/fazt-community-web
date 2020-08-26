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
};

const StyledNavlink = styled.a<NavlinkProps>`
  font-family: ${({ theme }) => theme.fontFamily.body};
  margin: 1rem;
  font-size: 1rem;
  line-height: 21px;
  text-decoration: none;
  color: ${({ theme, router, href, color }) =>
    router?.pathname === href ? theme.normal.color.secondary : color} !important;
`;

const Navlink: React.FC<NavlinkProps> = ({ text, href, onClick, color }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <StyledNavlink href={href} router={router} onClick={onClick} color={color}>
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
