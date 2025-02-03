import Image from 'next/image'
import LogoBlack from '@/assets/logo-black.svg'
import LogoWhite from '@/assets/logo-white.svg'
import clsx from 'clsx'

type LogoSize = 'small' | 'full'

interface LogoProps {
    size?: LogoSize
}

const logoSizeClasses: Record<LogoSize, string> = {
    small: 'hidden',
    full: 'hidden md:block',
}

export const Logo = ({ size = 'small' }: LogoProps) => {
    return (
        <div className="min-w-max">
            <div className="flex flex-row gap-2 items-center">
                <Image
                    src={LogoWhite}
                    height={20}
                    width={32}
                    alt="knowly icon"
                    className="hidden dark:block"
                />
                <Image
                    src={LogoBlack}
                    height={20}
                    width={32}
                    alt="knowly icon"
                    className="dark:hidden"
                />
                <span
                    className={clsx(
                        logoSizeClasses[size],
                        'font-medium text-xl'
                    )}
                >
                    knowly
                </span>
            </div>
        </div>
    )
}
