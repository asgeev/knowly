'use server'

import { getStrapiUrl } from '@/lib/utils'

const strapiUrl = getStrapiUrl()

export const getAllCategories = async () => {
    const url = new URL(`/api/categories`, strapiUrl)

    const params = {
        'fields[0]': 'name',
        'fields[1]': 'slug',
        'fields[2]': 'color',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}

export const getAllCategoriesWithPosts = async () => {
    const url = new URL(`/api/categories`, strapiUrl)

    const params = {
        'fields[0]': 'name',
        'fields[1]': 'slug',
        'fields[2]': 'color',
        'fields[3]': 'order',
        'populate[grid][populate][0]': 'grid_template',
        'populate[posts][populate][0]': 'cover,category',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}
