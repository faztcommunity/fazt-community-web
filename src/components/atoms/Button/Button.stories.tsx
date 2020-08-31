import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';

export default {
  title: 'Example/Atoms/Button',
  component: Button
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'some text',
  color: 'primary',
  variant: 'fill',
  size: 'xs'
};
