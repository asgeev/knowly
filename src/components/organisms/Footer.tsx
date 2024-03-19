'use client'

import { Logo } from '../atoms/Logo'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from '../atoms/ThemeSwitcher'
const Footer = () => {
    // const { theme, setTheme } = useTheme()

    return (
        <footer className="pt-48 pb-20">
            <div className="flex flex-col gap-12">
                <div className="flex flex-wrap gap-20 justify-between">
                    <Logo />
                    <div className="flex gap-10">
                        <div>
                            <ThemeSwitcher />
                        </div>
                        <div className="relative w-10 h-10 invert dark:invert-0">
                            <Link href="https://github.com/asgeev">
                                <Image
                                    src="/github.svg"
                                    fill
                                    alt="knowly icon"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-20 md:gap-30 lg:gap-36">
                    <div className="max-w-80">
                        <p className="text-lg font-semibold mb-6">Kontakt</p>
                        <div className="text-textSecondary">
                            <p>adam.szymanski@nfz-lublin.pl</p>
                            <p>
                                telefon: <strong>3964</strong>
                            </p>
                        </div>
                    </div>
                    <div className="max-w-80">
                        <p className="text-lg font-semibold mb-6">
                            Dodaj treść
                        </p>
                        <div className="text-textSecondary">
                            <p>
                                Dajemy Ci możliwość tworzenia treści na tym
                                portalu. Skontaktuj się z nami!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
