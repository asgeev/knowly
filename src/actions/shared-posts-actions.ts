'use server'

import { getStrapiUrl } from '@/lib/utils'
import { getAuthToken } from '../lib/getAuthToken'
import { redirect } from 'next/navigation'

const strapiUrl = getStrapiUrl()

const fetchDataWithAuth = async (url: string, params?: any, options?: {}) => {
    const token = await getAuthToken()

    params = new URLSearchParams(params)

    return await fetch(`${strapiUrl}${url}?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
        ...options,
    })
}

export const getSharedPostsManagement = async () => {
    const paramsWithPagination = {
        'pagination[page]': 1,
        'pagination[pageSize]': 10,
    }

    const response = await fetchDataWithAuth(`/api/shared-posts-management`)

    if (response.status === 403) redirect('/')

    return response?.json()
}
