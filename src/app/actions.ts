'use server'

import { notFound } from 'next/navigation'

const stapiUrl = process.env.STRAPI_URL

export const getPost = async (slug: string) => {
    const response = await fetch(
        `${stapiUrl}/api/slugify/slugs/post/${slug}?fields[0]=title&fields[1]=content&fields[2]=publishedAt&populate[0]=category,cover`
    )

    if (response.status === 404) {
        notFound()
    } else if (!response.ok) {
        throw new Error('Failed')
    }

    return response?.json()
}
