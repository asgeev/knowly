export type PostItemProps = {
    href: string
    title: string
    coverUrl: string
    publishedAt: string
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

export interface Posts {
    posts: Array<Post>
}

export interface GridProps extends Posts {
    template: number
}
