import { getLatestPosts } from '@/features/post/actions/post-actions'
import { Post } from '@/lib/types'
import { PostItem } from '@/components/molecules/post-item'

export default async function NewPosts() {
    const { data: newestsPosts } = await getLatestPosts()

    console.log(newestsPosts)

    return (
        <div className="space-y-5">
            {newestsPosts?.slice(0, 3).map((post: Post) => {
                return (
                    <>
                        <PostItem
                            key={post?.id}
                            variant={'right'}
                            data={post}
                        />
                    </>
                )
            })}
        </div>
    )
}
