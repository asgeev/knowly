'use client'

import Link from 'next/link'
import { ReactNode, useState } from 'react'
// ...
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

    return (
        <nav className="flex justify-end w-full ">
            <div
                data-ismenuopen={`${isMenuOpen}`}
                className={`max-md:data-[ismenuopen=false]:hidden max-md:data-[ismenuopen=true]:fixed md:flex items-center top-16 left-0 w-full h-full bg-background`}
            >
                <div className="font-semibold">
                    <ul className="flex flex-col gap-10 md:flex-row">
                        <li>
                            <Link href="/baza-wiedzy">Baza wiedzy</Link>
                        </li>
                        <li>
                            <Link href="/intranet">Intranet</Link>
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
