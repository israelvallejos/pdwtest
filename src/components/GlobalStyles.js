import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  h1 {
    font-size: 2rem;
    margin: 1rem 0;
  }

  button {
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #0056b3;
    }
  }

  input, textarea {
    font-family: 'Arial', sans-serif;
    margin-bottom: 10px;
  }
`;

export default GlobalStyle;
