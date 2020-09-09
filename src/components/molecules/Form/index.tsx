/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from '@Styles/styled';
import { screen } from '@Styles/theme';

type FormProps = {
  formik: any;
  title?: string;
  buttonText?: string;
};
const StyledFormContainer = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    width: 100%;
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fontFamily.title};
    font-weight: 700;
    text-align: center;
    font-size: ${({ theme }) => theme.subtitle.sub2.fontSize};
    line-height: ${({ theme }) => theme.subtitle.sub2.lineHeight};

    ${screen('md')} {
      font-size: ${({ theme }) => theme.subtitle.sub1.fontSize};
      line-height: ${({ theme }) => theme.subtitle.sub1.fontSize};
    }
  }
`;

const StyledForm = styled.form`
  display: flex;
  max-width: 684px;
  height: max-content;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledButton = styled.input`
  background-color: ${({ theme }) => theme.color.secondary.light};
  width: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: inset 0px 8px 3px ${({ theme }) => `${theme.color.gray[800]}00`},
    0px 10px 15px ${({ theme }) => `${theme.color.secondary.light}80`};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.body};
  font-size: ${({ theme }) => theme.button.rl.fontSize};
  font-weight: bold;
  line-height: ${({ theme }) => theme.button.lineHeight};
  letter-spacing: 1.5px;
  margin: 15px 15px 0px 15px;
  outline: none;
  padding: 16px 0px 15px 0px;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary.dark};
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    box-shadow: unset;
    box-shadow: inset 0px 8px 3px ${({ theme }) => `${theme.color.gray[800]}80`},
      0px 10px 15px ${({ theme }) => `${theme.color.secondary.light}00`};
  }
  transition: all 0.3s ease-out;
`;

const Form: React.FC<FormProps> = ({ formik, children, title, buttonText }) => {
  return (
    <StyledFormContainer>
      <h2>{title}</h2>
      <StyledForm onSubmit={formik.handleSubmit}>
        {children}
        <StyledButton type="submit" value={buttonText} />
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Form;
