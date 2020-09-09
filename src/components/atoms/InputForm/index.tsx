/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import styled from '@Styles/styled';
import Icon from '@Atoms/Icon';
import PropTypes from 'prop-types';
import { screen } from '@Styles/theme';

type InputFormPropsType = 'password' | 'email' | 'text';

type InputFormProps = {
  id: string;
  type?: InputFormPropsType;
  placeholder?: string;
  formik: any;
};

function getColor({ id, formik }: { id?: string; formik?: any }) {
  if ((formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && formik.errors[`${id}`]) return '#ff295f';

  if ((formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && !formik.errors[`${id}`]) return '#04AB5B';

  return '#777777';
}
function getColorFocus({ id, formik }: { id?: string; formik?: any }) {
  if ((formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && formik.errors[`${id}`]) return '#ff295f';

  if ((formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && !formik.errors[`${id}`]) return '#04AB5B';

  return '#37A6F6';
}
const StyledInputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  padding-bottom: 22px;
  margin: 2px 0px 2px 0px;
  ${screen('md')} {
    margin: 2px 15px 2px 15px;
  }
  transition: all 0.5s ease;
`;
const StyledInputFormContainerIcon = styled.div<InputFormProps>`
  display: flex;
  width: max-content;
  height: max-content;
`;
const StyledInputFormContainerIconContainer = styled.div`
  position: absolute;
  transform: translate(275px, 18px);
`;
const StyledInputFormContainerIconButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(269px, 11px);
  width: 29px;
  height: 29px;
  border: none;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: max-content;
    height: max-content;
  }
  transition: all 0.5s ease;
`;
const StyledInputForm = styled.input<InputFormProps>`
  width: 312px;
  height: 51px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  background: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid ${({ id, formik }) => getColor({ id, formik })};
  :focus {
    outline-offset: 0px;
    outline: none;
    border: 1px solid ${({ id, formik }) => getColorFocus({ id, formik })};
    caret-color: ${({ id, formik }) => getColorFocus({ id, formik })};
    box-shadow: 0 0 3px ${({ id, formik }) => getColorFocus({ id, formik })};
    -moz-box-shadow: 0 0 3px ${({ id, formik }) => getColorFocus({ id, formik })};
    -webkit-box-shadow: 0 0 3px ${({ id, formik }) => getColorFocus({ id, formik })};
    & ~ div {
      svg {
        width: 15px;
        height: 15px;
        path {
          fill: ${({ id, formik }) => getColorFocus({ id, formik })};
        }
      }
    }
    & ~ button {
      background-color: ${({ id, formik }) => `${getColorFocus({ id, formik })}26`};
      :hover {
        outline-offset: 0px;
        outline: none;
        border: 1px solid ${({ id, formik }) => getColorFocus({ id, formik })};
        cursor: pointer;
        background-color: ${({ id, formik }) => `${getColorFocus({ id, formik })}66`};
        transition: background-color 0.5s ease;
      }
      svg {
        width: 15px;
        height: 15px;
        path {
          fill: ${({ id, formik }) => getColorFocus({ id, formik })};
        }
      }
      transition: all 0.5s ease;
    }
    transition: all 0.5s ease;
  }
  & ~ div {
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ id, formik }) => getColor({ id, formik })};
      }
    }
  }
  & ~ button {
    background-color: ${({ id, formik }) => `${getColor({ id, formik })}26`};
    :focus {
      outline-offset: 0px;
      outline: none;
      border: 1px solid black;
    }
    :hover {
      outline-offset: 0px;
      outline: none;
      border: 1px solid ${({ id, formik }) => getColorFocus({ id, formik })};
      cursor: pointer;
      background-color: ${({ id, formik }) => `${getColor({ id, formik })}66`};
      svg {
        width: 15px;
        height: 15px;
        path {
          fill: ${({ id, formik }) => getColor({ id, formik })};
        }
      }
      transition: background-color 0.5s ease;
    }
    svg {
      width: 15px;
      height: 15px;
      path {
        fill: ${({ id, formik }) => getColor({ id, formik })};
      }
    }
    transition: all 0.5s ease;
  }
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 18px;
  transition: all 0.5s ease;
`;

const StyledInputError = styled.span`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fontFamily.body};
  max-width: 312px;
  height: max-content;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #ff295f;
`;

const InputForm: React.FC<InputFormProps> = ({ id, type, placeholder, formik }) => {
  const input = React.createRef<HTMLInputElement>();
  const [passwordIcon, usePasswordIcon] = useState(false);
  const [passwordType, usePasswordType] = useState('password');
  if (type === 'password') {
    return (
      <StyledInputFormContainer>
        <StyledInputFormContainerIcon id={id} formik={formik}>
          <StyledInputForm
            id={id}
            ref={input}
            type={passwordType as InputFormPropsType}
            placeholder={placeholder}
            formik={formik}
            value={formik.values[`${id}`]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <StyledInputFormContainerIconButton
            type="button"
            unselectable="on"
            onPointerDown={() => {
              usePasswordIcon(true);
              usePasswordType('text');
            }}
            onPointerUp={() => {
              usePasswordIcon(false);
              usePasswordType('password');
            }}
            onPointerLeave={() => {
              usePasswordIcon(false);
              usePasswordType('password');
            }}
          >
            {passwordIcon ? <Icon size="rl" icon="eye" /> : <Icon size="rl" icon="eyeclose" />}
          </StyledInputFormContainerIconButton>
        </StyledInputFormContainerIcon>
        {(formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && formik.errors[`${id}`] ? (
          <StyledInputError>{formik.errors[`${id}`]}</StyledInputError>
        ) : null}
      </StyledInputFormContainer>
    );
  }
  return (
    <StyledInputFormContainer>
      <StyledInputFormContainerIcon id={id} formik={formik}>
        <StyledInputForm
          id={id}
          type={type}
          placeholder={placeholder}
          formik={formik}
          value={formik.values[`${id}`]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {(formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && formik.errors[`${id}`] ? (
          <StyledInputFormContainerIconContainer>
            <Icon size="rl" icon="cross" />
          </StyledInputFormContainerIconContainer>
        ) : null}
        {(formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && !formik.errors[`${id}`] ? (
          <StyledInputFormContainerIconContainer>
            <Icon size="rl" icon="check" />
          </StyledInputFormContainerIconContainer>
        ) : null}
      </StyledInputFormContainerIcon>
      {(formik.values[`${id}`] !== '' || formik.touched[`${id}`]) && formik.errors[`${id}`] ? (
        <StyledInputError>{formik.errors[`${id}`]}</StyledInputError>
      ) : null}
    </StyledInputFormContainer>
  );
};

InputForm.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['password', 'email', 'text'])
};

InputForm.defaultProps = {
  placeholder: 'sometext',
  type: 'text'
};

export default InputForm;
