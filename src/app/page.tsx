import {
    GridTemplate1,
    GridTemplate2,
    GridTemplate3,
    GridTemplate4,
    GridTemplate5,
} from '../components/organisms/GridTemplates'
import { Section } from '../components/molecules/Section'

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
    // const { data: pinnedPosts } = await pinnedPosts()
    const { data: latestPosts } = await fetchLatestPosts()
    const { data: sportPosts } = await fetchPostByCategory('sport')
    const { data: cybersecurityPosts } = await fetchPostByCategory(
        'cyberbezpieczenstwo'
    )

    return (
        <>
            <Section title="Przypięte">
                <GridTemplate1 items={latestPosts} />
            </Section>
            <Section title="Najnowsze">
                <GridTemplate2 items={sportPosts} />
            </Section>
            <Section title="Cyberbezpieczeństwo">
                <GridTemplate3 items={cybersecurityPosts} />
            </Section>
            <Section title="Ciekawostki">
                <GridTemplate4 items={latestPosts} />
            </Section>
            <Section title="Sport">
                <GridTemplate5 items={latestPosts} />
            </Section>
        </>
    )
}
