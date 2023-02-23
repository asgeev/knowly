import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    position: sticky;
    top: 0;
    top: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background};
    left: 0;
    padding: 2rem;
    justify-content: center;
    z-index: 300;

    ${({ theme }) => theme.mq.lg} {
        position: sticky;
        top: 0;
        left: 0;
        max-width: 100%;
        padding: 1.5rem 3rem;
        padding-left: 6rem;
        /* background-color: ${({ theme }) => theme.color.background100}; */
        border-bottom: 1px solid ${({ theme }) => theme.color.background100};
        justify-content: flex-start;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    border-radius: 0.5rem;

    /* padding: 1rem 1.5rem; */
    /* background-color: ${({ theme }) => theme.color.background300}; */

    ${({ theme }) => theme.mq.sm} {
        max-width: ${({ theme }) => theme.containerSize.sm};
    }
    ${({ theme }) => theme.mq.md} {
        max-width: ${({ theme }) => theme.containerSize.md};
    }

    ${({ theme }) => theme.mq.lg} {
        max-width: ${({ theme }) => theme.containerSize.md};
    }
`

export const StyledSearchBar = styled.input`
    all: unset;
    width: 100%;
    padding: 1rem;
`
