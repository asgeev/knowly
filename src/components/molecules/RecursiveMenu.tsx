import { PropsWithChildren } from 'react'
import { navigation } from '../navigation'
import Link from 'next/link'

interface Props {
    navigation: any
    path: string
}

//TODO: add navigation props
const RecursiveMenu = (props: PropsWithChildren<Props>) => {
    return (
        <>
            {props.children}
            {navigation.map((element) => {
                return (
                    <Link
                        key={element.id}
                        href={`${props.path}/${element.path}`}
                    >
                        {element.title}
                    </Link>
                )
            })}
        </>
    )
}

export default RecursiveMenu
