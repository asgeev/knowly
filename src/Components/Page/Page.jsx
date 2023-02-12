import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DangerouslyContent } from '../DangerouslyContent/DangerouslyContent';
import styled from 'styled-components';
import { TagsContainer } from '../TagsContainer/TagsContainer';
import { UnitName } from '../UnitName/UnitName';

export const PageWrapper = styled.div``;

export const PageTitle = styled.h1`
  margin-top: 0;
`;

const queryParams = `populate=tags,unit`;

export const Page = () => {
  const { pageId } = useParams();
  const [pageContent, setPageContent] = useState(null);
  const [isLoding, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:1337/api/pages/${pageId}?${queryParams}`)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.data === null || result.error?.status === '404') {
            navigate('/not-found');
          } else {
            setPageContent(result.data.attributes);
            setIsLoading(false);
            console.log(pageContent);
          }
        },
        (error) => {
          console.log(error);
          setIsError(true);
          setIsLoading(false);
        }
      );
  }, [pageId]);

  return (
    <PageWrapper>
      {isError ? (
        <h2>Błąd pobierania danych, spróbuj ponownie później</h2>
      ) : null}
      {isLoding ? <p>Loading...</p> : null}
      {pageContent && (
        <>
          <PageTitle>{pageContent.title}</PageTitle>

          <UnitName unit={pageContent.unit?.data} />

          <TagsContainer tags={pageContent.tags?.data} />

          <DangerouslyContent content={pageContent.content} />
        </>
      )}
    </PageWrapper>
  );
};
