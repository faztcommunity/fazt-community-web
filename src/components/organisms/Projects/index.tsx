import React from 'react';
import styled from '@Styles/styled';
import CardGroupProjects from '@Organisms/CardGroupProjects';
import Title from '@Atoms/Title';
import Description from '@Atoms/Description';

const StyleProjects = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.light.color.secondary};

  .descripcion {
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
    <div className="descripcion">
      <Title align="center" white size="sub2">
        Proyectos de la comunidad
      </Title>
      <Description size="lg" center white>
        En la comunidad podrás encontrar distintos proyectos para colaborar en diferentes tecnologias. Tenemos
        4 proyectos principales que son:
      </Description>
      <CardGroupProjects />
    </div>
  </StyleProjects>
);

export default Projects;
