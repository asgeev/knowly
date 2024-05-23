'use client'

import NotificationBarComponent from '@/components/molecules/NotificationBarComponent'

// interface NotificationsProps {
//     type="info"
// }
const Notifications = () => {
    return (
        <div>
            <NotificationBarComponent
                type={'info'}
                textsArray={[
                    'Cios w kieszenie Polaków. Rachunki za prąd wzrosną więcej, niż początkowo zapowiadał rząd ',
                ]}
            />
        </div>
    )
}

export default Notifications
