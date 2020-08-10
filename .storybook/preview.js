import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@Styles/theme';
import styled from '@emotion/styled';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <Center>{storyFn()}</Center>
  </ThemeProvider>
));
