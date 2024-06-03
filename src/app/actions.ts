'use server'

import { notFound } from 'next/navigation'

const strapiUrl = process.env.STRAPI_URL

//Page size fetching
const pageSize = 10

const fetchData = async (url: string, params?: any, options?: {}) => {
    params = new URLSearchParams(params)
    try {
        return await fetch(`${strapiUrl}${url}?${params}`, options)
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch ' + url + params)
    }
}

export const getPost = async (slug: string) => {
    const params = {
        'fields[0]': 'title',
        'fields[1]': 'content',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
    }

    const response = await fetchData(`/api/slugify/slugs/post/${slug}`, params)

    if (response.status === 404) notFound()

    return response?.json()
}

export const getPinnedPosts = async () => {
    const params = {
        'sort[0]': 'publishedAt:desc',
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
        'filters[pinned][$eq]': 'true',
    }

    const response = await fetchData('/api/posts', params)

    return response?.json()
}

export const getLatestPosts = async (currentPage?: string) => {
    let newParams
    let params = {
        'sort[0]': 'publishedAt:desc',
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
    }
    //Create a new object with additional properties
    if (currentPage) {
        newParams = {
            ...params,
            'pagination[page]': currentPage,
            'pagination[pageSize]': pageSize,
        }
    } else {
        newParams = { ...params }
    }

    const response = await fetchData(`/api/posts`, newParams)

    return response?.json()
}

export const fetchPostsByCategory = async (
    categorySlug: string,
    currentPage: string
) => {
    const params = {
        'pagination[page]': currentPage,
        'pagination[pageSize]': pageSize,
        'sort[0]': 'publishedAt:desc',
        'fields[0]': 'title',
        'fields[1]': 'slug',
        'fields[2]': 'publishedAt',
        'populate[0]': 'category,cover',
        'filters[$and][0][category][slug][$eq]': categorySlug,
    }
    const response = await fetchData(`/api/posts`, params)

    return response?.json()
}

export const getAllCategories = async () => {
    const params = {
        'fields[0]': 'name',
        'fields[1]': 'slug',
        'fields[2]': 'color',
    }

    const response = await fetchData(`/api/categories`, params)

    return response?.json()
}

export const getAllCategoriesWithPosts = async () => {
    const params = {
        'fields[0]': 'name',
        'fields[1]': 'slug',
        'fields[2]': 'color',
        'fields[3]': 'order',
        'populate[grid][populate][0]': 'grid_template',
        'populate[posts][populate][0]': 'cover,category',
    }
    const response = await fetchData(`/api/categories`, params)

    return response?.json()
}

export const getIntranetPageData = async (path: string) => {
    const params = {
        type: 'TREE',
        path: `/${path}`,
    }

    const response = await fetchData(
        `/api/navigation/render/intranet-navigation`,
        params
    )

    return response?.json()
}

export const getDocsPageData = async (slug: string) => {
    const params = {
        'fields[0]': 'title',
        'fields[1]': 'content',
        'fields[2]': 'createdAt',
        'fields[3]': 'publishedAt',
        'fields[4]': 'updatedAt',
        'populate[0]': 'tags',
    }
    const response = await fetchData(`/api/slugify/slugs/page/${slug}`, params)

    if (response.status === 404) notFound()

    return response?.json()
}

export const getDocsNavigation = async () => {
    const params = {
        type: 'TREE',
    }
    const response = await fetchData(
        `/api/navigation/render/docs-navigation`,
        params,
        { next: { revalidate: 300 } }
    )

    return response?.json()
}

export const getIntranetNavigation = async () => {
    const params = {
        type: 'TREE',
    }
    const response = await fetchData(
        `/api/navigation/render/intranet-navigation`,
        params,
        { next: { revalidate: 300 } }
    )

    return response?.json()
}

export const getFastLinks = async () => {
    const response = await fetchData(`/api/links`)

    return response?.json()
}

export const getNotificationBar = async () => {
    const params = {
        'fields[0]': 'content',
    }
    const response = await fetchData(`/api/notification-bar`, params)

    return response?.json()
}

export const getNotifications = async () => {
    const params = {
        'fields[0]': 'text',
        'fields[1]': 'type',
        'fields[2]': 'link',
    }
    const response = await fetchData(`/api/notifications`, params, {
        cache: 'no-store',
    })

    return response?.json()
}
