import { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdEco, MdExpandMore } from 'react-icons/md';

export const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  list-style: none;
  padding: 2rem 3rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  margin: 0.7rem 0;

  &.active {
    background-color: ${({ theme }) => theme.color.accent};
    /* color: gold; */
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: 1.4rem;
    padding: 1rem 0.8rem;

    /* &:hover {
      background-color: ${({ theme }) => theme.color.elementSelected};
    } */
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span``;

export const ExpandIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const MenuItemWrapper = styled.div`
  color: white;
  font-size: 1.4rem;
`;

export const SubmenuWrapper = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 100%;
  height: auto;
  padding: 1rem 2.8rem;
`;

const slug = 'asfas';

export const MenuItem = () => {
  return <MenuItemWrapper></MenuItemWrapper>;
};
