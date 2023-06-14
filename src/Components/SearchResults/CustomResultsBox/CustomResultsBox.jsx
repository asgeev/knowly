import { PhoneHit } from '../Hit/PhoneHit'
import { NoResults } from '../NoResults/NoResults'
import { TypeForResults } from '../TypeForResults/TypeForResults'
import { MeiliError } from '../MeiliError/MeiliError'
import { StyledStats, StyledHitsContainer} from "./CustomResultsBox.styles"
import {PageHit} from '../Hit/PageHit'




export const CustomResultsBox = ({
    searchState,
    searchResults,
    selectedSearchIndex,
    error,
}) => {
    const hasResults = searchResults && searchResults.nbHits !== 0
    const nbHits = searchResults && searchResults.nbHits

    const searchIndex = selectedSearchIndex.index

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
            return PhoneHit;
        case 'page':
            return PageHit;
        default:
            console.log('Unknow search index');
}}


