import Image from 'next/image'
import Navigation from '../molecules/Navigation'
const Header = () => {
    return (
        <header className="flex">
            <div className="container h-20">
                <div className="w-full h-full flex gap-10">
                    <div className="flex flex-row items-center gap-4">
                        <div className="relative h-10 w-10 p-3">
                            <Image
                                src="/knowlylogo.svg"
                                fill
                                alt="knowly icon"
                            />
                        </div>
                        <span className="hidden sm:block text-2xl">knowly</span>
                    </div>
                    <Navigation>
                        <span className="material-symbols-outlined md-30">
                            search
                        </span>
                    </Navigation>
                    {/* <div className="flex flex-row gap-6">
                        <span className="material-symbols-outlined md-30">
                            search
                        </span>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header
