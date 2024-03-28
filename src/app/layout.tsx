import { Roboto } from 'next/font/google'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import './globals.css'
import { ThemeProvider } from 'next-themes'

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
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${roboto.className} bg-background transition duration-600 dark:bg-background`}
            >
                <ThemeProvider attribute="class">
                    <Header />
                    <div className="container px-6">{children}</div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
