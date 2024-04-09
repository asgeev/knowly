import { notFound } from 'next/navigation'
import { changeDate } from '../../../helpers/changeDate'
import { Tag } from '../../../components/atoms/Tag'
interface PageContent {
    type: string
    title: string
    createdBy: {
        firstname: string
        createdAt: string
    }
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

const getPageData = async (path: string) => {
    const response = await fetch(
        `http://localhost:1337/api/navigation/render/main-navigation?type=TREE&path=/${path}`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const Page = async ({
    params,
}: {
    params: {
        slug: Array<string>
    }
}) => {
    const path: string = params?.slug?.join('/')

    const data = await getPageData(path)

    const pageContent: PageContent = data[0]?.related

    const localDate = changeDate(pageContent?.createdBy?.createdAt)

    const tags = pageContent?.tags

    //If data response array is empty or type is WRAPPER
    if (!data?.length || pageContent?.type === 'WRAPPER') {
        notFound()
    }

    return (
        <>
            {pageContent && (
                <div className="max-w-4xl m-auto">
                    <article className="prose max-w-none lg:prose-xl prose-img:rounded-xl dark:prose-invert prose-gray">
                        <div className="pt-20">
                            <p className="text-textSecondary">{localDate}</p>
                            <h1>{pageContent?.title}</h1>

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
