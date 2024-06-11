import { PostAttributes } from '@/components/molecules/GridTemplates'

export const internalExternalPostHref = (post: PostAttributes) => {
    if (post?.isExternal) {
        return post?.href
    }
    return `/post/${post?.slug}`
}
