import Image from 'next/image'
import { changeDate } from '@/helpers/changeDate'
import Link from 'next/link'
import { getPost } from '../../actions'

export const revalidate = 30 // revalidate at most every 30 seconds

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug.toString()

    //Fetch post data
    const { data: postContent } = await getPost(slug)

    const { title, content, publishedAt, category, cover } =
        postContent?.attributes

    const strapiUrl: string | undefined = process.env.STRAPI_URL
    const localDate: string | null | undefined =
        changeDate(publishedAt)?.toString()
    const coverUrl: string = `${strapiUrl}${cover?.data?.attributes?.url}`
    const categoryData = category?.data?.attributes

    return (
        <>
            {postContent && (
                <div className="space-y-6">
                    <div className="not-prose relative overflow-hidden w-full h-64 md:h-[420px] rounded-lg">
                        <Image
                            src={coverUrl}
                            alt={'asfafs'}
                            fill
                            objectFit="cover"
                            objectPosition="center center"
                        />
                    </div>
                    <article className="prose max-w-none lg:prose-xl prose-img:rounded-xl dark:prose-invert prose-gray px-6">
                        <div className="flex gap-5 items-baseline">
                            <Link
                                href={`/posty/kategoria/${categoryData?.slug}`}
                                className="text-textSecondary font-extrabold hover:text-accent no-underline"
                            >
                                {categoryData?.name}
                            </Link>
                            <p className="text-textSecondary text-base font-semibold ">
                                {localDate}
                            </p>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <span
                                className="w-14 h-2 rounded-lg block my-10"
                                style={{ backgroundColor: categoryData?.color }}
                            ></span>

                            {/* {tags && (
                               <div className="flex flex-row gap-2">
                                   {tags.map(({ id, slug }) => {
                                       return <Tag key={id} text={slug} />
                                   })}
                               </div>
                           )}  */}
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        ></div>
                    </article>
                </div>
            )}
        </>
    )
}
