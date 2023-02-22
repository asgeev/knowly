import { createGlobalStyle } from 'styled-components'

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
}
html:focus-within {
  scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
    /* height: 100%; */
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.6;
    font-weight: 400;
    
    ${({ theme }) => theme.mq.sm}{
      font-size: 1.8rem;   
    }
  }
  
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}


/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}


`
