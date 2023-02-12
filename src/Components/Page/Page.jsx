import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DangerouslyContent } from '../DangerouslyContent/DangerouslyContent';
import styled from 'styled-components';
import { TagsContainer } from '../TagsContainer/TagsContainer';
import { UnitName } from '../UnitName/UnitName';
import { useAxios } from '../../Hooks/useAxios';

export const PageWrapper = styled.div``;

export const PageTitle = styled.h1`
  margin-top: 0;
`;

const queryParams = `populate=tags,unit`;

export const Page = () => {
  const { pageId } = useParams();
  const [pageContent, setPageContent] = useState({});
  // const [isLoding, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({
    url: `/pages/${pageId}?${queryParams}`,
  });

  useEffect(() => {
    response ? setPageContent(response.data.attributes) : {};
  }, [response]);

  return (
    <PageWrapper>
      {console.log(`Page content: ${pageContent}`)}
      {console.log(`Page response: ${response}`)}
      {console.log(`Page error: ${error}`)}
      {console.log(`Page loading: ${loading}`)}
      {error ? console.log(error) : null}
      {loading ? <p>Loading...</p> : null}
      {Object.keys(pageContent).length === 0 ? null : (
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
