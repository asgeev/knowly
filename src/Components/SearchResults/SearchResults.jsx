import styled from 'styled-components'

export const ResultsContainer = styled.div`
    display: ${({ isSearchOpen }) => (isSearchOpen ? 'flex' : 'none')};
    position: absolute;
    top: 6rem;
    left: 0;
    min-height: 100px;
    width: 100%;
    background-color: ${({ theme }) => theme.color.background100};
    border-radius: 0.6rem;
    padding: 2rem;
    overflow-y: auto;
`

export const SearchResults = ({ isSearchOpen }) => {
    console.log(isSearchOpen)
    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <span>Wpisz wydział, dział, nazwisko lub imię</span>
        </ResultsContainer>
    )
}
