import Image from 'next/image'
import Link from 'next/link'
import { imageLoader } from '@/helpers/imageLoader'
import { Post, PostItemProps, TemplateObjVariants } from '@/app/types'
import { internalExternalPostHref } from '@/helpers/internalExternalPostHref'
import { changeDate } from '@/helpers/changeDate'
import getExistCoverUrl from '@/lib/getExistCoverUrl'

export const DynamicPostItem = ({
    variant,
    data,
}: {
    variant: TemplateObjVariants
    data: Post
}) => {
    const { category, title, publishedAt, cover } = data?.attributes
    const coverMedium = getExistCoverUrl(cover, 'medium')
    const blurData =
        'data:image/png;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs='
    if (variant === 'background')
        return (
            <PostItemBackground
                title={title}
                href={internalExternalPostHref(data?.attributes)}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                coverUrl={coverMedium}
                blurData={blurData}
            />
        )
    if (variant === 'top')
        return (
            <PostItemTop
                title={title}
                href={internalExternalPostHref(data?.attributes)}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                coverUrl={coverMedium}
                blurData={blurData}
            />
        )
    if (variant === 'right')
        return (
            <PostItemRight
                title={title}
                href={internalExternalPostHref(data?.attributes)}
                publishedAt={changeDate(publishedAt)}
                category={category?.data?.attributes?.name}
                categoryColor={category?.data?.attributes?.color}
                coverUrl={coverMedium}
                blurData={blurData}
            />
        )
}
export const PostItemBackground = (props: PostItemProps) => {
    const {
        href = '',
        title = '',
        coverUrl,
        publishedAt = '',
        category,
        categoryColor,
        className = '',
        blurData,
    } = props
    return (
        <article
            className={`relative bg-secondary sm:rounded-xl group min-h-64 h-full  ${className}`}
        >
            <Link href={href}>
                <div className="relative h-full w-full overflow-hidden sm:rounded-xl">
                    {coverUrl && (
                        <Image
                            src={imageLoader(coverUrl)}
                            alt={title}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-110 transition-transform duration-500"
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                        />
                    )}

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-[#4444442c] opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
            </Link>
            <div className="absolute bottom-0 gap-1 text-white mb-4 p-3">
                <div>
                    {category && (
                        <div
                            className={`text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5`}
                            style={{ backgroundColor: categoryColor }}
                        >
                            <p className="text-xs font-semibold">{category}</p>
                        </div>
                    )}

                    <Link
                        href={href}
                        className="font-bold line-clamp-3 sm:text-md mt-2"
                    >
                        {title}
                    </Link>
                </div>

                <div className="text-ellipsis text-gray-300 whitespace-nowrap overflow-hidden font-semibold text-sm mt-3">
                    {publishedAt}
                </div>
            </div>
        </article>
    )
}

const PostItemRight = (props: PostItemProps) => {
    const {
        href = '',
        title = '',
        coverUrl,
        publishedAt = '',
        category,
        categoryColor,
        className = '',
        blurData,
    } = props

    return (
        <article
            className={`flex bg-secondary gap-2 sm:rounded-xl group min-h-40 sm:h-[165px] ${className}`}
        >
            <Link href={href} className="w-2/5 order-1">
                <div className="relative h-full w-full overflow-hidden sm:rounded-e-xl">
                    {coverUrl && (
                        <Image
                            src={imageLoader(coverUrl)}
                            alt={title}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-110 transition-transform duration-500"
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                        />
                    )}
                    <div className="sm:absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
            </Link>
            <div className="w-full flex flex-col justify-between text-white p-4">
                <div>
                    {category && (
                        <div
                            className={` text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5`}
                            style={{ backgroundColor: categoryColor }}
                        >
                            <p className="text-xs font-semibold">{category}</p>
                        </div>
                    )}

                    <Link
                        href={href}
                        className="font-bold line-clamp-2 md:line-clamp-3 text-textPrimary sm:text-md mt-2"
                    >
                        {title}
                    </Link>
                </div>
                <div className="text-ellipsis text-gray-400 whitespace-nowrap overflow-hidden font-semibold text-sm">
                    {publishedAt}
                </div>
            </div>
        </article>
    )
}

const PostItemTop = (props: PostItemProps) => {
    const {
        href = '',
        title = '',
        coverUrl,
        publishedAt = '',
        category,
        categoryColor,
        className = '',
        blurData,
    } = props

    return (
        <article
            className={`flex flex-col bg-secondary rounded-md group  sm:h-[350px] w-full  ${className}`}
        >
            <Link href={href} className="h-40 md:h-1/2 w-full">
                <div className="relative h-full w-full overflow-hidden rounded-t-md aspect-square">
                    {coverUrl && (
                        <Image
                            src={imageLoader(coverUrl)}
                            alt={title}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            className="group-hover:scale-110 transition-transform duration-500"
                            placeholder={blurData ? 'blur' : 'empty'}
                            blurDataURL={blurData}
                        />
                    )}
                    <div className="sm:absolute top-0 left-0 right-0 bottom-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                </div>
            </Link>
            <div className="flex flex-col justify-between p-4  bottom-0 gap-1 sm:text-white h-full">
                <div>
                    {category && (
                        <div
                            className={` text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5`}
                            style={{ backgroundColor: categoryColor }}
                        >
                            <p className="text-xs font-semibold">{category}</p>
                        </div>
                    )}

                    <Link
                        href={href}
                        className="font-bold line-clamp-3 text-textPrimary sm:text-lg mt-2"
                    >
                        {title}
                    </Link>
                </div>

                <div className="text-ellipsis text-textSecondary whitespace-nowrap overflow-hidden font-semibold text-sm mt-2 ">
                    {publishedAt}
                </div>
            </div>
        </article>
    )
}
