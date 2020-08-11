import React from 'react';
import { storiesOf } from '@storybook/react';
import Description from '.';

storiesOf('Description', module)
  .addParameters({ componentSubtitle: 'Description', component: Description })
  .add('Descriptions md', () => (
    <>
      <Description size="md">Some inspiring and long text</Description>
      <Description size="md" center>
        Some inspiring and long text
      </Description>
      <div style={{ background: '#2C9BEB' }}>
        <Description size="md" white>
          Some inspiring and long text
        </Description>
      </div>
      <div style={{ background: '#2C9BEB' }}>
        <Description size="md" center white>
          Some inspiring and long text
        </Description>
      </div>
    </>
  ))
  .add('Descriptions lg', () => (
    <>
      <Description size="lg">Some inspiring and long text</Description>
      <Description size="lg">Some inspiring and long text</Description>
      <div style={{ background: '#2C9BEB' }}>
        <Description size="lg" white>
          Some inspiring and long text
        </Description>
      </div>
      <div style={{ background: '#2C9BEB' }}>
        <Description size="lg" center white>
          Some inspiring and long text
        </Description>
      </div>
    </>
  ))
  .add('Descriptions xl', () => (
    <>
      <Description>Some inspiring and long text</Description>
      <Description>Some inspiring and long text</Description>
      <div style={{ background: '#2C9BEB' }}>
        <Description white>Some inspiring and long text</Description>
      </div>
      <div style={{ background: '#2C9BEB' }}>
        <Description center white>
          Some inspiring and long text
        </Description>
      </div>
    </>
  ));
