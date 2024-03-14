import Image from 'next/image'
const Header = () => {
    return (
        <header className="flex">
            <div className="container h-16">
                <div className="w-full h-full flex justify-between items-center	">
                    <div className="flex flex-row items-center gap-4">
                        <div className="relative h-10 w-10 p-3">
                            <Image
                                src="/knowlylogo.svg"
                                layout="fill"
                                objectFit="contain"
                                alt="knowly icon"
                            />
                        </div>
                        <span className="hidden sm:block text-2xl">knowly</span>
                    </div>
                    <div className="flex flex-row gap-6">
                        <div>
                            <span className="material-symbols-outlined md-30">
                                search
                            </span>
                        </div>
                        <div className="md:hidden">
                            <button>
                                <span className="material-symbols-outlined md-30">
                                    menu
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
