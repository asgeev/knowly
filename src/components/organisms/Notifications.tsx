'use client'

import NotificationBar from '@/components/molecules/NotificationBar'

const Notifications = () => {
    return (
        <div>
            <NotificationBar
                type={'danger'}
                textsArray={[
                    'Cios w kieszenie Polaków. Rachunki za prąd wzrosną więcej, niż początkowo zapowiadał rząd ',
                ]}
            />
            <NotificationBar
                type={'info'}
                textsArray={[
                    'Cios w kieszenie Polaków. Rachunki za prąd wzrosną więcej, niż początkowo zapowiadał rząd ',
                ]}
            />
        </div>
    )
}

export default Notifications
