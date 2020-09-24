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

      :root {
        font-size: 16px;
      }

      body {
        background-color: #fafafa;
        overflow-x: hidden;
      }

      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      p,
      pre {
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      ol,
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: none;
        overflow: auto;
      }

      img {
        border-style: none;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      [type='button'],
      [type='reset'],
      [type='submit'],
      button {
        -webkit-appearance: button;
        -webkit-tap-highlight-color: transparent;
      }
      .fade-enter {
        opacity: 0;
      }
      .fade-enter-active {
        opacity: 1;
        transition: opacity 0.5s;
      }
      .fade-exit {
        opacity: 1;
      }
      .fade-exit-active {
        opacity: 0;
        transition: opacity 0.5s;
      }
    `}
  />
);

export default GlobalStyles;
