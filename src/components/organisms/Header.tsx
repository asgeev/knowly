import Image from 'next/image'
import Navigation from '../molecules/Navigation'

const getNavigation = async (menuName: string) => {
    const url = 'http://localhost:1337'
    const response = await fetch(
        `${url}/api/navigation/render/${menuName}/?type=TREE`
    )
    if (!response.ok) {
        throw new Error('Failed')
    }
    return response?.json()
}

const Header = async () => {
    const mainNavigation = await getNavigation('main-navigation')
    return (
        <header className="sticky top-0 bg-primary">
            <div className="container px-6 md:px-10 py-9 h-full flex  items-center gap-20 justify-between">
                <div className="flex flex-row items-center gap-4">
                    <div className="relative h-10 w-10 p-3">
                        <Image src="/knowlylogo.svg" fill alt="knowly icon" />
                    </div>
                    <span className="hidden sm:block text-2xl">knowly</span>
                </div>
                <Navigation navigation={mainNavigation} />
            </div>
        </header>
    )
}

export default Header
