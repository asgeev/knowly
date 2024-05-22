interface NotificationBarProps {
    type: 'info' | 'warning' | 'danger'
    textsArray: Array<string>
}

const NotificationBar = (props: NotificationBarProps) => {
    return (
        <div
            className={`${props.type === 'info' && 'bg-info '} ${props.type === 'warning' && 'bg-warning'} ${props.type === 'danger' && 'bg-danger text-warning'} py-2`}
        >
            <div className={'container mx-auto px-1 flex gap-3'}>
                <span className="material-symbols-outlined">error</span>
                <div className={'font-medium'}>
                    {props.textsArray.map((text) => {
                        return <p className={'text-base'}>{text}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default NotificationBar
