import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight, MdExpandMore } from 'react-icons/md';

export const StyledMenuItem = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 1.2rem; */
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.secondaryText};
  gap: 2rem;
  border-radius: 0.6rem;
  margin: 0.4rem 0;
  /* cursor: pointer; */

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
  }
`;

export const MenuItemTitle = styled.span`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100%;
  padding: 1.2rem;

  ${({ theme }) => theme.mq.lg} {
    padding: 1rem;
  }
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding: 1.2rem;
  width: 100%;

  &.active {
    position: relative;
    color: ${({ theme }) => theme.color.accent};
  }

  ${({ theme }) => theme.mq.lg} {
    padding: 1rem;
  }
`;

export const ChevronIcon = styled.div`
  padding: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.lg} {
    padding: 1rem;
  }
`;

export const MenuItemWrapper = ({ element, toggleNested }) => {
  const { title, slug } = element;

  return (
    <StyledMenuItem>
      {element.type === 'WRAPPER' ? (
        <MenuItemTitle>{element.title}</MenuItemTitle>
      ) : (
        <StyledNavLink to={`page/${slug}`}>{title}</StyledNavLink>
      )}
      {element.items?.length ? (
        <ChevronIcon onClick={() => toggleNested(element.title)}>
          <MdExpandMore size={'2rem'} />
        </ChevronIcon>
      ) : null}
    </StyledMenuItem>
  );
};
