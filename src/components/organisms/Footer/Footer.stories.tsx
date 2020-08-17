import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Footer from '.';

export default {
  title: 'Example/Footer',
  component: Footer
} as Meta;

const Template: Story = () => <Footer />;

export const Primary = Template.bind({});
