import Link from 'next/link'
import { Highlight, Snippet } from 'react-instantsearch'
import { Button } from '@/components/ui/button'
//TODO: add types
const HitPage = ({ hit }: { hit: any }) => {
    return (
        <div className="flex flex-col items-start ml-2 my-2">
            <Button asChild variant={'link'} className="px-0 font-semibold">
                <Link href={`/baza-wiedzy/${hit?.slug}`}>
                    <Highlight
                        classNames={{
                            highlighted: 'bg-foreground text-background',
                        }}
                        attribute="title"
                        hit={hit}
                    />
                </Link>
            </Button>

            <Snippet
                classNames={{
                    root: 'text-sm text-muted-foreground',
                    highlighted: 'bg-foreground text-background',
                }}
                attribute="content"
                hit={hit}
            />
        </div>
    )
}
export default HitPage
