import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .addParameters({ componentSubtitle: 'Button', component: Button })
  .add('buttons xsm', () => (
    <>
      <Button text="Some Text" size="xsm" variant="fill" color="primary" />
      <Button text="Some Text" size="xsm" variant="fill" color="secondary" />
      <Button text="Some Text" size="xsm" variant="outline" color="primary" />
      <Button text="Some Text" size="xsm" variant="outline" color="secondary" />
    </>
  ))
  .add('buttons sm', () => (
    <>
      <Button text="Some Text" size="sm" variant="fill" color="primary" />
      <Button text="Some Text" size="sm" variant="fill" color="secondary" />
      <Button text="Some Text" size="sm" variant="outline" color="primary" />
      <Button text="Some Text" size="sm" variant="outline" color="secondary" />
    </>
  ))
  .add('buttons md', () => (
    <>
      <Button text="Some Text" size="md" variant="fill" color="primary" />
      <Button text="Some Text" size="md" variant="fill" color="secondary" />
      <Button text="Some Text" size="md" variant="outline" color="primary" />
      <Button text="Some Text" size="md" variant="outline" color="secondary" />
    </>
  ))
  .add('buttons lg', () => (
    <>
      <Button text="Some Text" size="lg" variant="fill" color="primary" />
      <Button text="Some Text" size="lg" variant="fill" color="secondary" />
      <Button text="Some Text" size="lg" variant="outline" color="primary" />
      <Button text="Some Text" size="lg" variant="outline" color="secondary" />
    </>
  ))
  .add('buttons xl', () => (
    <>
      <Button text="Some Text" size="xl" variant="fill" color="primary" />
      <Button text="Some Text" size="xl" variant="fill" color="secondary" />
      <Button text="Some Text" size="xl" variant="outline" color="primary" />
      <Button text="Some Text" size="xl" variant="outline" color="secondary" />
    </>
  ));
