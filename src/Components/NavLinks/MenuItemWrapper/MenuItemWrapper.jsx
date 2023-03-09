import { TiMinus, TiPlus } from 'react-icons/ti'
import Skeleton from 'react-loading-skeleton'
import {
    StyledMenuItem,
    MenuItemTitle,
    ChevronIcon,
    StyledNavLink,
} from './MenuItemWrapper.styles'

export const MenuItemWrapper = ({ element, toggleNested, showNested }) => {
    const { title, slug, path, related, order, id, uiRouterKey } = element
    return (
        <StyledMenuItem onClick={() => toggleNested(element.title)}>
            {element.type === 'WRAPPER' ? (
                <MenuItemTitle>{element.title}</MenuItemTitle>
            ) : (
                <StyledNavLink to={`page/${related.id}`}>{title}</StyledNavLink>
            )}
            {element.items?.length ? (
                <ChevronIcon
                    onClick={() => toggleNested(element.title)}
                    title="Expand"
                >
                    {!showNested[element.title] ? (
                        <TiPlus size={'1.4rem'} />
                    ) : (
                        <TiMinus size={'1.4rem'} />
                    )}
                </ChevronIcon>
            ) : (
                <Skeleton />
            )}
        </StyledMenuItem>
    )
}
