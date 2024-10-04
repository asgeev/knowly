import { Pagination } from '@/components/molecules/pagination'
import { PostItem } from '@/components/molecules/post-item'
import { getLatestPosts } from '@/features/post/actions/post-actions'
import { Post, SearchParamsProps } from '@/lib/types'

export const revalidate = 0 // revalidate at most every 0 seconds

export default async function Page({ searchParams }: SearchParamsProps) {
    const currentPage = searchParams?.page || '1'
    const { data: latestPosts, meta } = await getLatestPosts(currentPage)

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="space-y-5">
            {latestPosts &&
                (!latestPosts?.length ? (
                    <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                        <p className="font-medium">Brak postów</p>
                    </div>
                ) : null)}

            {latestPosts &&
                latestPosts?.map((latestPost: Post) => {
                    return (
                        <PostItem
                            key={latestPost.id}
                            variant="right"
                            data={latestPost}
                        />
                    )
                })}
            <Pagination pageCount={pageCount} />
        </div>
    )
}
