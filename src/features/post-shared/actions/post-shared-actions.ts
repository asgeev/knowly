import { redirect } from 'next/navigation'
import { getSharedPostsService } from '@/features/post-shared/services/post-shared-service'

export const getSharedPostsAction = async () => {
    const response = await getSharedPostsService()

    if (response?.status === 403) redirect('/403')

    return response?.json()
}
