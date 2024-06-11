import { PostItemRight } from '@/components/molecules/PostItem'
import { changeDate } from '@/helpers/changeDate'
import {
    fetchPostsByCategory,
    getAllCategories,
    getLatestPosts,
    getPost,
} from '@/app/actions'
import { Tag } from '@/components/atoms/Tag'
import React from 'react'
import { Post } from '@/app/types'
import { Section } from '@/components/molecules/Section'
import { GridTemplate } from '../../../components/molecules/GridTemplates'

type Category = {
    id: number
    attributes: {
        name: string
        color: string
        slug: string
    }
}

export default async function PostLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { slug: string }
}) {
    const { data: postContent } = await getPost(params.slug)
    const category: Category = postContent?.attributes?.category?.data
    const { data: newestsPosts } = await getLatestPosts()
    const { data: allCategories } = await getAllCategories()
    let { data: postsByCategory } = await fetchPostsByCategory(
        category?.attributes?.slug
    )

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
                                    const {
                                        title,
                                        slug,
                                        publishedAt,
                                        category,
                                        cover,
                                    } = post?.attributes
                                    return (
                                        <PostItemRight
                                            key={post.id}
                                            title={title}
                                            href={slug}
                                            publishedAt={changeDate(
                                                publishedAt
                                            )}
                                            category={
                                                category?.data?.attributes?.name
                                            }
                                            categoryColor={
                                                category?.data?.attributes
                                                    ?.color
                                            }
                                            coverUrl={
                                                cover?.data?.attributes?.url
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
            {postsByCategory && (
                <Section
                    title={'Więcej w tej kategorii'}
                    categoryUrl={`/posty/kategoria/${category?.attributes?.slug}`}
                    color={category?.attributes?.color}
                >
                    <GridTemplate template={4} posts={postsByCategory} />
                </Section>
            )}
        </div>
    )
}
