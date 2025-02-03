import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { TFile, TResponse } from '@/lib/types'
import { deleteFile } from '@/features/post-shared/actions/file-shared-actions'

type TDeleteFileButton = {
    fileId: number
    fileUID: string
    setFiles: React.Dispatch<React.SetStateAction<TFile[]>>
}

export default function DeleteFileButton(props: TDeleteFileButton) {
    const { fileId, fileUID, setFiles } = props

    const onDeleteFile = async () => {
        if (!fileId || !fileUID) {
            return toast.error('Wystąpił błąd', {
                description: 'Prosimy spróbować ponownie później',
            })
        }

        const response: TResponse = await deleteFile(fileId, Number(fileUID))

        if (response?.error) {
            return toast.error('Wystąpił błąd', {
                description: response?.error?.message,
            })
        }

        if (response?.ok) {
            setFiles((files) => files.filter((file) => file.fileId !== fileId))

            return toast.success('Plik został usunięty')
        }
    }

    return (
        <Button
            variant="outline"
            size="icon"
            title="Pobierz"
            onClick={onDeleteFile}
        >
            <Trash2 />
        </Button>
    )
}
