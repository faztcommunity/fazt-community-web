import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Contributors from '.';

export default {
  title: 'Example/Organisms/Contributors',
  component: Contributors
} as Meta;

const Template: Story = () => <Contributors />;

export const Primary = Template.bind({});
