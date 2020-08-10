import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background-color: #fafafa;
      }
    `}
  />
);

export default GlobalStyles;
