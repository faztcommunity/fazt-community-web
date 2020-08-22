import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import MainPage from '.';

export default {
  title: 'Example/Templates/MainPage',
  component: MainPage
} as Meta;

const Template: Story = () => <MainPage />;

export const Primary = Template.bind({});
