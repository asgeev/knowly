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

    const formattedDate = changeDate(pageData?.createdAt)

    return (
        <>
            {pageData && (
                <div className="">
                    <article className="prose max-w-none lg:prose-lg prose-imp:rounded-xl dark:prose-invert prose-gray px-4 lg:px-2">
                        <div className="pb-6">
                            <p className="mt-1.5 text-textSecondary">
                                {formattedDate}
                            </p>
                            <h1 className="text-textPrimary ">
                                {pageData?.title}
                            </h1>
                            {pageData.tags && (
                                <div className="flex flex-wrap gap-2">
                                    {pageData.tags?.data.map(
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
        </>
    )
}

export default DocPage
