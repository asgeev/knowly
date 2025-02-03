import { formatBytes } from '@/lib/utils'
import { File } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type OpenFileProps = {
    fileName: string
    url: string
    size: number
}

export function OpenFile(props: OpenFileProps) {
    return (
        <div className="not-prose rounded-lg pt-10">
            <p className="font-bold text-2xl">Pliki</p>
            <div className="my-6 space-y-5">
                <div className="bg-background border border-border rounded-xl">
                    <div className="flex flex-col sm:flex-row p-4 gap-4 sm:gap-2 justify-between">
                        <div className="flex gap-4 items-center">
                            <File size={26} />
                            <div className="text-sm">
                                <p
                                    className="text-foreground line-clamp-1 font-medium text-base"
                                    title={props?.fileName}
                                >
                                    {props?.fileName}
                                </p>
                                <p className="text-muted-foreground font-medium">
                                    {formatBytes(props?.size * 1024)}
                                </p>
                            </div>
                        </div>
                        <Link href={props.url}>
                            <Button>Otwórz plik</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
