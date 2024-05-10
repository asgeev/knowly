import Link from 'next/link'

type Props = {
    text: string
    href?: string
}

export const Tag = (props: Props) => {
    const { text, href = '#' } = props
    return (
        <Link
            href={href}
            className="py-1.5 px-3 rounded-md bg-secondary text-textSecondary font-medium hover:text-accent text-sm"
        >
            {text}
        </Link>
    )
}
