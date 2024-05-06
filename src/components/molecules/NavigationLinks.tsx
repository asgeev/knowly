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

const RecursiveMenu = (props: PropsWithChildren<Props>) => {
    const pathname = usePathname()

    console.log(pathname)
    return (
        <div className="group">
            {props.children}
            <div className="md:absolute">
                <div className="left-0 top-0 right-0 md:relative mt-4 flex flex-col flex-wrap  gap-5  md:rounded-2xl md:hidden group-hover:grid md:bg-secondary md:p-8 md:text-white">
                    {props.navigation?.map((element: NavElement) => {
                        return (
                            <div key={element.id} className="">
                                <Link
                                    href={`${props.path}/${element.path}`}
                                    className={`text-base hover:text-accent ${
                                        pathname === props.path + element.path
                                            ? 'text-accent'
                                            : ''
                                    }`}
                                >
                                    {element.title}
                                </Link>

                                {element?.items?.length ? (
                                    <div className="flex flex-col pt-6 gap-4 ">
                                        {element.items?.map(
                                            (element: NavElement) => {
                                                console.log(
                                                    props.path + element.path
                                                )
                                                return (
                                                    <Link
                                                        key={element.id}
                                                        href={`${props.path}/${element.path}`}
                                                        className={`text-sm font-normal hover:text-accent ${
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
        </div>
    )
}

export default RecursiveMenu
