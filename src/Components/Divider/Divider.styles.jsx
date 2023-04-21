import styled from 'styled-components'

export const DividerWrapper = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.dividerPrimary};
    margin: 1.5rem 0;
`
