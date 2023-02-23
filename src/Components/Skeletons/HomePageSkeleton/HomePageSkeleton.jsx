import Skeleton from 'react-loading-skeleton'
import { SkeletonTitle, SkeletonContent } from './HomePageSkeleton.styles'

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
