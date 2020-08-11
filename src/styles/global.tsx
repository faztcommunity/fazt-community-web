import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

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
