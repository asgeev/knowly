import styled from 'styled-components';
import { Link, NavLink, useLocation } from 'react-router-dom';
// import { FiHome } from 'react-icons/fi';
import { useEffect, useState, useRef } from 'react';
import { MenuData } from '../MenuData';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { BiHome } from 'react-icons/bi';
import { Divider } from '../../Divider/Divider';

export const MenuItemsWrapper = styled.div`
  width: 100%;
  padding: 2rem;

  ${({ theme }) => theme.mq.lg} {
    margin-top: 4rem;
    padding: 0;
    font-size: 1.4rem;
  }
`;

export const StyledMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.color.secondaryText};
  gap: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
    cursor: pointer;
  }
`;

export const StyledNavLink = styled(NavLink)`
  all: unset;
  cursor: pointer;
  position:relative;
  transition: display 1s ease-in;



  &.active {
    color: red;

    &:after {
      position:absolute;
      content=">";
      top: 0px;
      left: 0;
      width: 2px;
      height: 2px;
    }
  } 
`;

export const StyledEdExpandMore = styled(MdExpandMore)`
  // &:hover {
  //   cursor: pointer;
  // }
`;

export const StyledEdExpandLess = styled(MdExpandLess)`
  // &:hover {
  //   cursor: pointer;
  // }
`;

export const StyledNestedElements = styled.div`
  position: relative;
  margin-left: 1.3rem;

  &::before{
    content: '|';
    positon: absolute;
    top: -10px;
    left: 0;
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.color.background};

  }
}`;

export const MenuItemTitle = styled.span`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const MenuItem = ({ element, type, items, toggleNested, icon }) => {
  const { title, slug } = element;

  return (
    <StyledMenuItem onClick={() => toggleNested(title)}>
      {type ? (
        <MenuItemTitle>{title}</MenuItemTitle>
      ) : (
        <StyledNavLink to={`page/${slug}`}>{title}</StyledNavLink>
      )}
      {items ? (
        <StyledEdExpandMore
          size={'2rem'}
          onClick={toggleNested ? () => toggleNested(title) : null}
        />
      ) : null}
    </StyledMenuItem>
  );
};

const RecursiveMenuComponent = ({ data }) => {
  const [showNested, setShowNested] = useState({});

  const toggleNested = (name) => {
    setShowNested({ ...showNested, [name]: !showNested[name] });
  };

  return (
    <>
      {data.map((element) => {
        return (
          <div key={element.id}>
            <MenuItem
              toggleNested={toggleNested}
              items={element.items?.length ? true : false}
              type={element.type === 'WRAPPER' ? true : false}
              element={element}
            />

            <StyledNestedElements
              style={{ display: !showNested[element.title] && 'none' }}
            >
              {element.items && <RecursiveMenuComponent data={element.items} />}
            </StyledNestedElements>
          </div>
        );
      })}
    </>
  );
};

export const NavLinks = ({ closeMenu }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(MenuData);
  }, [MenuData]);

  return (
    <MenuItemsWrapper>
      <StyledMenuItem>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <BiHome size="2rem" />
          <span>Home</span>
        </div>
      </StyledMenuItem>
      <Divider />
      <RecursiveMenuComponent data={menuData} />
      <Divider />
    </MenuItemsWrapper>
  );
};
