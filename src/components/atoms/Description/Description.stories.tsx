import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Description from '.';

export default {
  title: 'Example/Atoms/Description',
  component: Description
} as Meta;

const Template: Story = (args) => (
  <Description {...args}>
    Crece como profesional compartiendo tus conocimientos con los demás y participando en proyectos Open
    Source.
  </Description>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'xl',
  align: 'center'
};
