import Link from 'next/link'

type Props = {
    text: string
    href?: string
    isExternal?: boolean
}

export const Tag = (props: Props) => {
    const { text, href = '#', isExternal = false } = props
    return (
        <>
            {!isExternal ? (
                <Link
                    href={href}
                    className="py-1.5 px-3 rounded-md border border-border bg-secondary text-muted-foreground font-semibold hover:text-foreground text-sm"
                >
                    {text}
                </Link>
            ) : (
                <Link
                    href={href}
                    className="py-1.5 px-3 rounded-md border border-border bg-secondary text-muted-foreground font-semibold hover:text-foreground text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </Link>
            )}
        </>
    )
}
