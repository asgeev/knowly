import { PaginationComponent } from '@/components/molecules/PaginationComponent'
import { DynamicPostItem, SharedPost } from '@/components/molecules/PostItem'
import { Post, SharedPostProps } from '@/app/types'
import { getSharedPostsManagement } from '@/actions/shared-posts-actions'
import { title } from 'process'
import { changeDate } from '../../../../../helpers/changeDate'

export const revalidate = 0 // revalidate at most every 0 seconds

export default async function SharedPostsManagement({
    searchParams,
    params,
}: {
    searchParams: { page: string | undefined }
    params: { slug: string }
}) {
    const currentPage = searchParams?.page || '1'

    const { data: posts, meta } = await getSharedPostsManagement()

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="space-y-5">
            {!posts &&
                (!posts?.length ? (
                    <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                        <p className="font-medium">Brak postów</p>
                    </div>
                ) : null)}

            {posts?.map((post: any) => {
                const { title, slug, publishedAt } = post?.attributes

                return (
                    <SharedPost
                        key={post.id}
                        title={title}
                        href={slug}
                        // publishedAt={changeDate(publishedAt)}
                    />
                )
            })}

            <PaginationComponent pageCount={pageCount} />
        </div>
    )
}
