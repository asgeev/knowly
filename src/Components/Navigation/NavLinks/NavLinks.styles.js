import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuItemsWrapper = styled.div`
  width: 100%;
  padding: 2rem;

  ${({ theme }) => theme.mq.lg} {
    margin-top: .5rem;
    padding: 0;
    font-size: 1.4rem;
  }
`;

export const PinnedStyledMenuItem = styled(NavLink)`
  all: unset;
  display: flex;
  gap: 1.5rem;
  border-radius: 0.6rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.secondaryText};
  align-items: center;
  justify-content: flex-start;
  padding: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
    cursor: pointer;
  }

  &.active {
    position: relative;
    color: ${({ theme }) => theme.color.primaryText};
    background-color: ${({ theme }) => theme.color.background};

    &:before {
      content: '';
      position: absolute;
      right: 2rem;
      height: .6rem;
      width: .6rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.accent};
    }
  }
`;


export const StyledNestedElements = styled.div`
  position: relative;
  margin-left: 1.7rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -1rem;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.color.background200};
  }
`;


export const MenuItemTitle = styled.span`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;


