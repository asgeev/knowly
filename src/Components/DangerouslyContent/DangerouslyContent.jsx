import styled from 'styled-components';
import DOMPurify from 'dompurify';

export const StyledDangerouslyContent = styled.div`
  margin: 3rem 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
`;

export const DangerouslyContent = ({ content }) => {
  return (
    <StyledDangerouslyContent
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    ></StyledDangerouslyContent>
  );
};
