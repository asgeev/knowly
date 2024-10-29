'use server'

import { fetchWithAuth } from '@/lib/fetchWithAuth'
import { uploadFileService } from '@/services/file-service'
import { TResponse } from '@/lib/types'
import { revalidatePath } from 'next/cache'

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

    if (file) {
        try {
            const response: any = await uploadFileService(formData)

            if (response?.ok) {
                const responseSave: TResponse = await saveFileShared(
                    response?.file
                )

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
            }

            if (response.status === 403) {
                return {
                    ok: false,
                    data: null,
                    error: {
                        message: 'Brak uprawnień do przesyłania plików',
                    },
                }
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
    } else {
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
