import { PostItemRight } from '../../components/molecules/PostItem'
import { changeDate } from '../../helpers/changeDate'
import { getLatestPosts } from '../actions'

export default async function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: newestsPosts } = await getLatestPosts()

    return (
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-12 gap-5 mt-10">
                <div className="col-span-8 bg-secondary rounded-b-lg">
                    {children}
                </div>
                <div className="max-lg:hidden col-span-4">
                    {newestsPosts && (
                        <div>
                            <h1 className="text-lg font-bold mb-6">
                                Najnowsze posty
                            </h1>
                            <div className="space-y-5">
                                {' '}
                                {newestsPosts?.slice(0, 3).map((post) => {
                                    return (
                                        <PostItemRight
                                            key={post.id}
                                            title={post?.attributes?.title}
                                            href={post?.attributes?.title}
                                            publishedAt={changeDate(
                                                post?.attributes?.publishedAt
                                            )}
                                            category={
                                                post?.attributes?.category?.data
                                                    ?.attributes?.name
                                            }
                                            categoryColor={
                                                post?.attributes?.category?.data
                                                    ?.attributes?.color
                                            }
                                            coverUrl={
                                                post?.attributes?.cover?.data
                                                    ?.attributes?.url
                                            }
                                            className="col-span-12 md:col-span-6"
                                        />
                                    )
                                })}{' '}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
