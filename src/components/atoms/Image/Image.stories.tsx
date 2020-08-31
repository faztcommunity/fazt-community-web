import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Image from '.';

export default {
  title: 'Example/Atoms/Image',
  component: Image
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as Meta;

const Template: Story = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100px',
  height: '100px',
  image: 'https://designthinking.gal/wp-content/uploads/2017/05/personas-731x330.jpg'
};
