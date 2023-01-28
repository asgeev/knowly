import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';

const AppLayoutWrapper = styled.div`
  display: flex;

  ${({ theme }) => theme.mq.lg} {
    flex-direction: row;
    gap: 9rem;
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
    align-items: flex-start;
    margin: 0;
  }
`;

const OutletContainerCenter = styled.div`
  margin-left: 2rem;
  margin-right: 2rem;

  ${({ theme }) => theme.mq.md} {
    margin: 0;
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
  width: 100%;
`;

export const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppLayoutWrapper>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main>
        <OutletContainerCenter>
          <SearchBar isOpen={isOpen} />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </OutletContainerCenter>
      </Main>
    </AppLayoutWrapper>
  );
};
