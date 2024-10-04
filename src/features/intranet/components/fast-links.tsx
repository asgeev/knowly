import { getFastLinks } from '@/features/intranet/actions/intranet-actions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
                                <Button
                                    key={link.id}
                                    asChild
                                    variant={'secondary'}
                                >
                                    <Link href={url}>{title}</Link>
                                </Button>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}
