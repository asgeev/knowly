import { TagSkeleton } from '@/components/atoms/TagSkeleton'

export default function AllCategoriesSkeleton() {
    return (
        <>
            <div className="flex gap-2 flex-wrap">
                <TagSkeleton />
                <TagSkeleton />
                <TagSkeleton />
                <TagSkeleton />
            </div>
        </>
    )
}
