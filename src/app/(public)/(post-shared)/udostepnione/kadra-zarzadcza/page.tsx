import { Pagination } from '@/components/molecules/pagination'
import { SharedPost } from '@/components/molecules/post-item'
import { getSharedPosts } from '@/features/post-shared/actions/post-shared-actions'
import { changeDate } from '@/helpers/changeDate'
import { TResponse } from '@/lib/types'
import FeaturesInfoCard from '@/features/post-shared/components/features-info-card'

export const revalidate = 30 // revalidate at most every 0 seconds

export default async function SharedPostsManagement({
    searchParams,
    params,
}: {
    searchParams: { page: string | undefined }
    params: { slug: string }
}) {
    const currentPage = searchParams?.page || '1'

    const response: TResponse = await getSharedPosts(currentPage)

    const { data: posts, meta } = response.data

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="container mx-auto mt-10">
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-8 rounded-b-lg">
                    <div className="space-y-5">
                        {!posts ||
                            (!posts?.length ? (
                                <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                                    <p className="font-medium">Brak postów</p>
                                </div>
                            ) : null)}

                        {posts?.map((post: any) => {
                            const { title, publishedAt } = post?.attributes

                            const date = changeDate(publishedAt) ?? ''

                            return (
                                <SharedPost
                                    key={post.id}
                                    title={title}
                                    href={`/udostepnione/kadra-zarzadcza/${post?.id}`}
                                    publishedAt={publishedAt ? date : undefined}
                                />
                            )
                        })}

                        <Pagination pageCount={pageCount} />
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 col-span-4 flex flex-col gap-10">
                    <FeaturesInfoCard />
                </div>
            </div>
        </div>
    )
}
