import styled from 'styled-components';
import { WeatherWidget } from './WeatherWidget/WeatherWidget';

export const WidgetsContainer = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.color.background100};
  border-radius: 0.6rem;
  min-height: 400px;
  max-height: 500px;
  padding: 1rem;
  /* width: 280px; */
`;

export const Widgets = () => {
  return (
    <WidgetsContainer>
      <WeatherWidget />
    </WidgetsContainer>
  );
};
