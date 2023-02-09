import styled from 'styled-components';

export const WidgetsWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background100};
  min-height: 400px;
  max-height: 500px;
`;

export const Widgets = () => {
  return <WidgetsWrapper>Widgets</WidgetsWrapper>;
};
