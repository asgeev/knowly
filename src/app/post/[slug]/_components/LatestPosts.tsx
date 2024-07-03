import { getLatestPosts } from '@/app/actions'
import { Post } from '@/app/types'
import { PostItemRight } from '@/components/molecules/PostItem'
import { changeDate } from '@/helpers/changeDate'

export default async function LatestPosts() {
    const { data: newestsPosts } = await getLatestPosts()

    return (
        <div className="space-y-5">
            {newestsPosts?.slice(0, 3).map((post: Post) => {
                const { title, slug, publishedAt, category, cover } =
                    post?.attributes
                return (
                    <PostItemRight
                        key={post.id}
                        title={title}
                        href={slug}
                        publishedAt={changeDate(publishedAt)}
                        category={category?.data?.attributes?.name}
                        categoryColor={category?.data?.attributes?.color}
                        coverUrl={cover?.data?.attributes?.url}
                        className="col-span-12 md:col-span-6"
                    />
                )
            })}
        </div>
    )
}
