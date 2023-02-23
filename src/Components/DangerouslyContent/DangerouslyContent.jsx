import DOMPurify from 'dompurify'
import { ContentContainer } from '../ContentContainer/ContentContainer'
import { StyledDangerouslyContent } from './DangerouslyContent.styles.'

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
