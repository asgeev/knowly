const renderLinksSkeleton = () => {
    const links = []
    for (let index = 0; index < 5; index++) {
        links.push(
            <div className="h-8 w-14 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
        )
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
