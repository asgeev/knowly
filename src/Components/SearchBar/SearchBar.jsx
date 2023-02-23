import { MdSearch } from 'react-icons/md'
import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from '../../Hooks/useDebounce'
import {
    SearchBarContainer,
    InputContainer,
    StyledSearchBar,
} from './SearchBar.styles'

export const SearchBar = ({ isOpen }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchElements, setSearchElements] = useState([])
    const debounceSearchQuery = useCallback(
        useDebounce(searchQuery, 600)
    ).trim()

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
                    placeholder="Search..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    spellCheck="false"
                ></StyledSearchBar>
            </InputContainer>
        </SearchBarContainer>
    )
}
