import Image from 'next/image'
import Link from 'next/link'

type Props = {
    href: string
    title: string
    coverUrl: string | undefined
    publishedAt: string | undefined
    category?: string
    categoryColor?: string
    className?: string
}

const apiURL = process.env.STRAPI_URL

export const PostItemBackground = (props: Props) => {
    const {
        href,
        title,
        coverUrl,
        publishedAt = '',
        category,
        categoryColor,
        className = '',
    } = props

    return (
        <article
            className={`relative bg-secondary sm:rounded-xl group h-64 ${className}`}
        >
            <Link href={`/post/${href}`}>
                <div className="relative h-full w-full overflow-hidden sm:rounded-xl">
                    {coverUrl && (
                        <Image
                            src={`${apiURL}${coverUrl}`}
                            alt={title}
                            fill={true}
                            objectFit="cover"
                            objectPosition="center center"
                            className="group-hover:scale-110 transition-transform duration-500"
                        />
                    )}

                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-[#4444442c] opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
            </Link>
            <div className="absolute bottom-0 gap-1 text-white mb-4 p-3">
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
                        href={`/post/${href}`}
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

export const PostItemRight = (props: Props) => {
    const {
        href,
        title,
        coverUrl,
        publishedAt = '',
        category,
        categoryColor,
        className = '',
    } = props

    return (
        <article
            className={`flex bg-secondary gap-2 sm:rounded-xl group h-40 sm:h-[165px] ${className}`}
        >
            <Link href={`/post/${href}`} className="w-2/5 order-1">
                <div className="relative h-full w-full overflow-hidden sm:rounded-e-xl">
                    {coverUrl && (
                        <Image
                            src={`${apiURL}${coverUrl}`}
                            alt={title}
                            fill={true}
                            objectFit="cover"
                            objectPosition="center center"
                            className="group-hover:scale-110 transition-transform duration-500"
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
                        href={`/post/${href}`}
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

export const PostItemTop = (props: Props) => {
    const {
        href,
        title,
        coverUrl,
        publishedAt = '',
        category,
        categoryColor,
        className = '',
    } = props
    return (
        <article
            className={`flex flex-col bg-secondary rounded-md group  sm:h-[350px] w-full  ${className}`}
        >
            <Link href={`/post/${href}`} className="h-40 md:h-1/2 w-full">
                <div className="relative h-full w-full overflow-hidden rounded-t-md aspect-square">
                    {coverUrl && (
                        <Image
                            src={`${apiURL}${coverUrl}`}
                            alt={title}
                            fill={true}
                            objectFit="cover"
                            objectPosition="center center"
                            className="group-hover:scale-110 transition-transform duration-500"
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
                        href={`/post/${href}`}
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
