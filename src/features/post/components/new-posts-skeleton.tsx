import { PostItemRightSkeleton } from '@/components/molecules/post-item-skeleton'

export default function NewPostsSkeleton() {
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
