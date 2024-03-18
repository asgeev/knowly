'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
import RecursiveMenu from './RecursiveMenu'
import { navigation } from '../navigation' // ...
interface Props {
    children: ReactNode
}
const Navigation = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const openMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    //TODO: change function for close menu when nav link clicked

    return (
        <nav className="flex justify-end w-full ">
            <div
                data-ismenuopen={`${isMenuOpen}`}
                className={`max-md:data-[ismenuopen=false]:hidden max-md:data-[ismenuopen=true]:fixed md:flex items-center top-16 left-0 w-full h-full bg-background max-md:p-20 `}
            >
                <div className="font-semibold">
                    <ul className="flex flex-col gap-5 md:gap-10 max-md:text-lg md:flex-row ">
                        <li>
                            <Link
                                className="hover:text-accent"
                                href="/baza-wiedzy"
                                onClick={closeMenu}
                            >
                                Baza wiedzy
                            </Link>
                        </li>
                        <li>
                            <RecursiveMenu
                                path="/intranet"
                                navigation={navigation}
                            >
                                <Link
                                    className="hover:text-accent"
                                    href="/intranet"
                                    onClick={closeMenu}
                                >
                                    Intranet
                                </Link>
                            </RecursiveMenu>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                {props.children}
                <div className="md:hidden">
                    {isMenuOpen ? (
                        <button onClick={closeMenu}>
                            <span className="material-symbols-outlined md-30">
                                close
                            </span>
                        </button>
                    ) : (
                        <button onClick={openMenu}>
                            <span className="material-symbols-outlined md-30">
                                menu
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
