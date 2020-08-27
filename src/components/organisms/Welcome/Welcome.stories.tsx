import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Welcome from '.';

export default {
  title: 'Example/Organisms/Welcome',
  component: Welcome
} as Meta;

const Template: Story = () => <Welcome />;

export const Primary = Template.bind({});
