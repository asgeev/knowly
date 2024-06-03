import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Intranet = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col  items-center justify-center h-[400px]">
                <h1 className="text-6xl font-bold">Strona w budowie</h1>
                <p className="text-textSecondary mt-5">
                    Jeszcze nie jesteśmy gotowi, daj nam trochę czasu!
                </p>
                <Link
                    href={'/'}
                    className="group mt-8 text-white bg-accent px-10 py-3 rounded-md w-48  "
                >
                    <div className="flex gap-2 group-hover:gap-4 transition-all items-center justify-center">
                        <p>Główna</p>
                        <ArrowRight size={20} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Intranet
