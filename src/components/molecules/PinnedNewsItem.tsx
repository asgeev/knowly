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
        <article className="relative h-52 group text-white">
            <Link href={href}>
                <div className="relative h-full w-full overflow-hidden rounded-xl shadow-sm">
                    <Image
                        src={coverUrl}
                        alt={title}
                        fill={true}
                        objectFit="cover"
                        objectPosition="center center"
                        className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-gradient-to-t from-black to-[#4444442c] rounded-xl"></div>
                </div>
            </Link>
            <div className="absolute bottom-0 mb-8 px-6">
                {tag && (
                    <div className="bg-accent w-fit py-0.5 px-1.5 rounded-md uppercase mb-0.5">
                        <p className="text-xs font-semibold">{tag}</p>
                    </div>
                )}

                <Link
                    href={href}
                    className="font-semibold line-clamp-3 text-lg"
                >
                    {title}
                </Link>
            </div>
        </article>
    )
}
