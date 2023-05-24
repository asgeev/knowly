import styled from 'styled-components'
import {
    Hits,
    Stats,
} from 'react-instantsearch-dom'


export const StyledStats = styled(Stats)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
`

export const StyledHitsContainer = styled(Hits)`
    margin-top: 3rem;
`
