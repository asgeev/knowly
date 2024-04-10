type Props = {
    text: string
}

export const Tag = (props: Props) => {
    return (
        <div className="bg-color_1 rounded-full text-sm md:text-base px-5 py-2 hover:border-orange-500  whitespace-nowrap">
            <span>{props.text}</span>
        </div>
    )
}
