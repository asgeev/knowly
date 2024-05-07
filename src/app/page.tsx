import {
    GridTemplate,
    GridTemplate1,
    GridTemplate2,
    GridTemplate3,
    GridTemplate4,
    GridTemplate5,
} from '../components/molecules/GridTemplates'
import { Section } from '../components/molecules/Section'

export const revalidate = 120 // revalidate at most every 2 minutes

const fetchPinnedPosts = async () => {
    const response = await fetch(
        `http://localhost:1337/api/posts?fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[0]=cover&populate[1]=category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const fetchLatestPosts = async () => {
    const response = await fetch(
        `http://localhost:1337/api/posts?fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[0]=cover&populate[1]=category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const fetchPostsByCategory = async (categorySlug: string) => {
    const response = await fetch(
        `http://localhost:1337/api/posts?fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[0]=cover&populate[1]=category&filters[$and][0][category][slug][$eq]=${categorySlug}`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const getAllCategoriesWithPosts = async () => {
    const response = await fetch(
        `http://localhost:1337/api/categories?fields[0]=name&fields[1]=slug&fields[2]=color&fields[3]=order&populate[grid][populate][0]=grid_template&populate[posts][populate][0]=cover, category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

export default async function Home() {
    const { data: pinnedPosts } = await fetchPinnedPosts()
    const { data: latestPosts } = await fetchLatestPosts()
    const { data: categories } = await getAllCategoriesWithPosts()

    return (
        <>
            <Section title="Przypięte" categoryUrl="/najnowsze">
                {pinnedPosts?.length ? (
                    <GridTemplate template={1} posts={pinnedPosts} />
                ) : (
                    <p className="text-xl text-textSecondary uppercase font-semibold">
                        Brak postów
                    </p>
                )}
            </Section>

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
