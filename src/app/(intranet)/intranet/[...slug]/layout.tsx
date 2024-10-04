import React, { Suspense } from 'react'
import FastLinks from '@/features/intranet/components/fast-links'
import FastLinksSkeleton from '@/features/intranet/components/fast-links-skeleton'

export default function IntranetLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="container mx-auto mt-10">
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-8">{children}</div>
                <div className="col-span-12 lg:col-span-4">
                    <Suspense fallback={<FastLinksSkeleton />}>
                        <FastLinks />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
