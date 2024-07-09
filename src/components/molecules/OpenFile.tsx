import { formatBytes } from '@/lib/formatBytes'
import { File } from 'lucide-react'
import Link from 'next/link'

type OpenFileProps = {
    fileName: string
    url: string
    size: number
}

export function OpenFile(props: OpenFileProps) {
    return (
        <div className="not-prose bg-primary rounded-lg p-6">
            <p className="font-bold text-2xl">Pliki</p>
            <div className="my-6 space-y-5">
                <div className="bg-secondary rounded-lg">
                    <div className="flex flex-col sm:flex-row p-4 gap-4 sm:gap-2 justify-between">
                        <div className="flex gap-4 items-center">
                            <File size={26} />
                            <div className="text-sm">
                                <p
                                    className="line-clamp-1 font-medium text-base"
                                    title={props?.fileName}
                                >
                                    {props?.fileName}
                                </p>
                                <p className="text-textSecondary font-medium">
                                    {formatBytes(props?.size * 1024)}
                                </p>
                            </div>
                        </div>
                        <Link
                            className="bg-accent px-4 py-2 text-white rounded-md flex items-center justify-center gap-2"
                            href={props.url}
                        >
                            <p className="text-sm  font-medium text-nowrap">
                                Otwórz plik
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
