import React from 'react';
/* They test their components and at the end clean the Index file */
import MapGridUsers from '@Organisms/MapGridUsers';

const Index: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh'
      }}
    >
      <MapGridUsers />
    </div>
  );
};

export default Index;
