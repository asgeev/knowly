import styled from 'styled-components'

export const DividerWrapper = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.background200};
    margin: 1.5rem 0;
`

export const Divider = () => {
    return <DividerWrapper></DividerWrapper>
}
