import styled from 'styled-components'

export const DevToWidgetContainer = styled.div`
    background-color: ${({ theme }) => theme.color.background100};
    border-radius: 0.6rem;
    min-height: 200px;
    padding: 2rem;
`

export const DevToWidget = () => {
    return <DevToWidgetContainer>DevToWidget</DevToWidgetContainer>
}
