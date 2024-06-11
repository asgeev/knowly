export type PostItemProps = {
    href: string | undefined
    title: string
    coverUrl: string | undefined | null
    publishedAt: string | undefined | null
    category?: string
    categoryColor?: string
    className?: string
}

export type PostCategory = {
    data: {
        attributes: {
            color: string
            name: string
        }
    }
}

export type PostCover = {
    data: {
        attributes: {
            url: string
        }
    }
}

export type PostAttributes = {
    title: string
    slug?: string
    href?: string
    cover?: PostCover
    category?: PostCategory
    publishedAt: string
    isExternal: boolean
}

export type Post = {
    id: number
    attributes: PostAttributes
}

export type Posts = {
    posts: Array<Post>
}

export interface GridProps extends Posts {
    template: number
}
