import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getStrapiUrl() {
    const strapiUrl = process.env.STRAPI_URL || 'localhost:1337'
    return strapiUrl
}

export function getUploadServiceUrl() {
    return process.env.UPLOAD_FILE_SERVICE_URL || 'localhost:4000'
}

export function formatBytes(bytes: number) {
    let size: string

    if (bytes >= 1073741824) {
        size = (bytes / 1073741824).toFixed(2) + ' GB'
    } else if (bytes >= 1048576) {
        size = (bytes / 1048576).toFixed(2) + ' MB'
    } else if (bytes >= 1024) {
        size = (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes > 1) {
        size = bytes + ' bytes'
    } else if (bytes == 1) {
        size = bytes + ' byte'
    } else {
        size = '0 byte'
    }
    return size
}
