import React from 'react'
import { useInstantSearch } from 'react-instantsearch'

type Props = {
    children: React.ReactNode
}

const NoResultsBoundary = ({ children }: Props) => {
    const { results } = useInstantSearch()

    // The `__isArtificial` flag makes sure not to display the No Results message
    // when no hits have been returned.
    if (!results.__isArtificial && results.nbHits === 0) {
        return (
            <>
                <div hidden>{children}</div>
            </>
        )
    }

    return children
}

export default NoResultsBoundary
