import { Search } from 'lucide-react'

type Props = {
    openMeilisearch: () => void
}

export const SearchButton = (props: Props) => {
    return (
        <button {...props} onClick={props.openMeilisearch}>
            <div
                className="flex min-w-40 flex-row items-center justify-between gap-2 rounded-full border border-border bg-muted px-4 py-2 duration-500 hover:border-textSecondary hover:transition-all md:min-w-56">
                <span className="text-sm">Wyszukaj...</span>
                <Search size={18} />
            </div>
        </button>
)
}
