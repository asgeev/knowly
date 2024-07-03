'use client'

import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    path?: string
    navigation: []
    isMenuOpen?: boolean
}

interface NavElement {
    id: number
    path: string
    title: string
    items: []
}

export default function RecursiveMenu(props: PropsWithChildren<Props>) {
    const pathname = usePathname()
    return (
        <>
            {props.children}
            <div className="md:absolute">
                <div className="left-0 top-0 right-0 md:relative mt-4 md:mt-10 md:shadow-2xl max-md:ml-1 flex flex-col flex-wrap gap-3 md:gap-5 md:rounded-lg md:hidden group-hover:flex md:bg-secondary md:px-6 md:py-8 font-medium">
                    {props.navigation?.map((element: NavElement) => {
                        return (
                            <div key={element.id} className="">
                                <Link
                                    href={`${props.path}${element.path}`}
                                    className={`text-base hover:text-accent ${
                                        pathname === props.path + element.path
                                            ? 'text-accent'
                                            : ''
                                    }`}
                                >
                                    {element.title}
                                </Link>

                                {element?.items?.length ? (
                                    <div className="flex flex-col pt-4 gap-3 ml-3 md:ml-1">
                                        {element.items?.map(
                                            (element: NavElement) => {
                                                return (
                                                    <Link
                                                        key={element.id}
                                                        href={`${props.path}${element.path}`}
                                                        className={`text-sm font-medium hover:text-accent ${
                                                            pathname ===
                                                            props.path +
                                                                element.path
                                                                ? 'text-accent'
                                                                : 'text-textSecondary'
                                                        }`}
                                                    >
                                                        {element.title}
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </div>
                                ) : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
RecursiveMenu
