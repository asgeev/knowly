import { PostAttributes } from '@/lib/types'

export const internalExternalPostHref = (postAttributes: PostAttributes) => {
    if (postAttributes?.isExternal) {
        return postAttributes?.href
    }
    return `/post/${postAttributes?.slug}`
}
