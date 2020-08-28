import React from 'react';
import styled from '@Styles/styled';
import CardGroupProjects from '@Organisms/CardGroupProjects';
import Title from '@Atoms/Title';
import Description from '@Atoms/Description';
import Imagen1 from '@Assets/images/CircuitoLeft.svg';
import Imagen2 from '@Assets/images/CircuitoRight.svg';
import { screen } from '@Styles/theme';

const StyleProjects = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.light.color.secondary};
  .backgroundImages {
    ${screen('xl')} {
      display: flex;
    }
    z-index: 0;
    position: absolute;
    width: 100vw;
    display: none;
    justify-content: space-between;
  }
  .descripcion {
    z-index: 1;
    margin: 50px 0px 50px 0px;

    h1 {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 40px;
    }
    width: 500px;
  }
`;

const Projects: React.FC = () => (
  <StyleProjects>
    <div className="backgroundImages">
      <Imagen1 />
      <Imagen2 />
    </div>
    <div className="descripcion">
      <Title align="center" white size="sm">
        Proyectos de la comunidad
      </Title>
      <Description size="lg" align="center" white>
        En la comunidad podrás encontrar distintos proyectos para colaborar en diferentes tecnologias. Tenemos
        4 proyectos principales que son:
      </Description>
      <CardGroupProjects />
    </div>
  </StyleProjects>
);

export default Projects;
