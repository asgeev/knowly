import { getFastLinks } from '@/app/actions'
import { Tag } from '@/components/atoms/Tag'

interface Link {
    id: number
    attributes: { title: string; url: string; isExternal: boolean }
}

export default async function FastLinks() {
    const { data: fastLinks } = await getFastLinks()

    return (
        <>
            {fastLinks && (
                <div>
                    <h1 className="text-lg font-bold mb-2">Szybkie linki</h1>
                    <div className="flex gap-2 flex-wrap">
                        {fastLinks?.map((link: Link) => {
                            const { title, url, isExternal } = link?.attributes
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
        </>
    )
}
