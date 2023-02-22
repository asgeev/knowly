import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const SkeletonPageTitle = styled.h1`
    margin: 2.5rem 0;
`

export const SkeletonUnit = styled.div`
    padding: 1rem 0;
`

export const SkeletonTags = styled.div`
    padding: 1rem 0;
`

export const SkeletonPageContent = styled.div`
    /* padding: 1rem 0; */
    margin-top: 3rem;

    span > span {
        margin: 1rem 0;
    }
`

export const SkeletonPageHeader = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: 1.5rem;
`
export const SkeletonPageHeaderAvatar = styled.div`
    height: 48px;
    width: 48px;
`

export const SkeletonPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const SkeletonElement = styled.div`
    width: ${({ width }) => width};
`

export const PageSkeleton = () => {
    return (
        <>
            <SkeletonPageHeader>
                <SkeletonPageHeaderAvatar>
                    <Skeleton circle width={48} height={48} />
                </SkeletonPageHeaderAvatar>
                <SkeletonPageContainer>
                    <SkeletonElement width={'40%'}>
                        <Skeleton />
                    </SkeletonElement>
                    <SkeletonElement width={'50%'}>
                        <Skeleton />
                    </SkeletonElement>
                </SkeletonPageContainer>
            </SkeletonPageHeader>
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
    )
}
