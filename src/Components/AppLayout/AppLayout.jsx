import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';
import { Footer } from '../Footer/Footer';

const AppLayoutWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.mq.lg} {
    flex-direction: row;
    gap: 4rem;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: ${({ theme }) => theme.navBar.mobileHeight};
  margin-bottom: 7rem;

  ${({ theme }) => theme.mq.lg} {
    margin: 0;
    align-items: flex-start;
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
        <MainSubContainer>
          <SearchBar isOpen={isOpen} />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
          <Footer />
        </MainSubContainer>
      </Main>
    </AppLayoutWrapper>
  );
};
