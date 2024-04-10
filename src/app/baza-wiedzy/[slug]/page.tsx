import { notFound } from 'next/navigation'
import { Tag } from '../../../components/atoms/Tag'
import { changeDate } from '../../../helpers/changeDate'

const getDocPageContent = async (slug: string) => {
    const response = await fetch(
        `${process.env.STRAPI_URL}/api/slugify/slugs/page/${slug}?fields[0]=title&fields[1]=content&fields[2]=createdAt&fields[3]=publishedAt&fields[4]=updatedAt&populate[0]=tags`
    )

    if (!response.ok) {
        notFound()
    }
    return response?.json()
}

const DocPage = async ({
    params,
}: {
    params: {
        slug: string
    }
}) => {
    const { data } = await getDocPageContent(params.slug)

    const pageData = data.attributes

    const formattedDate = changeDate(pageData?.createdAt)

    return (
        <>
            {pageData && (
                <div className="">
                    <article className="prose lg:prose-xl dark:prose-invert prose-gray">
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
