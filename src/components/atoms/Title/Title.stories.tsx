import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Title from '.';

export default {
  title: 'Example/Atoms/Title',
  component: Title
} as Meta;

const Template: Story = (args) => <Title {...args}>Somos Fazt Community</Title>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'lg',
  as: 'h1'
};
