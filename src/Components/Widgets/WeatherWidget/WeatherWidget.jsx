import { useState, useEffect } from 'react'
import {
    WeatherWidgetContainer,
    Location,
    IconContainer,
    WeatherIconContainer,
    LeftContainer,
    RightContainer,
    TempContainer,
    ElementContainer,
} from './WeatherWidget.styles'
import { MdLocationSearching } from 'react-icons/md'
import { FiWind, FiDroplet, FiThermometer } from 'react-icons/fi'
import axios from 'axios'

export const WeatherWidget = () => {
    const [weather, setWeather] = useState({})
    const query = {
        lat: 51.25,
        lon: 22.5667,
        APPID: import.meta.env.VITE_WEATHER_API_KEY,
        units: 'metric',
    }

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: query,
            })
            .then((response) => setWeather(response.data))
            .catch((error) => console.log(error))
    }, [])

    return (
        <WeatherWidgetContainer>
            {weather && (
                <>
                    <LeftContainer>
                        <div>
                            <Location>
                                <IconContainer>
                                    <MdLocationSearching />
                                </IconContainer>
                                <span>Lublin, PL</span>
                            </Location>
                            <TempContainer>
                                {weather.main?.temp ? (
                                    <span>{`${Math.trunc(
                                        weather.main.temp
                                    )} °C`}</span>
                                ) : (
                                    <span>Brak danych</span>
                                )}{' '}
                            </TempContainer>
                        </div>

                        <WeatherIconContainer>
                            {weather.weather && (
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                />
                            )}
                        </WeatherIconContainer>
                    </LeftContainer>

                    <RightContainer>
                        <ElementContainer>
                            <IconContainer>
                                <FiWind />
                            </IconContainer>
                            {weather.wind?.speed ? (
                                <span>{weather.wind.speed} m/s</span>
                            ) : (
                                <span>Brak danych</span>
                            )}
                        </ElementContainer>
                        <ElementContainer>
                            <IconContainer>
                                <FiDroplet />
                            </IconContainer>
                            {weather.main?.humidity ? (
                                <span>{weather.main.humidity} %</span>
                            ) : (
                                <span>Brak danych</span>
                            )}{' '}
                        </ElementContainer>
                        <ElementContainer>
                            <IconContainer>
                                <FiThermometer />
                            </IconContainer>
                            {weather.main?.pressure ? (
                                <span>{weather.main.pressure} hPa</span>
                            ) : (
                                <span>Brak danych</span>
                            )}{' '}
                        </ElementContainer>
                    </RightContainer>
                </>
            )}
        </WeatherWidgetContainer>
    )
}
