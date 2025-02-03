import Image from 'next/image'
import { changeDate } from '@/helpers/changeDate'
import Link from 'next/link'
import { getPost } from '@/features/post/actions/post-actions'
import { imageLoader } from '@/helpers/imageLoader'
import getBase64 from '@/lib/getBase64'
import getExistCoverUrl from '@/lib/getExistCoverUrl'
import { OpenFile } from '@/components/molecules/open-file'

export const revalidate = 30 // revalidate at most every 30 seconds

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const strapiUrl = process.env.PUBLIC_STRAPI_URL

    //Fetch post data
    const { data: postContent } = await getPost(slug)
    const {
        title,
        content,
        publishedAt,
        category: categoryData,
        cover,
        embedPdf,
    } = postContent?.attributes
    const category = categoryData?.data?.attributes
    const pdf = embedPdf?.data?.attributes

    //Images
    const thumbnail = getExistCoverUrl(cover, 'thumbnail')
    const coverLarge = getExistCoverUrl(cover, 'large')
    const blurImage = await getBase64(imageLoader(thumbnail))

    return (
        <>
            {postContent && (
                <div className="space-y-6 bg-secondary border border-border rounded-xl">
                    <div className="not-prose relative overflow-hidden w-full h-64 md:h-[420px] rounded-lg">
                        <Image
                            src={imageLoader(coverLarge)}
                            alt={cover?.alternativeText}
                            fill
                            style={{ objectFit: 'cover' }}
                            placeholder={blurImage ? 'blur' : 'empty'}
                            blurDataURL={blurImage}
                        />
                    </div>
                    <article className="prose max-w-none lg:prose-xl prose-img:rounded-xl dark:prose-invert prose-gray px-6 pb-6">
                        <div className="flex gap-5 items-baseline">
                            <Link
                                href={`/posty/kategoria/${category?.slug}`}
                                className="text-muted-foreground font-extrabold hover:underline no-underline"
                            >
                                {category?.name}
                            </Link>
                            <p className="text-muted-foreground text-base font-semibold ">
                                {changeDate(publishedAt)}
                            </p>
                        </div>
                        <div>
                            <h1>{title}</h1>
                            <span
                                className="w-14 h-2 rounded-lg block my-10"
                                style={{ backgroundColor: category?.color }}
                            ></span>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        ></div>
                        {pdf && (
                            <OpenFile
                                fileName={pdf.name}
                                url={`${strapiUrl}${pdf?.url}`}
                                size={pdf?.size}
                            />
                        )}
                    </article>
                </div>
            )}
        </>
    )
}
