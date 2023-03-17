import styled from 'styled-components'
import { useState } from 'react'
import { Hit } from './Hit/Hit'
import {
    Hits,
    Highlight,
    Stats,
    connectStateResults,
} from 'react-instantsearch-dom'

export const ResultsContainer = styled.div`
    visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'visible' : 'hidden')};
    opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6rem;
    left: 0;
    min-height: 100px;
    max-height: 70vh;
    min-width: 100%;
    width: clamp(100%, 150%);
    background-color: ${({ theme }) => theme.color.background100};
    border-radius: 0.6rem;
    padding: 2rem;
    overflow-y: auto;

    .ais-Hits-list {
        list-style: none;
    }

    &::-webkit-scrollbar {
        width: 5px;
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

export const StyledStats = styled(Stats)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
`

export const StyledHitsContainer = styled(Hits)`
    margin-top: 3rem;
    font-size: ${({ theme }) => theme.font.size.small};
`

export const SearchResults = ({ isSearchOpen }) => {
    const [searchElements, setSearchElements] = useState([])

    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <StyledStats />
            <StyledHitsContainer hitComponent={Hit} />
        </ResultsContainer>
    )
}
