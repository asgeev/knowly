import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    box-sizing: border-box;
    --webkit-font-smothing: antialiased;
    --moz-osx-font-smothing: grayscale;
    margin: 0;
    padding: 0;

    
}

html {
    font-size: 62.5%; 
    
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    /* transition: all 0.2s linear; */
    background-color: ${({ theme }) => theme.color.body};
    color: ${({ theme }) => theme.color.text};
    height: 100%
}


`;