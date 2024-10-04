import Image from 'next/image'
import Navigation from '@/components/molecules/navigation'
import IntranetNavigation from '@/features/intranet/components/navigation'
import { Suspense } from 'react'
import UserAvatar from '@/features/auth/components/user-avatar'

export default async function Header() {
    return (
        <header className="sticky top-0 z-50 bg-background border-b border-border">
            <div className="container px-1 md:px-0 py-4 h-full flex gap-20">
                <div className="flex flex-row items-center gap-4">
                    <div className="relative h-10 w-10 p-3">
                        <Image src="/knowlylogo.svg" fill alt="knowly icon" />
                    </div>
                    <span className="hidden sm:block text-2xl font-medium">
                        knowly
                    </span>
                </div>
                <div className="flex flex-row-reverse md:flex-row md:justify-between w-full gap-4">
                    <Navigation>
                        {/* Additional menus from api. To add additional menu create server component similar to IntranetNavigation and put it in suspense component for better performance */}
                        <Suspense fallback={null}>
                            <IntranetNavigation />
                        </Suspense>
                    </Navigation>
                    <div className="flex gap-4">
                        <Suspense fallback={null}>
                            <UserAvatar />
                        </Suspense>
                    </div>
                </div>
            </div>
        </header>
    )
}
