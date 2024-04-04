'use client'

import { useState } from 'react'

type Props = {
    navigation: []
}

export const NavigationItems = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigation = props.navigation

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <>
            <div className="max-md:mb-10  md:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-1 text-accent"
                >
                    Menu
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
            </div>
            <div
                data-ismenuopen={`${isMenuOpen}`}
                className="max-md:data-[ismenuopen=false]:max-h-0 max-md:data-[ismenuopen=true]:max-h-96  transition-all overflow-y-auto md:max-h-[calc(100vh_-_136px)]"
            >
                <div className="">
                    {navigation?.map((element) => {
                        return <p>{element?.title}</p>
                    })}
                    <ul className="my-10">
                        <li>test</li>
                        <li>test</li>

                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>

                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                    <ul>
                        <li>test</li>
                        <li>test</li>

                        <li>test</li>

                        <li>test</li>

                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                        <li>tesat</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
