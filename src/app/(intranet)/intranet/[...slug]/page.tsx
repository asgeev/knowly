import { notFound } from 'next/navigation'
import { changeDate } from '@/helpers/changeDate'
import { getPage } from '@/features/intranet/actions/intranet-actions'
import { Calendar, RefreshCcw } from 'lucide-react'

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

    const data = await getPage(path)

    const pageContent: PageContent = data[0]?.related

    const publishedAt = changeDate(pageContent?.publishedAt)

    const updatedAt = changeDate(pageContent?.updatedAt)

    //If data response array is empty or type is WRAPPER
    if (!data?.length || pageContent?.type === 'WRAPPER') {
        notFound()
    }

    return (
        <>
            {pageContent && (
                <div className="bg-secondary px-6 rounded-lg border border-border">
                    <article className="prose max-w-none lg:prose-lg prose-img:rounded-xl dark:prose-invert prose-gray pb-4">
                        <div className="pt-20 pb-5">
                            <h1>{pageContent?.title}</h1>
                            <div className="not-prose flex gap-7 flex-wrap text-base text-muted-foreground">
                                {publishedAt && (
                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        <p>Publikacja: {publishedAt}</p>
                                    </div>
                                )}
                                {updatedAt && (
                                    <div className="flex items-center gap-2">
                                        <RefreshCcw size={18} />
                                        <p>Aktualizacja: {updatedAt}</p>
                                    </div>
                                )}
                            </div>
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
