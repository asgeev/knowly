import { Pagination } from '@/components/molecules/pagination'
import { SharedPost } from '@/components/molecules/post-item'
import { getSharedPosts } from '@/features/post-shared/actions/post-shared-actions'

export const revalidate = 0 // revalidate at most every 0 seconds

export default async function SharedPostsManagement({
    searchParams,
    params,
}: {
    searchParams: { page: string | undefined }
    params: { slug: string }
}) {
    const currentPage = searchParams?.page || '1'

    const { data: posts, meta } = await getSharedPosts()

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="container mx-auto mt-10">
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-8 rounded-b-lg">
                    <div className="space-y-5">
                        {!posts &&
                            (!posts?.length ? (
                                <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                                    <p className="font-medium">Brak postów</p>
                                </div>
                            ) : null)}

                        {posts?.map((post: any) => {
                            const { title } = post?.attributes

                            return (
                                <SharedPost
                                    key={post.id}
                                    title={title}
                                    href={`/udostepnione/kadra-zarzadcza/${post?.id}`}
                                    // publishedAt={changeDate(publishedAt)}
                                />
                            )
                        })}

                        <Pagination pageCount={pageCount} />
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 col-span-4 flex flex-col gap-10">
                    <div>
                        <h1 className="text-md font-bold mb-2">
                            Wszystkie kategorie
                        </h1>
                        <p>Checesz odostaaaepnićfasfas swoją treść?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
