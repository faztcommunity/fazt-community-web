import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '.';

storiesOf('Image', module)
  .addParameters({ componentSubtitle: 'Image', component: Image })
  .add('Image square', () => (
    <>
      <Image
        width="100px"
        height="100px"
        image="https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg"
      />
      <Image
        width="200px"
        height="200px"
        image="https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg"
      />
      <Image
        width="300px"
        height="300px"
        image="https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg"
      />
      <Image width="100px" height="100px" />
      <Image width="200px" height="200px" />
      <Image width="300px" height="300px" />
    </>
  ))
  .add('Image round', () => (
    <>
      <Image
        width="100px"
        height="100px"
        image="https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg"
        variant="round"
      />
      <Image
        width="200px"
        height="200px"
        image="https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg"
        variant="round"
      />
      <Image
        width="300px"
        height="300px"
        image="https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg"
        variant="round"
      />
      <Image width="100px" height="100px" variant="round" />
      <Image width="200px" height="200px" variant="round" />
      <Image width="300px" height="300px" variant="round" />
    </>
  ));
