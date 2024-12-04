import Footer from '@/components/organisms/footer'
import Header from '@/components/organisms/header'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import AllNotifications from '@/features/notification/components/all-notifications'
import NotificationBar from '@/features/notification/components/notification-bar'
import React, { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from '@/components/ui/sonner'
import localFont from 'next/font/local'

export const metadata = {
    title: 'Knowly',
    description: 'Portal knowly',
}

const inter = localFont({
    src: './inter.ttf',
    variable: '--font-inter',
})

//Fix for building error
export const dynamic = 'force-dynamic'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" suppressHydrationWarning>
            <head>
                <title>Knowly</title>
            </head>
            <body className={`${inter.className} transition duration-600`}>
                <NextTopLoader
                    color="white"
                    showSpinner={false}
                    shadow={false}
                />
                <ThemeProvider attribute="class">
                    <Suspense fallback={null}>
                        <NotificationBar />
                    </Suspense>
                    <Header />
                    <Suspense fallback={null}>
                        <AllNotifications />
                    </Suspense>
                    <main className="pb-6">{children}</main>
                    <Footer />
                </ThemeProvider>
                <Toaster position="top-right" richColors />
            </body>
        </html>
    )
}
