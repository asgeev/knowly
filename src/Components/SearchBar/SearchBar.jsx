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
import { ImGithub } from 'react-icons/im'
import { MdSearch } from 'react-icons/md'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import {
    InstantSearch,
    SearchBox,
    Hits,
    Highlight,
    Stats,
    MenuSelect,
    Index,
} from 'react-instantsearch-dom'

const searchClient = instantMeiliSearch(
    import.meta.env.VITE_MEILISEARCH_API,
    import.meta.env.VITE_MEILISEARCH_API_KEY,
    {
        placeholderSearch: false,
        primaryKey: 'id',
        searchAsYouType: true,
    }
)

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
            <InstantSearch indexName="number" searchClient={searchClient}>
                <SearchBox searchAsYouType={true} showLoadingIndicator={true} />

                <Hits hitComponent={Hit}>
                    <Index indexName="number" indexId="unit" />
                    <Index indexName="page" />
                </Hits>
            </InstantSearch>

            {/* <InputContainer>
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
            </InputContainer> */}
            <ItemsContainer>
                <Item href="https://github.com/polishghost27">
                    <ImGithub size="3rem" />
                </Item>
            </ItemsContainer>
        </SearchBarContainer>
    )
}

const Hit = ({ hit }) => {
    return (
        <>
            <Highlight attribute="employeeName" hit={hit} />
            <br></br>
            {/* <Highlight attribute="externalNumber" hit={hit} />
            <br></br>
            <Highlight attribute="internalNumber" hit={hit} />
            <br></br> */}
            <Highlight attribute={['unit', 'unitName']} hit={hit} />
            <Highlight attribute={['section', 'sectionName']} hit={hit} />

            {/* <p>{hit.unit.unitName}</p>
            <p>{hit.section.sectionName}</p> */}

            {console.log(hit)}
        </>
    )
}
