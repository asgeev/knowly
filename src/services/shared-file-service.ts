'use server'

import { getAuthToken } from '@/lib/getAuthToken'
import { getStrapiUrl } from '@/lib/utils'
import { TSharedFile } from '@/lib/types'

const strapiUrl = getStrapiUrl()

async function fetchWithAuth(endpoint: string, options?: {}) {
    const token = await getAuthToken()

    const url = new URL(endpoint, strapiUrl)

    return await fetch(url.href, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        ...options,
    })
}

export async function createSharedFileEntryService(fileData: TSharedFile) {
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

        return response?.json()
    } catch (error) {
        console.error('Cannot fetch shared posts!', error)
    }
}
