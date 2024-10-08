'use server'
import { getStrapiUrl } from '@/lib/utils'

const strapiUrl = getStrapiUrl()

// async function fetchWithAuth(endpoint: string, options?: {}) {
//     const token = getCookie('jwt')

//     const url = new URL(endpoint, strapiUrl)

//     return await fetch(url.href, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//         ...options,
//     })
// }

export const uploadFileService = (formData: FormData) => {
    const file = formData.get('file') as File

    if (file) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Other things to do before completion of the promise

                // reject(new Error('File too big!'))

                resolve({
                    ok: true,
                    message: 'File uploaded succesfully!',
                    file: {
                        fileUID: `file-test${Math.random() * (1 - 4000) + 4000}`,
                        originalFileName: file?.name,
                        fileNameWithExt: null,
                        fileMime: null,
                        fileSize: null,
                        patch: null,
                        uploadDate: new Date(),
                    },
                })

                // The fulfillment value of the promise

                // throw new Error('Files upload error')
            }, 2000)
        })
    }
}
