import { PropsWithChildren } from 'react'
import Link from 'next/link'

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

const RecursiveMenu = (props: PropsWithChildren<Props>) => {
    return (
        <div className="group">
            {props.children}
            <div className="md:absolute">
                <div className="left-0 top-0 right-0 md:relative mt-4 flex flex-col flex-wrap  gap-5  md:rounded-2xl md:hidden group-hover:grid md:bg-color_1 md:p-8 md:text-white">
                    {props.navigation?.map((element: NavElement) => {
                        return (
                            <div key={element.id} className="">
                                <Link
                                    href={`${props.path}/${element.path}`}
                                    className="text-base hover:text-accent"
                                >
                                    {element.title}
                                </Link>
                                {element?.items?.length ? (
                                    <div className="flex flex-col pt-6 gap-5 ">
                                        {element.items?.map(
                                            (element: NavElement) => {
                                                return (
                                                    <Link
                                                        key={element.id}
                                                        href={`${props.path}/${element.path}`}
                                                        className="text-base font-light text-textSecondary hover:text-accent"
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
        </div>
    )
}

export default RecursiveMenu
