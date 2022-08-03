import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: inherit;
    width: 100%;
    height: 100vh;
    background-color: #F7F9FC;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
      background-color: #eee;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #202020be;
      border-radius: 5px;
    }
  }
`
export default GlobalStyle