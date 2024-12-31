import { Suspense } from 'react'
import PinnedPosts from '@/features/post/components/pinned-posts'
import { SectionSkeleton } from '@/components/molecules/section-skeleton'
import IntranetHeadOfficePosts from '@/features/scraping/components/head-office-posts'
import CategoryPosts from '@/features/post/components/category-posts'
import LatestPosts from '@/features/post/components/latest-posts'

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
