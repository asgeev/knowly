import { WeatherWidget } from './WeatherWidget/WeatherWidget'
import { FastLinksWidget } from './FastLinksWidget/FastLinksWidget'
import { WidgetsContainer } from './Widgets.styles'

export const Widgets = () => {
    return (
        <WidgetsContainer>
            <WeatherWidget />
            <FastLinksWidget />
        </WidgetsContainer>
    )
}
