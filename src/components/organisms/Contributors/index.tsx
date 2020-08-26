import React from 'react';
import styled from '@Styles/styled';
import Title from '@Atoms/Title';
import Button from '@Atoms/Button';
import Description from '@Atoms/Description';
import MapGridUsers from '@Organisms/MapGridUsers';
import PropTypes from 'prop-types';

type ContributorsProps = {
  title?: string;
  description?: string;
};

const StyleContributors = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 70vh;
  .contributors {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2:nth-of-type(1) {
    text-align: center;
  }
  .invitacion {
    justify-content: center;
    text-align: center;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    .contributors {
      width: 100%;
      height: 100%;
      grid-column: 1/2;
      grid-row: 1/3;
      justify-content: flex-end;
      padding: 0 95px 0 0;
    }
    .invitacion {
      grid-column: 2/3;
    }
    h2:nth-of-type(1) {
      grid-row: 1/2;
      align-self: flex-end;
      text-align: start;
    }
    div:nth-of-type(2) {
      grid-column: 2/3;
      width: 70%;
    }
  }
`;

const Contributors: React.FC<ContributorsProps> = ({ title, description }) => (
  <StyleContributors>
    <Title size="sub1" as="h2">
      {title}
    </Title>
    <div className="contributors">
      <MapGridUsers />
    </div>
    <div className="invitacion">
      <Description size="xl">{description} </Description>
      <Button text="Conocelos a todos" />
    </div>
  </StyleContributors>
);

Contributors.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
Contributors.defaultProps = {
  title: 'Ellos son parte de nuestra comunidad',
  description:
    'En los proyectos de la comunidad hay personas de todo el mundo que aporta su tiempo, conocimiento y experiencia con los demas'
};

export default Contributors;
