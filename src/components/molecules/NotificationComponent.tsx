import Link from 'next/link'

export interface NotificationComponentProps {
    type: 'info' | 'warning' | 'danger'
    text: string
    link?: string
}

const NotificationComponent = (props: NotificationComponentProps) => {
    const { type, text, link } = props

    return (
        <div>
            <div
                className={`container mx-auto flex  items-center px-4 py-3 md:px-10 md:py-4 rounded-full text-white ${type === 'info' && 'bg-info'} ${type === 'warning' && 'bg-warning'} ${type === 'danger' && 'bg-danger'}`}
                title={text}
            >
                <div
                    className={'flex gap-3 items-center justify-between w-full'}
                >
                    <div className={'flex gap-4 items-center'}>
                        <span className="material-symbols-outlined">
                            {type === 'info' && 'info'}
                            {type === 'warning' && 'warning'}
                            {type === 'danger' && 'error'}
                        </span>
                        <p
                            className={
                                'text-sm md:text-base font-medium line-clamp-1'
                            }
                        >
                            {text}
                        </p>
                    </div>
                    {link && (
                        <Link href={link}>
                            <div
                                className={
                                    'flex items-center gap-2 whitespace-nowrap'
                                }
                            >
                                <span
                                    className={
                                        'max-md:hidden text-sm font-bold hover:underline'
                                    }
                                >
                                    Zobacz więcej
                                </span>
                                <span className="material-symbols-outlined md-18">
                                    arrow_forward
                                </span>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NotificationComponent
