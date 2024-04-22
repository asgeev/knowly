import Image from 'next/image'
import Link from 'next/link'

type Props = {
    href: string
    title: string
    coverUrl: string
    tag?: string
    className?: string
}

export const NewsItemBackground = (props: Props) => {
    const { href, title, coverUrl, tag, className = '' } = props
    return (
        <article
            className={`relative bg-secondary sm:rounded-xl group h-64 ${className}`}
        >
            <Link href={href}>
                <div className="relative h-full w-full overflow-hidden sm:rounded-xl">
                    <Image
                        src={coverUrl}
                        alt={title}
                        fill={true}
                        objectFit="cover"
                        objectPosition="center center"
                        className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-[#4444442c]"></div>
                </div>
            </Link>
            <div className="absolute bottom-0 gap-1 text-white mb-4 p-3">
                <div>
                    {tag && (
                        <div className="bg-accent text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5">
                            <p className="text-xs font-semibold">{tag}</p>
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
                    11 stycznia 2022
                </div>
            </div>
        </article>
    )
}

export const NewsItemRight = (props: Props) => {
    const { href, title, coverUrl, tag, className } = props
    return (
        <article
            className={`flex bg-secondary gap-2 sm:rounded-xl group h-32 sm:h-[165px] ${className}`}
        >
            <Link href={href} className="w-1/3 order-1">
                <div className="relative h-full w-full overflow-hidden sm:rounded-e-xl">
                    <Image
                        src={coverUrl}
                        alt={title}
                        fill={true}
                        objectFit="cover"
                        objectPosition="center center"
                        className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-[#4444442c]"></div>
                </div>
            </Link>
            <div className="w-full flex flex-col justify-between text-white p-4">
                <div>
                    {tag && (
                        <div className="bg-accent text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5">
                            <p className="text-xs font-semibold">{tag}</p>
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
                    11 stycznia 2022
                </div>
            </div>
        </article>
    )
}

export const NewsItemTop = (props: Props) => {
    const { href, title, coverUrl, tag, className } = props
    return (
        <article
            className={`flex flex-col bg-secondary rounded-md group  sm:h-[350px] w-full  ${className}`}
        >
            <Link href={href} className="h-40 md:h-1/2 w-full">
                <div className="relative h-full w-full overflow-hidden rounded-t-md aspect-square">
                    <Image
                        src={coverUrl}
                        alt={title}
                        fill={true}
                        objectFit="cover"
                        objectPosition="center center"
                        className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="sm:absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-[#4444442c]"></div>
                </div>
            </Link>
            <div className="flex flex-col justify-between p-4  bottom-0 gap-1 sm:text-white h-full">
                <div>
                    {tag && (
                        <div className="bg-accent text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5">
                            <p className="text-xs font-semibold">{tag}</p>
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
                    11 stycznia 2022
                </div>
            </div>
        </article>
    )
}
