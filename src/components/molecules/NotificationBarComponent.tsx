interface NotificationBarProps {
    type: 'info' | 'warning' | 'danger'
    textsArray: Array<string>
}

const NotificationBarComponent = (props: NotificationBarProps) => {
    return (
        <div className="flex flex-col gap-2">
            {/*<div*/}
            {/*    className={`${props.type === 'info' && 'bg-info '} ${props.type === 'warning' && 'bg-warning'} ${props.type === 'danger' && 'bg-danger'} py-2`}*/}
            {/*>*/}
            {/*    <div className={'container mx-auto px-1 flex gap-3 text-black'}>*/}
            {/*        <span className="material-symbols-outlined">error</span>*/}
            {/*        <div className={'font-medium '}>*/}
            {/*            {props.textsArray.map((text) => {*/}
            {/*                return <p className={'text-base'}>{text}</p>*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <div
                    className={
                        'container mx-auto flex gap-3 bg-blue-600 px-5 py-3 rounded-3xl text-white'
                    }
                >
                    <span className="material-symbols-outlined">error</span>
                    <div className={'font-medium '}>
                        {props.textsArray.map((text) => {
                            return <p className={'text-base'}>{text}</p>
                        })}
                    </div>
                </div>
            </div>
            <div>
                <div
                    className={
                        'container mx-auto flex gap-3 bg-danger px-5 py-3 rounded-3xl text-white'
                    }
                >
                    <span className="material-symbols-outlined">error</span>
                    <div className={'font-medium'}>
                        {props.textsArray.map((text) => {
                            return (
                                <p className={'text-base line-clamp-1'}>
                                    {text}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationBarComponent
