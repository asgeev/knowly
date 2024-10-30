import { TFile } from '@/lib/types'
import { Download, LoaderCircle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatBytes } from '@/lib/formatBytes'
import { File as FileIcon } from 'lucide-react'

type TFileProps = {
    fileData: TFile
    secondary?: boolean
    onDelete?: (id: number) => void
}

export default function File(props: TFileProps) {
    const { fileData, secondary, onDelete } = props
    const { fileId, fileName, isLoading, fileUID, size } = fileData

    return (
        <div
            className={`${secondary ? 'bg-background' : ''} flex justify-between border border-border p-4 rounded-lg`}
        >
            <div className="flex gap-4 items-center">
                <FileIcon size={26} />
                <div>
                    <p className="text-base font-medium">{fileName}</p>
                    <p className="text-sm text-muted-foreground font-medium">
                        {size && formatBytes(size)}
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                {isLoading ? (
                    <LoaderCircle className="animate-spin" />
                ) : (
                    <div className="space-x-2">
                        {fileUID && (
                            <Button
                                variant="outline"
                                size="icon"
                                title="Pobierz"
                            >
                                <Download />
                            </Button>
                        )}
                        {fileId && onDelete && (
                            <Button
                                variant="outline"
                                size="icon"
                                title="Usuń"
                                onClick={() => onDelete(fileId)}
                            >
                                <Trash2 />
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
