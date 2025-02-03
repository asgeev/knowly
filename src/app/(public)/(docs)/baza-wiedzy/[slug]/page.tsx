import { changeDate } from '@/helpers/changeDate'
import { getDoc } from '@/features/docs/actions/docs-actions'
import { Calendar, RefreshCcw } from 'lucide-react'

const DocPage = async ({
    params,
}: {
    params: {
        slug: string
    }
}) => {
    const { data } = await getDoc(params.slug)

    const pageData = data.attributes

    const publishedAt = changeDate(pageData?.publishedAt)
    const updatedAt = changeDate(pageData?.updatedAt)

    return (
        <div>
            {pageData && (
                <div>
                    <article className="prose max-w-none lg:prose-lg prose-img:rounded-xl dark:prose-invert prose-gray lg:mt-4">
                        <h1>{pageData?.title}</h1>
                        <div className="not-prose flex gap-7 text-base text-muted-foreground">
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
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pageData?.content,
                            }}
                        ></div>
                    </article>
                </div>
            )}
        </div>
    )
}

export default DocPage
