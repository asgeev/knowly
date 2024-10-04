import { z } from 'zod'
import { SharedPostSchema } from '@/lib/formSchemas'

export type PostVariants = 'background' | 'top' | 'right'

export type PostItemProps = {
    href: string | undefined
    title: string | undefined
    coverUrl: string | undefined
    publishedAt: string | undefined | null
    category?: string | undefined
    categoryColor?: string | undefined
    className?: string | undefined
    blurData?: string
}

export type PostCategory = {
    data: {
        attributes: {
            color: string
            name: string
            slug?: string
        }
    }
}

export type PostCover = {
    data: {
        attributes: {
            url: string
            formats?: {
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

export interface SearchParamsProps {
    searchParams?: {
        page?: string
    }
}

export type SharedPostProps = {
    title: string
    href: string
    publishedAt?: string | undefined
}

export type TSharedPostSchema = z.infer<typeof SharedPostSchema>

export type TSharedFile = {
    fileUID: string
    originalFileName: string
    fileNameWithExt: string
    fileMime: string
    fileSize: number
    patch: string
    uploadDate: Date
}
