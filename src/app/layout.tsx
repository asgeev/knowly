import { Poppins } from 'next/font/google'
import Footer from '../components/organisms/Footer'
import Header from '../components/organisms/Header'
import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
    title: 'Knowly',
    description: 'Portal knowly',
}

const poppins = Poppins({
    weight: '400',
    variable: '--font-poppins',
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
            <body className={`${poppins.className}`}>
                <ThemeProvider attribute="class">
                    <div className="container px-6">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
