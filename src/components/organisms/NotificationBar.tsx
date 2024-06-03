import { getNotificationBar } from '@/app/actions'

const NotificationBar = async () => {
    const { data } = await getNotificationBar()

    return (
        <>
            {data && (
                <div className={'bg-info'}>
                    <div className={'container px-1 py-2'}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data?.attributes?.content,
                            }}
                            className={
                                'text-white text-[14px] tracking-wide font-medium text-center'
                            }
                        ></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NotificationBar
