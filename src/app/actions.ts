'use server'

import { notFound } from 'next/navigation'

const strapiUrl = process.env.STRAPI_URL

export const getPost = async (slug: string) => {
    const response = await fetch(
        `${strapiUrl}/api/slugify/slugs/post/${slug}?fields[0]=title&fields[1]=content&fields[2]=publishedAt&populate[0]=category,cover`
    )

    if (response.status === 404) {
        notFound()
    } else if (!response.ok) {
        throw new Error('Failed')
    }

    return response?.json()
}

export const getPinnedPosts = async () => {
    const response = await fetch(
        `${strapiUrl}/api/posts?sort=publishedAt:desc&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[0]=cover&populate[1]=category&filters[pinned][$eq]=true`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

export const getLatestPosts = async () => {
    const response = await fetch(
        `${strapiUrl}/api/posts?sort=publishedAt:desc&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[0]=cover&populate[1]=category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

export const fetchPostsByCategory = async (categorySlug: string) => {
    const response = await fetch(
        `${strapiUrl}/api/posts?sort[0]=publishedAt:desc&fields[0]=title&fields[1]=slug&fields[2]=publishedAt&populate[0]=cover&populate[1]=category&filters[$and][0][category][slug][$eq]=${categorySlug}`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

export const getAllCategories = async () => {
    const response = await fetch(
        `${strapiUrl}/api/categories?fields[0]=name&fields[1]=slug&fields[2]=color`
    )
    if (!response.ok) {
        throw new Error('Cannot fetch navigation for documentation')
    }
    return response?.json()
}

export const getAllCategoriesWithPosts = async () => {
    const response = await fetch(
        `${strapiUrl}/api/categories?fields[0]=name&fields[1]=slug&fields[2]=color&fields[3]=order&populate[grid][populate][0]=grid_template&populate[posts][populate][0]=cover,category`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

export const getIntranetPageData = async (path: string) => {
    const response = await fetch(
        `${strapiUrl}/api/navigation/render/main-navigation?type=TREE&path=/${path}`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }

    return response?.json()
}

export const getDocsPageData = async (slug: string) => {
    console.log(`Slug: ${slug}`)
    const response = await fetch(
        `${strapiUrl}/api/slugify/slugs/page/${slug}?fields[0]=title&fields[1]=content&fields[2]=createdAt&fields[3]=publishedAt&fields[4]=updatedAt&populate[0]=tags`
    )

    if (!response.ok) {
        notFound()
    }
    return response?.json()
}

export const getDocsNavigation = async () => {
    const response = await fetch(
        `${strapiUrl}/api/navigation/render/baza-wiedzy/?type=TREE`
    )
    if (!response.ok) {
        throw new Error('Cannot fetch navigation for documentation')
    }
    return response?.json()
}
