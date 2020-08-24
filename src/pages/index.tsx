import React from 'react';
import Projects from '@Organisms/Projects';
import MainTemplate from '@Templates/MainPage';
import Head from '@Molecules/Head';
/* They test their components and at the end clean the Index file */

const Index: React.FC = () => {
  return (
    <>
      <MainTemplate>
        <Head title="Hola como estas" />
        <Projects />
      </MainTemplate>
    </>
  );
};

export default Index;
