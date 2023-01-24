import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';

export const AppLayout = () => {
  return (
    <>
      <Navigation />
      <SearchBar />
      <Outlet />
    </>
  );
};
