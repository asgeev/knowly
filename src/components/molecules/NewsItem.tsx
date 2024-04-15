import Image from 'next/image'
import Link from 'next/link'

type Props = {
    slug: string
    coverUrl: string
}

export const NewsItem = (props: Props) => {
    const { slug, coverUrl } = props
    return (
        <Link href={slug} className="group">
            <div className="flex flex-col w-full md:flex-row rounded-xl max-w-screen-md">
                <div className="relative aspect-video w-full md:max-w-80 max-h-56 ">
                    <Image
                        src={coverUrl}
                        alt="fasas"
                        fill={true}
                        objectFit="cover"
                        objectPosition="center center"
                        className=" rounded-xl transform-gpu md:group-hover:scale-105 md:transition-all "
                    />
                </div>

                <div className="space-y-4 md:ml-6 mt-4 md:mt-1">
                    <div className="text-textSecondary text-sm flex gap-1">
                        <p>12 stycznia 2024</p>
                        <span></span>
                        <p>Adam Szymański</p>
                    </div>
                    <section className="space-y-2 text-wrap">
                        <p className="text-xl font-medium">
                            Przerwa techniczna dnia 15.02.2014
                        </p>
                        <p className="text-textSecondary">
                            W godzinach 9:00 - 12:00
                        </p>
                    </section>
                </div>
            </div>
        </Link>
    )
}
