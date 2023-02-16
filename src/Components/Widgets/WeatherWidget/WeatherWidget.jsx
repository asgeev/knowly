import styled from 'styled-components';
import { GrLocation } from 'react-icons/gr';

export const WeatherWidgetContainer = styled.div`
  /* width: 100%; */
  /* background-color: red; */
  height: 20px;
`;

export const LocationIcon = styled.div`
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const WeatherWidget = () => {
  return (
    <WeatherWidgetContainer>
      <LocationIcon>
        <GrLocation size={'3rem'} />
      </LocationIcon>
    </WeatherWidgetContainer>
  );
};
