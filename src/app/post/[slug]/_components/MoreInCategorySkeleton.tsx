import { PostItemTopSkeleton } from '@/components/molecules/PostItemSkeleton'

export default function MoreInCategorySkeleton() {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6 md:col-span-3">
                <PostItemTopSkeleton />
            </div>
            <div className="col-span-6 md:col-span-3">
                <PostItemTopSkeleton />
            </div>
            <div className="col-span-6 md:col-span-3">
                <PostItemTopSkeleton />
            </div>
            <div className="col-span-6 md:col-span-3">
                <PostItemTopSkeleton />
            </div>
        </div>
    )
}
