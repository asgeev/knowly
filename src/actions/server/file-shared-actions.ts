'use server'

import { fetchWithAuth } from '@/lib/fetchWithAuth'
import { uploadFileService } from '@/services/file-service'

type TSharedFile = {
    fileUID: string
    originalFileName: string
    fileNameWithExt: string
    fileMime: string
    fileSize: number
    patch: string
    uploadDate: Date
}

export async function saveFileShared(fileData: TSharedFile) {
    const payload = {
        data: {
            ...fileData,
        },
    }

    try {
        const response = await fetchWithAuth(`/api/shared-files-management`, {
            method: 'POST',
            body: JSON.stringify(payload),
        })

        if (response.status === 403) {
            throw new Error('Brak uprawnień do przesyłania plików!')
        }

        return response?.json()
    } catch (err) {
        console.log(err)
    }
}

export async function deleteFileShared(id: number) {
    try {
        const response = await fetchWithAuth(
            `/api/shared-files-management/${id}`,
            {
                method: 'DELETE',
            }
        )

        if (!response.ok) {
            throw new Error(
                'Nie udało sie usunąc pliku, spróbuj ponownie później!'
            )
        }

        if (response.status === 403) {
            throw new Error('Brak uprawnień do przesyłania plików!')
        }

        console.log(response)
        return response?.json()
    } catch (err) {
        console.log(err)
        throw new Error('Cannot delete file!')
    }
}

export type TUploadFileResponse = {
    data: {}
    error: {
        message: string
    }
}

export async function uploadFile(formData: FormData) {
    const file = formData.get('file')

    if (file) {
        try {
            const response: any = await uploadFileService(formData)

            console.log(response)

            if (response?.ok) {
                const responseSave = await saveFileShared(response?.file)

                console.log(responseSave)

                return responseSave
            }
        } catch (err) {
            console.log(err)
        }
    }
}
