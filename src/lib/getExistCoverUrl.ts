import { PostCover } from '@/app/types'

//Try get image from cover object
export default function getExistCoverUrl(
    coverObject: PostCover | undefined,
    size?: 'thumbnail' | 'large' | 'medium' | 'small'
) {
    //If size not exists try get larger image
    const coverAttr = coverObject?.data?.attributes
    const formats = coverAttr?.formats
    if (formats) {
        let urlExists = false
        if (size === 'thumbnail') {
            if (formats.thumbnail) return formats.thumbnail.url
            else urlExists = true
        }
        if (size === 'small' || urlExists) {
            if (formats.small) return formats.small.url
            else urlExists = true
        }
        if (size === 'medium' || urlExists) {
            if (formats.medium) return formats.medium.url
            else urlExists = true
        }
        if (size === 'large' || urlExists) {
            if (formats.large) return formats.large.url
        }
        return coverAttr?.url
    } else {
        return coverAttr?.url
    }
}
