import React from 'react';
import styled from '@Styles/styled';
import ProjectCard from '@Molecules/ProjectCard';
import { screen } from '@Styles/theme';

const StyledCardGroupProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCardGroupProjects = styled.div`
  /* desktop */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  justify-items: center;
  align-items: center;
  width: max-content;
  height: max-content;
  transition: all 0.4s ease;

  ${screen('md')} {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardGroupProjects: React.FC = () => (
  <StyledCardGroupProjectsContainer>
    <StyledCardGroupProjects>
      <ProjectCard title="Fazt Web" icon="web">
        Es la web oficial de Fazt Community donde se colocan los proyectos y aportes de los integrandes de la
        comunidad.
      </ProjectCard>
      <ProjectCard title="Fazt Api" icon="api">
        Es el núcleo de los proyectos principales, este proyecto se encargará de unificar la base de datos con
        los demás proyectos.
      </ProjectCard>
      <ProjectCard title="Fazt Bots" icon="bot">
        Un bot para Discord multipropósito capaz de realizar distintas actividades como saludos, reproducir
        música y mucho más.
      </ProjectCard>
      <ProjectCard title="Fazt Database" icon="database">
        Analizamos distintos ámbitos de los proyectos comunitarios, para poder guardar todos los registros y/o
        datos.
      </ProjectCard>
    </StyledCardGroupProjects>
  </StyledCardGroupProjectsContainer>
);

export default CardGroupProjects;
