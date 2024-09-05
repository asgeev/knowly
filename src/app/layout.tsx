import { Inter } from 'next/font/google'
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

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
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
                        <Notifications />
                    </Suspense>
                    <main className="pb-6">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
