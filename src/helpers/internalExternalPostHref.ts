import { PostAttributes } from '@/app/types'

export const internalExternalPostHref = (postAttributes: PostAttributes) => {
    if (postAttributes?.isExternal) {
        return postAttributes?.href
    }
    return `/post/${post?.slug}`
}
