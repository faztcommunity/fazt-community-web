import React from 'react';
import styled from '@Styles/styled';
import Subtitle from '@Atoms/Subtitle';
import Button from '@Atoms/Button';
import Description from '@Atoms/Description';
import MapGridUsers from '@Organisms/MapGridUsers';
import PropTypes from 'prop-types';
import { GridColumn } from 'emotion-flex-grid';

type ContributorsProps = {
  title?: string;
  description?: string;
};

const StyleContributors = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: max-content;
  margin: 0px;
  width: 100vw;
  ${({ theme }) => theme.mediaquery.large} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaquery.extralarge} {
    width: 1440px;
    margin: auto;
  }

  .contributors {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.mediaquery.large} {
      padding: 0px auto;
      width: 100%;
      height: 100%;
      grid-column: 1/2;
      grid-row: 1/3;
      justify-content: center;
    }
  }
  h2 {
    margin-bottom: 48px;
    width: 100vw;

    justify-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      width: 80%;
    }
    ${({ theme }) => theme.mediaquery.large} {
      width: 576px;
      font-size: ${({ theme }) => theme.texts.size.Sub1.FontSize};
      line-height: ${({ theme }) => theme.texts.size.Sub1.LineHeight};
      height: max-content;
      margin-bottom: 16px;
      justify-self: flex-start;
      align-self: flex-end;
      text-align: left;
    }
  }
  .invitacion {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    ${({ theme }) => theme.mediaquery.large} {
      width: 100%;
      height: 100%;
      grid-column: 2/3;
      align-items: flex-start;
    }
    p {
      margin-top: 24px;
      margin-bottom: 24px;
      width: 90vw;
      justify-self: flex-start;
      ${({ theme }) => theme.mediaquery.small} {
        width: 70%;
      }
      ${({ theme }) => theme.mediaquery.large} {
        width: 576px;
        font-size: ${({ theme }) => theme.texts.size.XLBody.FontSize};
        line-height: ${({ theme }) => theme.texts.size.XLBody.LineHeight};
        margin-top: 0px;
        margin-bottom: 16px;
        justify-self: flex-start;
        text-align: left;
      }
      button {
        margin-bottom: 16px;
      }
    }
  }
`;
const StyleContributorsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid #d9d9d9 1px;
  padding-top: 64px;
  padding-bottom: 64px;
  ${({ theme }) => theme.mediaquery.small} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;
const Contributors: React.FC<ContributorsProps> = ({ title, description }) => (
  <StyleContributorsContainer>
    <GridColumn align="center" mx={['xs', 's', 'm', 'l', 'xl', 'xxl']}>
      <StyleContributors>
        <Subtitle size="Sub2" as="h2">
          {title}
        </Subtitle>
        <div className="contributors">
          <MapGridUsers />
        </div>
        <div className="invitacion">
          <Description size="MBody">{description}</Description>
          <Button text="Conócelos a todos" size="m" href="/collaborators" />
        </div>
      </StyleContributors>
    </GridColumn>
  </StyleContributorsContainer>
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
