/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from '@Styles/styled';
import PropTypes from 'prop-types';
import Subtitle from '@Atoms/Subtitle';

type FormProps = {
  formik?: any;
  title?: string;
  buttonText?: string;
  vertical?: boolean;
  buttonBlock?: boolean;
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
    text-align: center;
  }
`;

const StyledForm = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  max-width: 684px;
  height: max-content;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme }) => theme.mediaquery.medium} {
    flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  }
`;

const StyledButton = styled.input<FormProps>`
  background-color: ${({ theme }) => theme.colors.themes[0].secondary.light};
  width: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: inset 0px 8px 3px ${({ theme }) => `${theme.colors.gray[800]}00`},
    0px 10px 15px ${({ theme }) => `${theme.colors.themes[0].secondary.light}80`};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-family: ${({ theme }) => theme.texts.fontFamily.OpenSans};
  font-size: ${({ theme }) => theme.texts.size.Button.FontSize};
  font-weight: bold;
  line-height: ${({ theme }) => theme.texts.size.Button.LineHeight};
  letter-spacing: 1.5px;
  margin: 0;
  outline: none;
  padding: 16px 0px 15px 0px;
  position: relative;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  ${({ theme }) => theme.mediaquery.medium} {
    width: ${({ buttonBlock }) => (buttonBlock ? '310px' : 'auto')};
    margin: 0 15px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.themes[0].secondary.dark};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    box-shadow: unset;
    box-shadow: inset 0px 8px 3px ${({ theme }) => `${theme.colors.gray[800]}80`},
      0px 10px 15px ${({ theme }) => `${theme.colors.themes[0].secondary.light}00`};
  }
  transition: all 0.3s ease-out;
`;

const Form: React.FC<FormProps> = ({ formik, children, title, buttonText, vertical, buttonBlock }) => {
  return (
    <StyledFormContainer>
      <Subtitle as="h2" size="Sub2">
        {title}
      </Subtitle>
      <StyledForm onSubmit={formik.handleSubmit} vertical={vertical}>
        {children}
        <StyledButton type="submit" value={buttonText} buttonBlock={buttonBlock} />
      </StyledForm>
    </StyledFormContainer>
  );
};

Form.propTypes = {
  vertical: PropTypes.bool,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  buttonBlock: PropTypes.bool
};

Form.defaultProps = {
  vertical: false,
  buttonBlock: true,
  title: 'default title',
  buttonText: 'example text'
};

export default Form;
