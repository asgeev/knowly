type Props = {
    categoryColor: string | undefined
    categoryText: string
}

export default function BadgeCustom(props: Props) {
    return (
        <div
            className={` text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5`}
            style={{
                backgroundColor: props.categoryColor
                    ? props.categoryColor
                    : 'white',
            }}
        >
            <p className="text-xs font-semibold">{props.categoryText}</p>
        </div>
    )
}
