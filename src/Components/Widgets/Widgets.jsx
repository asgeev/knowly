import styled from 'styled-components'
import { WeatherWidget } from './WeatherWidget/WeatherWidget'
import { DevToWidget } from './DevToWidget/DevToWidget'
import { FastLinksWidget } from './FastLinksWidget/FastLinksWidget'

export const WidgetsContainer = styled.div`
    margin: 0;
    /* background-color: ${({ theme }) => theme.color.background100}; */
    /* border-radius: 0.6rem; */
    /* min-height: 400px; */
    /* max-height: 500px; */
    /* padding: 1rem; */
    /* width: 280px; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const Widgets = () => {
    return (
        <WidgetsContainer>
            <WeatherWidget />
            {/* <DevToWidget /> */}
            <FastLinksWidget />
        </WidgetsContainer>
    )
}
