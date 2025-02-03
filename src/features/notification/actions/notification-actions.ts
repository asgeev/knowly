'use server'

import { getStrapiUrl } from '@/lib/utils'

const strapiUrl = getStrapiUrl()

export const getNotifications = async () => {
    const url = new URL(`/api/notifications`, strapiUrl)

    const params = {
        'fields[0]': 'text',
        'fields[1]': 'type',
        'fields[2]': 'link',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`, {
        cache: 'no-store',
    })

    return response?.json()
}

export const getNotificationBar = async () => {
    const url = new URL(`/api/notification-bar`, strapiUrl)

    const params = {
        'fields[0]': 'content',
    }

    const searchParams = new URLSearchParams(params)

    const response = await fetch(`${url}?${searchParams}`)

    return response?.json()
}
