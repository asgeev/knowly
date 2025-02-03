import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { isAuthor } from '@/lib/roles'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Trash } from 'lucide-react'

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { id: string }
}) {
    const author = await isAuthor()

    return (
        <div className="container mx-auto mt-10">
            <div className="lg:grid grid-cols-12 gap-5">
                <div className="col-span-8 rounded-b-lg">{children}</div>
                <div className="mt-6 lg:mt-0 col-span-4 flex flex-col gap-5">
                    {author && (
                        <div className="flex gap-2">
                            <div>
                                <Button asChild>
                                    <Link
                                        href={`/udostepnione/edytuj/${params.id}`}
                                    >
                                        Edytuj post
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <Button disabled variant={'destructive'}>
                                    <Trash /> Usuń
                                </Button>
                            </div>
                        </div>
                    )}

                    <Card className="bg-secondary">
                        <CardHeader>
                            <CardTitle>Chcesz dodać coś nowego?</CardTitle>
                            <CardDescription>
                                Nic prostszego, wystarczy, że klikniesz przycisk
                                poniżej!
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <div>
                                <Button className="w-full" asChild>
                                    <Link href={`/dodaj`}>Dodaj post</Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
