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
    position: relative;
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
    grid-template-columns: auto;
    grid-template-rows: auto;
    align-items: flex-start;
    padding-left: 6rem;
  }
`;

const FlexContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.mq.sm} {
    padding: 0;
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
    margin-top: 2rem;
    padding-right: 2rem;
    flex-direction: row;
    flex-wrap: unset;
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

export const WidgetsContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.lg} {
    margin-top: 0;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    flex-basis: 25%;
  }
`;

export const OutletConainer = styled.div`
  flex-basis: 75%;

  ${({ theme }) => theme.mq.lg} {
    margin-right: 1.5rem;
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
          <FlexContainer>
            <OutletConainer>
              <Outlet />
            </OutletConainer>

            <WidgetsContainer>
              <Widgets />
            </WidgetsContainer>
          </FlexContainer>
        </MainSubContainer>
      </Main>
    </AppLayoutWrapper>
  );
};
