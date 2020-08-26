import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css');

      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        font-size: 16px;
      }

      body {
        background-color: #fafafa;
      }
    `}
  />
);

export default GlobalStyles;
