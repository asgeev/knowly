import { getDocsNavigation } from '@/features/docs/actions/docs-actions'
import { NavigationItems } from '@/features/docs/components/navigation-item'

const Navigation = async () => {
    const navigation = await getDocsNavigation()

    return (
        <nav>
            <NavigationItems navigation={navigation} />
        </nav>
    )
}

export default Navigation
