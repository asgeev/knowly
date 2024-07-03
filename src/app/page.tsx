import { Suspense } from 'react'
import PinnedPosts from '@/components/organisms/PinnedPosts'
import { SectionSkeleton } from '@/components/molecules/SectionSkeleton'
import LatestPosts from '@/components/organisms/LatestPosts'
import IntranetHeadOfficePosts from '@/components/organisms/IntranetHeadOfficePosts'
import CategoryPosts from '@/components/organisms/CategoryPosts'

export const revalidate = 30 // revalidate at most every 10 seconds

export default function Home() {
    return (
        <div className="mt-10">
            <Suspense fallback={<SectionSkeleton />}>
                <PinnedPosts />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <LatestPosts />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <IntranetHeadOfficePosts />
            </Suspense>
            {/* All categories from backend */}
            <Suspense fallback={<SectionSkeleton />}>
                <CategoryPosts />
            </Suspense>
        </div>
    )
}
