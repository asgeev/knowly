import styled from 'styled-components'

import { SearchBox } from 'react-instantsearch-dom'

export const SearchBarContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
    position: sticky;
    /* top: 0; */
    top: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background};
    left: 0;
    padding: 2rem;
    justify-content: center;
    z-index: 300;
    border-bottom: 1px solid ${({ theme }) => theme.color.background100};

    ${({ theme }) => theme.mq.lg} {
        position: sticky;
        top: 0;
        left: 0;
        max-width: 100%;
        padding-left: 6rem;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    gap: 0.5rem;
    z-index: 9001;
    border-radius: 0.6rem;
    font-size: ${({ theme }) => theme.font.size.small};
    padding: 0.2rem 1rem 0.2rem 1rem;
    background-color: ${({ theme }) => theme.color.background100};

    &:has(input:focus) {
        outline: 1px solid ${({ theme }) => theme.color.accent};
    }

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

export const StyledSearchBar = styled(SearchBox)`
    width: 100%;

    form {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    input[type='search'] {
        all: unset;
        width: 100%;
        padding: 1rem;
    }
    input[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    button[type='submit'] {
        display: none;
    }

    button[type='reset'] {
        padding: 0.5rem;
        text-transform: none;
        background-color: unset;
        border: none;

        svg.ais-SearchBox-resetIcon {
            width: 1rem;
            height: 1rem;
            fill: ${({ theme }) => theme.color.secondaryText};
        }
    }
`

export const ItemsContainer = styled.div`
    display: none;
    ${({ theme }) => theme.mq.lg} {
        display: flex;
        gap: 0.5rem;
    }
`

export const Item = styled.a`
    display: flex;
    align-items: center;

    :visited {
        color: white;
    }
    :hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 300ms ease-in-out;
    }
`
