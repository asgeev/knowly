import { TagSkeleton } from '@/components/atoms/TagSkeleton'

const renderLinksSkeleton = () => {
    const links = []
    for (let index = 0; index < 5; index++) {
        links.push(<TagSkeleton key={index} />)
    }
    return links
}

export default function FastLinksSkeleton() {
    return (
        <>
            <div className="h-7 mb-2 w-1/3 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-md"></div>
            <div className="flex gap-2 flex-wrap">{renderLinksSkeleton()}</div>
        </>
    )
}
