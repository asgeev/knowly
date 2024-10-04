import { Pagination } from '@/components/molecules/pagination'
import { PostItem } from '@/components/molecules/post-item'
import { getPostsByCategory } from '@/features/post/actions/post-actions'
import { Post } from '@/lib/types'

export const revalidate = 0 // revalidate at most every 0 seconds

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: { page: string | undefined }
    params: { slug: string }
}) {
    const currentPage = searchParams?.page || '1'

    const { data: categoryPosts, meta } = await getPostsByCategory(
        params.slug,
        currentPage
    )

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="space-y-5">
            {categoryPosts &&
                (!categoryPosts.length ? (
                    <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                        <p className="font-medium">Brak postów</p>
                    </div>
                ) : null)}

            {categoryPosts?.map((categoryPost: Post) => {
                return (
                    <PostItem
                        key={categoryPost.id}
                        variant="right"
                        data={categoryPost}
                    />
                )
            })}
            <Pagination pageCount={pageCount} />
        </div>
    )
}
