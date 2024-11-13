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

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         // Other things to do before completion of the promise

    //         // reject(new Error('File too big!'))

    //         resolve({
    //             ok: true,
    //             message: 'File uploaded succesfully!',
    //             file: {
    //                 originalFileName: file?.name,
    //                 fileNameWithExt: null,
    //                 fileMime: null,
    //                 fileSize: null,
    //                 patch: null,
    //                 uploadDate: new Date(),
    //             },
    //         })

    //         // The fulfillment value of the promise

    //         // throw new Error('Files upload error')
    //     }, 2000)
    // })
}

// try {
//     const response = await fetchWithAuth(
//         `/api/shared-posts-management/${id}?populate=files`
//     )
//     return response
// } catch (error) {
//     console.error('Cannot fetch shared posts!', error)
//     throw new Error('Cannot fetch shared posts!')
// }

// function getCookie(arg0: string) {
//     throw new Error('Function not implemented.')
// }
