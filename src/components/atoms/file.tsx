import { Download, LoaderCircle } from 'lucide-react'
import { File as FileIcon } from 'lucide-react'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Button } from '@/components/ui/button'

interface TFileProps extends PropsWithChildren {
    name: string
    size?: string | undefined
    secondary?: boolean
    href?: string
    isLoading?: boolean
}

export default function File(props: TFileProps) {
    const { name, size, secondary, href, isLoading, children } = props

    return (
        <div
            className={`${secondary ? 'bg-background' : ''} flex justify-between border border-border p-4 rounded-lg gap-4`}
        >
            <div className="flex gap-4 items-center">
                <FileIcon size={26} />
                <div>
                    <p
                        className="text-base font-medium line-clamp-1"
                        title={name}
                    >
                        {name}
                    </p>
                    {size && (
                        <p className="text-sm text-muted-foreground font-medium">
                            {size}
                        </p>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center">
                {isLoading ? (
                    <LoaderCircle className="animate-spin" />
                ) : (
                    <div className="flex not-wrap gap-2">
                        {href && (
                            <Button
                                variant="outline"
                                size="icon"
                                title="Pobierz"
                            >
                                <Link href={href} target="_blank">
                                    <Download />
                                </Link>
                            </Button>
                        )}
                        {children}
                    </div>
                )}
            </div>
        </div>
    )
}
