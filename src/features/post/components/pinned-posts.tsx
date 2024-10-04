import { getPinnedPosts } from '@/features/post/actions/post-actions'
import { GridTemplate } from '@/components/molecules/grid-templates'
import { Section } from '@/components/molecules/section'

export default async function PinnedPosts() {
    const { data: pinnedPosts } = await getPinnedPosts()

    return (
        <>
            {pinnedPosts?.length ? (
                <Section title="Przypięte">
                    <GridTemplate template={1} posts={pinnedPosts} />
                </Section>
            ) : null}
        </>
    )
}
