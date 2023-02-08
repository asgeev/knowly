import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

export const PageContent = styled.section``;

export const Page = () => {
  const { pageId } = useParams();
  const [pageContent, setPageContent] = useState({});
  const [isLoding, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(pageContent);
  console.log(pageId);

  useEffect(() => {
    fetch(`http://localhost:1337/api/pages/${pageId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setPageContent(result.data.attributes);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        }
      );
  }, [pageId]);

  return (
    <PageContent>
      {isLoding ? <p>Loading...</p> : null}
      {isError ? <p>error</p> : null}
      <>
        <h1>{pageContent.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(pageContent.content),
          }}
        />
      </>
    </PageContent>
  );
};
