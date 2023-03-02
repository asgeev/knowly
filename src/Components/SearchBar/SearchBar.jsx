import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from '../../Hooks/useDebounce'
import { SearchResults } from '../SearchResults/SearchResults'
import { Dropdown } from '../Dropdown/Dropdown'
import {
    SearchBarContainer,
    InputContainer,
    StyledSearchBar,
    ItemsContainer,
    Item,
} from './SearchBar.styles'
import styled from 'styled-components'
import { ImGithub } from 'react-icons/im'
import { MdSearch } from 'react-icons/md'

const searchIndexItems = [
    { index: 'number', title: 'numer' },
    { index: 'page', title: 'strona' },
    { index: 'tag', title: 'tag' },
]

export const SearchBar = ({ isOpen }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [selectedSearchIndex, setSelectedSearchIndex] = useState('number')
    const debounceSearchQuery = useCallback(
        useDebounce(searchQuery, 600)
    ).trim()

    const openSearchResults = () => {
        setIsSearchOpen(true)
    }
    const closeSearchResults = () => {
        setIsSearchOpen(false)
    }

    const handleSelectedSearchIndex = (event) => {
        setSelectedSearchIndex(event.target.value)
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
                <Dropdown
                    items={searchIndexItems}
                    handleSelectedSearchIndex={handleSelectedSearchIndex}
                    defaultValue={selectedSearchIndex}
                />
                <SearchResults isSearchOpen={isSearchOpen} />
            </InputContainer>
            {console.log(selectedSearchIndex)}
            <ItemsContainer>
                <Item href="https://github.com/polishghost27">
                    <ImGithub size="3rem" />
                </Item>
            </ItemsContainer>
        </SearchBarContainer>
    )
}
