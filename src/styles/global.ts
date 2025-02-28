import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;          
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${props => props.theme.background};
        color: ${props => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font: 400 1rem 'Roboto', sans-serif;
    }
`