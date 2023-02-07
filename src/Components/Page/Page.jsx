import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const PageContent = styled.section``;

export const Page = () => {
  const { pageId } = useParams();
  const [page, setPage] = useState({});
  const [isLoding, setIsLoading] = useState(true);

  console.log(page);
  console.log(pageId);

  useEffect(() => {
    fetch(`http://localhost:1337/api/pages/${pageId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPage(result.data.attributes);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [pageId]);

  return (
    <PageContent>
      {isLoding ? <p>Loading...</p> : null}
      <>
        <h1>{page.title}</h1>
        <>{page.Content}</>
      </>
    </PageContent>
  );
};
