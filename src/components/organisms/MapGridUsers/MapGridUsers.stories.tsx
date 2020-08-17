import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MapGridUsers from '.';

export default {
  title: 'Example/Organisms/MapGridUsers',
  component: MapGridUsers
} as Meta;

const Template: Story = () => <MapGridUsers />;

export const Primary = Template.bind({});
