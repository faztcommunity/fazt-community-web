import React from 'react';
import styled from '@Styles/styled';
import MainPage from '@Templates/MainPage';
import Head from '@Molecules/Head';
import Welcome from '@Organisms/Welcome';
import UserImage from '@Molecules/UserImage';
import { screen } from '@Styles/theme'
import Projects from '@Organisms/Projects';
import MapGridUsers from '@Organisms/MapGridUsers';
/* They test their components and at the end clean the Index file */

const Index: React.FC = () => {
  return (
    <>
      <MainPage>
        <Head title="Home" />
        <Welcome />
        <UserImage imageUrl="/images/user_image_left.png" direction="left" cubeColor="orange" />
        <UserImage imageUrl="/images/user_image_right.png" direction="right"/>
        <Projects />
        <MapGridUsers />
      </MainPage>
    </>
  );
};

export default Index;
