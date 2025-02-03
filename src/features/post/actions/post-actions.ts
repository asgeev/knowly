'use server'

import { getStrapiUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'

const strapiUrl = getStrapiUrl()

//Set page element size
const pageSize = 10

export const getPost = async (slug: string) => {
    const url = new URL(`/api/slugify/slugs/post/${slug}`, strapiUrl)
    const params = {
        'fields[0]': 'title',
        'fields[1]': 'content',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover,embedPdf',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    if (response.status === 404) notFound()

    return response?.json()
}

export const getPinnedPosts = async () => {
    const url = new URL(`/api/posts/`, strapiUrl)

    const params = {
        'sort[0]': 'publishedAt:desc',
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
        'filters[pinned][$eq]': 'true',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}

export const getLatestPosts = async (currentPage?: string) => {
    const url = new URL(`/api/posts/`, strapiUrl)

    let params = {
        'sort[0]': 'publishedAt:desc',
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
    }

    //Create a new object with additional properties
    const paramsWithPagination = {
        'pagination[page]': currentPage ?? '1',
        'pagination[pageSize]': pageSize,
    }
    if (currentPage) {
        params = {
            ...params,
            ...paramsWithPagination,
        }
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}

export const getPostsByCategory = async (
    categorySlug: string,
    currentPage?: string
) => {
    const url = new URL(`/api/posts/`, strapiUrl)

    let params = {
        'sort[0]': 'publishedAt:desc',
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
        'filters[$and][0][category][slug][$eq]': categorySlug,
    }

    const paramsWithPagination = {
        'pagination[page]': currentPage,
        'pagination[pageSize]': pageSize,
    }

    if (currentPage) {
        params = {
            ...params,
            ...paramsWithPagination,
        }
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}
