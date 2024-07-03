import { PostItemRightSkeleton } from '@/components/molecules/PostItemSkeleton'
import { PaginationComponent } from '@/components/molecules/PaginationComponent'

export default async function Loading() {
    return (
        <div className="space-y-5">
            <PostItemRightSkeleton />
            <PostItemRightSkeleton />
            <PostItemRightSkeleton />
            <PaginationComponent pageCount={1} />
        </div>
    )
}
