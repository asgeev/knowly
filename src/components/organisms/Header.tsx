import Image from 'next/image'
import Navigation from '../molecules/Navigation'
import { getIntranetNavigation } from '@/app/actions'

const Header = async () => {
    const intranetNavigation = await getIntranetNavigation()
    return (
        <header className="sticky top-0 z-50 bg-secondary">
            <div className="container px-1 md:px-0 py-4 h-full flex items-center gap-20 justify-between">
                <div className="flex flex-row items-center gap-4">
                    <div className="relative h-10 w-10 p-3">
                        <Image src="/knowlylogo.svg" fill alt="knowly icon" />
                    </div>
                    <span className="hidden sm:block text-2xl font-medium">
                        knowly
                    </span>
                </div>
                {intranetNavigation && (
                    <Navigation navigation={intranetNavigation} />
                )}
            </div>
        </header>
    )
}

export default Header
