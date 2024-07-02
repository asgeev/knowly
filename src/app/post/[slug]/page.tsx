import Image from 'next/image'
import { changeDate } from '@/helpers/changeDate'
import Link from 'next/link'
import { getPost } from '@/app/actions'
import { imageLoader } from '@/helpers/imageLoader'
import AllCategoriesSkeleton from './_components/AllCategoriesSkeleton'
import AllCategories from './_components/AllCategories'
import { Suspense } from 'react'
import NewestPosts from './_components/LatestPosts'

export const revalidate = 30 // revalidate at most every 30 seconds

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug.toString()
    const strapiUrl = process.env.PUBLIC_STRAPI_URL

    //Fetch post data
    const { data: postContent } = await getPost(slug)

    const {
        title,
        content,
        publishedAt,
        category: categoryData,
        cover: coverData,
        embedPdf,
    } = postContent?.attributes

    const cover = coverData?.data?.attributes
    const category = categoryData?.data?.attributes
    const pdf = embedPdf?.data?.attributes

    return (
        <>
            {postContent && (
                <div className="space-y-6 bg-secondary rounded-lg">
                    <div className="not-prose relative overflow-hidden w-full h-64 md:h-[420px] rounded-lg">
                        <Image
                            src={imageLoader(cover?.url)}
                            alt={cover?.alternativeText}
                            fill
                            quality={70}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <article className="prose max-w-none lg:prose-xl prose-img:rounded-xl dark:prose-invert prose-gray px-6">
                        <div className="flex gap-5 items-baseline">
                            <Link
                                href={`/posty/kategoria/${category?.slug}`}
                                className="text-textSecondary font-extrabold hover:text-accent no-underline"
                            >
                                {category?.name}
                            </Link>
                            <p className="text-textSecondary text-base font-semibold ">
                                {changeDate(publishedAt)}
                            </p>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <span
                                className="w-14 h-2 rounded-lg block my-10"
                                style={{ backgroundColor: category?.color }}
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
                        {pdf && (
                            <object
                                data={`${strapiUrl}${pdf?.url}`}
                                type={pdf?.mime}
                                height={800}
                                width={'100%'}
                                className="pb-10"
                            >
                                <p>
                                    Niestety nie udało się wyświetlić pliku!
                                    Możesz go pobrać pod tym{' '}
                                    <Link href={`${strapiUrl}${pdf.url}`}>
                                        linkiem
                                    </Link>
                                </p>
                            </object>
                        )}
                    </article>
                </div>
            )}
        </>
    )
}
