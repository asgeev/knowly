import styled from 'styled-components'

export const BackgroundBlurContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    visibility: 1;
    z-index: 9000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
`

export const BlurBackground = () => {
    return <BackgroundBlurContainer></BackgroundBlurContainer>
}
