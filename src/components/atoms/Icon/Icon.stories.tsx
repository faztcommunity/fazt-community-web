import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '.';

export default {
    title: 'Example/Icon',
    component: Icon
  } as Meta;
  
  const Template: Story = (args) => <Icon {...args} />;
  
  export const Primary = Template.bind({});
  Primary.args = {
    icon: 'api',
    size: 'sm'
  };
