import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navigation } from '../Navigation/Navigation'
import { SearchBar } from '../SearchBar/SearchBar'
import { Widgets } from '../Widgets/Widgets'
import {
    AppLayoutWrapper,
    Main,
    MainSubContainer,
    FlexContainer,
    OutletConainer,
    WidgetsContainer,
} from './AppLayout.styles'

export const AppLayout = () => {
    const { pathname } = useLocation()

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <AppLayoutWrapper>
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            <Main>
                <SearchBar isOpen={isOpen} />
                <MainSubContainer>
                    <FlexContainer>
                        <OutletConainer>
                            <Outlet />
                        </OutletConainer>

                        <WidgetsContainer>
                            <Widgets />
                        </WidgetsContainer>
                    </FlexContainer>
                </MainSubContainer>
            </Main>
        </AppLayoutWrapper>
    )
}
