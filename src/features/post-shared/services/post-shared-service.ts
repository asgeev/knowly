import { fetchWithAuth } from '@/lib/fetchWithAuth'
import { TSharedPostSchema } from '@/lib/types'

//Page size for shared posts
const pageSize = '10'

export async function getSharedPostsService(currentPage?: string) {
    let params = {
        'sort[0]': 'createdAt:desc',
    }

    //Create a new object with additional properties
    const paginationParams = {
        'pagination[page]': currentPage ?? '1',
        'pagination[pageSize]': pageSize,
    }
    if (currentPage) {
        params = {
            ...params,
            ...paginationParams,
        }
    }

    const searchParams = new URLSearchParams(params)

    try {
        const response = await fetchWithAuth(
            `/api/shared-posts-management?${searchParams}`
        )
        return response
    } catch (error) {
        console.error('Cannot fetch shared posts!', error)
        throw new Error('Cannot fetch shared posts!')
    }
}

export async function getPostSharedByIdService(id: number) {
    if (!id) return

    try {
        const response = await fetchWithAuth(
            `/api/shared-posts-management/${id}?populate=files`
        )
        return response
    } catch (error) {
        console.error('Cannot fetch shared posts!', error)
        throw new Error('Cannot fetch shared posts!')
    }
}

export async function updatePostSharedService(
    id: number,
    postSharedData: TSharedPostSchema
) {
    // if (!id || !postSharedData) {
    //     throw new Error('You must pass id number, and payload')
    // }

    if (!id) return

    try {
        const response = await fetchWithAuth(
            `/api/shared-posts-management/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify({ data: postSharedData }),
                cache: 'no-cache',
            }
        )
        return response
    } catch (error) {
        throw new Error('Wystąpił błąd podczas tworzenia posta')
    }
}
