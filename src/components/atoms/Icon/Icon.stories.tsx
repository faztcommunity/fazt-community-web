import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

storiesOf('Icon', module)
  .addParameters({ componentSubtitle: 'icon', component: Icon })
  .add('icons sm', () => (
    <>
      <Icon icon="api" size="sm" />
      <Icon icon="bot" size="sm" />
      <Icon icon="database" size="sm" />
      <Icon icon="discord" size="sm" />
      <Icon icon="github" size="sm" />
      <Icon icon="web" size="sm" />
    </>
  ))
  .add('icons rl', () => (
    <>
      <Icon icon="api" size="rl" />
      <Icon icon="bot" size="rl" />
      <Icon icon="database" size="rl" />
      <Icon icon="discord" size="rl" />
      <Icon icon="github" size="rl" />
      <Icon icon="web" size="rl" />
    </>
  ));
