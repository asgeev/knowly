import Link from 'next/link'
import { PostItemRight } from '../../components/molecules/PostItem'
import { changeDate } from '../../helpers/changeDate'
import { getAllCategories, getLatestPosts } from '../actions'
import { Tag } from '../../components/atoms/Tag'

type Category = {
    id: number
    attributes: {
        name: string
        color: string
        slug: string
    }
}

interface Post {
    id: number
    attributes: {
        title: string
        slug: string
        publishedAt: string
        category: {
            data: Category
        }
        cover: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
    }
}

export default async function PostLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: newestsPosts } = await getLatestPosts()
    const { data: allCategories } = await getAllCategories()

    console.log(allCategories)

    return (
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-12 gap-5 mt-10">
                <div className="col-span-8 bg-secondary rounded-b-lg">
                    {children}
                </div>
                <div className="col-span-4 flex flex-col gap-10">
                    {newestsPosts && (
                        <div>
                            <h1 className="text-lg font-bold mb-2">
                                Najnowsze posty
                            </h1>
                            <div className="space-y-5">
                                {newestsPosts?.slice(0, 3).map((post: Post) => {
                                    return (
                                        <PostItemRight
                                            key={post.id}
                                            title={post?.attributes?.title}
                                            href={post?.attributes?.slug}
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
                                })}
                            </div>
                        </div>
                    )}
                    {allCategories && (
                        <div>
                            <h1 className="text-lg font-bold mb-2">
                                Wszystkie kategorie
                            </h1>
                            <div className="flex gap-2 flex-wrap">
                                {allCategories.map((category: Category) => {
                                    const { name, slug } = category?.attributes
                                    return (
                                        <Tag
                                            key={category.id}
                                            text={name}
                                            href={`/posty/kategoria/${slug}`}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
