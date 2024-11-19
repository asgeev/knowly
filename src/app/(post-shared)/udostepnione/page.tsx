import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { CirclePlus, MoveRight } from 'lucide-react'

export default async function SharedPage() {
    return (
        <div className="container mt-10 px-4">
            <h1 className="text-5xl font-semibold">
                Udostępnianie treści nigdy nie było tak proste!
            </h1>
            <div className="max-w-[1000px]">
                <h3 className="mt-4 text-muted-foreground ">
                    Dodaj swój post dla określonej grupy, dołącz do niego
                    zabezpieczone pliki i ciesz się prywatnością tego co
                    udostępniasz!
                </h3>
                <Button asChild className="mt-4" size={'lg'}>
                    <Link href={'/dodaj'}>
                        Dodaj post <CirclePlus />
                    </Link>
                </Button>
            </div>
            <hr className="my-10"></hr>
            <div>
                <h2 className="text-xl font-semibold">Udostępnione grupy:</h2>
                <div className="mt-6">
                    <Card className="w-[350px]">
                        <CardHeader>
                            <CardTitle>Kadra zarządcza</CardTitle>
                            <CardDescription>
                                Chronione posty oraz pliki udostępnione dla
                                kadry zarządczej
                            </CardDescription>
                        </CardHeader>

                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={'udostepnione/kadra-zarzadcza'}>
                                    Zobacz posty <MoveRight />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
