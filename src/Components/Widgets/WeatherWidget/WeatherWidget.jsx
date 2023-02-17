import styled from 'styled-components';
import { MdLocationSearching } from 'react-icons/md';
import { FiWind } from 'react-icons/fi';
import Skeleton from 'react-loading-skeleton';

export const WeatherWidgetContainer = styled.div`
  /* width: 100%; */
  background-color: ${({ theme }) => theme.color.background100};
  min-height: 200px;
  /* max-height: 500px; */
  border-radius: 0.6rem;
  padding: 2rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  max-width: fit-content;

  p {
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

export const TempContainer = styled.div`
  max-width: fit-content;
  p {
    font-size: 4rem;
    font-weight: 200;
  }
`;

export const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  max-width: fit-content;
  padding: 1.5rem 0;
  border-radius: 0.6rem;
  /* background-color: ${({ theme }) => theme.color.background200}; */

  span {
    font-size: ${({ theme }) => theme.font.size.small};
    font-weight: 200;
  }
`;

export const WeatherWidget = () => {
  return (
    <WeatherWidgetContainer>
      <LocationContainer>
        <IconContainer>
          <MdLocationSearching />
        </IconContainer>
        <p>Lublin</p>
      </LocationContainer>
      <IconContainer></IconContainer>
      <TempContainer>
        <p>20°C</p>
      </TempContainer>
      <ElementContainer>
        <IconContainer>
          <FiWind />
        </IconContainer>

        <span>20 m/s</span>
      </ElementContainer>
    </WeatherWidgetContainer>
  );
};
