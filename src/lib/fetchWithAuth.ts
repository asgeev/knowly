import { getAuthToken } from '@/lib/auth'
import { getStrapiUrl } from '@/lib/utils'
const strapiUrl = getStrapiUrl()

export async function fetchWithAuth(endpoint: string, options?: {}) {
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
