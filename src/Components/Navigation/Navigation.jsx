import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLinks } from '../NavLinks/NavLinks'
import { Logo } from '../Logo/Logo'
import {
    NavigationWrapper,
    LeftSection,
    NavigationItemsContainer,
    RightSection,
    StyledMdOutlineLightMode,
    MenuIcon,
    StyledMdClose,
    StyledMdMenu,
} from './Navigation.styles'
import { ThemeContext } from 'styled-components'

export const Navigation = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate()
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

    const toggleThemeMode = () => {
        setIsDarkMode((prev) => !prev)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }
    const openMenu = () => {
        setIsOpen(true)
    }
    const navigateToHomePage = () => {
        navigate('/')
    }

    return (
        <NavigationWrapper>
            <LeftSection onClick={navigateToHomePage}>
                <Logo />
            </LeftSection>
            <NavigationItemsContainer isOpen={isOpen}>
                <NavLinks />
            </NavigationItemsContainer>
            <RightSection>
                <StyledMdOutlineLightMode
                    onClick={toggleThemeMode}
                    size="3rem"
                />
                <MenuIcon>
                    {isOpen ? (
                        <StyledMdClose size="3rem" onClick={closeMenu} />
                    ) : (
                        <StyledMdMenu size="3rem" onClick={openMenu} />
                    )}
                </MenuIcon>
            </RightSection>
        </NavigationWrapper>
    )
}
