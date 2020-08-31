import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navigation from '.';

export default {
  title: 'Example/Organisms/Navigation',
  component: Navigation
} as Meta;

const Template: Story = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: ''
};
