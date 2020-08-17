import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import UserImage from '.';

export default {
  title: 'Example/User Image',
  component: UserImage
} as Meta;

const Template: Story = (args) => <UserImage {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  CubeColor: 'blue',
  direction: 'left',
  ImageUrl: 'https://urbandojo.com/wp-content/uploads/2017/04/default-image.jpg'
};
