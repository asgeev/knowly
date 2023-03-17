import styled from 'styled-components'
import { Highlight } from 'react-instantsearch-dom'

export const StyledHit = styled.div`
    /* background-color: ${({ theme }) => theme.color.background}; */
    border-radius: 0.6rem;
    padding: 2rem 2rem 2rem 1rem;

    &:hover {
        outline: ${({ theme }) => theme.color.accent} 1px solid;
    }

    /* margin: 2rem 1rem 0 1rem; */
`
export const HitHighlight = styled(Highlight)`
    .ais-Highlight-highlighted {
        color: ${({ theme }) => theme.color.accent};
        /* background-color: yellow; */
        list-style: none;
    }

    color: ${({ accent, theme }) =>
        accent ? theme.color.accent : theme.color.primaryText};
`
export const Hit = ({ hit }) => {
    return (
        <StyledHit>
            {/* {console.log(hit)} */}
            <HitHighlight attribute="employeeFirstName" hit={hit} />{' '}
            <HitHighlight attribute="employeeLastName" hit={hit} />
            <></>
            <HitHighlight accent attribute="internalNumber" hit={hit} />{' '}
            <HitHighlight attribute="externalNumber" hit={hit} />
            <div>
                <br></br>
                <HitHighlight attribute={['unit', 'unitName']} hit={hit} />
                <br></br>
                <HitHighlight
                    attribute={['section', 'sectionName']}
                    hit={hit}
                />
            </div>
        </StyledHit>
    )
}
