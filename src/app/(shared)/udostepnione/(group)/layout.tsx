import { Tag } from '@/components/atoms/Tag'
import React, { Suspense } from 'react'
import AllCategoriesTagsSkeleton from '@/components/molecules/AllCategoriesTagsSkeleton'
import AllCategoriesTags from '@/components/molecules/AllCategoriesTags'

export default async function NewestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto">
            <div className="flex gap-2 my-4">
                <Tag
                    text="Kadra zarządcza"
                    href={`/udostepnione/kadra-zarzadcza`}
                />
            </div>
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-8 rounded-b-lg">{children}</div>
                <div className="mt-6 lg:mt-0 col-span-4 flex flex-col gap-10">
                    <div>
                        <h1 className="text-md font-bold mb-2 ml-1">
                            Wszystkie kategorie
                        </h1>
                        <Suspense fallback={<AllCategoriesTagsSkeleton />}>
                            <AllCategoriesTags />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
