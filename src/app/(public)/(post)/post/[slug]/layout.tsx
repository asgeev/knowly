import React, { Suspense } from 'react'
import MoreInCategory from '@/features/post/components/more-in-category'
import { Section } from '@/components/molecules/section'
import MoreInCategorySkeleton from '@/features/post/components/more-in-category-skeleton'
import NewPosts from '@/features/post/components/new-posts'
import AllCategories from '@/features/post/components/all-categories'
import AllCategorySkeleton from '@/features/post/components/all-categories-skeleton'
import NewPostsSkeleton from '@/features/post/components/new-posts-skeleton'

export default function PostLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { slug: string }
}) {
    return (
        <div className="container mx-auto">
            <div className="lg:grid grid-cols-12 gap-5 mt-10 mb-14">
                <div className="col-span-8">{children}</div>
                <div className="col-span-4 flex flex-col gap-10">
                    <div>
                        <h1 className="text-lg font-bold mb-2">
                            Najnowsze posty
                        </h1>
                        <Suspense fallback={<NewPostsSkeleton />}>
                            <NewPosts />
                        </Suspense>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-2">
                            Wszystkie kategorie
                        </h1>
                        <Suspense fallback={<AllCategorySkeleton />}>
                            <AllCategories />
                        </Suspense>
                    </div>
                </div>
            </div>
            <Section title={'Więcej w tej kategorii'}>
                <Suspense fallback={<MoreInCategorySkeleton />}>
                    <MoreInCategory slug={params?.slug} />
                </Suspense>
            </Section>
        </div>
    )
}
