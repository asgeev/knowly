import Link from 'next/link'
import { ChevronRight, Info, CircleAlert, OctagonAlert } from 'lucide-react'

export interface NotificationProps {
    type: 'info' | 'warning' | 'danger'
    text: string
    link?: string
}

export const Notification = (props: NotificationProps) => {
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
                        {type === 'info' && <Info />}
                        {type === 'warning' && <CircleAlert />}
                        {type === 'danger' && <OctagonAlert />}
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
                                <ChevronRight />
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
