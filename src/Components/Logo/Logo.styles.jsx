import styled, { keyframes } from 'styled-components'


export const LogoWrapper = styled.a`
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 1rem;
    padding: 1rem 1.8rem;
    position: relative;
    align-items: center;
    /* color: ${({ theme }) => theme.color.accent}; */
    font-family: 'Tilt Neon', cursive;

    &:hover {
        cursor: pointer;
    }
`

const rotate = keyframes`
    from{
        rotate: 0deg;
    }to{
        rotate: -50deg;
    }
`

export const LogoImg = styled.img`
    max-height: 4rem;
    animation: ${rotate} 1s ease-out;
    animation-fill-mode: forwards;
    animation-delay: 1s;
`

export const LogoTitle = styled.span`
    display: none;
    font-size: 2.6rem;
    letter-spacing: 0.35rem;

    ${({ theme }) => theme.mq.sm} {
        display: flex;
    }
`

export const BetaTag = styled.span`
    position: absolute;
    top: 0;
    right: -2.8rem;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: 0.4rem;
    padding: 0.3rem 0.6rem;
    font-size: ${({ theme }) => theme.font.size.ultraSmall};
    color: ${({ theme }) => theme.color.accent};
`