'use server'

import { getUploadServiceUrl } from '@/lib/utils'
import { cookies } from 'next/headers'

const uploadUrl = getUploadServiceUrl()

async function fetchWithAuth(endpoint: string, options?: {}) {
    const cookieStore = cookies()
    const token = cookieStore.get('jwt')?.value

    const url = new URL(endpoint, uploadUrl)

    return await fetch(url.href, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        ...options,
    })
}

export const uploadFileService = async (formData: FormData) => {
    const file = formData.get('file') as File

    if (!file) {
        throw new Error('File is required!')
    }

    try {
        const response = await fetchWithAuth(`/upload`, {
            body: formData,
            method: 'POST',
        })
        return response
    } catch (err) {
        console.error('Cannot upload file!', err)
        throw new Error('Cannot upload file!')
    }
}

export const deleteFileService = async (id: number) => {
    if (!id) {
        throw new Error('Id is required!')
    }

    try {
        const response = await fetchWithAuth(`/delete/${id}`, {
            method: 'DELETE',
        })

        return response
    } catch (err) {
        console.error('Cannot delete file!', err)
        throw new Error('Cannot delete file!')
    }
}
