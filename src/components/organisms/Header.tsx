import Image from 'next/image'
import Navigation from '@/components/molecules/Navigation'
import IntranetNavigation from '@/components/molecules/IntranetNavigation'
import { Suspense } from 'react'

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
            <div className="container px-1 md:px-0 py-4 h-full flex items-center gap-20 justify-between">
                <div className="flex flex-row items-center gap-4">
                    <div className="relative h-10 w-10 p-3">
                        <Image src="/knowlylogo.svg" fill alt="knowly icon" />
                    </div>
                    <span className="hidden sm:block text-2xl font-medium">
                        knowly
                    </span>
                </div>

                <Navigation>
                    {/* Additional menus from api. To add additional menu create server component similar to IntranetNavigation and put it in suspense component for better performance */}
                    <Suspense fallback={null}>
                        <IntranetNavigation />
                    </Suspense>
                </Navigation>
            </div>
        </header>
    )
}
