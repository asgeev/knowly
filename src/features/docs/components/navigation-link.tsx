import Link, { LinkProps } from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends LinkProps {
    className?: string
    children?: React.ReactNode | null
    target?: string
}

interface NavigationLink extends NavLinkProps {
    item: {
        title: string
        type: string
        path: string
        related?: { slug: string }
    }
}

const NavLink: React.FC<NavLinkProps> = ({
    href,
    className,
    children,
    ...rest
}) => {
    const pathname = usePathname()

    return (
        <Link
            href={href}
            className={`hover:text-foreground ${
                pathname === href && !(href === 'null')
                    ? 'text-foreground'
                    : 'text-muted-foreground '
            } ${className}`}
            {...rest}
        >
            {children}
        </Link>
    )
}

export const NavigationLink = (props: NavigationLink) => {
    const item = props.item

    if (item.type === 'WRAPPER') {
        return (
            <NavLink
                href="#"
                className={props.className}
                onClick={props.onClick}
            >
                {item.title}
                {props.children}
            </NavLink>
        )
    } else if (item.type === 'INTERNAL') {
        return (
            <NavLink
                href={`/baza-wiedzy/${item.related?.slug}`}
                className={props.className}
                onClick={props.onClick}
            >
                {item.title}
                {props.children}
            </NavLink>
        )
    } else if (item.type === 'EXTERNAL') {
        return (
            <NavLink
                href={`${item.path}`}
                target="_blank"
                className={props.className}
                onClick={props.onClick}
            >
                {item.title}
                {props.children}
            </NavLink>
        )
    } else {
        return null
    }
}
