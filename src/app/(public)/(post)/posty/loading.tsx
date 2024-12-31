import { PostItemRightSkeleton } from '@/components/molecules/post-item-skeleton'
import { Pagination } from '@/components/molecules/pagination'

export default async function Loading() {
    return (
        <div className="space-y-5">
            <PostItemRightSkeleton />
            <PostItemRightSkeleton />
            <PostItemRightSkeleton />
            <Pagination pageCount={1} />
        </div>
    )
}
