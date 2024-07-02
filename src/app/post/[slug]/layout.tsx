import React, { Suspense } from 'react'
import MoreInCategory from './_components/MoreInCategory'
import { Section } from '@/components/molecules/Section'
import MoreInCategorySkeleton from './_components/MoreInCategorySkeleton'
import AllCategoriesSkeleton from './_components/AllCategoriesSkeleton'
import AllCategories from './_components/AllCategories'
import LatestPostsSkeleton from './_components/LatestPostsSkeleton'
import LatestPosts from './_components/LatestPosts'

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
                        <Suspense fallback={<LatestPostsSkeleton />}>
                            <LatestPosts />
                        </Suspense>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold mb-2">
                            Wszystkie kategorie
                        </h1>
                        <Suspense fallback={<AllCategoriesSkeleton />}>
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
