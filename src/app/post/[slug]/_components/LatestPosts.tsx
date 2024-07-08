import { getLatestPosts } from '@/app/actions'
import { Post } from '@/app/types'
import { DynamicPostItem } from '@/components/molecules/PostItem'

export default async function LatestPosts() {
    const { data: newestsPosts } = await getLatestPosts()

    return (
        <div className="space-y-5">
            {newestsPosts?.slice(0, 3).map((post: Post) => {
                return (
                    <>
                        <DynamicPostItem variant={'right'} data={post} />
                    </>
                )
            })}
        </div>
    )
}
