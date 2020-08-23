import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HowToJoin from '.';

export default {
  title: 'Example/Organisms/HowToJoin',
  component: HowToJoin
} as Meta;

const Template: Story = () => <HowToJoin />;

export const Primary = Template.bind({});
