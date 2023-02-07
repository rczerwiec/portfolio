import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

div::-webkit-scrollbar {
    width: 1em;
  }

div::-webkit-scrollbar-track {
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.3);
  }

div::-webkit-scrollbar-thumb {
    background-color: black;
  }


`

export default GlobalStyles;
