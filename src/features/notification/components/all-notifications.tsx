import {
    Notification,
    NotificationProps,
} from '@/features/notification/components/notification'
import { getNotifications } from '@/features/notification/actions/notification-actions'

interface Notification {
    id: string
    attributes: NotificationProps
}

const AllNotifications = async () => {
    const { data: notifications } = await getNotifications()

    return (
        <>
            {notifications?.length ? (
                <div className="flex flex-col gap-3 my-7 mx-1">
                    {notifications?.map((notification: Notification) => {
                        const { text, type, link } = notification?.attributes
                        return (
                            <Notification
                                key={notification.id}
                                type={type}
                                text={text}
                                link={link}
                            />
                        )
                    })}
                </div>
            ) : null}
        </>
    )
}

export default AllNotifications
