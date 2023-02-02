import { useState } from 'react';
import styled from 'styled-components';
import { SlDiamond } from 'react-icons/sl';
import { MdMenu, MdClose, MdOutlineLightMode } from 'react-icons/md';
import { NavLinks } from './NavLinks/NavLinks';

export const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: ${({ theme }) => theme.navBar.mobileWidth};
  height: ${({ theme }) => theme.navBar.mobileHeight};
  background-color: ${({ theme }) => theme.color.background100};
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;

  ${({ theme }) => theme.mq.lg} {
    position: fixed;
    top: 0px;
    left: 0;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: start;
    gap: 4rem;
    height: 100%;
    max-width: ${({ theme }) => theme.navBar.desktopWidth};
    border-right: 1px solid ${({ theme }) => theme.color.dividerPrimary};
    z-index: 9999;
    padding: 3rem;
  }
`;

export const StyledMdMenu = styled(MdMenu)`
  cursor: pointer;
`;
export const StyledMdClose = styled(MdClose)`
  cursor: pointer;
`;

export const StyledMdOutlineLightMode = styled(MdOutlineLightMode)`
  cursor: pointer;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4rem;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavigationItemsContainer = styled.div`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  min-height: calc(100vh - ${({ theme }) => theme.navBar.mobileHeight});
  /* height: 100dvh; */
  /* height: 100svh; */
  width: 100%;
  left: 0;
  top: ${({ theme }) => theme.navBar.mobileHeight};
  background-color: ${({ theme }) => theme.color.background100};
  overflow-y: auto;
  padding-top: 2rem;

  &::-webkit-scrollbar {
    width: 9px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  ${({ theme }) => theme.mq.lg} {
    position: static;
    display: flex;
    overflow: hidden;
    background-color: transparent;
    height: 100%;
    padding: 0;
    overflow: auto;
    min-height: unset;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.lg} {
    display: none;
  }
`;

export const Navigation = ({ isOpen, setIsOpen }) => {
  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };

  return (
    <NavigationWrapper>
      <LeftSection>
        <SlDiamond size="3rem" />
        <p style={{ color: 'gold' }}>KnowHow</p>
      </LeftSection>
      <NavigationItemsContainer isOpen={isOpen}>
        <NavLinks />
      </NavigationItemsContainer>
      <RightSection>
        <StyledMdOutlineLightMode size="3rem" />
        <MenuIcon>
          {isOpen ? (
            <StyledMdClose size="3rem" onClick={closeMenu} />
          ) : (
            <StyledMdMenu size="3rem" onClick={openMenu} />
          )}
        </MenuIcon>
      </RightSection>
    </NavigationWrapper>
  );
};
