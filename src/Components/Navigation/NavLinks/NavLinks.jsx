import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MenuData } from '../../../assets/MenuData.js/MenuData';
import { BiHome } from 'react-icons/bi';
import { MenuItemWrapper } from '../MenuItemWrapper/MenuItemWrapper';
import { Divider } from '../../Divider/Divider';
import {
  PinnedStyledMenuItem,
  MenuItemsWrapper,
  MenuItemTitle,
  StyledNestedElements,
} from './NavLinks.styles';

export const RecursiveNavLinksComponent = ({ data }) => {
  const [showNested, setShowNested] = useState({});
  const { pathname } = useLocation();

  const toggleNested = (title) => {
    setShowNested({ ...showNested, [title]: !showNested[title] });
  };

  const untoggleAll = () => {
    setShowNested({});
  };

  useEffect(() => {
    untoggleAll();
  }, [pathname]);

  return (
    <>
      {data.map((element) => {
        return (
          <div key={`${element.name}-${element.id}`}>
            <MenuItemWrapper toggleNested={toggleNested} element={element} />
            {/* 
            <MenuItemWrapper
              showNested={showNested}
              toggleNested={toggleNested}
              items={element.items?.length ? true : false}
              type={element.type === 'WRAPPER' ? true : false}
              element={element}
            /> */}

            <StyledNestedElements
              style={{ display: !showNested[element.title] && 'none' }}
            >
              {element.items && (
                <RecursiveNavLinksComponent data={element.items} />
              )}
            </StyledNestedElements>
          </div>
        );
      })}
    </>
  );
};

export const NavLinks = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(MenuData);
  }, []);

  return (
    <MenuItemsWrapper>
      <PinnedStyledMenuItem to="/">
        <BiHome size="2rem" />
        <MenuItemTitle>Home</MenuItemTitle>
      </PinnedStyledMenuItem>
      <Divider />
      <RecursiveNavLinksComponent data={menuData} />
      <Divider />
    </MenuItemsWrapper>
  );
};
