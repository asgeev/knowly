import { getNavigation } from '@/features/intranet/actions/intranet-actions'
import Link from 'next/link'
import RecursiveMenu from '@/components/molecules/recursive-menu'

export default async function IntranetNavigation() {
    const intranetNavigation = await getNavigation()

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
