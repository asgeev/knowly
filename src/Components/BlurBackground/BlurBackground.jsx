import styled from 'styled-components'

export const BackgroundBlurContainer = styled.div`
    position: fixed;
    opacity: 1;
    top: 0;
    left: 0;
    visibility: 1;
    z-index: 9000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(0.5rem);
`

export const BlurBackground = () => {
    return <BackgroundBlurContainer></BackgroundBlurContainer>
}
