import { PaginationComponent } from '@/components/molecules/PaginationComponent'
import { PostItemRight } from '@/components/molecules/PostItem'
import { changeDate } from '@/helpers/changeDate'
import { fetchPostsByCategory } from '@/app/actions'

type CategoryPost = {
    id: number
    attributes: {
        title: string
        slug: string
        publishedAt: string
        cover: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
        category: {
            data: {
                attributes: {
                    name: string
                    color: string
                }
            }
        }
    }
}

export const revalidate = 30 // revalidate at most every 10 seconds

export default async function Page({
    searchParams,
    params,
}: {
    searchParams: { page: string | undefined }
    params: { slug: string }
}) {
    const currentPage = searchParams?.page || '1'

    const { data: categoryPosts, meta } = await fetchPostsByCategory(
        params.slug,
        currentPage
    )

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="space-y-5">
            {categoryPosts &&
                (!categoryPosts.length ? (
                    <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                        <p className="font-medium">Brak postów</p>
                    </div>
                ) : null)}

            {categoryPosts?.map((categoryPost: CategoryPost) => {
                const { title, slug, publishedAt, cover, category } =
                    categoryPost.attributes

                const coverUrl: string = cover.data.attributes.url

                const categoryData = category.data.attributes

                return (
                    <PostItemRight
                        key={categoryPost.id}
                        href={`/post/${slug}`}
                        title={title}
                        coverUrl={coverUrl}
                        publishedAt={changeDate(publishedAt)}
                        category={categoryData.name}
                        categoryColor={categoryData.color}
                    />
                )
            })}
            <PaginationComponent pageCount={pageCount} />
        </div>
    )
}
