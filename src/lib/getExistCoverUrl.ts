interface CoverObject {
    url: string
    formats: {
        thumbnail?: {
            url: string
        }
        large?: {
            url: string
        }
        medium?: {
            url: string
        }
        small?: {
            url: string
        }
    }
}

//Try get image from cover object
export default function getExistCoverUrl(
    coverObject: CoverObject | undefined,
    size?: 'thumbnail' | 'large' | 'medium' | 'small'
) {
    //If size not exists try get larger image
    const formats = coverObject?.formats
    if (formats) {
        let exist = false
        if (size === 'thumbnail') {
            if (formats.thumbnail) return formats.thumbnail.url
            else exist = true
        }
        if (size === 'small' || exist) {
            if (formats.small) return formats.small.url
            else exist = true
        }

        if (size === 'medium' || exist) {
            if (formats.medium) return formats.medium.url
            else exist = true
        }
        if (size === 'large' || exist) {
            if (formats.large) return formats.large.url
        }
        return coverObject?.url
    } else {
        return coverObject?.url
    }
}
