import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProjectCard from '.';

export default {
  title: 'Example/Molecule/ProjectCard',
  component: ProjectCard
} as Meta;

const Template: Story = (args) => (
  <ProjectCard {...args}>
    Es la web oficial de Fazt Community, donde se colocan los projectos y aportes de los integrantes de la
    comunidad.
  </ProjectCard>
);

export const Primary = Template.bind({});
Primary.args = {
  icon: 'web',
  title: 'Fazt Web'
};
