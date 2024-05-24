import { Roboto } from 'next/font/google'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Notifications from '@/components/organisms/Notifications'
import NotificationBar from '@/components/organisms/NotificationBar'

export const metadata = {
    title: 'Knowly',
    description: 'Portal knowly',
}

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto',
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl" suppressHydrationWarning>
            <head>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <title>Knowly</title>
            </head>
            <body
                className={`${roboto.className} bg-primary transition duration-600 dark:bg-primary`}
            >
                <ThemeProvider attribute="class">
                    <NotificationBar />
                    <Header />
                    <Notifications />
                    <main className="pb-6">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
