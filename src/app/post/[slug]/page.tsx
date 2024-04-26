import { notFound } from 'next/navigation'

const fetchPost = async (slug: string) => {
    const response = await fetch(
        `http://localhost:1337/api/slugify/slugs/post/${slug}?fields[0]=title&fields[1]=content&fields[3]=publishedAt`
    )

    if (response.status === 404) {
        notFound()
    } else if (!response.ok) {
        throw new Error('Failed')
    }

    return response?.json()
}

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug.toString()

    const { data } = await fetchPost(slug)

    return <div>{data.attributes.title}</div>
}
