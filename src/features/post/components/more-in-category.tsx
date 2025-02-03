import {
    getPost,
    getPostsByCategory,
} from '@/features/post/actions/post-actions'
import { GridTemplate } from '@/components/molecules/grid-templates'
import { NoPosts } from '@/components/atoms/no-posts'

type Category = {
    id: number
    attributes: {
        name: string
        color: string
        slug: string
    }
}

export default async function MoreInCategory({ slug }: { slug: string }) {
    const { data: postContent } = await getPost(slug)
    const category: Category = postContent?.attributes?.category?.data
    let { data: postsByCategory } = await getPostsByCategory(
        category?.attributes?.slug
    )

    return (
        <>
            {postsByCategory ? (
                <GridTemplate template={4} posts={postsByCategory} />
            ) : (
                <NoPosts />
            )}
        </>
    )
}
