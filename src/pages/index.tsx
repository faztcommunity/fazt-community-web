import React from 'react';
import { GetStaticProps } from 'next';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { getCollaborators } from '@Api/collaborator';
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
        <br id="ref1" />
        <MeetOurCommunity />
        <br id="ref2" />
        <Projects />
        <br id="ref3" />
        <Contributors />
        <HowToJoin />
      </MainPage>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryCache = new QueryCache();
  await queryCache.prefetchQuery('collaborators', getCollaborators);

  return {
    props: {
      dehydratedState: dehydrate(queryCache)
    }
  };
};

export default Index;
