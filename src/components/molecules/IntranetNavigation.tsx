import { getIntranetNavigation } from '@/app/actions'
import Link from 'next/link'
import RecursiveMenu from './RecursiveMenu'

export default async function IntranetNavigation() {
    const intranetNavigation = await getIntranetNavigation()

    return (
        <li className="group">
            <Link
                className="hover:text-foreground md:text-muted-foreground"
                href={'/intranet'}
            >
                Intranet
            </Link>
            <RecursiveMenu path="/intranet" navigation={intranetNavigation} />
        </li>
    )
}
