import Link from 'next/link'
import { Highlight, Snippet } from 'react-instantsearch'
//TODO: add types
const HitPage = ({ hit }) => {
    console.log(hit)
    return (
        <div className="my-4 flex flex-col">
            <Link href={`/baza-wiedzy/${hit?.slug}`}>
                <Highlight
                    classNames={{
                        highlighted: 'bg-transparent text-accent',
                    }}
                    attribute="title"
                    hit={hit}
                />
            </Link>

            <Snippet
                classNames={{
                    root: 'text-sm text-textSecondary',
                    highlighted: 'bg-transparent text-accent',
                }}
                attribute="content"
                hit={hit}
            />
        </div>
    )
}
export default HitPage
