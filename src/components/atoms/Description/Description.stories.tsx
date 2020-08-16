import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Description from '.';

export default {
  title: 'Example/Description',
  component: Description
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Description {...args}>some text</Description>;

export const Primary = Template.bind({});
Primary.args = {
  size: 'md'
};
