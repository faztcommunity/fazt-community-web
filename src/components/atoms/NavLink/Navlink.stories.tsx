import React from 'react';
import { storiesOf } from '@storybook/react';
import Navlink from '.';

storiesOf('Navlink', module)
  .addParameters({ componentSubtitle: 'Navlink', component: Navlink })
  .add('Navlink', () => (
    <>
      <Navlink href='/' text='navlink'/>
      <Navlink href='/algo' text='navlink'/>
    </>
  ))
