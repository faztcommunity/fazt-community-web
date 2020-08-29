import React from 'react';
import MainPage from '@Templates/MainPage';
import Head from '@Molecules/Head';
import Welcome from '@Organisms/Welcome';
import Projects from '@Organisms/Projects';
import Contributors from '@Organisms/Contributors';
import HowToJoin from '@Organisms/HowToJoin';
import MeetOurCommunity from '@Organisms/MeetOurCommunity';
/* They test their components and at the end clean the Index file */

const Index: React.FC = () => {
  return (
    <>
      <MainPage>
        <Head title="Home" />
        <Welcome />
        <MeetOurCommunity />
        <Projects />
        <Contributors />
        <HowToJoin />
      </MainPage>
    </>
  );
};

export default Index;
