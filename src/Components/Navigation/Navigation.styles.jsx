import styled from 'styled-components'
import {
    MdMenu,
    MdClose,
    MdOutlineLightMode,
    MdOutlineDarkMode,
} from 'react-icons/md'

export const NavigationWrapper = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    width: ${({ theme }) => theme.navBar.mobileWidth};
    height: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background100};
    display: flex;
    align-items: center;
    z-index: 99;
    justify-content: space-between;

    ${({ theme }) => theme.mq.lg} {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: space-between;
        gap: 4rem;
        height: 100%;
        padding: 2rem 1.5rem;
        width: ${({ theme }) => theme.navBar.desktopWidth};
        border-right: 1px solid ${({ theme }) => theme.color.dividerPrimary};
    }
`

export const StyledMdMenu = styled(MdMenu)`
    cursor: pointer;
`
export const StyledMdClose = styled(MdClose)`
    cursor: pointer;
`

export const StyledMdOutlineLightMode = styled(MdOutlineLightMode)`
    cursor: pointer;
`

export const StyledMdOutlineDarktMode = styled(MdOutlineDarkMode)`
    cursor: pointer;
`

export const LeftSection = styled.div``

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1.8rem;
`

export const NavigationItemsContainer = styled.div`
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    min-height: calc(100vh - ${({ theme }) => theme.navBar.mobileHeight});
    height: 100dvh;
    height: 100svh;
    height: 100%;
    width: 100%;
    left: 0;
    top: ${({ theme }) => theme.navBar.mobileHeight};
    background-color: ${({ theme }) => theme.color.background100};
    overflow-y: auto;
    padding-top: 2rem;

    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    ${({ theme }) => theme.mq.lg} {
        position: static;
        display: flex;
        overflow: hidden;
        background-color: transparent;
        height: 100%;
        padding: 0;
        overflow: auto;
        min-height: unset;
    }
`

export const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.mq.lg} {
        display: none;
    }
`
