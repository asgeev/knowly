import { PropsWithChildren } from 'react'
import { PostItemBackground, PostItemRight, PostItemTop } from './PostItem'
import { changeDate } from '../../helpers/changeDate'

type Posts = {
    posts: Array<{
        id: number
        attributes: {
            title: string
            slug: string
            publishedAt: string
            cover?: {
                data: {
                    attributes: {
                        url: string
                    }
                }
            }
            category?: {
                data: {
                    attributes: {
                        color: string
                        name: string
                    }
                }
            }
        }
    }>
}
interface GridProps extends Posts {
    template: number
}

export const GridTemplate = (props: GridProps) => {
    const { template, posts } = props
    //Render grid template for category depend on number
    switch (template) {
        case 1:
            return <GridTemplate1 posts={posts} />
        case 2:
            return <GridTemplate2 posts={posts} />
        case 3:
            return <GridTemplate3 posts={posts} />
        case 4:
            return <GridTemplate4 posts={posts} />
        case 5:
            return <GridTemplate5 posts={posts} />
        default:
            return <GridTemplate1 posts={posts} />
    }
}

export const GridTemplate1 = (props: PropsWithChildren<Posts>) => {
    const { posts } = props

    console.log(posts)

    const content = posts?.slice(0, 5).map((post) => {
        const { category, slug, title, publishedAt, cover } = post?.attributes

        return (
            <PostItemBackground
                key={post?.id}
                href={slug}
                title={title}
                publishedAt={changeDate(publishedAt)}
                coverUrl={cover?.data?.attributes?.url}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
            />
        )
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {content}
        </div>
    )
}

export const GridTemplate2 = (props: PropsWithChildren<Posts>) => {
    const { posts } = props

    const contentRight = posts?.slice(3, 7).map((post) => {
        const { title, slug, category, publishedAt, cover } = post?.attributes
        return (
            <PostItemRight
                key={post?.id}
                title={title}
                href={slug}
                publishedAt={changeDate(publishedAt)}
                coverUrl={cover?.data?.attributes?.url}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                className="col-span-12"
            />
        )
    })
    return (
        <>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                    {posts[0] && (
                        <PostItemBackground
                            title={posts[0]?.attributes?.title}
                            category={
                                posts[0]?.attributes?.category?.data?.attributes
                                    ?.name
                            }
                            publishedAt={changeDate(
                                posts[0]?.attributes?.publishedAt
                            )}
                            categoryColor={
                                posts[0]?.attributes?.category?.data?.attributes
                                    ?.color
                            }
                            href={posts[0]?.attributes?.slug}
                            coverUrl={
                                posts[0]?.attributes?.cover?.data?.attributes
                                    ?.url
                            }
                            className="col-span-12 sm:col-span-6 md:h-[350px]"
                        />
                    )}

                    {posts[1] && (
                        <PostItemBackground
                            title={posts[1]?.attributes?.title}
                            category={
                                posts[1]?.attributes?.category?.data?.attributes
                                    ?.name
                            }
                            publishedAt={changeDate(
                                posts[1]?.attributes?.publishedAt
                            )}
                            categoryColor={
                                posts[1]?.attributes?.category?.data?.attributes
                                    ?.color
                            }
                            href={posts[1]?.attributes?.slug}
                            coverUrl={
                                posts[1]?.attributes?.cover?.data?.attributes
                                    ?.url
                            }
                            className="col-span-12 sm:col-span-6 md:h-[350px]"
                        />
                    )}
                    {posts[2] && (
                        <PostItemRight
                            title={posts[2]?.attributes?.title}
                            category={
                                posts[2]?.attributes?.category?.data?.attributes
                                    ?.name
                            }
                            publishedAt={changeDate(
                                posts[2]?.attributes?.publishedAt
                            )}
                            categoryColor={
                                posts[2]?.attributes?.category?.data?.attributes
                                    ?.color
                            }
                            href={posts[2]?.attributes?.slug}
                            coverUrl={
                                posts[2]?.attributes?.cover?.data?.attributes
                                    ?.url
                            }
                            className="col-span-12"
                        />
                    )}
                    {posts[3] && (
                        <PostItemRight
                            title={posts[3]?.attributes?.title}
                            category={
                                posts[3]?.attributes?.category?.data?.attributes
                                    ?.name
                            }
                            publishedAt={changeDate(
                                posts[3]?.attributes?.publishedAt
                            )}
                            categoryColor={
                                posts[3]?.attributes?.category?.data?.attributes
                                    ?.color
                            }
                            href={posts[3]?.attributes?.slug}
                            coverUrl={
                                posts[3]?.attributes?.cover?.data?.attributes
                                    ?.url
                            }
                            className="col-span-12"
                        />
                    )}
                </div>
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
                    {contentRight}
                </div>
            </div>
            {props.children}
        </>
    )
}

export const GridTemplate3 = (props: PropsWithChildren<Posts>) => {
    const { posts: items } = props

    const contentRight = items.slice(1, 4).map((item) => {
        const { category, title, publishedAt, slug, cover } = item?.attributes
        return (
            <PostItemRight
                key={item?.id}
                title={title}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                href={`${slug}`}
                coverUrl={cover?.data?.attributes?.url}
                className="col-span-12"
            />
        )
    })

    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                {items[0] && (
                    <PostItemBackground
                        title={items[0]?.attributes?.title}
                        category={
                            items[0]?.attributes?.category?.data?.attributes
                                ?.name
                        }
                        publishedAt={changeDate(
                            items[0]?.attributes?.publishedAt
                        )}
                        categoryColor={
                            items[0]?.attributes?.category?.data?.attributes
                                ?.color
                        }
                        href={items[0]?.attributes?.slug}
                        coverUrl={
                            items[0]?.attributes?.cover?.data?.attributes?.url
                        }
                        className="col-span-12 min-h-[350px] lg:h-full"
                    />
                )}
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-5">
                {contentRight}
            </div>
        </div>
    )
}

export const GridTemplate4 = (props: PropsWithChildren<Posts>) => {
    const { posts: items } = props

    const content = items.slice(0, 4).map((item) => {
        const { category, title, publishedAt, slug, cover } = item?.attributes

        return (
            <PostItemTop
                key={item?.id}
                title={title}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                href={slug}
                coverUrl={cover?.data?.attributes?.url}
                className="col-span-6 md:col-span-3"
            />
        )
    })

    return <div className="grid grid-cols-12 gap-5">{content}</div>
}

export const GridTemplate5 = (props: PropsWithChildren<Posts>) => {
    const { posts: items } = props

    const contentBottom = items?.slice(3, 7).map((item) => {
        const { category, title, publishedAt, slug, cover } = item?.attributes

        return (
            <PostItemTop
                key={item?.id}
                title={title}
                publishedAt={publishedAt}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                href={slug}
                coverUrl={cover?.data?.attributes?.url}
                className="col-span-6 md:col-span-3"
            />
        )
    })

    return (
        <div className="grid grid-cols-12 gap-5">
            {items[0] && (
                <PostItemBackground
                    title={items[0]?.attributes?.title}
                    href={items[0]?.attributes?.slug}
                    publishedAt={changeDate(items[0]?.attributes?.publishedAt)}
                    category={
                        items[0]?.attributes?.category?.data?.attributes?.name
                    }
                    categoryColor={
                        items[0]?.attributes?.category?.data?.attributes?.color
                    }
                    coverUrl={
                        items[0]?.attributes?.cover?.data?.attributes?.url
                    }
                    className="col-span-12 md:col-span-5 h-[350px]"
                />
            )}
            <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-5">
                {items[1] && (
                    <PostItemRight
                        title={items[1]?.attributes?.title}
                        href={items[1]?.attributes?.slug}
                        publishedAt={changeDate(
                            items[1]?.attributes?.publishedAt
                        )}
                        category={
                            items[1]?.attributes?.category?.data?.attributes
                                ?.name
                        }
                        categoryColor={
                            items[1]?.attributes?.category?.data?.attributes
                                ?.color
                        }
                        coverUrl={
                            items[1]?.attributes?.cover?.data?.attributes?.url
                        }
                        className="col-span-12 md:col-span-6"
                    />
                )}
                {items[2] && (
                    <PostItemRight
                        key={items[2]?.id}
                        title={items[2]?.attributes?.title}
                        href={items[2]?.attributes?.slug}
                        publishedAt={changeDate(
                            items[2]?.attributes?.publishedAt
                        )}
                        category={
                            items[2]?.attributes?.category?.data?.attributes
                                ?.name
                        }
                        categoryColor={
                            items[2]?.attributes?.category?.data?.attributes
                                ?.color
                        }
                        coverUrl={
                            items[2]?.attributes?.cover?.data?.attributes?.url
                        }
                        className="col-span-12 md:col-span-6"
                    />
                )}
            </div>
            {contentBottom}
        </div>
    )
}
