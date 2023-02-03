import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';
import { Footer } from '../Footer/Footer';
import { Widgets } from '../Widgets/Widgets';

const AppLayoutWrapper = styled.div`
  min-height: 100dvh;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto;

  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;

  ${({ theme }) => theme.mq.lg} {
    margin-left: ${({ theme }) => theme.navBar.desktopWidth};
    /* align-items: flex-start; */
  }
`;

const MainSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.mq.lg} {
    /* justify-content: flex-start;
    align-items: flex-start; */

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    align-items: flex-start;
  }
`;

const OutletContainer = styled.div`
  padding: 0 2rem;

  ${({ theme }) => theme.mq.sm} {
    max-width: ${({ theme }) => theme.containerSize.sm};
    padding: 0;
  }
  ${({ theme }) => theme.mq.md} {
    max-width: ${({ theme }) => theme.containerSize.md};
  }

  ${({ theme }) => theme.mq.lg} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.lg} -
        ${({ theme }) => theme.navBar.desktopWidth}
    );
    padding: 0 3rem;
    margin-top: 20px;
  }

  ${({ theme }) => theme.mq.xl} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.xl} -
        ${({ theme }) => theme.navBar.desktopWidth}
    );
  }

  ${({ theme }) => theme.mq.xxl} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.xxl} -
        ${({ theme }) => theme.navBar.desktopWidth}
    );
  }
`;

export const AppLayout = () => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <AppLayoutWrapper>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main>
        <SearchBar isOpen={isOpen} />
        <MainSubContainer>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </MainSubContainer>
      </Main>
    </AppLayoutWrapper>
  );
};
