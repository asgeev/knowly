import { GridTemplate } from '../components/molecules/GridTemplates'
import { Section } from '../components/molecules/Section'
import {
    getAllCategoriesWithPosts,
    getLatestPosts,
    getPinnedPosts,
} from './actions'

export const revalidate = 10 // revalidate at most every 10 seconds

export default async function Home() {
    const { data: pinnedPosts } = await getPinnedPosts()
    const { data: latestPosts } = await getLatestPosts()
    const { data: allCategories } = await getAllCategoriesWithPosts()

    //Sort categories by order
    const categories = allCategories.sort((a, b) => {
        return a.attributes.order - b.attributes.order
    })

    return (
        <>
            {pinnedPosts?.length && (
                <Section title="Przypięte">
                    <GridTemplate template={1} posts={pinnedPosts} />
                </Section>
            )}

            <Section title="Najnowsze" categoryUrl="/najnowsze">
                {latestPosts?.length ? (
                    <GridTemplate template={2} posts={latestPosts} />
                ) : (
                    <p className="text-xl text-textSecondary uppercase font-semibold">
                        Brak postów
                    </p>
                )}
            </Section>
            {/* Map all categories from backend */}
            {categories?.map((category) => {
                const { name, slug, posts, color, grid } = category?.attributes

                return (
                    <Section
                        key={category?.id}
                        title={name}
                        color={color}
                        categoryUrl={`/kategoria/${slug}`}
                    >
                        {posts?.data?.length ? (
                            <GridTemplate
                                template={grid?.grid_template}
                                posts={posts?.data}
                            />
                        ) : (
                            <p className="text-xl text-textSecondary uppercase font-semibold">
                                Brak postów
                            </p>
                        )}
                    </Section>
                )
            })}
        </>
    )
}
