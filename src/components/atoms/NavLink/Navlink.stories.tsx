import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Navlink from '.';

export default {
  title: 'Example/Navlink',
  component: Navlink
} as Meta;

const Template: Story = (args) => <Navlink href="/" {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'some text'
};
