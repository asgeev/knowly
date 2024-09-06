import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
                <Button asChild variant="secondary">
                    <Link href={href}>{text}</Link>
                </Button>
            ) : (
                <Button asChild variant="secondary">
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        {text}
                    </Link>
                </Button>
            )}
        </>
    )
}
