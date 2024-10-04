import Image from 'next/image'

export const Logo = () => {
    return (
        <div className="flex self-start">
            <div className={`flex flex-row gap-4 items-center`}>
                <Image
                    src="/knowlylogo.svg"
                    width={40}
                    height={40}
                    alt="knowly icon"
                />
                <div className="">
                    <span className="text-2xl">knowly</span>
                </div>
            </div>
        </div>
    )
}
