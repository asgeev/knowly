import { getStrapiUrl } from '@/lib/utils'
import { getAuthToken } from '@/lib/getAuthToken'
import { TSharedPostSchema } from '@/lib/types'

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

export async function getSharedPostsService() {
    const params = {
        'pagination[page]': '1',
        'pagination[pageSize]': '10',
    }
    const searchParams = new URLSearchParams(params)

    try {
        const response = await fetchWithAuth(`/api/shared-posts-management`)
        return response
    } catch (error) {
        console.error('Cannot fetch shared posts!', error)
    }
}

export async function addSharedPostService(sharedPostData: TSharedPostSchema) {
    try {
        const response = await fetchWithAuth(
            '/api/shared-posts-management?populate=*',
            {
                method: 'POST',
                body: JSON.stringify({ data: sharedPostData }),
                cache: 'no-cache',
            }
        )
        return response?.json()
    } catch (error) {
        console.error('There is an error creating shared post!', error)
    }
}
