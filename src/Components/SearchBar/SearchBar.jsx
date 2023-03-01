import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDebounce } from '../../Hooks/useDebounce'
import { SearchResults } from '../SearchResults/SearchResults'
import {
    SearchBarContainer,
    InputContainer,
    StyledSearchBar,
} from './SearchBar.styles'
import styled from 'styled-components'
import { ImGithub } from 'react-icons/im'
import { MdSearch } from 'react-icons/md'

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

export const SearchBar = ({ isOpen }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchElements, setSearchElements] = useState([])
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const debounceSearchQuery = useCallback(
        useDebounce(searchQuery, 600)
    ).trim()

    const openSearchResults = () => {
        setIsSearchOpen(true)
    }
    const closeSearchResults = () => {
        setIsSearchOpen(false)
    }

    useEffect(() => {
        if (debounceSearchQuery) {
            console.log(debounceSearchQuery)
        }
    }, [debounceSearchQuery])

    return (
        <SearchBarContainer isOpen={isOpen}>
            <InputContainer>
                <MdSearch size="3rem" />
                <StyledSearchBar
                    type="text"
                    placeholder="Wyszukaj numer telefonu, tag lub stronę"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    spellCheck="false"
                    onFocus={openSearchResults}
                    onBlur={closeSearchResults}
                ></StyledSearchBar>
                <SearchResults isSearchOpen={isSearchOpen} />
            </InputContainer>
            <ItemsContainer>
                <Item href="https://github.com/polishghost27">
                    <ImGithub size="3rem" />
                </Item>
            </ItemsContainer>
        </SearchBarContainer>
    )
}
