'use server'

import { getStrapiUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'

const strapiUrl = getStrapiUrl()

export const getDoc = async (slug: string) => {
    const url = new URL(`/api/slugify/slugs/page/${slug}`, strapiUrl)

    const params = {
        'fields[0]': 'title',
        'fields[1]': 'content',
        'fields[2]': 'createdAt',
        'fields[3]': 'publishedAt',
        'fields[4]': 'updatedAt',
        'populate[0]': 'tags',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    if (response.status === 404) notFound()

    return response?.json()
}

export const getDocsNavigation = async () => {
    const url = new URL('/api/navigation/render/docs-navigation', strapiUrl)

    const params = {
        type: 'TREE',
    }
    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}
