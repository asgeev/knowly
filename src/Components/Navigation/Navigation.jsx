import { useState } from 'react';
import styled from 'styled-components';
import { SlDiamond } from 'react-icons/sl';
import { MdMenu, MdClose, MdOutlineLightMode } from 'react-icons/md';
import { MenuItems } from './MenuItems/MenuItems';

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: ${({ theme }) => theme.navigation.mobile_width};
  height: ${({ theme }) => theme.navigation.mobile_height};
  background-color: ${({ theme }) => theme.color.element};
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;

  ${({ theme }) => theme.mq.lg} {
    display: flex;
    align-items: flex-start;
    flex: 1 20%;
    flex-direction: column;
    gap: 4rem;
    height: ${({ theme }) => theme.navigation.desktop_height};
    max-width: ${({ theme }) => theme.navigation.desktop_width};
    position: sticky;
    top: 0;
    left: 0;
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
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  height: calc(100vh - ${({ theme }) => theme.navigation.height});
  max-height: calc(100vh - ${({ theme }) => theme.navigation.height});
  width: 100%;
  left: 0;
  top: ${({ theme }) => theme.navigation.mobile_height};
  background-color: ${({ theme }) => theme.color.accent};
  justify-content: center;
  overflow-y: auto;
  z-index: 10;

  ${({ theme }) => theme.mq.lg} {
    display: none;
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

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <NavigationItemsContainer isOpen={isOpen}>
        <MenuItems />
      </NavigationItemsContainer>
    </NavigationWrapper>
  );
};
