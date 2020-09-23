import React from 'react';
import styled from '@Styles/styled';
import CardGroupProjects from '@Organisms/CardGroupProjects';
import Subtitle from '@Atoms/Subtitle';
import Description from '@Atoms/Description';

const StyleProjects = styled.section`
  width: 100%;
  min-height: calc(100vh - 90px);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.themes[0].secondary.light};
  .backgroundImages {
    z-index: 0;
    position: absolute;
    width: 100%;
    display: none;
    justify-content: space-between;

    ${({ theme }) => theme.mediaquery.large} {
      display: flex;
    }
  }
  .descripcion {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0px 50px 0px;

    &-ContainerTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;

      h2 {
        width: 320px;
        padding-top: 100px;
        padding-top: 0px;
        ${({ theme }) => theme.mediaquery.small} {
          padding-top: 64px;
          width: max-content;
        }
        ${({ theme }) => theme.mediaquery.large} {
          font-size: ${({ theme }) => theme.texts.size.Sub1.FontSize};
          line-height: ${({ theme }) => theme.texts.size.Sub1.LineHeight};
        }
      }
      p {
        width: 300px;
        padding-top: 16px;
        padding-bottom: 40px;
        ${({ theme }) => theme.mediaquery.small} {
          width: 650px;
        }
      }
    }
  }
`;

const Projects: React.FC = () => (
  <StyleProjects>
    <div className="backgroundImages">
      <img src="/images/CircuitoLeft.svg" alt="" />
      <img src="/images/CircuitoRight.svg" alt="" />
    </div>
    <div className="descripcion">
      <div className="descripcion-ContainerTitle">
        <Subtitle align="center" white size="Sub2">
          Proyectos de la comunidad
        </Subtitle>
        <Description size="LBody" align="center" white>
          En la comunidad podrás encontrar distintos proyectos para colaborar en diferentes tecnologias.
          Tenemos 4 proyectos principales que son:
        </Description>
      </div>
      <CardGroupProjects />
    </div>
  </StyleProjects>
);

export default Projects;
