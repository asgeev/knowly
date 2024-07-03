import { fetchPostsByCategory, getPost } from '@/app/actions'
import { Section } from '@/components/molecules/Section'
import { GridTemplate } from '@/components/molecules/GridTemplates'
import { NoPosts } from '../../../../components/atoms/NoPosts'

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
    let { data: postsByCategory } = await fetchPostsByCategory(
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
