import React, { useState } from 'react';
import Head from '@Molecules/Head';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AuthPage from '@Templates/AuthPage';
import FormSignUp from '@Organisms/FormSignUp';
import Axios from 'axios';
import { useRouter } from 'next/router';
import MessageAlert from '@Atoms/messages';

interface FormValues {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

const initialValues: FormValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirm: ''
};

const Index: React.FC = () => {
  const [messageAlert, useMessageAlert] = useState({ types: '', text: '', activate: false });
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required('Por favor un Username'),
      email: Yup.string().email('Debe ingresar un correo válido.').required('Por favor, ingrese un correo.'),
      password: Yup.string()
        .required('La contraseña es obligatoria.')
        .matches(/[a-z]/, 'Tu contraseña debe tener al menos una minúscula.')
        .matches(/[A-Z]/, 'Tu contraseña debe tener al menos una mayúscula.')
        .matches(
          /[a-zA-Z]+[^a-zA-Z\s]+/,
          'Tu contraseña debe tener al menos un caracter especial o número (1,2,3,@,!,#, etc).'
        )
        .min(8, 'Debe ingresar una contraseña de 8 caracteres.'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden.')
        .required('Verifique su contraseña.')
    }),
    onSubmit: async (valores) => {
      const token = localStorage.getItem('token');
      const result = await Axios.post('https://api.faztcommunity.dev/users', valores, {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => null);
      if (result?.status === 200) {
        localStorage.setItem('Token', result.data.data);
        router.push('/');
      }
      if (result === null) {
        useMessageAlert({ types: 'error', text: 'error', activate: true });
        setTimeout(() => {
          useMessageAlert({ types: '', text: '', activate: false });
        }, 2000);
      }
    }
  });
  return (
    <AuthPage>
      <MessageAlert messageAlert={messageAlert} />
      <Head title="Sign Up" />
      <FormSignUp formik={formik} />
    </AuthPage>
  );
};

export default Index;
