import NotificationComponent from '@/components/molecules/NotificationComponent'
import { getNotifications } from '@/app/actions'
import { NotificationComponentProps } from '@/components/molecules/NotificationComponent'

interface Notification {
    id: string
    attributes: NotificationComponentProps
}

const Notifications = async () => {
    const { data: notifications } = await getNotifications()

    return (
        <>
            {notifications?.length ? (
                <div className="flex flex-col gap-3 my-7 mx-1">
                    {notifications?.map((notification: Notification) => {
                        const { text, type, link } = notification?.attributes
                        return (
                            <NotificationComponent
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

export default Notifications
