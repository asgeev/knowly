import { Poppins } from 'next/font/google'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'

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
        <html lang="pl">
            <body className={`${poppins.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
