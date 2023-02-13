import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DangerouslyContent } from '../DangerouslyContent/DangerouslyContent';
import styled from 'styled-components';
import { TagsContainer } from '../TagsContainer/TagsContainer';
import { UnitName } from '../UnitName/UnitName';
import { useAxios } from '../../Hooks/useAxios';
import { PageSkeleton } from '../Skeletons/PageSkeleton/PageSkeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDate } from '../../Hooks/useDate';

export const PageWrapper = styled.div``;

export const PageTitle = styled.h1``;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: 1.5rem;
`;

export const PageHeaderAvatar = styled.div`
  height: 48px;
  width: 48px;
  background-image: url('/avatar.jpg');
  background-size: contain;
`;

export const PageHeaderUpdatedBy = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const PageHeaderUpdatedAt = styled(PageHeaderUpdatedBy)``;

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const queryParams = `populate=%2A`;

export const Page = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const { response, error, loading } = useAxios({
    url: `/pages/${pageId}?${queryParams}`,
  });
  const [pageContent, setPageContent] = useState(response);
  const updatedAt = useDate(pageContent?.updatedAt);

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
          <PageHeader>
            {/* {console.log(pageContent)} */}
            <PageHeaderAvatar />
            <PageHeaderContainer>
              <PageHeaderUpdatedBy>
                {pageContent.updatedBy?.data.attributes.firstname}{' '}
                {pageContent.updatedBy?.data.attributes.lastname}
              </PageHeaderUpdatedBy>
              <PageHeaderUpdatedAt>{updatedAt}</PageHeaderUpdatedAt>
            </PageHeaderContainer>
          </PageHeader>

          <PageTitle>{pageContent.title}</PageTitle>
          <UnitName unit={pageContent.unit?.data} />
          <TagsContainer tags={pageContent.tags?.data} />
          <DangerouslyContent content={pageContent.content} />
        </>
      )}
    </PageWrapper>
  );
};
