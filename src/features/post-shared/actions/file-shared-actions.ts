'use server'

import { fetchWithAuth } from '@/lib/fetchWithAuth'
import {
    deleteFileService,
    uploadFileService,
} from '@/features/post-shared/services/file-shared-service'
import { TResponse, TUploadResponse } from '@/lib/types'
import { revalidatePath } from 'next/cache'

type TSharedFile = {
    fileUID: string
    originalname?: string
    filename?: string
    mimetype?: string
    size?: string
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
        console.log(err)

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
            originalname: data?.data?.originalname,
            filename: data?.data?.filename,
            mimetype: data?.data?.mimetype,
            size: String(data?.data?.size),
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

export async function deleteFile(fileId: number, fileUID: number) {
    if (!fileId || !fileUID) {
        return {
            ok: false,
            data: null,
            error: {
                message: 'Brak id pliku!',
            },
        }
    }

    try {
        //Delete file in upload file service
        await deleteFileService(fileUID)

        //Delete file data in CMS and return result
        const response: TResponse = await deleteFileShared(fileId)

        return response
    } catch (err) {
        console.log(err)
        return {
            ok: false,
            data: null,
            error: {
                message:
                    'Wystąpił problem podczas usuwania pliku, spróbuj ponownie później!',
            },
        }
    }
}
