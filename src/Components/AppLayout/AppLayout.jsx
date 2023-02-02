import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';
import { Footer } from '../Footer/Footer';

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
  ${({ theme }) => theme.mq.lg} {
    margin-left: 270px;
  }
`;

const MainSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;

  ${({ theme }) => theme.mq.sm} {
    max-width: ${({ theme }) => theme.containerSize.sm};
  }
  ${({ theme }) => theme.mq.md} {
    max-width: ${({ theme }) => theme.containerSize.md};
  }

  ${({ theme }) => theme.mq.lg} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.lg} -
        ${({ theme }) => theme.navBar.desktopWidth}
    );
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

const OutletContainer = styled.div`
  /* width: 100%; */
  /* margin: 1rem 0 3rem 0; */
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
