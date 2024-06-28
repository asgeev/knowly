import { Roboto } from 'next/font/google'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Notifications from '@/components/organisms/Notifications'
import NotificationBar from '@/components/organisms/NotificationBar'
import React, { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'

export const metadata = {
    title: 'Knowly',
    description: 'Portal knowly',
}

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto',
    subsets: ['latin'],
    display: 'swap',
})

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
            <body
                className={`${roboto.className} bg-primary transition duration-600 dark:bg-primary`}
            >
                <NextTopLoader
                    color="#fed300"
                    showSpinner={false}
                    shadow={false}
                />
                <ThemeProvider attribute="class">
                    <Suspense fallback={null}>
                        <NotificationBar />
                    </Suspense>
                    <Header />
                    <Suspense fallback={null}>
                        <Notifications />
                    </Suspense>
                    <main className="pb-6">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
