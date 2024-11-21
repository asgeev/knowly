import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default function FeaturesInfoCard() {
    return (
        <Card className="bg-secondary">
            <CardHeader>
                <CardTitle>Chroń to co ważne!</CardTitle>
                <CardDescription>
                    Udostępniaj posty do których dostęp mają tylko określone
                    osoby, dołącz zabezpieczone pliki, szybko i bezpiecznie
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex-col gap-2">
                <Button className="w-full" asChild>
                    <Link href="/dodaj">
                        Dodaj post <CirclePlus />{' '}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
