import { getLatestPosts } from '@/app/actions'
import { Section } from '@/components/molecules/Section'
import { GridTemplate } from '@/components/molecules/GridTemplates'

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
