import { useState } from 'react';
import styled from 'styled-components';
import { SlDiamond } from 'react-icons/sl';
import { MdMenu, MdClose, MdOutlineLightMode } from 'react-icons/md';
import { MenuItems } from './MenuItems/MenuItems';

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: ${({ theme }) => theme.navBar.mobileWidth};
  height: ${({ theme }) => theme.navBar.mobileHeight};
  background-color: ${({ theme }) => theme.color.accent};
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;

  ${({ theme }) => theme.mq.lg} {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: start;
    gap: 4rem;
    height: ${({ theme }) => theme.navBar.desktopHeight};
    max-width: ${({ theme }) => theme.navBar.desktopWidth};
    position: sticky;
    top: 0;
    left: 0;
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
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const NavigationItemsContainer = styled.div`
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  height: 100vh;
  width: 100%;
  right: 0;
  top: ${({ theme }) => theme.navBar.mobileHeight};
  background-color: ${({ theme }) => theme.color.accent};
  justify-content: center;
  overflow-y: auto;

  ${({ theme }) => theme.mq.lg} {
    position: static;
    display: flex;
    overflow: hidden;
    background-color: transparent;
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
      </LeftSection>
      <NavigationItemsContainer isOpen={isOpen}>
        <MenuItems />
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
