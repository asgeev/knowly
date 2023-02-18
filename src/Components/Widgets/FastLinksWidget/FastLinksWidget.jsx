import { useState, useEffect } from 'react';
import { useAxios } from '../../../Hooks/useAxios';
import {
  FastLinksWidgetContainer,
  AllLinksContainer,
  Link,
} from './FastLinksWidget.styles';

const fastlinks = [
  {
    name: 'SZOI ADM',
    url: 'google.pl',
  },
  {
    name: 'SNRL ADM',
    url: 'google.pl',
  },
  {
    name: 'SIMP/SMPT ADM',
    url: 'www.google.pl',
  },
  {
    name: 'SZOI',
    url: 'https://www.google.pl',
  },
];

export const FastLinksWidget = () => {
  const [links, setLinks] = useState([]);
  const { response } = useAxios({ url: '/links' });

  useEffect(() => {
    response ? setLinks(response.data) : [];
  }, [response]);

  return (
    <FastLinksWidgetContainer>
      <p>Szybkie linki:</p>
      <AllLinksContainer>
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.attributes.url}>
              {link.attributes.name}
            </Link>
          );
        })}
      </AllLinksContainer>
    </FastLinksWidgetContainer>
  );
};
