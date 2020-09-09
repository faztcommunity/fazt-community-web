/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from '@Styles/styled';
import InputForm from '@Atoms/InputForm';
import Form from '@Molecules/Form';
import { screen } from '@Styles/theme';
import Link from 'next/link';

type FormSignUpProps = {
  formik: any;
};

const StyledFormSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-max-content;
  height: max-content;
  align-items: center;
  justify-content: center;
  margin: 83px 0px 83px 0px;
  ${screen('md')} {
    margin: 106px 0px 106px 0px;
  }
`;
const StyledFormSignUpSpace = styled.div`
  width: 347px;
  border: 1px solid #d9d9d9;
  margin-top: 32px;
`;
const StyledFormSignUpText = styled.span`
  width: 347px;
  margin-top: 32px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: ${({ theme }) => theme.body.sm};
  line-height: ${({ theme }) => theme.subtitle.sub2.lineHeight};
`;
const StyledFormSignUpTextLink = styled.a`
  width: 347px;
  margin-top: 32px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: ${({ theme }) => theme.body.sm};
  line-height: ${({ theme }) => theme.subtitle.sub2.lineHeight};
  color: ${({ theme }) => theme.color.secondary.light};
  :hover {
    color: ${({ theme }) => theme.color.secondary.dark};
  }
  cursor: pointer;
`;

const FormSignUp: React.FC<FormSignUpProps> = ({ formik }) => {
  return (
    <StyledFormSignUpContainer>
      <Form formik={formik} title="¡Comienza a aplicar tus conocimientos!" buttonText="Registrarme">
        <InputForm id="name" placeholder="Ingrese su Nombre" formik={formik} />
        <InputForm id="email" type="email" placeholder="Ingrese su correo" formik={formik} />
        <InputForm id="password" type="password" placeholder="Ingrese su contraseña" formik={formik} />
        <InputForm
          id="passwordConfirm"
          type="password"
          placeholder="Verifique su constraseña"
          formik={formik}
        />
      </Form>
      <StyledFormSignUpSpace />
      <Link href="/signup">
        <StyledFormSignUpText>
          ¿Ya tienes una cuenta? <StyledFormSignUpTextLink>Ingresa</StyledFormSignUpTextLink>
        </StyledFormSignUpText>
      </Link>
    </StyledFormSignUpContainer>
  );
};

export default FormSignUp;
