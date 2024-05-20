import Image from 'next/image'
import Navigation from '../molecules/Navigation'

const getNavigation = async (menuName: string) => {
    const apiURL = process.env.STRAPI_URL
    const response = await fetch(
        `${apiURL}/api/navigation/render/${menuName}/?type=TREE`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const Header = async () => {
    const mainNavigation = await getNavigation('main-navigation')
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
                {mainNavigation && <Navigation navigation={mainNavigation} />}
            </div>
        </header>
    )
}

export default Header
