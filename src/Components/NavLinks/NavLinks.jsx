import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MenuData } from '../../assets/MenuData/MenuData'
import { BiHome } from 'react-icons/bi'
import { MenuItemWrapper } from './MenuItemWrapper/MenuItemWrapper'
import { Divider } from '../Divider/Divider'
import {
    PinnedStyledMenuItem,
    MenuItemsWrapper,
    MenuItemTitle,
    StyledNestedDiv,
} from './NavLinks.styles'
import { useAxios } from '../../Hooks/useAxios'
import { NavLinksSkeleton } from '../Skeletons/NavLinksSkeleton/NavLinksSkeleton'

export const RecursiveNavLinksComponent = ({ data }) => {
    const [showNested, setShowNested] = useState({})
    const { pathname } = useLocation()

    const toggleNested = (title) => {
        setShowNested({ ...showNested, [title]: !showNested[title] })
    }

    const untoggleAll = () => {
        setShowNested({})
    }

    useEffect(() => {
        untoggleAll()
    }, [pathname])

    return (
        <>
            {data?.map((element) => {
                return (
                    <div key={`${element.name}-${element.id}`}>
                        <MenuItemWrapper
                            showNested={showNested}
                            toggleNested={toggleNested}
                            element={element}
                        />

                        <StyledNestedDiv
                            style={{
                                visibility:
                                    !showNested[element.title] && 'hidden',
                                opacity: !showNested[element.title] && '0',
                                maxHeight: !showNested[element.title] && '0',
                            }}
                        >
                            {element.items && (
                                <RecursiveNavLinksComponent
                                    data={element.items}
                                />
                            )}
                        </StyledNestedDiv>
                    </div>
                )
            })}
        </>
    )
}

export const NavLinks = () => {
    const [menuData, setMenuData] = useState([])

    const { response, loading, error } = useAxios({
        url: '/navigation/render/main-navigation?type=TREE',
    })

    useEffect(() => {
        response ? setMenuData(response) : []
    }, [response, menuData])

    return (
        <MenuItemsWrapper>
            <PinnedStyledMenuItem to="/">
                <BiHome size="2rem" />
                <MenuItemTitle>Strona główna</MenuItemTitle>
            </PinnedStyledMenuItem>
            <Divider />
            {error && <p>Błąd, spróbuj ponownie później</p>}
            {loading && <NavLinksSkeleton count={5} />}
            {menuData.length ? (
                <RecursiveNavLinksComponent data={menuData} />
            ) : null}

            <Divider />
        </MenuItemsWrapper>
    )
}
