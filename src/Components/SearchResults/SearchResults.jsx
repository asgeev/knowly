import styled from 'styled-components'
import { useState } from 'react'
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
    max-height: 50vh;
    min-width: 100%;
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

export const StyledHit = styled.div`
    /* background-color: ${({ theme }) => theme.color.background}; */
    border-radius: 0.6rem;
    padding: 1rem 0;
    /* margin: 2rem 1rem 0 1rem; */
`

export const HitHighlight = styled(Highlight)`
    .ais-Highlight-highlighted {
        color: ${({ theme }) => theme.color.accent};
        /* background-color: yellow; */
        list-style: none;
    }

    color: ${({ accent, theme }) =>
        accent ? theme.color.accent : theme.color.primaryText};
`

export const StyledHitsContainer = styled(Hits)``

export const SearchResults = ({ isSearchOpen }) => {
    const [searchElements, setSearchElements] = useState([])

    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <StyledStats />
            <StyledHitsContainer hitComponent={Hit} />
        </ResultsContainer>
    )
}

const Hit = ({ hit }) => {
    return (
        <StyledHit>
            {/* {console.log(hit)} */}
            <HitHighlight attribute="employeeFirstName" hit={hit} />{' '}
            <HitHighlight attribute="employeeLastName" hit={hit} />
            <></>
            <HitHighlight accent attribute="internalNumber" hit={hit} />{' '}
            <HitHighlight attribute="externalNumber" hit={hit} />
            <div>
                <br></br>
                <HitHighlight attribute={['unit', 'unitName']} hit={hit} />
                <br></br>
                <HitHighlight
                    attribute={['section', 'sectionName']}
                    hit={hit}
                />
            </div>
        </StyledHit>
    )
}
