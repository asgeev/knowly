import { PostItemBackground, PostItemRight, PostItemTop } from './PostItem'
import { changeDate } from '@/helpers/changeDate'
import { internalExternalPostHref } from '@/helpers/internalExternalPostHref'
import { GridProps, Post } from '@/app/types'

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

export const GridTemplate1 = ({ posts }: { posts: Array<Post> }) => {
    const content = posts?.slice(0, 5).map((post: Post) => {
        const { category, title, publishedAt, cover } = post?.attributes

        return (
            <PostItemBackground
                key={post?.id}
                href={internalExternalPostHref(post?.attributes)}
                title={title}
                publishedAt={changeDate(publishedAt)?.toString()}
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

export const GridTemplate2 = ({ posts }: { posts: Array<Post> }) => {
    const post0 = posts[0]?.attributes
    const post1 = posts[1]?.attributes
    const post2 = posts[2]?.attributes
    const post3 = posts[3]?.attributes

    const contentRight = posts?.slice(3, 7).map((post) => {
        const {
            title,
            slug = '',
            href = '',
            category,
            publishedAt,
            cover,
            isExternal,
        } = post?.attributes
        return (
            <PostItemRight
                key={post?.id}
                title={title}
                href={isExternal ? href : `/post/${slug}`}
                publishedAt={changeDate(publishedAt)?.toString()}
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
                    {post0 && (
                        <PostItemBackground
                            title={post0?.title}
                            category={post0?.category?.data?.attributes?.name}
                            publishedAt={changeDate(
                                post0?.publishedAt.toString()
                            )}
                            categoryColor={
                                post0?.category?.data?.attributes?.color
                            }
                            href={internalExternalPostHref(post0)}
                            coverUrl={post0?.cover?.data?.attributes?.url}
                            className="col-span-12 sm:col-span-6 md:h-[350px]"
                        />
                    )}

                    {post1 && (
                        <PostItemBackground
                            title={post1?.title}
                            category={post1?.category?.data?.attributes?.name}
                            publishedAt={changeDate(
                                post1?.publishedAt?.toString()
                            )}
                            categoryColor={
                                post1?.category?.data?.attributes?.color
                            }
                            href={internalExternalPostHref(post1)}
                            coverUrl={post1?.cover?.data?.attributes?.url}
                            className="col-span-12 sm:col-span-6 md:h-[350px]"
                        />
                    )}
                    {post2 && (
                        <PostItemRight
                            title={post2?.title}
                            category={post2?.category?.data?.attributes?.name}
                            publishedAt={changeDate(post2?.publishedAt)}
                            categoryColor={
                                post2?.category?.data?.attributes?.color
                            }
                            href={internalExternalPostHref(post2)}
                            coverUrl={post2?.cover?.data?.attributes?.url}
                            className="col-span-12"
                        />
                    )}
                    {post3 && (
                        <PostItemRight
                            title={post3?.title}
                            category={post3?.category?.data?.attributes?.name}
                            publishedAt={changeDate(post3?.publishedAt)}
                            categoryColor={
                                post3?.category?.data?.attributes?.color
                            }
                            href={internalExternalPostHref(post3)}
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
        </>
    )
}

export const GridTemplate3 = ({ posts }: { posts: Array<Post> }) => {
    const post0 = posts[0]?.attributes

    const contentRight = posts.slice(1, 4).map((post) => {
        const { category, title, publishedAt, cover } = post?.attributes
        return (
            <PostItemRight
                key={post?.id}
                title={title}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                href={internalExternalPostHref(post.attributes)}
                coverUrl={cover?.data?.attributes?.url}
                className="col-span-12"
            />
        )
    })

    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-5">
                {post0 && (
                    <PostItemBackground
                        title={post0?.title}
                        category={post0?.category?.data?.attributes?.name}
                        publishedAt={changeDate(post0?.publishedAt)}
                        categoryColor={post0?.category?.data?.attributes?.color}
                        href={internalExternalPostHref(post0)}
                        coverUrl={post0?.cover?.data?.attributes?.url}
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

export const GridTemplate4 = ({ posts }: { posts: Array<Post> }) => {
    const content = posts.slice(0, 4).map((post) => {
        const { category, title, publishedAt, cover } = post?.attributes

        return (
            <PostItemTop
                key={post?.id}
                title={title}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                href={internalExternalPostHref(post?.attributes)}
                coverUrl={cover?.data?.attributes?.url}
                className="col-span-6 md:col-span-3"
            />
        )
    })

    return <div className="grid grid-cols-12 gap-5">{content}</div>
}

export const GridTemplate5 = ({ posts }: { posts: Array<Post> }) => {
    const post0 = posts[0]?.attributes
    const post1 = posts[1]?.attributes
    const post2 = posts[2]?.attributes

    const contentBottom = posts?.slice(3, 7).map((post) => {
        const { category, title, publishedAt, cover } = post?.attributes

        return (
            <PostItemTop
                key={post?.id}
                title={title}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                href={internalExternalPostHref(post?.attributes)}
                coverUrl={cover?.data?.attributes?.url}
                className="col-span-6 md:col-span-3"
            />
        )
    })

    return (
        <div className="grid grid-cols-12 gap-5">
            {post0 && (
                <PostItemBackground
                    title={post0?.title}
                    href={internalExternalPostHref(post0)}
                    publishedAt={changeDate(post0?.publishedAt)}
                    category={post0?.category?.data?.attributes?.name}
                    categoryColor={post0?.category?.data?.attributes?.color}
                    coverUrl={post0?.cover?.data?.attributes?.url}
                    className="col-span-12 md:col-span-5 h-[350px]"
                />
            )}
            <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-5">
                {post1 && (
                    <PostItemRight
                        title={post1?.title}
                        href={internalExternalPostHref(post1)}
                        publishedAt={changeDate(post1?.publishedAt)}
                        category={post1?.category?.data?.attributes?.name}
                        categoryColor={post1?.category?.data?.attributes?.color}
                        coverUrl={post1?.cover?.data?.attributes?.url}
                        className="col-span-12 md:col-span-6"
                    />
                )}
                {post2 && (
                    <PostItemRight
                        title={post2?.title}
                        href={internalExternalPostHref(post2)}
                        publishedAt={changeDate(post2?.publishedAt)}
                        category={post2?.category?.data?.attributes?.name}
                        categoryColor={post2?.category?.data?.attributes?.color}
                        coverUrl={post2?.cover?.data?.attributes?.url}
                        className="col-span-12 md:col-span-6"
                    />
                )}
            </div>
            {contentBottom}
        </div>
    )
}
