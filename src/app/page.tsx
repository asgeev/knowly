import {
    GridTemplate1,
    GridTemplate2,
    GridTemplate3,
    GridTemplate4,
    GridTemplate5,
} from '../components/organisms/GridTemplates'
import { Section } from '../components/molecules/Section'

export const revalidate = 120 // revalidate at most every 2 minutes

const fetchPinnedPosts = async () => {
    const response = await fetch(
        `http://localhost:1337/api/posts?fields[0]=title&fields[1]=slug&populate[0]=cover&populate[1]=category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const fetchLatestPosts = async () => {
    const response = await fetch(
        `http://localhost:1337/api/posts?fields[0]=title&fields[1]=slug&populate[0]=cover&populate[1]=category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const fetchPostByCategory = async (categorySlug: string) => {
    const response = await fetch(
        `http://localhost:1337/api/posts?fields[0]=title&fields[1]=slug&populate[0]=cover&populate[1]=category&filters[$and][0][category][slug][$eq]=${categorySlug}&`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

export default async function Home() {
    const { data: pinnedPosts } = await fetchPinnedPosts()
    const { data: latestPosts } = await fetchLatestPosts()
    const { data: cybersecurityPosts } = await fetchPostByCategory(
        'cyberbezpieczenstwo'
    )
    const { data: sportPosts } = await fetchPostByCategory('sport')

    return (
        <>
            <Section title="Przypięte">
                <GridTemplate1 items={pinnedPosts} />
            </Section>
            <Section title="Najnowsze">
                <GridTemplate2 items={latestPosts} />
            </Section>
            <Section title="Cyberbezpieczeństwo">
                <GridTemplate3 items={cybersecurityPosts} />
            </Section>
            <Section title="Ciekawostki">
                <GridTemplate4 items={sportPosts} />
            </Section>
            <Section title="Sport">
                <GridTemplate5 items={sportPosts} />
            </Section>
        </>
    )
}
