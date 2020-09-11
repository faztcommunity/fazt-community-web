/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from '@Styles/styled';
import InputForm from '@Atoms/InputForm';
import Form from '@Molecules/Form';
import { screen } from '@Styles/theme';
import Link from 'next/link';

type FormSignInProps = {
  formik: any;
};

const StyledFormSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  align-items: center;
  justify-content: center;
  margin: 83px 0px 83px 0px;
  ${screen('md')} {
    margin: 106px 0px 106px 0px;
  }
`;
const StyledFormSignInSpace = styled.div`
  width: 347px;
  border: 1px solid #d9d9d9;
  margin-top: 32px;
`;

const StyledFormFooter = styled.div`
  width: 347px;
  text-align: center;
`;

const StyledFormSignInText = styled.span`
  display: block;
  width: 347px;
  margin: 16px auto;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: ${({ theme }) => theme.body.sm};
  line-height: ${({ theme }) => theme.subtitle.sub2.lineHeight};
`;
const StyledFormSignInTextLink = styled.a`
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

const FormSignIn: React.FC<FormSignInProps> = ({ formik }) => {
  return (
    <StyledFormSignInContainer>
      <Form formik={formik} title="Inicia Sesión" buttonText="Ingresar" vertical buttonBlock={false}>
        <InputForm id="email" type="email" placeholder="Ingrese su correo" formik={formik} />
        <InputForm id="password" type="password" placeholder="Ingrese su contraseña" formik={formik} />
      </Form>

      <StyledFormSignInSpace />

      <StyledFormFooter>
        <Link href="/signup">
          <StyledFormSignInText>
            ¿Aún no tienes cuenta? <StyledFormSignInTextLink>Regístrate</StyledFormSignInTextLink>
          </StyledFormSignInText>
        </Link>
        <Link href="/recover">
          <StyledFormSignInText>
            ¿Olvidaste tu contraseña? <StyledFormSignInTextLink>Recupérala</StyledFormSignInTextLink>
          </StyledFormSignInText>
        </Link>
      </StyledFormFooter>
    </StyledFormSignInContainer>
  );
};

export default FormSignIn;
