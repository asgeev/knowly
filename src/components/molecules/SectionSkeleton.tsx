const PostItemSkeleton = ({ className }: { className?: string }) => {
    return (
        <div
            className={`bg-neutral-300 dark:bg-neutral-700  sm:rounded-xl animate-pulse min-h-40 sm:min-h-[165px] ${className}`}
        ></div>
    )
}

export const SectionSkeleton = () => {
    return (
        <section className="mb-20">
            <div className="container space-y-6">
                <div className="flex mb-4 items-center gap-6">
                    <div className="h-8 w-1/4 mb-2 rounded-lg bg-neutral-300 dark:bg-neutral-700 animate-pulse"></div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <PostItemSkeleton className="col-span-12 lg:col-span-6 lg:row-span-2" />
                    <PostItemSkeleton className="col-span-12 lg:col-span-6" />
                    <PostItemSkeleton className="col-span-12 lg:block lg:col-span-6" />
                    <PostItemSkeleton className="hidden lg:block lg:col-span-3 h-[350px]" />
                    <PostItemSkeleton className="hidden lg:block lg:col-span-3" />
                    <PostItemSkeleton className="hidden lg:block lg:col-span-3" />
                    <PostItemSkeleton className="hidden lg:block lg:col-span-3" />
                </div>
            </div>
        </section>
    )
}
