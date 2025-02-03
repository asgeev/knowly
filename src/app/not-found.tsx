import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
                    <p className="mt-2 text-muted-foreground">
                        Wróć na stronę główną klikając:
                    </p>
                    <div className={'mt-10 flex justify-center'}>
                        <Button
                            asChild
                            size={'lg'}
                            className="hover:gap-4 transition-all"
                        >
                            <Link href={'/'}>
                                Główna <ChevronRight />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
