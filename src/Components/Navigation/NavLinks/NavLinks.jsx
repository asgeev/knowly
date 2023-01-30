import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { FiHome } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { MenuData } from '../MenuData';

export const MenuItemsWrapper = styled.div`
  width: 100%;
  padding: 2rem;

  ${({ theme }) => theme.mq.lg} {
    margin-top: 4rem;
    padding: 0;
  }
`;

// const RecursiveMenu = ({ data }) => {
//   const [expand, setExpand] = useState(true);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.title} onClick={() => setExpand((prev) => !prev)}>
//           <div>{item.title}</div>

//           <div
//             style={{ display: expand ? 'block' : 'none', paddingLeft: '20px' }}
//           >
//             {item.items &&
//               item.items?.map((item) => (
//                 <RecursiveMenu data={item.items} key={item.title} />
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const RecursiveMenuComponent = ({ data }) => {
  const [showNested, setShowNested] = useState({});
  const toggleNested = (name) => {
    setShowNested({ ...showNested, [name]: !showNested[name] });
  };
  return (
    <div style={{ paddingLeft: '20px' }}>
      {data.map((parent) => {
        return (
          <div key={parent.id}>
            <NavLink
              onClick={() => toggleNested(parent.title)}
              to={`page${parent.path}`}
            >
              {parent.title}
            </NavLink>
            <div style={{ display: !showNested[parent.title] && 'none' }}>
              {parent.items && <RecursiveMenuComponent data={parent.items} />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const NavLinks = ({ closeMenu }) => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    setMenuData(MenuData);
  }, [MenuData]);

  return (
    <MenuItemsWrapper>
      <RecursiveMenuComponent data={menuData} />
    </MenuItemsWrapper>
  );
};
