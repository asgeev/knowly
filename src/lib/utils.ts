import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getStrapiUrl() {
    const strapiUrl = process.env.STRAPI_URL || 'localhost:1337'
    return strapiUrl
}
