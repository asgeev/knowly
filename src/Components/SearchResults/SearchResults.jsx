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

export const SearchResults = ({ isSearchOpen }) => {
    const [searchElements, setSearchElements] = useState([])

    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <span>Wpisz wydział, dział, nazwisko lub imię</span>
        </ResultsContainer>
    )
}

const Hit = ({ hit }) => {
    return (
        <>
            {console.log(hit)}
            <Highlight attribute="employeeName" hit={hit} />
            <br></br>
            <Highlight attribute="externalNumber" hit={hit} />
            <br></br>
            <Highlight attribute="externalNumber" hit={hit} />
        </>
    )
}
