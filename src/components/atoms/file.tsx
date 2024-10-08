import { TFile } from '@/lib/types'
import { Download, LoaderCircle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

type TFileProps = {
    fileData: TFile
    onDelete?: (id: number) => void
}

export default function File(props: TFileProps) {
    const { fileData, onDelete } = props
    const { fileId, fileName, isLoading, fileUID } = fileData

    return (
        <div className="flex min-h-4 justify-between border border-border p-4 rounded-lg">
            <div>
                <p className="text-sm font-medium">{fileName}</p>
                <p className="text-muted-foreground">20 Mb</p>
            </div>
            <div className="flex justify-center items-center">
                {isLoading ? (
                    <LoaderCircle className="animate-spin" />
                ) : (
                    <div className="space-x-2">
                        {fileUID && (
                            <Button variant="outline" size="icon" disabled>
                                <Download />
                            </Button>
                        )}
                        {fileId && onDelete && (
                            <Button
                                variant="outline"
                                size="icon"
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
