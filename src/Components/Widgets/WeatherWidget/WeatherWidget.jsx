import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdLocationSearching } from 'react-icons/md';
import { FiWind, FiDroplet, FiThermometer } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

export const WeatherWidgetContainer = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.color.background100};
  /* min-height: 200px; */
  /* max-height: 500px; */
  border-radius: 0.6rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  max-width: fit-content;

  span {
    font-size: 2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const WeatherIconContainer = styled.div``;

export const TempContainer = styled.div`
  max-width: fit-content;
  span {
    font-size: 4rem;
    font-weight: 200;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const RightContainer = styled.div`
  margin-right: 5rem;
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  max-width: fit-content;
  padding: 0.5rem 0;
  border-radius: 0.6rem;
  /* background-color: ${({ theme }) => theme.color.background200}; */

  span {
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: 200;
  }
`;

const query = {
  q: 'Lublin, PL',
  APPID: import.meta.env.VITE_WEATHER_API_KEY,
  units: 'metric',
};

export const WeatherWidget = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: query,
      })
      .then((response) => setWeather(response.data))
      .catch((error) => console.log(error));
  }, []);

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
                <span>{query.q}</span>
              </Location>
              <TempContainer>
                {console.log(weather)}
                {weather.main?.temp ? (
                  <span>{`${weather.main.temp.toFixed(0)} °C`}</span>
                ) : (
                  <span>Brak danych</span>
                )}{' '}
              </TempContainer>
            </div>

            <WeatherIconContainer>
              {weather.weather && (
                <img
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
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
  );
};
