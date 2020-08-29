import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Projects from '.';

export default {
  title: 'Example/Organisms/Projects',
  component: Projects
} as Meta;

const Template: Story = (args) => <Projects {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: ''
};
