import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function SharedPage() {
    return (
        <div className="container">
            <Button asChild>
                <Link href={'udostepnione/kadra-zarzadcza'}>
                    Kadra zarządcza
                </Link>
            </Button>
        </div>
    )
}
