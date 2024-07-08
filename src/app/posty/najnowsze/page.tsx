import { PaginationComponent } from '@/components/molecules/PaginationComponent'
import { DynamicPostItem } from '@/components/molecules/PostItem'
import { getLatestPosts } from '@/app/actions'
import { Post, SearchParamsProps } from '@/app/types'

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
                        <DynamicPostItem
                            key={latestPost.id}
                            variant="right"
                            data={latestPost}
                        />
                    )
                })}
            <PaginationComponent pageCount={pageCount} />
        </div>
    )
}
