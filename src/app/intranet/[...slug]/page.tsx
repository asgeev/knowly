import { notFound } from 'next/navigation'

const getPageData = async (path: string) => {
    const response = await fetch(
        `http://localhost:1337/api/navigation/render/main-navigation?path=/${path}`
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
    console.log(data[0]?.related?.content)
    return (
        <>
            {!data || !data[0]?.related ? (
                notFound()
            ) : (
                <article className="prose lg:prose-lg dark:prose-invert">
                    <p>afas</p>
                    {data[0]?.related && (
                        <div
                            dangerouslySetInnerHTML={{
                                __html: data[0]?.related?.content,
                            }}
                        ></div>
                    )}
                </article>
            )}
        </>
    )
}

export default Page
