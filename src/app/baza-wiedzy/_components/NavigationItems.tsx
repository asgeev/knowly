'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { NavigationLink } from './NavigationLink'
import { NavigationNested } from './NavigationNested'
import { ChevronRight } from 'lucide-react'

type Props = {
    navigation: []
}

export const NavigationItems = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    //Navigation object as prop
    const navigation = props.navigation

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    useEffect(() => {
        setIsMenuOpen(false) // close menu if path changes!
    }, [pathname])

    return (
        <>
            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-1 hover:text-accent"
                >
                    Menu
                    <ChevronRight />
                </button>
            </div>
            <div
                data-ismenuopen={`${isMenuOpen}`}
                className="max-lg:data-[ismenuopen=false]:max-h-0 max-lg:data-[ismenuopen=true]:max-h-96  transition-all overflow-y-auto md:max-h-[calc(100vh_-_136px)]"
            >
                <div className="text-sm">
                    {navigation?.map((element: any) => {
                        return (
                            <div key={element.id} className="py-1.5">
                                <NavigationLink
                                    item={element}
                                    className="font-medium inline-block py-1"
                                    href={''}
                                />

                                {element.items && (
                                    <NavigationNested
                                        key={element.title}
                                        items={element.items}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
