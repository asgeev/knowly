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

export default async function Page() {
    const { data: latestPosts } = await getLatestPosts()

    console.log(latestPosts)
    return (
        <div className="space-y-5">
            <h1 className="text-2xl font-semibold ml-1">Najnowsze posty</h1>
            {latestPosts &&
                latestPosts.map((latestPost: latestPost) => {
                    const { title, slug, publishedAt, cover, category } =
                        latestPost.attributes
                    console.log(title)

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
        </div>
    )
}
