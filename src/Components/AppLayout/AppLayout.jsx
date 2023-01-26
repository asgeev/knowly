import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchBar } from '../SearchBar/SearchBar';

const AppLayoutWrapper = styled.div`
  ${({ theme }) => theme.mq.lg} {
    display: flex;
    flex-direction: row;
  }
`;

const OutletContainer = styled.div`
  max-width: ${({ theme }) => theme.containerSize.sm};
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 1rem;

  ${({ theme }) => theme.mq.md} {
    max-width: ${({ theme }) => theme.containerSize.md};
  }

  ${({ theme }) => theme.mq.lg} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.lg} -
        ${({ theme }) => theme.navigation.desktop_width}
    );
  }

  ${({ theme }) => theme.mq.xl} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.xl} -
        ${({ theme }) => theme.navigation.desktop_width}
    );
  }

  ${({ theme }) => theme.mq.xxl} {
    max-width: calc(
      ${({ theme }) => theme.containerSize.xxl} -
        ${({ theme }) => theme.navigation.desktop_width}
    );
  }
`;

const Main = styled.main`
  margin-top: ${({ theme }) => theme.navigation.mobile_height};
  flex: 1 80%;
  margin-bottom: 7rem;

  ${({ theme }) => theme.mq.lg} {
    margin: 0;
    margin-bottom: 10rem;
  }
`;

const OutletContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppLayoutWrapper>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main>
        <SearchBar isOpen={isOpen} />
        <OutletContainerCenter>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </OutletContainerCenter>
      </Main>
    </AppLayoutWrapper>
  );
};
