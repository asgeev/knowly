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
    /* margin: revert; */
    color: revert;
    font-family: revert;
    margin: 0 !important;

    label.todo-list__label {
      font-family: system-ui, sans-serif;
      font-size: 2rem;
      display: flex;
      align-items: center;
      
      input[type="checkbox"]{
        -webkit-appearance: none;
        appearance: none;
        width: 2.4rem;
        height: 2.4rem;
        border-radius: .3rem;
        margin-right: 1rem;
        border: 0.15rem solid ${({ theme }) => theme.color.background200};
        outline: none;
        /* vertical-align: middle; */

      }

      input[checked="checked"]{
        background-color: #26ab33;
        position: relative;

        :after{
        content: '✓';
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -17px);
        }
      }



    }
  }

  ul,
  ol {
    list-style: initial;
    /* margin-left: 4rem;
    margin-bottom: 1rem; */
    margin: 1rem 0 2rem 2rem !important;
  }

  ol {
    list-style: decimal;
  }

  li{
      margin: 0.5rem 0 !important;
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
