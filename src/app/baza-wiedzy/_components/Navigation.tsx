import { NavigationItems } from './NavigationItems'

const getDocsNavigation = async () => {
    const url = 'http://127.0.0.1:1337'
    const response = await fetch(
        `${url}/api/navigation/render/baza-wiedzy/?type=TREE`
    )
    if (!response.ok) {
        throw new Error('Cannot fetch navigation for documentation')
    }
    return response?.json()
}

const Navigation = async () => {
    const navigation = await getDocsNavigation()

    return (
        <nav className="">
            <NavigationItems navigation={navigation} />
        </nav>
    )
}

export default Navigation
