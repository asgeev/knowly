import { PaginationComponent } from '@/components/molecules/PaginationComponent'
import { DynamicPostItem } from '@/components/molecules/PostItem'
import { fetchPostsByCategory } from '@/app/actions'
import { Post } from '@/app/types'

export const revalidate = 0 // revalidate at most every 0 seconds

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: { page: string | undefined }
    params: { slug: string }
}) {
    const currentPage = searchParams?.page || '1'

    const { data: categoryPosts, meta } = await fetchPostsByCategory(
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
                    <DynamicPostItem
                        key={categoryPost.id}
                        variant="right"
                        data={categoryPost}
                    />
                )
            })}
            <PaginationComponent pageCount={pageCount} />
        </div>
    )
}
