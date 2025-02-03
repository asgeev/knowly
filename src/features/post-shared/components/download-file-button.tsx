'use client'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

type TDownloadFileButton = {
    fileUID: number
    fileName: string
}

export default function DownloadFileButton(props: TDownloadFileButton) {
    const { fileName, fileUID } = props

    const onDownloadFile = async () => {
        if (!fileUID) {
            return toast.error('Wystąpił błąd', {
                description: 'Prosimy spróbować ponownie później',
            })
        }

        const response = await fetch(`/api/file-shared/download/${fileUID}`)

        const blob = await response.blob()

        if (!response.ok) {
            if (response.status === 403) {
                return toast.error('Wystąpił błąd', {
                    description: 'Nie masz uprawnień do wykonania tej akcji',
                })
            }

            if (response.status === 404) {
                return toast.error('Wystąpił błąd', {
                    description: 'Plik nie istnieje',
                })
            }
            return toast.error('Wystąpił błąd', {
                description: 'Prosimy spróbować ponownie później',
            })
        }

        //Download file from blob
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = fileName
        a.target = '_blank'
        a.click()
        URL.revokeObjectURL(url)
        a.remove()
    }

    return (
        <Button
            variant="outline"
            size="icon"
            title="Pobierz"
            onClick={onDownloadFile}
        >
            <Download />
        </Button>
    )
}
