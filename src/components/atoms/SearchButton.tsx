type Props = {
    openMeilisearch: () => void
}

export const SearchButton = (props: Props) => {
    return (
        <button onClick={props.openMeilisearch}>
            <span className="material-symbols-outlined md-30">search</span>
        </button>
    )
}
