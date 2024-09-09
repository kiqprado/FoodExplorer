import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-Sizing: 'border-box',
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-family: "Roboto", sans-serif;
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`
