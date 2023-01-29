import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdEco, MdExpandMore } from 'react-icons/md';
import { FiHome } from 'react-icons/fi';

const StyledNavLink = styled(NavLink)`
  cursor: pointer;
  list-style: none;
  padding: 2rem 3rem;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;

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

export const MenuItemsWrapper = styled.div`
  width: 100%;
  padding: 2rem;

  ${({ theme }) => theme.mq.lg} {
    margin-top: 4rem;
    padding: 0;
  }
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

const slug = 'EZD';
export const MenuItems = ({ closeMenu }) => {
  return (
    <MenuItemsWrapper>
      <StyledNavLink to={'/'} onClick={() => closeMenu()}>
        <TitleIconWrapper>
          <Icon>
            <FiHome size="2rem" />
          </Icon>
          <Title>Home</Title>
        </TitleIconWrapper>
      </StyledNavLink>
      <StyledNavLink to={`page/${slug}`} onClick={() => closeMenu()}>
        <TitleIconWrapper>
          <Icon>
            <MdEco size="2rem" />
          </Icon>
          <Title>Ezd</Title>
        </TitleIconWrapper>
        <ExpandIcon>
          <MdExpandMore size={'2rem'} />
        </ExpandIcon>
      </StyledNavLink>
    </MenuItemsWrapper>
  );
};
