'use server'

import { fetchWithAuth } from '@/lib/fetchWithAuth'
import { uploadFileService } from '@/services/file-service'
import { TResponse, TUploadResponse } from '@/lib/types'
import { revalidatePath } from 'next/cache'

type TSharedFile = {
    fileUID: string
    originalFileName?: string
    fileNameWithExt?: string
    fileMime?: string
    fileSize?: string
    path?: string
    uploadDate?: Date | undefined
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
            return {
                ok: false,
                data: null,
                error: {
                    message: 'Brak uprawnień!',
                },
            }
        }

        return response?.json()
    } catch (err) {
        throw new Error('Nie udało się z zapisać pliku!')
    }
}

export async function deleteFileShared(id: number) {
    const response = await fetchWithAuth(`/api/shared-files-management/${id}`, {
        method: 'DELETE',
    })

    if (response.ok) {
        revalidatePath('/udostepnione')

        return { ok: true, data: null, error: null }
    } else {
        if (response.status === 403)
            return {
                ok: false,
                data: null,
                error: {
                    message: 'Nie masz uprawnień do usuwania plików!',
                },
            }

        if (response.status === 404)
            return {
                ok: false,
                data: null,
                error: {
                    message: 'Plik nie istnieje!',
                },
            }
    }
}

export async function uploadFile(formData: FormData) {
    const file = formData.get('file')

    if (!file) {
        return {
            ok: false,
            data: null,
            error: {
                message:
                    'Wystąpił problem z przesłaniem pliku spróbuj ponownie później',
            },
        }
    }

    try {
        const response = await uploadFileService(formData)
        const data: TUploadResponse = await response.json()

        console.log('Upload service response json in server action')
        console.log(data)

        if (!response.ok) {
            if (response.status === 403) {
                return {
                    ok: false,
                    data: null,
                    error: {
                        message: 'Brak uprawnień do przesyłania plików',
                    },
                }
            }

            return {
                ok: false,
                data: null,
                error: {
                    message:
                        'Wystąpił problem z przesłaniem pliku spróbuj ponownie później',
                },
            }
        }

        const newFileInfo: TSharedFile = {
            fileUID: String(data?.data?.fileId),
            originalFileName: data?.data?.originalname,
            fileNameWithExt: data?.data?.filename,
            fileMime: data?.data?.mimetype,
            fileSize: String(data?.data?.size),
            path: data?.data?.path,
            uploadDate: data?.data?.uploadDate
                ? new Date(data?.data?.uploadDate)
                : undefined,
        }

        const responseSave: TResponse = await saveFileShared(newFileInfo)

        if (responseSave?.error) {
            return {
                ok: false,
                data: null,
                error: {
                    message: responseSave?.error?.message,
                },
            }
        }

        return {
            ok: true,
            data: { ...responseSave?.data },
            error: null,
        }
    } catch (err) {
        console.log(err)
        return {
            ok: false,
            data: null,
            error: {
                message:
                    'Wystąpił problem z przesłaniem pliku spróbuj ponownie później',
            },
        }
    }
}
