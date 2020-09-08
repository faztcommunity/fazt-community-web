import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputForm from '.';

export default {
  title: 'Example/Atoms/InputForm',
  component: InputForm
} as Meta;

const formik = useFormik({
  initialValues: {
    email: ''
  },
  validationSchema: Yup.object({
    email: Yup.string().email('Debe ingresar un correo valido').required('Por favor ingrese un correo')
  }),
  onSubmit: async () => {
    return null;
  }
});
const Template: Story = (args) => <InputForm id="email" formik={formik} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'email',
  placeholder: 'Ingrese su Nombre'
};
