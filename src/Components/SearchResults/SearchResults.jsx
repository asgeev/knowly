import styled from 'styled-components'
import { useState } from 'react'
import { Hit } from './Hit/Hit'
import {
    Hits,
    Stats,
    PoweredBy,
    connectStateResults,
} from 'react-instantsearch-dom'
import { NoResults } from './NoResults/NoResults'

export const ResultsContainer = styled.div`
    visibility: ${({ isSearchOpen }) => (isSearchOpen ? 'visible' : 'hidden')};
    opacity: ${({ isSearchOpen }) => (isSearchOpen ? 1 : 0)};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 6rem;
    left: 0;
    min-height: 100px;
    max-height: 82vh;
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
        align-items: center;
        margin: 2rem 0rem 2rem 0;
        justify-content: center;
        gap: 1rem;
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

export const StyledStats = styled(Stats)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
`

export const StyledHitsContainer = styled(Hits)`
    margin-top: 3rem;
`

const CustomResultsBox = ({ searchState, searchResults, searching }) => {
    const hasResults = searchResults && searchResults.nbHits !== 0
    const nbHits = searchResults && searchResults.nbHits
    // console.log(searchResults)
    return (
        <>
            {searchState && searchState.query ? (
                <>
                    <StyledStats
                        translations={{
                            stats(
                                nbHits,
                                processingTimeMS,
                                nbSortedHits,
                                areHitsSorted
                            ) {
                                return areHitsSorted && nbHits !== nbSortedHits
                                    ? `${nbSortedHits.toLocaleString()} relevant results sorted out of ${nbHits.toLocaleString()} found in ${processingTimeMS.toLocaleString()}ms`
                                    : `${nbHits.toLocaleString()} wyników znaleziono w ${processingTimeMS.toLocaleString()}ms`
                            },
                        }}
                    />
                    <StyledHitsContainer hitComponent={Hit} />
                </>
            ) : (
                <>
                    <div>
                        <p>Napisz cokolwiek aby wyszukać</p>
                    </div>
                </>
            )}

            <NoResults hidden={hasResults} />
        </>
    )
}

const ResultsBox = connectStateResults(CustomResultsBox)

export const SearchResults = ({ isSearchOpen }) => {
    const [searchElements, setSearchElements] = useState([])

    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <ResultsBox />

            <PoweredBy
                translations={{
                    searchBy: 'Search by',
                }}
            />
        </ResultsContainer>
    )
}
