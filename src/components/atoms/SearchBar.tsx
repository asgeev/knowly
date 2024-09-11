import { Search } from 'lucide-react'

interface SearchBarProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SearchBar = (props: SearchBarProps) => {
    return (
        <button {...props}>
            <div className="flex min-w-40 flex-row items-center justify-between gap-2 rounded-full border border-transparent bg-color_2 px-4 py-2 duration-500 hover:border-textSecondary hover:transition-all md:min-w-56">
                <span className="text-sm">Wyszukaj...</span>
                <Search size={18} />
            </div>
        </button>
    )
}
