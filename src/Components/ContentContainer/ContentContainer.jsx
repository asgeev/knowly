import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* font-family: 'Poppins', sans-serif; */
  word-wrap: break-word;
  overflow-wrap: break-word;

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 4rem 0 2rem;
    font-weight: 400;
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
    margin-bottom: 1rem;
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
    margin: 3.2rem 0 !important;
  }

  blockquote{
    margin: 2rem 0;
    border-left: .6rem solid ${({ theme }) => theme.color.background200};
    padding: 1rem 3rem;
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
    font-style: italic;

    p{  
        margin: 0;
    }


}
strong {
  font-weight: bolder;
}

pre{
  padding: 1.5rem 3rem;
  margin: 1rem 0;
  background-color: #08090A;
  border-radius: .6rem;
  font-size: ${({ theme }) => theme.font.size.small};
  color: ${({ theme }) => theme.color.secondaryText};
  border: unset;
}

code{
  font-family: 'Fira Code', monospace;
}
`;

export const ContentContainer = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
