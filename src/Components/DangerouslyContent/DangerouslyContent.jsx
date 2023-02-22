import styled from 'styled-components'
import DOMPurify from 'dompurify'
import { ContentContainer } from '../ContentContainer/ContentContainer'

export const StyledDangerouslyContent = styled.div`
    margin: 3rem 0;
    width: 100%;
`

export const DangerouslyContent = ({ content }) => {
    return (
        <ContentContainer>
            <StyledDangerouslyContent
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(content),
                }}
            ></StyledDangerouslyContent>
        </ContentContainer>
    )
}
