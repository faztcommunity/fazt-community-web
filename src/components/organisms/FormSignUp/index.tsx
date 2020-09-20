/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from '@Styles/styled';
import InputForm from '@Atoms/InputForm';
import Form from '@Molecules/Form';
import Link from 'next/link';

type FormSignUpProps = {
  formik: any;
};

const StyledFormSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  align-items: center;
  justify-content: center;

  margin-top: 120px;
`;
const StyledFormSignUpSpace = styled.div`
  width: 347px;
  border: 1px solid #d9d9d9;
  margin-top: 32px;
`;

const StyledFormFooter = styled.div`
  width: 347px;
  text-align: center;
`;

const StyledFormSignUpText = styled.span`
  display: block;
  width: 347px;
  margin: 16px auto;
  font-family: ${({ theme }) => theme.texts.fontFamily.OpenSans};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: ${({ theme }) => theme.texts.size.SBody.FontSize};
  line-height: ${({ theme }) => theme.texts.size.SBody.LineHeight};
`;
const StyledFormSignUpTextLink = styled.a`
  width: 347px;
  margin-top: 32px;
  font-family: ${({ theme }) => theme.texts.fontFamily.OpenSans};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: ${({ theme }) => theme.texts.size.SBody.FontSize};
  line-height: ${({ theme }) => theme.texts.size.SBody.LineHeight};
  color: ${({ theme }) => theme.colors.themes[0].secondary.light};
  :hover {
    color: ${({ theme }) => theme.colors.themes[0].secondary.dark};
  }
  cursor: pointer;
`;

const FormSignUp: React.FC<FormSignUpProps> = ({ formik }) => {
  return (
    <StyledFormSignUpContainer>
      <Form
        formik={formik}
        title="¡Comienza a aplicar tus conocimientos!"
        buttonText="Registrarme"
        buttonBlock
      >
        <InputForm id="name" placeholder="Ingrese su nombre" formik={formik} />
        <InputForm id="username" placeholder="Ingrese su Usuario de Github" formik={formik} />
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
      <StyledFormFooter>
        <Link href="/signin">
          <StyledFormSignUpText>
            ¿Ya tienes una cuenta? <StyledFormSignUpTextLink>Ingresa</StyledFormSignUpTextLink>
          </StyledFormSignUpText>
        </Link>
      </StyledFormFooter>
    </StyledFormSignUpContainer>
  );
};

export default FormSignUp;
