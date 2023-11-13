import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 10px;
  }

  :root {
    font-size: 62.5%;
    --toastify-color-dark: ${({ theme }) => theme.COLORS.DARK_1000};
    --toastify-font-family: 'Poppins', sans-serif;
    --toastify-color-error: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  body {
    background: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  body, input, textarea, button {
    font-size: 1.6rem;
  }

  body, input, textarea {
    font-family: 'Roboto', sans-serif;
  }
  
  h1, h2, h3, h4, button {
    font-family: 'Poppins', sans-serif;
  }
  
  footer {
    font-family: 'DM Sans', sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button:hover, a:hover {
    filter: brightness(0.85);
  }

`;

export default GlobalStyle;
