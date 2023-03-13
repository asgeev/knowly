import styled from 'styled-components'
import { useState } from 'react'
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    Stats,
    MenuSelect,
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
    max-height: 60vh;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background100};
    border-radius: 0.6rem;
    padding: 2rem;
    overflow-y: auto;
    transition: all 200ms ease-in-out;
`

export const StyledStats = styled(Stats)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
`

export const SearchResults = ({ isSearchOpen }) => {
    const [searchElements, setSearchElements] = useState([])

    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <StyledStats />
            <Hits hitComponent={Hit} />
        </ResultsContainer>
    )
}

const Hit = ({ hit }) => {
    return (
        <>
            {console.log(hit)}
            <A attribute="employeeName" hit={hit} />
            <br></br>
            <A attribute="externalNumber" hit={hit} />
            <br></br>
            <A attribute={['unit', 'unitName']} hit={hit} />
        </>
    )
}

const A = styled(Highlight)`
    .ais-Highlight-highlighted {
        color: ${({ theme }) => theme.color.accent};
        background-color: yellow;
        list-style: none;
    }
`
