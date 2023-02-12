import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ShowIndicator } from './MenuItemWrapper/MenuItemWrapper.styles';

export const MenuItemsWrapper = styled.div`
  width: 100%;
  padding: 2rem;

  ${({ theme }) => theme.mq.lg} {
    margin-top: 0.5rem;
    padding: 0;
    font-size: 1.4rem;
  }
`;

export const PinnedStyledMenuItem = styled(NavLink)`
  all: unset;
  display: flex;
  gap: 1.5rem;
  border-radius: 0.6rem;
  padding: 1.2rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.secondaryText};
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
    cursor: pointer;
  }

  ${({ theme }) => theme.mq.lg} {
    padding: 1rem 0 1rem 1.8rem;
  }

  &.active {
    position: relative;
    color: ${({ theme }) => theme.color.primaryText};
    background-color: ${({ theme }) => theme.color.background};

    &:before {
      content: '';
      position: absolute;
      left: 0.5rem;
      height: 35%;
      width: 0.3rem;
      border-radius: 2rem;
      background-color: ${({ theme }) => theme.color.accent};
      transition: all 0.2s ease-in-out;
      display: block;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      animation: ${ShowIndicator} 0.2s ease-in;
    }
  }
`;

export const StyledNestedDiv = styled.div`
  position: relative;
  margin-left: 3rem;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.1s;
  max-height: 1000px;

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
