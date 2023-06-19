import { useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { DangerouslyContent } from '../DangerouslyContent/DangerouslyContent'
import { TagsContainer } from '../TagsContainer/TagsContainer'
import { UnitName } from '../UnitName/UnitName'
import { useAxios } from '../../Hooks/useAxios'
import { PageSkeleton } from '../Skeletons/PageSkeleton/PageSkeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useDate } from '../../Hooks/useDate'
import unknowAvatar from '../../assets/icons/unknow.png'
import {
    PageWrapper,
    PageHeaderContainer,
    PageHeader,
    PageHeaderAvatar,
    PageHeaderUpdatedBy,
    PageHeaderUpdatedAt,
    PageTitle,
} from './Page.styles'

const queryParams = `populate=%2A`

export const Page = () => {
    const { pageId } = useParams()
    const location = useLocation()
    const { response, error, loading } = useAxios(
        {
            url: `/pages/${pageId}?${queryParams}`,
        },
        pageId
    )
    const [pageContent, setPageContent] = useState(response)
    const updatedAt = useDate(pageContent?.updatedAt)

    console.log(location)

    useEffect(() => {
        response ? setPageContent(response.data.attributes) : null
    }, [response])

    useEffect(() => {
        setPageContent(undefined)
    }, [pageId])

    return (
        <PageWrapper>
            {error && <Navigate to="/not-found" replace={true} />}

            {loading && <PageSkeleton />}
            {/* {console.log(pageContent)} */}
            {/* <PageSkeleton /> */}
            {pageContent && (
                <>
                    <PageHeader>
                        <PageHeaderAvatar src={unknowAvatar} />
                        <PageHeaderContainer>
                            <PageHeaderUpdatedBy>
                                {
                                    pageContent.updatedBy?.data.attributes
                                        .firstname
                                }{' '}
                                {
                                    pageContent.updatedBy?.data.attributes
                                        .lastname
                                }
                            </PageHeaderUpdatedBy>
                            <PageHeaderUpdatedAt>
                                {updatedAt}
                            </PageHeaderUpdatedAt>
                        </PageHeaderContainer>
                    </PageHeader>

                    <PageTitle>{pageContent.title}</PageTitle>
                    {pageContent.unit && (
                        <UnitName
                            unit={pageContent.unit.data}
                            section={pageContent.section.data}
                        />
                    )}
                    {pageContent.tags && (
                        <TagsContainer tags={pageContent.tags?.data} />
                    )}
                    <DangerouslyContent content={pageContent.content} />
                </>
            )}
        </PageWrapper>
    )
}
