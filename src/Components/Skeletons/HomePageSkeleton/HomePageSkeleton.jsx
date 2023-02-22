import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

export const SkeletonTitle = styled.h1``

export const SkeletonContent = styled.div``

export const HomePageSkeleton = () => {
    return (
        <>
            <SkeletonTitle>
                <Skeleton width={'80%'} />
            </SkeletonTitle>
            <SkeletonContent>
                <Skeleton count={5.7} />
            </SkeletonContent>
        </>
    )
}
