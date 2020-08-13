import React from 'react';
import styled from '@Styles/styled';
import { useRouter, NextRouter } from 'next/router';
import Link from 'next/link';

type NavlinkProps = {
  text?: string;
  href: string;
  router?: NextRouter;
};

const StyledNavlink = styled.a<NavlinkProps>`
  font-family: Roboto;
  margin: 1rem;
  font-size: 1rem;
  line-height: 21px;
  text-decoration: none;
  color: ${({ theme, router, href }) =>
    router?.pathname === href ? theme.normal.color.secondary : 'rgba(29, 29, 29, 0.38)'};
`;

const Navlink: React.FC<NavlinkProps> = ({ text, href }) => {
  const router = useRouter() || { pathname: '/' };

  return (
    <Link href={href}>
      <StyledNavlink href={href} router={router}>
        {text}
      </StyledNavlink>
    </Link>
  );
};

Navlink.defaultProps = {
  text: 'Navlink',
  href: '/'
};

export default Navlink;
