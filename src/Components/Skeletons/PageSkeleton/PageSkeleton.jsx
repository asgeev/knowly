import Skeleton from 'react-loading-skeleton'
import {
    SkeletonPageHeader,
    SkeletonPageHeaderAvatar,
    SkeletonPageContainer,
    SkeletonElement,
    SkeletonPageTitle,
    SkeletonUnit,
    SkeletonTags,
    SkeletonPageContent,
} from './PageSkeleton.styles'

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
                <Skeleton count={0.9} />
            </SkeletonUnit>
            <SkeletonTags>
                <Skeleton count={0.7} />
            </SkeletonTags>
            <SkeletonPageContent>
                <Skeleton count={10.8} />
            </SkeletonPageContent>
        </>
    )
}
