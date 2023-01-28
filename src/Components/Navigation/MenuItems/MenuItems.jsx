import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuItem = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 2rem 3rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
  }

  ${({ theme }) => theme.mq.lg} {
    font-size: 1.4rem;
    border-radius: 0.7rem;
    padding: 1rem 2rem;

    &:hover {
      background-color: ${({ theme }) => theme.color.elementSelected};
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`;

export const MenuItemsWrapper = styled.div`
  width: 100%;
`;

const slug = 'EZD';
export const MenuItems = ({ closeMenu }) => {
  return (
    <MenuItemsWrapper>
      <ul>
        <MenuItem>
          <StyledNavLink to={`page/${slug}`} onClick={() => closeMenu()}>
            EZD
          </StyledNavLink>
        </MenuItem>
      </ul>
    </MenuItemsWrapper>
  );
};
