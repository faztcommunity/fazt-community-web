import React from 'react';
import { storiesOf } from '@storybook/react';
import UserImage from '.';

storiesOf('UserImage', module)
  .addParameters({ componentSubtitle: 'UserImage', component: UserImage })
  .add('buttons xsm', () => (
    <>
      <UserImage size="xsm" url="" />
    </>
  ))
  .add('buttons sm', () => (
    <>
      <UserImage size="sm" url="" />
    </>
  ))
  .add('buttons md', () => (
    <>
      <UserImage size="md" url="" />
    </>
  ))

  .add('buttons lg', () => (
    <>
      <UserImage size="lg" url="" />
    </>
  ));
