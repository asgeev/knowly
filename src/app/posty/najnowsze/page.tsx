import { PaginationComponent } from '../../../components/molecules/PaginationComponent'
import { PostItemRight } from '../../../components/molecules/PostItem'
import { changeDate } from '../../../helpers/changeDate'
import { getLatestPosts } from '../../actions'

type latestPost = {
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

interface SearchParamsProps {
    searchParams?: {
        page?: string
    }
}

export const revalidate = 30 // revalidate at most every 10 seconds

export default async function Page({ searchParams }: SearchParamsProps) {
    const currentPage = searchParams?.page || '1'
    const { data: latestPosts, meta } = await getLatestPosts(currentPage)

    const pageCount = meta?.pagination?.pageCount

    return (
        <div className="space-y-5">
            <h1 className="text-2xl font-semibold ml-1">Najnowsze posty</h1>

            {latestPosts &&
                (!latestPosts?.length ? (
                    <div className="bg-secondary rounded-md h-16 flex items-center justify-center">
                        <p className="font-medium">Brak postów</p>
                    </div>
                ) : null)}

            {latestPosts &&
                latestPosts?.map((latestPost: latestPost) => {
                    const { title, slug, publishedAt, cover, category } =
                        latestPost.attributes

                    const coverUrl: string = cover.data.attributes.url

                    const categoryData = category.data.attributes

                    return (
                        <PostItemRight
                            key={latestPost.id}
                            href={`${slug}`}
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
