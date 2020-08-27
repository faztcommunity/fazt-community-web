import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Subtitle from '.';

export default {
  title: 'Example/Atoms/Subtitle',
  component: Subtitle
} as Meta;

const Template: Story = (args) => <Subtitle {...args}>Proyectos de la comunidad</Subtitle>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'sub1',
  as: 'h2'
};
