'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import RecursiveMenu from './NavigationLinks'
import { usePathname } from 'next/navigation'

interface Props {
    navigation: []
}

const Navigation = (props: Props) => {
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    useEffect(() => {
        closeMenu()
    }, [pathname])

    //TODO: change function for close menu when nav link clicked
    return (
        <nav className="flex md:gap-x-10 md:w-full justify-between">
            <div
                data-ismenuopen={`${isMenuOpen}`}
                className={`max-md:data-[ismenuopen=false]:hidden max-md:data-[ismenuopen=true]:fixed md:flex items-center top-0 left-0 max-md:p-16 max-md:w-full max-md:h-full bg-background z-10`}
            >
                <button onClick={closeMenu} className="float-end md:hidden">
                    <span className="material-symbols-outlined md-30">
                        close
                    </span>
                </button>
                <div className="font-semibold">
                    <ul className="flex flex-col gap-10 text-xl md:text-lg md:flex-row">
                        <li>
                            <Link
                                className={`text-textSecondary hover:text-textPrimary ${
                                    pathname === '/baza-wiedzy'
                                        ? 'text-accent'
                                        : ''
                                }`}
                                href="/baza-wiedzy"
                                onClick={closeMenu}
                            >
                                Baza wiedzy
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`text-textSecondary hover:text-textPrimary ${
                                    pathname === '/baza-wiedzy'
                                        ? 'text-accent'
                                        : ''
                                }`}
                                href="/aktualnosci"
                                onClick={closeMenu}
                            >
                                Aktualności
                            </Link>
                        </li>
                        <li>
                            <RecursiveMenu
                                path="/intranet"
                                navigation={props.navigation}
                                isMenuOpen={isMenuOpen}
                            >
                                <Link
                                    className="text-textSecondary hover:text-textPrimary"
                                    href="/intranet"
                                    onClick={closeMenu}
                                >
                                    <p>Intranet</p>
                                </Link>
                            </RecursiveMenu>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <div>
                    <span className="material-symbols-outlined md-30">
                        search
                    </span>
                </div>
                <div className="md:hidden">
                    <button onClick={openMenu}>
                        <span className="material-symbols-outlined md-30">
                            menu
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
