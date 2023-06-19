import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import styled from 'styled-components'
import { BsFileEarmarkText } from 'react-icons/bs'
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

export const PageHit = ({ hit }) => {
    const { closeSearchResults } = useContext(SearchBarContext)
    const pageId = hit.id

    return (
        <StyledHit>
            <BsFileEarmarkText size="2rem" />
            <RowBox>
                <NavLink
                    to={{ pathname: `page/${pageId}` }}
                    search=""
                    state={{ searchingText: 'qwrqwrW' }}
                    onClick={closeSearchResults}
                >
                    <HitHighlight attribute="title" hit={hit} />
                </NavLink>
                <SnippetHighlightContent attribute="content" hit={hit} />
            </RowBox>
        </StyledHit>
    )
}
