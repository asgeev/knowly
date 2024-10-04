import { getLatestPosts } from '@/features/post/actions/post-actions'
import { Section } from '@/components/molecules/section'
import { GridTemplate } from '@/components/molecules/grid-templates'

export default async function LatestPosts() {
    const { data: latestPosts } = await getLatestPosts()

    return (
        <>
            {latestPosts && (
                <Section title="Najnowsze" categoryUrl="/posty/najnowsze">
                    {latestPosts?.length ? (
                        <GridTemplate template={2} posts={latestPosts} />
                    ) : (
                        <p className="text-xl text-textSecondary uppercase font-semibold">
                            Brak postów
                        </p>
                    )}
                </Section>
            )}
        </>
    )
}
