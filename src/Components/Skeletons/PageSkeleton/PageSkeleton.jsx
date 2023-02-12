import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';

export const SkeletonPageTitle = styled.h1`
  margin-top: 0;
`;

export const SkeletonUnit = styled.div`
  padding: 1rem 0;
`;

export const SkeletonTags = styled.div`
  padding: 1rem 0;
`;

export const SkeletonPageContent = styled.div`
  padding: 1rem 0;
  margin-top: 3rem;

  span > span {
    margin: 1rem 0;
  }
`;

export const PageSkeleton = () => {
  return (
    <>
      <SkeletonPageTitle>
        <Skeleton />
      </SkeletonPageTitle>
      <SkeletonUnit>
        <Skeleton count={0.7} />
      </SkeletonUnit>
      <SkeletonTags>
        <Skeleton count={0.6} />
      </SkeletonTags>
      <SkeletonPageContent>
        <Skeleton count={10.8} />
      </SkeletonPageContent>
    </>
  );
};
