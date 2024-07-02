import { PostItemRightSkeleton } from '@/components/molecules/PostItemSkeleton'

export default function LatestPostsSkeleton() {
    return (
        <>
            <div className="space-y-5">
                <PostItemRightSkeleton />
                <PostItemRightSkeleton />
                <PostItemRightSkeleton />
            </div>
        </>
    )
}
