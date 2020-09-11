import React from 'react';
import Head from '@Molecules/Head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthPage from '@Templates/AuthPage';
import FormSignIn from '@Organisms/FormSignIn';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: ''
};

const Index: React.FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Debe ingresar un correo válido').required('Por favor, ingrese un correo.'),
      password: Yup.string()
        .required('La contraseña es obligatoria.')
        .matches(/[a-z]/, 'Tu contraseña debe tener al menos una minúscula.')
        .matches(/[A-Z]/, 'Tu contraseña debe tener al menos una mayúscula.')
        .matches(
          /[a-zA-Z]+[^a-zA-Z\s]+/,
          'Tu contraseña debe tener al menos un caracter especial o número (1,2,3,@,!,#, etc).'
        )
        .min(8, 'Debe ingresar una contraseña de 8 caracteres.')
    }),
    onSubmit: async (valores) => {
      console.log(valores);
    }
  });
  return (
    <AuthPage>
      <Head title="Sign In" />
      <FormSignIn formik={formik} />
    </AuthPage>
  );
};

export default Index;
