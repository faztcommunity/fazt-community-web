import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CardGroupProjects from '.';

export default {
  title: 'Example/Molecules/CardGroupProjects',
  component: CardGroupProjects
} as Meta;

const Template: Story = (args) => <CardGroupProjects {...args} />;

export const Primary = Template.bind({});
