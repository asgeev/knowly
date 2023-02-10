import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormattedContent } from '../FormattedContent/FormattedContent';
import styled from 'styled-components';
import { TagsContainer } from '../TagsContainer/TagsContainer';

export const PageWrapper = styled.div``;

export const PageTitle = styled.h1`
  margin-top: 0;
`;

export const PageContent = styled.section`
  /* background-color: red; */
`;

export const Page = () => {
  const { pageId } = useParams();
  const [pageContent, setPageContent] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:1337/api/pages/${pageId}?populate=*`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.data === null || result.error?.status === '404') {
            navigate('/not-found');
          }
          setPageContent(result.data?.attributes);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        }
      );
    console.log(pageContent);
  }, [pageId]);

  return (
    <PageWrapper>
      {isLoding ? <p>Loading...</p> : null}
      {isError ? (
        <h2>Błąd pobierania danych, spróbuj ponownie później</h2>
      ) : null}

      <PageTitle>{pageContent.title}</PageTitle>
      <TagsContainer tags={pageContent.tags?.data} />

      <FormattedContent content={pageContent.content} />
    </PageWrapper>
  );
};
