import { useInstantSearch } from 'react-instantsearch'
type Props = {
    children: React.ReactNode
    text: string
}

const EmptyQueryBoundary = ({ children, text }: Props) => {
    const { indexUiState } = useInstantSearch()

    if (!indexUiState.query) {
        return (
            <p className="py-16 px-6 text-center text-textSecondary font-medium">
                {text}
            </p>
        )
    }

    return children
}

export default EmptyQueryBoundary
