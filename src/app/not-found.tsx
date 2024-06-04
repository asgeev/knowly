import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col items-center gap-10">
                <h1
                    className={
                        'text-9xl md:text-[250px] font-extrabold tracking-wide'
                    }
                >
                    404
                </h1>
                <div className={'text-center'}>
                    <h2 className={'text-xl md:text-2xl font-medium'}>
                        Nie znaleziono takiej strony!
                    </h2>
                    <p className={'mt-2'}>Wróć na stronę główną klikając:</p>
                    <div className={'mt-10 flex justify-center'}>
                        <Link href={'/'} className="group text-white">
                            <div className="bg-accent flex gap-2 group-hover:gap-4 transition-all items-center justify-center px-10 py-3 rounded-md w-48">
                                <p>Główna</p>
                                <ChevronRight size={18} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
