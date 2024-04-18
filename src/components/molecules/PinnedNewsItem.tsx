import Link from 'next/link'
import Image from 'next/image'

type Props = {
    href: string
    title: string
    coverUrl: string
    tag?: string
}

export const PinnedNewsItem = (props: Props) => {
    const { href, title, coverUrl, tag } = props
    return (
        <article className="flex flex-row-reverse justify-between gap-1 bg-color_1 rounded-md group h-36 w-full sm:block sm:h-56 sm:relative sm:w-96">
            <Link href={href} className="">
                <div className="relative h-full w-full overflow-hidden rounded-md aspect-square">
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
            <div className="flex flex-col justify-between p-4 sm:absolute bottom-0 gap-1 sm:text-white">
                <div>
                    {tag && (
                        <div className="bg-accent text-white w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5">
                            <p className="text-xs font-semibold">{tag}</p>
                        </div>
                    )}

                    <Link
                        href={href}
                        className="font-bold line-clamp-3 sm:text-lg mt-2"
                    >
                        {title}
                    </Link>
                </div>

                <div className="text-ellipsis sm:text-gray-300 whitespace-nowrap overflow-hidden font-semibold text-sm">
                    11 stycznia 2022
                </div>
            </div>
        </article>
    )
}
