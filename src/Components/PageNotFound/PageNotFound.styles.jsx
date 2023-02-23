import styled, { keyframes } from 'styled-components'

export const TopBar = styled.div`
    height: 8rem;
    padding: 1.2rem 1.8rem;
    display: flex;
    gap: 1rem;
    padding: 1rem 1.8rem;
    align-items: center;
`

export const PageNotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-family: 'Comfortaa', cursive;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
`

export const Header404 = styled.h1`
    position: relative;
    top: 8%;
    font-size: 10rem;
    font-weight: 700;
    width: min-content;
    margin: 0 8%;
    z-index: 5;

    ${({ theme }) => theme.mq.lg} {
        font-size: 16rem;
    }
`

export const Paragraph404 = styled.p`
    position: relative;
    top: 8%;
    margin: 0 8%;
    font-size: 3rem;
    max-width: 50rem;
    z-index: 5;

    ${({ theme }) => theme.mq.lg} {
        font-size: 5rem;
    }
`

const fly = keyframes`
  0% {
    transform: rotateZ(-90deg) translateX(0);
  }

  100% {
    transform: rotateZ(0deg) translateX(calc(100vw + 200px));
  }

`

export const AstronautImage = styled.img`
    position: absolute;
    top: 40%;
    left: -200px;
    width: 200px;
    height: 200px;
    /* background-image: url('../src/assets/404background.jpg'); */
    background-size: contain;
    z-index: 4;

    animation-name: ${fly};
    animation-duration: 10s;
    animation-direction: reverse;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    ${({ theme }) => theme.mq.sm} {
        top: 45%;
    }
    ${({ theme }) => theme.mq.md} {
        top: 50%;
    }
    ${({ theme }) => theme.mq.lg} {
        animation-duration: 15s;
        top: 55%;
        font-size: 5rem;
    }
    ${({ theme }) => theme.mq.xl} {
        top: 65%;
    }
    ${({ theme }) => theme.mq.xxl} {
        top: 85%;
    }
`
