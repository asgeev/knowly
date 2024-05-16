import { Tag } from '../../../components/atoms/Tag'
import { changeDate } from '../../../helpers/changeDate'
import { getDocsPageData } from '../../actions'

const DocPage = async ({
    params,
}: {
    params: {
        slug: string
    }
}) => {
    const { data } = await getDocsPageData(params.slug)

    const pageData = data.attributes

    const publishedAt = changeDate(pageData?.publishedAt)
    const updatedAt = changeDate(pageData?.updatedAt)

    return (
        <div>
            {pageData && (
                <div>
                    <article className="prose max-w-none lg:prose-lg prose-imp:rounded-xl dark:prose-invert prose-gray px-4 lg:px-2">
                        <div className="pb-5 lg:pt-8">
                            <h1>{pageData?.title}</h1>
                            <div className="not-prose flex gap-7 text-base text-textSecondary">
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
                            {pageData?.tags && (
                                <div className="flex flex-wrap gap-2">
                                    {pageData?.tags?.data.map(
                                        ({ id, attributes }) => {
                                            return (
                                                <Tag
                                                    key={id}
                                                    text={attributes.slug}
                                                />
                                            )
                                        }
                                    )}
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
