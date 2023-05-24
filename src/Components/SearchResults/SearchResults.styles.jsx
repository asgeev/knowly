import styled from 'styled-components'



export const ResultsContainer = styled.div`
    visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'visible' : 'hidden')};
    opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6rem;
    left: 0;
    min-height: 100px;
    max-height: 72vh;
    min-width: 100%;
    background-color: ${({ theme }) => theme.color.background100};
    border-radius: 0.6rem;
    padding: 2rem 2rem 0 2rem;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;

    .ais-Hits-list {
        list-style: none;
    }

    .ais-Hits-item {
        border-bottom: 1px solid ${({ theme }) => theme.color.dividerPrimary};
    }

    .ais-PoweredBy {
        display: flex;
        align-items: flex-start;
        margin: 2rem 0;
        justify-content: center;

        span {
            color: ${({ theme }) => theme.color.secondaryText};
            font-size: ${({ theme }) => theme.font.size.small};
        }
        svg {
            height: 2.2rem;
        }
    }

    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }
`

