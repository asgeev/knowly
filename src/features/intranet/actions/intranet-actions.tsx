'use server'

import { getStrapiUrl } from '@/lib/utils'

const strapiUrl = getStrapiUrl()

export const getPage = async (path: string) => {
    const url = new URL('/api/navigation/render/intranet-navigation', strapiUrl)

    const params = {
        type: 'TREE',
        path: `/${path}`,
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}

export const getNavigation = async () => {
    const url = new URL('/api/navigation/render/intranet-navigation', strapiUrl)

    const params = {
        type: 'TREE',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`, {
        next: { revalidate: 300 },
    })

    return response?.json()
}

export const getFastLinks = async () => {
    const url = new URL('/api/links', strapiUrl)

    const response = await fetch(`${url}`)

    return response?.json()
}
