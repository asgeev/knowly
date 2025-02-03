import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import AllNotifications from '@/features/notification/components/all-notifications'
import NotificationBar from '@/features/notification/components/notification-bar'
import React, { Suspense } from 'react'

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Suspense fallback={null}>
                <NotificationBar />
            </Suspense>
            <Header />
            <Suspense fallback={null}>
                <AllNotifications />
            </Suspense>
            <main className="pb-6">{children}</main>
            <Footer />
        </>
    )
}
