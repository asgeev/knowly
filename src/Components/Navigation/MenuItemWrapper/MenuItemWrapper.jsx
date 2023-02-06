import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TbPlus } from 'react-icons/tb';
import { TiMinus, TiPlus } from 'react-icons/ti';
import { ShowIndicator } from './MenuItemWrapper.styles';

export const StyledMenuItem = styled.div`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 1.2rem; */
  transition: all 0.3s ease-in-out;
  color: ${({ theme }) => theme.color.secondaryText};
  gap: 2rem;
  border-radius: 0.6rem;
  margin: 0.4rem 0;
  /* cursor: pointer; */

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
  }

  &:has(a.active) {
    background-color: ${({ theme }) => theme.color.background};
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
    color: ${({ theme }) => theme.color.primaryText};

    &:before {
      content: '';
      position: absolute;
      left: 0.5rem;
      height: 35%;
      width: 0.3rem;
      border-radius: 2rem;
      background-color: ${({ theme }) => theme.color.accent};
      display: block;
      top: 50%;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
      animation: ${ShowIndicator} 0.2s ease-in;
    }
  }

  ${({ theme }) => theme.mq.lg} {
    padding: 1.2rem 0 1.2rem 1.8rem;
  }
`;

export const MenuItemTitle = styled.span`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 100%;
  padding: 1.2rem;

  ${({ theme }) => theme.mq.lg} {
    padding: 1rem 0 1rem 2rem;
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

export const MenuItemWrapper = ({ element, toggleNested, showNested }) => {
  const { title, slug } = element;

  return (
    <StyledMenuItem>
      {element.type === 'WRAPPER' ? (
        <MenuItemTitle>{element.title}</MenuItemTitle>
      ) : (
        <StyledNavLink to={`page/${slug}`}>{title}</StyledNavLink>
      )}
      {element.items?.length ? (
        <ChevronIcon onClick={() => toggleNested(element.title)} title="Expand">
          {!showNested[element.title] ? (
            <TiPlus size={'1.4rem'} />
          ) : (
            <TiMinus size={'1.4rem'} />
          )}
        </ChevronIcon>
      ) : null}
    </StyledMenuItem>
  );
};
