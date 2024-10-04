import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Intranet = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col  items-center justify-center h-[400px]">
                <h1 className="text-6xl font-bold">Strona w budowie</h1>
                <p className="text-textSecondary mt-5">
                    Jeszcze nie jesteśmy gotowi, daj nam trochę czasu!
                </p>
                <Button asChild className="group mt-8 px-10 py-3">
                    <Link href={'/'}>
                        <div className="flex gap-2 group-hover:gap-4 transition-all">
                            <p>Główna</p>
                            <ArrowRight size={20} />
                        </div>
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Intranet
