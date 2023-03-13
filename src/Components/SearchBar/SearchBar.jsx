import { useState } from 'react'
import { useDebounce } from '../../Hooks/useDebounce'
import { SearchResults } from '../SearchResults/SearchResults'
import { IndexDropdown } from '../IndexDropdown/IndexDropdown'
import {
    SearchBarContainer,
    InputContainer,
    StyledSearchBar,
    ItemsContainer,
    Item,
} from './SearchBar.styles'
import { ImGithub } from 'react-icons/im'
import { MdSearch } from 'react-icons/md'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch } from 'react-instantsearch-dom'

const searchClient = instantMeiliSearch(
    import.meta.env.VITE_MEILISEARCH_API,
    import.meta.env.VITE_MEILISEARCH_API_KEY,
    {
        placeholderSearch: true,
        primaryKey: 'id',
        searchAsYouType: true,
    }
)

const searchIndexItems = [
    {
        index: 'number',
        title: 'Telefon',
        placeholder: 'Wyszukaj numer telefonu...',
    },
    {
        index: 'page',
        title: 'Strona',
        placeholder: 'Wyszukaj w tytule lub treści...',
    },
    {
        index: 'tag',
        title: 'Tag',
        placeholder: 'Wyszukaj interesujący cię tag...',
    },
]

export const SearchBar = ({ isOpen }) => {
    // const [searchQuery, setSearchQuery] = useState('')
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const initalState = searchIndexItems[0]
    const [selectedSearchIndex, setSelectedSearchIndex] = useState(initalState)
    // const debounceSearchQuery = useCallback(
    //     useDebounce(searchQuery, 600)
    // ).trim()

    const openSearchResults = () => {
        setIsSearchOpen(true)
    }
    const closeSearchResults = () => {
        setIsSearchOpen(false)
    }
    const handleBlur = (event) => {
        console.log('event.relatedTarget', event.relatedTarget)
        if (!event.currentTarget.contains(event.relatedTarget)) {
            if (isOpen) {
                setOpen(false)
            }
        }
    }
    // useEffect(() => {
    //     if (debounceSearchQuery) {
    //         console.log(debounceSearchQuery)
    //     }
    // }, [debounceSearchQuery])

    return (
        <SearchBarContainer isOpen={isOpen}>
            <InputContainer>
                <InstantSearch
                    indexName={selectedSearchIndex.index}
                    searchClient={searchClient}
                    tabindex="1"
                    onBlur={closeSearchResults}
                >
                    <MdSearch size="3rem" />
                    <StyledSearchBar
                        translations={{
                            resetTitle: 'Usuń szukany tekst',
                            placeholder: `${selectedSearchIndex.placeholder}`,
                        }}
                        searchAsYouType={true}
                        showLoadingIndicator={true}
                        onFocus={openSearchResults}
                    />
                    <IndexDropdown
                        items={searchIndexItems}
                        defaultValue={selectedSearchIndex}
                        setSelectedSearchIndex={setSelectedSearchIndex}
                    />
                    <SearchResults
                        isSearchOpen={isSearchOpen}
                        selectedSearchIndex={selectedSearchIndex}
                        // onBlur={closeSearchResults}
                    />
                </InstantSearch>
            </InputContainer>
            <ItemsContainer>
                <Item href="https://github.com/polishghost27">
                    <ImGithub size="3rem" />
                </Item>
            </ItemsContainer>
        </SearchBarContainer>
    )
}
