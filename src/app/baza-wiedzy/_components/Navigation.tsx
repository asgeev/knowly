import { getDocsNavigation } from '../../actions'
import { NavigationItems } from './NavigationItems'

const Navigation = async () => {
    const navigation = await getDocsNavigation()

    return (
        <nav className="">
            <NavigationItems navigation={navigation} />
        </nav>
    )
}

export default Navigation
