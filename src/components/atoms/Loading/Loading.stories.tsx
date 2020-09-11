import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Loading from '.';

export default {
  title: 'Example/Atoms/Loading',
  component: Loading
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Loading',
};
