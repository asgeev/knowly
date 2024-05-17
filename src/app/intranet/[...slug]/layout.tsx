import { Tag } from '../../../components/atoms/Tag'
import { getFastLinks } from '../../actions'

interface Link {
    id: number
    attributes: { title: string; url: string; isExternal: boolean }
}

export default async function IntranetLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: fastLinks } = await getFastLinks()

    console.log(fastLinks)

    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-8">{children}</div>
                <div className="col-span-12 lg:col-span-4">
                    {fastLinks && (
                        <div>
                            <h1 className="text-lg font-bold mb-2">
                                Szybkie linki
                            </h1>
                            <div className="flex gap-2 flex-wrap">
                                {fastLinks?.map((link: Link) => {
                                    const { title, url, isExternal } =
                                        link?.attributes
                                    return (
                                        <Tag
                                            key={link?.id}
                                            text={title}
                                            href={url}
                                            isExternal={isExternal}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
