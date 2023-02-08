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
    height: 100%;
    line-height: 1.5;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    font-size: 1.6rem;
    text-rendering: optimizeLegibility;
    /* transition: all 0.2s linear; */
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
    height: 100%
}

img{
    max-width: 100%;
}

p{
    margin-top: 1rem;
    margin-bottom: 1rem;

}


`;