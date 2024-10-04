import { fetchWithAuth } from '@/lib/fetchWithAuth'

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
        throw new Error('Cannot fetch shared posts!')
    }
}
