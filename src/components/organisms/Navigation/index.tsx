import React, { useState } from 'react';
import Navlink from '@Atoms/NavLink';
import Button from '@Atoms/Button';
import styled from '@Styles/styled';
import Image from '@Atoms/Image';
import { screen, index } from '@Styles/theme';

const StyledNavigation = styled.nav`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px rgba(120, 120, 120, 0.15);
  display: flex;
  height: 90px;
  justify-content: space-between;
  padding: 0rem 0.875rem;
  position: fixed;
  width: 100vw;
  ${index(40)}

  .toggle {
    font-size: 1.25rem;
    display: block;
    background: none;
    box-shadow: none;
    border: none;
    outline: none;
    font-size: 1.875rem;
  }

  .navlinks {
    display: none;
  }

  ${screen('lg')} {
    justify-content: space-evenly;

    .navlinks {
      display: block;
    }

    .toggle {
      display: none;
    }
  }
`;

const StyledSidebar = styled.aside`
  background-color: ${({ theme }) => theme.neutrale.gray[900]};
  display: flex;
  height: 100vh;
  position: fixed;
  right: -75vw;
  transition: 0.4s all;
  width: 75vw;
  ${index(50)}

  &.active {
    right: 0;
  }

  .sidebarNavlinks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem;
    transition: 0.4s all;
    width: 100%;
  }

  .sidebarNavlinks a,
  .sidebarNavlinks button {
    margin: 0.5rem 0rem 1.938rem 2.5rem;
  }

  .line {
    border: 1px solid #272727;
    display: block;
    margin: 0rem;
    margin: 2.5rem 0rem;
    width: 100%;
  }

  ${screen('sm')} {
    width: 50vw;
  }

  ${screen('lg')} {
    display: none;
  }
`;

const Styledleft = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Out = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1.25rem;
  margin: 0rem !important;
  outline: none;
  position: absolute;
  right: 32px;
  top: 32px;
`;

const Toggle = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  display: block;
  font-size: 1.875rem;
  outline: none;
  padding-right: 35px;

  ${screen('lg')} {
    display: none;
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
              <Button
                text="Ingresar"
                variant="fill"
                color="secondary"
                size="md"
                shadow={false}
                onClick={handleActive}
              />
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
          <Button text="Ingresar" variant="outline" color="secondary" size="md" shadow={false} />
          <Navlink text="Regístrate" href="/registrate" color="rgba(29, 29, 29, 0.38)" />
        </div>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
