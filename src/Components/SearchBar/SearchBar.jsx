import { useContext, useState } from 'react'
import { useDebounce } from '../../Hooks/useDebounce'
import { SearchResults } from '../SearchResults/SearchResults'
import { IndexDropdown } from '../IndexDropdown/IndexDropdown'
import { BlurBackground } from '../BlurBackground/BlurBackground'
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
import { InstantSearch, Configure } from 'react-instantsearch-dom'
import { SearchBarContext } from '../../Context/SearchBarContext'

const searchClient = instantMeiliSearch(
    import.meta.env.VITE_MEILISEARCH_API,
    import.meta.env.VITE_MEILISEARCH_API_SEARCH_KEY,
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
]

export const SearchBar = ({ isOpen }) => {
    const initalState = searchIndexItems[0]
    const [selectedSearchIndex, setSelectedSearchIndex] = useState(initalState)
    const { isSearchOpen, openSearchResults, closeSearchResults } =
        useContext(SearchBarContext)

    //Code for debouncing search value
    // const debounceSearchQuery = useCallback(
    //     useDebounce(searchQuery, 600)
    // ).trim()

    // useEffect(() => {
    //     if (debounceSearchQuery) {
    //         console.log(debounceSearchQuery)
    //     }
    // }, [debounceSearchQuery])

    return (
        <SearchBarContainer isOpen={isOpen}>
            <InstantSearch
                indexName={selectedSearchIndex.index}
                searchClient={searchClient}
                attributesToCrop={['content']}
            >
                {isSearchOpen ? <BlurBackground /> : null}
                <InputContainer
                    tabIndex={1}
                    onBlur={(e) => {
                        // console.log('focusout (self or child)')
                        if (e.currentTarget === e.target) {
                            console.log('blur (self)')
                        }
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                            closeSearchResults()
                        }
                    }}
                >
                    <MdSearch size="3rem" />
                    <StyledSearchBar
                        showLoadingIndicator={true}
                        onFocus={openSearchResults}
                        focusShortcuts={['s']}
                        translations={{
                            resetTitle: 'Usuń szukany tekst',
                            placeholder: `${selectedSearchIndex.placeholder}`,
                        }}
                        searchAsYouType
                    />
                    <Configure
                        hitsPerPage={30}
                        analytics={false}
                        attributesToSnippet={['content']}
                    />
                    <IndexDropdown
                        items={searchIndexItems}
                        defaultValue={selectedSearchIndex}
                        setSelectedSearchIndex={setSelectedSearchIndex}
                        closeSearchResults={closeSearchResults}
                    />
                    <SearchResults
                        isSearchOpen={isSearchOpen}
                        selectedSearchIndex={selectedSearchIndex}
                    />
                </InputContainer>
            </InstantSearch>
            <ItemsContainer>
                <Item href="https://github.com/polishghost27">
                    <ImGithub size="3rem" />
                </Item>
            </ItemsContainer>
        </SearchBarContainer>
    )
}
