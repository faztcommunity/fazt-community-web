import React from 'react';
import Head from '@Molecules/Head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthPage from '@Templates/AuthPage';
import FormSignUp from '@Organisms/FormSignUp';

const Index: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Por favor Ingrese su Nombre'),
      email: Yup.string().email('Debe ingresar un correo valido').required('Por favor ingrese un correo'),
      password: Yup.string()
        .required('El Password es Obligatorio')
        .matches(/[a-z]/, 'Tu Contraseña debe tener al menos una Minuscula')
        .matches(/[A-Z]/, 'Tu Contraseña debe tener al menos una Mayuscula')
        .matches(
          /[a-zA-Z]+[^a-zA-Z\s]+/,
          'Tu Contraseña debe tener al menos un caracter Especial O Numero (1,2,3,@,!,#, etc).'
        )
        .min(8, 'Debe ingresar una contraseña de 8 caracteres.'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Las Contraseñas no coiciden')
        .required('Verifique su Contraseña')
    }),
    onSubmit: async (valores) => {
      console.log(valores);
    }
  });
  return (
    <AuthPage>
      <Head title="Test" />
      <FormSignUp formik={formik} />
    </AuthPage>
  );
};

export default Index;
