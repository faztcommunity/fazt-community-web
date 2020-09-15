import React from 'react';
import styled from '@Styles/styled';
import Subtitle from '@Atoms/Subtitle';
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
  width: 90%;
  margin: 0 auto;
  height: max-content;
  padding: 100px 0px 48px 0px;
  border-bottom: solid #d9d9d9 1px;
  h2 {
    @media (max-width: 1140px) {
      margin-top: 0px;
      margin-bottom: 48px;
      width: 60%;
      justify-self: center;
    }
  }
  p {
    max-width: 600px;
    justify-self: flex-start;
    @media (max-width: 1140px) {
      margin-top: 0px;
    }
  }
  button {
    margin-top: 0px;
    @media (max-width: 1140px) {
      margin-top: 16px;
    }
  }
  @media (max-width: 1140px) {
    padding: 64px 0px 64px 0px;
  }

  .contributors {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2:nth-of-type(1) {
    text-align: center;
  }
  .invitacion {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      text-align: center;
      width: 50%;
    }
    button {
      margin-left: 0px;
    }
  }
  @media (min-width: 1140px) {
    grid-template-columns: repeat(2, 1fr);
    .contributors {
      width: 100%;
      height: 100%;
      grid-column: 1/2;
      grid-row: 1/3;
      justify-content: flex-end;
      padding-right: 110px;
    }
    .invitacion {
      grid-column: 2/3;
      align-items: flex-start;
      p {
        text-align: left;
        width: 95%;
      }
    }
    h2:nth-of-type(1) {
      grid-row: 1/2;
      align-self: flex-end;
      text-align: start;
    }
    div:nth-of-type(2) {
      grid-column: 2/3;
    }
  }
`;

const Contributors: React.FC<ContributorsProps> = ({ title, description }) => (
  <StyleContributors>
    <Subtitle size="sub1" as="h2">
      {title}
    </Subtitle>
    <div className="contributors">
      <MapGridUsers />
    </div>
    <div className="invitacion">
      <Description size="lg">{description}</Description>
      <Button text="Conócelos a todos" size="md" href="/colaborators"/>
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
