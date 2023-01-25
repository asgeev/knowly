import { useState } from 'react';
import styled from 'styled-components';
import { SlDiamond } from 'react-icons/sl';
import { MdMenu, MdClose, MdOutlineLightMode } from 'react-icons/md';

const NavigationWrapper = styled.div`
  height: 8rem;
  background-color: ${({ theme }) => theme.color.element};
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
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
        {isOpen ? (
          <StyledMdClose size="3rem" onClick={closeMenu} />
        ) : (
          <StyledMdMenu size="3rem" onClick={openMenu} />
        )}
      </RightSection>
    </NavigationWrapper>
  );
};
