import styled from 'styled-components';

export const WidgetsWrapper = styled.div`
  margin: 0;
  background-color: ${({ theme }) => theme.color.background100};
  min-height: 400px;
  max-height: 500px;
  /* width: 280px; */
`;

export const Widgets = () => {
  return <WidgetsWrapper>Widgets</WidgetsWrapper>;
};
