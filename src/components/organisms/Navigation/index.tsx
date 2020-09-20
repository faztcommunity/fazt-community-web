import React, { useEffect, useState } from 'react';
import Navlink from '@Atoms/NavLink';
import Button from '@Atoms/Button';
import styled from '@Styles/styled';
import { GridRow, GridColumn } from 'emotion-flex-grid';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

const StyledNavigation = styled.nav`
  background-color: #ffffff;
  display: flex;
  box-shadow: 0px 1px 2px rgba(120, 120, 120, 0.15);
  position: fixed;
  top: 0;
  height: 90px;
  width: 100%;
  z-index: ${({ theme }) => theme.zindex.zFixed};
`;

const ImgLogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;
const ImgLogo = styled.img`
  display: flex;
  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
`;
const NavLinkContainer = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  ${({ theme }) => theme.mediaquery.large} {
    display: flex;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  ${({ theme }) => theme.mediaquery.large} {
    display: flex;
  }
`;
const Toggle = styled.button`
  display: flex;
  background: none;
  border: none;
  box-shadow: none;
  font-size: 1.875rem;
  outline: none;
  align-self: center;
  justify-self: flex-end;
  cursor: pointer;
  ${({ theme }) => theme.mediaquery.large} {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.gray[900]};
  height: 100%;
  width: 278px;
  ${({ theme }) => theme.mediaquery.large} {
    display: none;
  }
  z-index: ${({ theme }) => theme.zindex.zModal};
`;
const StyledNavigationToggleContainer = styled.div`
  display: flex;
  height: 90px;
  width: 100%;
`;
const ToggleClose = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.875rem;
  outline: none;
  cursor: pointer;
`;
const SidebarOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  height: calc(100% - 90px);
`;
const SidebarOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 120px;
  a {
    margin: ${({ theme }) => `15px ${theme.spaces.xxl}`};
  }
  hr {
    border: 1px solid ${({ theme }) => theme.colors.gray[800]};
    margin: 15px 0px;
  }
  button {
    margin: ${({ theme }) => `15px ${theme.spaces.xxl}`};
    width: max-content;
  }
`;

const Navigation: React.FC = () => {
  const router = useRouter();
  const [active, setactive] = useState(false);
  const [user, setUser] = useState(null);

  const handleActive = () => {
    setactive(!active);
  };

  const logout = () => {
    localStorage.removeItem('Token');
    router.reload();
  };

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('Token');
      const result = await axios
        .get('https://api.faztcommunity.dev/users/get_details', {
          headers: { Authorization: `Bearer ${token}` }
        })
        .catch(() => null);
      setUser(result?.data);
    };
    getData();
  }, []);

  return (
    <>
      {active ? (
        <SidebarContainer>
          <StyledNavigationToggleContainer>
            <GridColumn align="center" mx={['xs', 's', 'm', 'l', 'xl', 'xxl']}>
              <ButtonContainer>
                <ToggleClose onClick={handleActive}>&#9587;</ToggleClose>
              </ButtonContainer>
            </GridColumn>
          </StyledNavigationToggleContainer>
          <SidebarOptions>
            <SidebarOptionsContainer>
              <Navlink text="Acerca" href="/#ref1" onClick={handleActive} color="#ffffff" />
              <Navlink text="Proyectos" href="/#ref2" onClick={handleActive} color="#ffffff" />
              <Navlink text="Contribuidores" href="/#ref3" onClick={handleActive} color="#ffffff" />
              <hr />
              {user ? (
                <Button
                  text="Log Out"
                  onClick={logout}
                  variant="fill"
                  colorvariant="dark"
                  shadow={false}
                  color="secondary"
                  size="s"
                />
              ) : (
                <>
                  <Button
                    text="Iniciar sesión"
                    href="/signin"
                    variant="fill"
                    colorvariant="dark"
                    shadow={false}
                    color="secondary"
                    size="s"
                  />
                  <Navlink text="Regístrate" href="/registrate" onClick={handleActive} color="#ffffff" />
                </>
              )}
            </SidebarOptionsContainer>
          </SidebarOptions>
        </SidebarContainer>
      ) : null}
      <StyledNavigation>
        <GridColumn align="center" mx={['xs', 's', 'm', 'l', 'xl', 'xxl']}>
          <GridRow>
            <GridColumn width={[12, 2, 2]}>
              <ImgLogoContainer>
                <Link href="/" scroll>
                  <ImgLogo src="/favicon.png" alt="Home" />
                </Link>
              </ImgLogoContainer>
            </GridColumn>
            <GridColumn width={[12, 10, 10]}>
              <NavLinkContainer>
                <Navlink text="Acerca" href="/#ref1" color="rgba(29, 29, 29, 0.38)" />
                <Navlink text="Proyectos" href="/#ref2" color="rgba(29, 29, 29, 0.38)" />
                <Navlink text="Contribuidores" href="/#ref3" color="rgba(29, 29, 29, 0.38)" />
                {user ? (
                  <Button onClick={logout} text="Log Out" variant="outline" color="secondary" size="s" />
                ) : (
                  <>
                    <Button text="Ingresar" href="/signin" variant="outline" color="secondary" size="s" />
                    <Navlink text="Regístrate" href="/signup" color="rgba(29, 29, 29, 0.38)" />
                  </>
                )}
              </NavLinkContainer>
              <ButtonContainer>
                <Toggle onClick={handleActive}>&#9776;</Toggle>
              </ButtonContainer>
            </GridColumn>
          </GridRow>
        </GridColumn>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
