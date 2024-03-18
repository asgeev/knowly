import { notFound } from 'next/navigation'
import { changeDate } from '../../../helpers/changeDate'
interface PageContent {
    type: string
    title: string
    createdBy: {
        firstname: string
        createdAt: string
    }
    content: string
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

    //If data response array is empty or type is WRAPPER
    if (!data?.length || pageContent?.type === 'WRAPPER') {
        notFound()
    }

    return (
        <>
            {pageContent && (
                <div className="pt-32 container">
                    <article className="mx-auto prose dark:prose-invert">
                        <div className="pb-16">
                            <h1 className="text-4xl font-bold m-0">
                                {pageContent?.title}
                            </h1>
                            <p className="text-textSecondary font-semibold">
                                {localDate}
                            </p>
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
