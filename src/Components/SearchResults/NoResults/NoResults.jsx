import astronaut from '../.././../assets/astronaut_question.png'
import styled, { keyframes } from 'styled-components'

const FadeOut = keyframes`
    0% {
        opacity: 1;
        visibility: visible;
    }
    100%{
        opacity: 0;
    }
`
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
    display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
    inset: 0;
    animation: ${FadeIn} 0.8s forwards;
    visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
    opacity: ${({ hidden }) => (hidden ? '0' : '1')};
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

export const NoResults = ({ hidden }) => {
    return (
        <ImgContainer hidden={hidden}>
            <StyledH1>Rakieta!</StyledH1>
            <p>Niczego nie znaleźliśmy!</p>
            <Img src={astronaut} />
        </ImgContainer>
    )
}
