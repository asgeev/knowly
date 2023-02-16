import styled from 'styled-components';
import DOMPurify from 'dompurify';

export const StyledDangerouslyContent = styled.div`
  margin: 3rem 0;
  width: 100%;
`;

export const Styled = styled.div`
  /* font-family: 'Poppins', sans-serif; */
  word-wrap: break-word;
  overflow-wrap: break-word;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 4rem 0 1rem;
    font-weight: 500;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.font.size.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.font.size.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.font.size.h4};
  }
  p {
    font-size: ${({ theme }) => theme.font.size.p};
    margin-bottom: 2rem;
  }

  ul.todo-list {
    list-style: none;
    margin: revert;
    color: revert;
    font-family: revert;
    margin-left: 2rem;
  }

  ul,
  ol {
    list-style: initial;
    margin-left: 2rem;
  }

  ol {
    list-style: decimal;
  }

  sub {
    vertical-align: sub;
  }

  sup {
    vertical-align: super;
  }

  figure {
    margin: 3.2rem 0;
  }
`;

export const DangerouslyContent = ({ content }) => {
  return (
    <Styled>
      <StyledDangerouslyContent
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}
      ></StyledDangerouslyContent>
    </Styled>
  );
};
