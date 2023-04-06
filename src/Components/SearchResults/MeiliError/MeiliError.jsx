import astronaut_error from '../.././../assets/astronaut_error.png'

import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
    0% {
        opacity: 0;
        visibility: hidden;
    }
    100%{
        opacity: 1;
        visibility: visible;

    }
`
export const ImgContainer = styled.div`
    align-items: center;
    margin-bottom: 3rem;
    flex-direction: column;
    display: flex;
    inset: 0;
    animation: ${FadeIn} 0.8s forwards;
    font-family: 'Tilt Neon', cursive;

    p {
        color: ${({ theme }) => theme.color.secondaryText};
    }
`
export const StyledH1 = styled.h1`
    letter-spacing: 5px;
`

export const Img = styled.img`
    max-height: 200px;
    margin-top: 2rem;
`

export const MeiliError = () => {
    return (
        <ImgContainer>
            <StyledH1>Ciiiiii!</StyledH1>
            <p>Astronauta teraz śpi. Spróbuj ponownie później.</p>
            <Img src={astronaut_error} />
        </ImgContainer>
    )
}
