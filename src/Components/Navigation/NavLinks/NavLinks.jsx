import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { FiHome } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { MenuData } from '../MenuData';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

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
    <div>
      {data.map((element) => {
        return (
          <div key={element.id}>
            {element.type.normalize() === 'WRAPPER'.normalize() ? (
              <div onClick={() => toggleNested(element.title)}>
                <p>{element.title}</p>
                {element.items?.length ? <MdExpandMore size={'3rem'} /> : null}
              </div>
            ) : (
              <NavLink
                onClick={() => toggleNested(element.title)}
                to={`${element.test1}/${element.slug}`}
              >
                {element.title}

                {element.items?.length ? <MdExpandMore size={'3rem'} /> : null}
              </NavLink>
            )}

            <div
              style={{
                display: !showNested[element.title] && 'none',
                paddingLeft: '10px',
              }}
            >
              {element.items && <RecursiveMenuComponent data={element.items} />}
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
