import styled from 'styled-components';
import DOMPurify from 'dompurify';

export const FormattedContentDiv = styled.div``;

export const FormattedContent = ({ content }) => {
  return (
    <FormattedContentDiv
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    ></FormattedContentDiv>
  );
};
