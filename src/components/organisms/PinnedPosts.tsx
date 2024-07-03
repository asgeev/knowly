import { getPinnedPosts } from '@/app/actions'
import { GridTemplate } from '@/components/molecules/GridTemplates'
import { Section } from '@/components/molecules/Section'

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
