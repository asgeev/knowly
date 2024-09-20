import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ForbiddenPage() {
    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-6xl font-bold">403</h1>
            <h2>Nie masz uprawnień do wyświetlenia tej strony!</h2>
            <Button asChild>
                <Link href="/">Idź do strony głównej</Link>
            </Button>
        </div>
    )
}
