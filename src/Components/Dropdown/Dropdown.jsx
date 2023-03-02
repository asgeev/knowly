export const Dropdown = ({
    items = [],
    handleSelectedSearchIndex,
    defaultValue,
}) => {
    return (
        <select onChange={handleSelectedSearchIndex} value={defaultValue}>
            {items.map((item) => {
                return (
                    <option key={item.index} value={item.index}>
                        {item.title}
                    </option>
                )
            })}
        </select>
    )
}
