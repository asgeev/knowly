import { useState, useEffect } from 'react'
import { useAxios } from '../../Hooks/useAxios'
import { DangerouslyContent } from '../DangerouslyContent/DangerouslyContent'
import { HomePageSkeleton } from '../Skeletons/HomePageSkeleton/HomePageSkeleton'
import { HomePageWrapper, HomePageTitle } from './HomePage.styles'

export const HomePage = () => {
    const { response, error, loading } = useAxios({
        url: `/home-page`,
    })
    const [content, setContent] = useState(response)

    useEffect(() => {
        response ? setContent(response.data.attributes) : null
    }, [response])

    useEffect(() => {
        setContent(null)
    }, [loading])

    return (
        <HomePageWrapper>
            {error && (
                <p>
                    Błąd pobierania zawartości strony proszę spróbować później.
                </p>
            )}
            {loading && <HomePageSkeleton />}
            {content && (
                <>
                    <HomePageTitle>{content.title}</HomePageTitle>
                    <DangerouslyContent content={content.content} />
                </>
            )}
        </HomePageWrapper>
    )
}
