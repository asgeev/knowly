import Image from 'next/image'

export const Logo = () => {
    return (
        <div className="flex self-start">
            <div className="flex flex-row gap-4 items-center">
                <div className="relative h-10 w-10">
                    <Image src="/knowlylogo.svg" fill alt="knowly icon" />
                </div>
                <div className="">
                    <span className="text-2xl">knowly</span>
                </div>
            </div>
        </div>
    )
}
