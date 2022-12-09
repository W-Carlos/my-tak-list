import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 1.6rem;
    }

    li {
        list-style: none;
    }
`

export default globalStyles