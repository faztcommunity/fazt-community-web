import React, { useState } from 'react';
import Navlink from '@Atoms/NavLink';
import Button from '@Atoms/Button';
import styled from '@Styles/styled';
import Image from '@Atoms/Image';
import { screen } from '@Styles/theme';

const StyledNavigation = styled.nav`
  z-index: 2;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(120, 120, 120, 0.15);
  padding: 0rem 10.313rem;
  .toggle {
    font-size: 1.25rem;
    display: none;
    background: none;
    box-shadow: none;
    border: none;
    outline: none;
    font-size: 1.875rem;
  }
  ${screen('md')} {
    padding: 0rem 0.875rem;
    justify-content: space-between;
    .navlinks {
      display: none;
    }
    .toggle {
      display: block;
    }
  }
`;

const StyledSidebar = styled.aside`
  right: -75vw;
  &.active {
    right: 0;
  }
  z-index: 100;
  position: fixed;
  display: none;
  height: 100vh;
  width: 75vw;
  background-color: ${({ theme }) => theme.neutrale.gray[900]};

  ${screen('md')} {
    display: flex;
    .sidebarNavlinks {
      width: 100%;
      margin: 0rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: 0.4s all;
    }
    .sidebarNavlinks a,
    .sidebarNavlinks button {
      margin: 2.5rem 0rem 1.938rem 2.5rem;
    }
    .line {
      margin: 0rem;
      width: 100%;
      display: block;
      border: 1px solid #272727;
      margin: 2.5rem 0rem;
    }
  }
  transition: 0.4s all;
`;

const Styledleft = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Out = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
  color: white;
  position: absolute;
  font-size: 1.875rem;
  right: 32px;
  top: 16px;
  margin: 0rem !important;
`;
const Toggle = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
  font-size: 1.25rem;
  display: none;
  background: none;
  box-shadow: none;
  border: none;
  outline: none;
  font-size: 1.875rem;

  ${screen('md')} {
    display: block;
  }
`;

const Navigation: React.FC = () => {
  const [active, setactive] = useState(false);

  const handleActive = () => {
    setactive(!active);
  };

  return (
    <>
      <Styledleft>
        <StyledSidebar className={active ? 'active' : ''}>
          <div className="sidebarNavlinks">
            <Out onClick={handleActive}>&#9587;</Out>
            <Navlink text="Acerca" href="/acerca" onClick={handleActive} color="#ffffff" />
            <Navlink text="Proyectos" href="/proyectos" onClick={handleActive} color="#ffffff" />
            <Navlink text="Contribuidores" href="/contribuidores" onClick={handleActive} color="#ffffff" />
            <hr className="line" />
            <div>
              <Button text="Ingresar" variant="fill" color="secondary" size="md" onClick={handleActive} />
            </div>
            <Navlink text="Regístrate" href="/registrate" onClick={handleActive} color="#ffffff" />
          </div>
        </StyledSidebar>
      </Styledleft>
      <StyledNavigation>
        <Image image="/favicon.png" width="3.125rem" height="3.125rem" variant="round" />
        <Toggle onClick={handleActive}>&#9776;</Toggle>
        <div className="navlinks">
          <Navlink text="Acerca" href="/acerca" color="rgba(29, 29, 29, 0.38)" />
          <Navlink text="Proyectos" href="/proyectos" color="rgba(29, 29, 29, 0.38)" />
          <Navlink text="Contribuidores" href="/contribuidores" color="rgba(29, 29, 29, 0.38)" />
          <Button text="Ingresar" variant="outline" color="secondary" size="md" />
          <Navlink text="Regístrate" href="/registrate" color="rgba(29, 29, 29, 0.38)" />
        </div>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
