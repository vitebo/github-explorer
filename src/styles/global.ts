import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #F0F0F5;
    background-image: url(${githubBackground});
    background-repeat: no-repeat;
    background-position: 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
