import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MenuData } from '../../assets/MenuData/MenuData';
import { BiHome } from 'react-icons/bi';
// import { MenuItemWrapper } from './MenuItemWrapper/MenuItemWrapper';
import { MenuItemWrapper } from './MenuItemWrapper/MenuItemWrapper';
import { Divider } from '../Divider/Divider';
import {
  PinnedStyledMenuItem,
  MenuItemsWrapper,
  MenuItemTitle,
  StyledNestedDiv,
} from './NavLinks.styles';
import { useAxios } from '../../Hooks/useAxios';
import Skeleton from 'react-loading-skeleton';
import { NavLinksSkeleton } from '../Skeletons/NavLinksSkeleton/NavLinksSkeleton';

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
      {data?.map((element) => {
        return (
          <div key={`${element.name}-${element.id}`}>
            <MenuItemWrapper
              showNested={showNested}
              toggleNested={toggleNested}
              element={element}
            />

            <StyledNestedDiv
              style={{
                visibility: !showNested[element.title] && 'hidden',
                opacity: !showNested[element.title] && '0',
                maxHeight: !showNested[element.title] && '0',
              }}
            >
              {element.items && (
                <RecursiveNavLinksComponent data={element.items} />
              )}
            </StyledNestedDiv>
          </div>
        );
      })}
    </>
  );
};

export const NavLinks = () => {
  const [menuData, setMenuData] = useState([]);

  const { response, loading, error } = useAxios({
    url: '/navigation/render/1?type=TREE',
  });

  useEffect(() => {
    response ? setMenuData(response) : [];
  }, [response]);

  return (
    <MenuItemsWrapper>
      <PinnedStyledMenuItem to="/">
        <BiHome size="2rem" />
        <MenuItemTitle>Home</MenuItemTitle>
      </PinnedStyledMenuItem>
      <Divider />
      {menuData.length ? (
        <RecursiveNavLinksComponent data={menuData} />
      ) : (
        <NavLinksSkeleton count={5} />
      )}

      <Divider />
    </MenuItemsWrapper>
  );
};
