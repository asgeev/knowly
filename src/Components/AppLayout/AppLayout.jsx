import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';

const AppLayoutWrapper = styled.div`
  margin-top: ${({ theme }) => theme.navigation.height};
`;

export const AppLayout = () => {
  return (
    <AppLayoutWrapper>
      <Navigation />
      <SearchBar />
      <Outlet />
    </AppLayoutWrapper>
  );
};
