import { Hit } from '../Hit/Hit'
import { NoResults } from '../NoResults/NoResults'
import { TypeForResults } from '../TypeForResults/TypeForResults'
import { MeiliError } from '../MeiliError/MeiliError'
import { StyledStats, StyledHitsContainer} from "./CustomResultsBox.styles"





export const CustomResultsBox = ({
    searchState,
    searchResults,
    selectedSearchIndex,
    error,
}) => {
    const hasResults = searchResults && searchResults.nbHits !== 0
    const nbHits = searchResults && searchResults.nbHits

    const searchIndex = selectedSearchIndex.index

    console.log(selectedSearchIndex)
    return (
        <>
            {error ? (
                <MeiliError />
            ) : (
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
                                        return areHitsSorted &&
                                            nbHits !== nbSortedHits
                                            ? `${nbSortedHits.toLocaleString()} relevant results sorted out of ${nbHits.toLocaleString()} found in ${processingTimeMS.toLocaleString()}ms`
                                            : `${nbHits.toLocaleString()} wyników znaleziono w ${processingTimeMS.toLocaleString()}ms`
                                    },
                                }}
                            />
                            <StyledHitsContainer hitComponent={switchHitComponent(searchIndex)} />
                            <NoResults hidden={hasResults} />
                        </>
                    ) : (
                        <TypeForResults
                            selectedSearchIndex={selectedSearchIndex}
                        />
                    )}
                </>
            )}
        </>
    )
}

const switchHitComponent = (searchIndex) => {

    switch(searchIndex) {
        case 'number':
            return Hit;
        case 'page':
            return pageHit;
        default:
            console.log('Unknow search index');
}}


const pageHit = (a) => {
    console.log(a)
}