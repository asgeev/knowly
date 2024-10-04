import React, { Suspense } from 'react'
import AllCategories from '@/features/post/components/all-categories'
import AllCategoriesSkeleton from '@/features/post/components/all-categories-skeleton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function NewestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto">
            <div className="flex gap-2 my-4">
                <Button asChild>
                    <Link href="/udostepnione/kadra-zarzadcza">
                        Kadra zarządcza
                    </Link>
                </Button>
            </div>
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-8 rounded-b-lg">{children}</div>
                <div className="mt-6 lg:mt-0 col-span-4 flex flex-col gap-10">
                    <div>
                        <h1 className="text-md font-bold mb-2 ml-1">
                            Wszystkie kategorie
                        </h1>
                        <Suspense fallback={<AllCategoriesSkeleton />}>
                            <AllCategories />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
