import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAxios } from "../../Hooks/useAxios";
import { DangerouslyContent } from "../DangerouslyContent/DangerouslyContent";
import { HomePageSkeleton } from "../Skeletons/HomePageSkeleton/HomePageSkeleton";


export const HomePageWrapper = styled.div``;
export const HomePageTitle = styled.h1`
  margin-top: 0;
`;

export const HomePage = () => {
    const { response, error, loading } = useAxios(
        {
          url: `/home-page`,
        },
      );
    const [content, setContent] = useState(response);
    
    useEffect(() => {
        response ? setContent(response.data.attributes) : null;
      }, [response]);

      useEffect(() => {
        setContent(null);
      }, [loading]);

  return (
    <HomePageWrapper>
        {error && <p>Błąd pobierania danych proszę spróbować później.</p>}
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