'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Meilisearch } from '@/components/organisms/Meilisearch'
import { X, Menu } from 'lucide-react'

interface Props {
    navigation?: []
    children: React.ReactNode
}

const Navigation = (props: Props) => {
    const pathname = usePathname()

    const [isMenuActive, setIsMenuActive] = useState<boolean>(false)

    const openMenu = () => {
        setIsMenuActive(true)
    }

    const closeMenu = () => {
        setIsMenuActive(false)
    }

    useEffect(() => {
        closeMenu()
    }, [pathname])

    return (
        <nav className="flex md:gap-x-10 md:w-full justify-between z-50">
            <div
                data-ismenuactive={`${isMenuActive}`}
                className={`max-md:data-[ismenuactive=false]:hidden max-md:data-[ismenuactive=true]:fixed max-md:data-[ismenuactive=true]:bg-background md:flex items-center top-0 left-0 max-md:p-16 max-md:w-full max-md:h-full z-50`}
            >
                <button onClick={closeMenu} className="float-end md:hidden">
                    <X />
                </button>
                <div className="font-medium">
                    <ul className="flex flex-col gap-6 text-xl md:text-base md:flex-row font-semibold ">
                        <li>
                            <Link
                                className="hover:text-foreground md:text-muted-foreground"
                                href="/"
                                onClick={closeMenu}
                            >
                                Główna
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-foreground md:text-muted-foreground"
                                href={'/baza-wiedzy'}
                                onClick={closeMenu}
                            >
                                Baza wiedzy
                            </Link>
                        </li>
                        {props.children}
                    </ul>
                </div>
            </div>
            <div className="flex flex-row gap-4">
                <Meilisearch />
                <button className="md:hidden" onClick={openMenu}>
                    <Menu />
                </button>
            </div>
        </nav>
    )
}

export default Navigation
