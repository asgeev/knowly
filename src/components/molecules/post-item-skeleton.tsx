export const PostItemBackgroundSkeleton = () => {
    return (
        <article
            className={`sm:rounded-xl h-64 bg-neutral-200 dark:bg-neutral-800 animate-pulse`}
        ></article>
    )
}

export const PostItemRightSkeleton = () => {
    return (
        <article
            className={` sm:rounded-xl h-40 sm:h-[165px] bg-neutral-200 dark:bg-neutral-800 animate-pulse`}
        ></article>
    )
}

export const PostItemTopSkeleton = () => {
    return (
        <article
            className={`rounded-md sm:h-[350px] w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse`}
        ></article>
    )
}
