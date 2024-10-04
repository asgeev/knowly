import { TSharedPostSchema } from '@/lib/types'
import { fetchWithAuth } from '@/lib/fetchWithAuth'

export async function addPostSharedService(sharedPostData: TSharedPostSchema) {
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
