import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Title from '.';

export default {
  title: 'Example/Title',
  component: Title
} as Meta;

const Template: Story = (args) => <Title {...args}>Some Text</Title>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'lg',
  as: 'h1'
};
