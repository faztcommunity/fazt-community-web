import React from 'react';
import MainPage from '@Templates/MainPage';
import Head from '@Molecules/Head';
/* They test their components and at the end clean the Index file */

const Index: React.FC = () => {
  return (
    <>
      <MainPage>
        <Head title="Home" />
      </MainPage>
    </>
  );
};

export default Index;
