import { useState } from 'react'
import { PoweredBy, connectStateResults} from 'react-instantsearch-dom'
import { ResultsContainer} from "./SearchResults.styles"
import { CustomResultsBox } from './CustomResultsBox/CustomResultsBox'



const ResultsBox = connectStateResults(CustomResultsBox)

export const SearchResults = ({ isSearchOpen, selectedSearchIndex }) => {
    const [searchElements, setSearchElements] = useState([])

    return (
        <ResultsContainer isSearchOpen={isSearchOpen}>
            <ResultsBox selectedSearchIndex={selectedSearchIndex} />

            <PoweredBy
                translations={{
                    searchBy: 'Search by',
                }}
            />
        </ResultsContainer>
    )
}
