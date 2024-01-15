import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import styled from 'styled-components'
import { BsFileEarmarkText, BsListNested } from 'react-icons/bs'
import { SearchBarContext } from '../../../Context/SearchBarContext'

export const StyledHit = styled.div`
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: row;
    position: relative;
`
export const HitHighlight = styled(Highlight)`
    .ais-Highlight-highlighted {
        color: ${({ theme }) => theme.color.accent};
    }
`

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.primaryText};
    font-weight: ${({ theme }) => theme.font.weight.w500};
    text-decoration: none;
`

export const SnippetHighlightContent = styled(Snippet)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};

    .ais-Snippet-highlighted {
        color: ${({ theme }) => theme.color.accent};
    }
`

export const RowBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`

export const StyledNavLink = styled(NavLink)`
    cursor: pointer;
    color: unset;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export const PageHit = ({ hit }) => {
    const { closeSearchResults } = useContext(SearchBarContext)
    const pageId = hit.id

    return (
        <StyledHit>
            <BsFileEarmarkText size="2rem" />
            <RowBox>
                <StyledNavLink
                    to={{ pathname: `page/${pageId}` }}
                    search=""
                    state={{ searchingText: '' }}
                    onClick={closeSearchResults}
                >
                    <HitHighlight attribute="title" hit={hit} />
                </StyledNavLink>
                <SnippetHighlightContent attribute="content" hit={hit} />
            </RowBox>
        </StyledHit>
    )
}
