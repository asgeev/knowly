import { Search } from 'lucide-react'

type Props = {
    openMeilisearch: () => void
}

export const SearchButton = (props: Props) => {
    return (
        <button onClick={props.openMeilisearch}>
            <Search />
        </button>
    )
}
