import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DangerouslyContent } from '../DangerouslyContent/DangerouslyContent';
import styled from 'styled-components';
import { TagsContainer } from '../TagsContainer/TagsContainer';
import { UnitName } from '../UnitName/UnitName';
import { useAxios } from '../../Hooks/useAxios';
import { PageSkeleton } from '../Skeletons/PageSkeleton/PageSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PageWrapper = styled.div``;

export const PageTitle = styled.h1`
  margin-top: 0;
`;

const queryParams = `populate=tags,unit`;

export const Page = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  // const [isLoding, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const { response, error, loading } = useAxios({
    url: `/pages/${pageId}?${queryParams}`,
  });
  const [pageContent, setPageContent] = useState(response);

  useEffect(() => {
    response ? setPageContent(response.data.attributes) : {};
  }, [response]);

  return (
    <PageWrapper>
      {error && navigate('/not-found')}
      {loading && <PageSkeleton />}
      {/* {<PageSkeleton />} */}

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
