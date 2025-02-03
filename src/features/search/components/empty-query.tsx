import { useInstantSearch } from 'react-instantsearch'
import React from 'react'
type Props = {
    children: React.ReactNode
    text: string
}

const EmptyQuery = ({ children, text }: Props) => {
    const { indexUiState } = useInstantSearch()

    if (!indexUiState.query) {
        return (
            <p className="py-16 px-6 text-center text-muted-foreground font-medium">
                {text}
            </p>
        )
    }

    return children
}

export default EmptyQuery
