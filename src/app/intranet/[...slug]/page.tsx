import { notFound } from 'next/navigation'
import { changeDate } from '../../../helpers/changeDate'
import { Tag } from '../../../components/atoms/Tag'
import { getIntranetPageData } from '../../actions'
interface PageContent {
    type: string
    title: string
    publishedAt: string
    updatedAt: string
    content: string
    tags: {
        map(
            arg0: ({
                id,
                slug,
            }: {
                id: any
                slug: any
            }) => import('react').JSX.Element
        ): import('react').ReactNode
        id: number
        slug: string
    }
}

export const revalidate = 30 // revalidate at most every 30 seconds

const Page = async ({
    params,
}: {
    params: {
        slug: Array<string>
    }
}) => {
    const path: string = params?.slug?.join('/')

    const data = await getIntranetPageData(path)

    const pageContent: PageContent = data[0]?.related

    const publishedAt = changeDate(pageContent?.publishedAt)

    const updatedAt = changeDate(pageContent?.updatedAt)

    const tags = pageContent?.tags

    //If data response array is empty or type is WRAPPER
    if (!data?.length || pageContent?.type === 'WRAPPER') {
        notFound()
    }

    return (
        <>
            {pageContent && (
                <div className="bg-secondary px-6 rounded-lg">
                    <article className="prose max-w-none lg:prose-xl prose-img:rounded-xl dark:prose-invert prose-gray ">
                        <div className="pt-20 pb-5">
                            <h1>{pageContent?.title}</h1>
                            <div className="not-prose flex gap-7 flex-wrap text-base text-textSecondary">
                                {publishedAt && (
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined">
                                            calendar_month
                                        </span>
                                        <p>Publikacja: {publishedAt}</p>
                                    </div>
                                )}
                                {updatedAt && (
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined">
                                            published_with_changes
                                        </span>
                                        <p>Aktualizacja: {updatedAt}</p>
                                    </div>
                                )}
                            </div>
                            {tags && (
                                <div className="flex flex-row gap-2">
                                    {tags.map(({ id, slug }) => {
                                        return <Tag key={id} text={slug} />
                                    })}
                                </div>
                            )}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pageContent?.content,
                            }}
                        ></div>
                    </article>
                </div>
            )}
        </>
    )
}

export default Page
