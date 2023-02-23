import styled from 'styled-components'

export const StyledContainer = styled.div`
    word-wrap: break-word;
    overflow-wrap: break-word;
    color-scheme: dark;

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

            input[type='checkbox'] {
                -webkit-appearance: none;
                appearance: none;
                width: 2.4rem;
                height: 2.4rem;
                border-radius: 0.3rem;
                margin-right: 1rem;
                border: 0.15rem solid
                    ${({ theme }) => theme.color.background200};
                outline: none;
                /* vertical-align: middle; */
            }

            input[checked='checked'] {
                background-color: #26ab33;
                position: relative;

                :after {
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
        margin: 1rem 0 2rem 4rem !important;
    }

    ol {
        list-style: decimal;
    }

    li {
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

    blockquote {
        margin: 2rem 0;
        border-left: 0.6rem solid ${({ theme }) => theme.color.background200};
        padding: 1rem 3rem;
        font-size: ${({ theme }) => theme.font.size.small};
        color: ${({ theme }) => theme.color.secondaryText};
        font-style: italic;

        p {
            margin: 0;
        }
    }
    strong {
        font-weight: bolder;
    }

    pre {
        padding: 1.5rem 3rem;
        margin: 1rem 0;
        background-color: #08090a;
        border-radius: 0.6rem;
        font-size: ${({ theme }) => theme.font.size.small};
        color: ${({ theme }) => theme.color.secondaryText};
        border: unset;
    }

    code {
        font-family: 'Fira Code', monospace;
    }

    .marker-yellow {
        background-color: #fdfd77;
    }
    .marker-green {
        background-color: #62f962;
    }
    .marker-pink {
        background-color: #fc7899;
    }
    .marker-blue {
        background-color: #72ccfd;
    }
    .pen-red {
        background-color: transparent;
        color: #e71313;
    }
    .pen-green {
        background-color: transparent;
        color: #128a00;
    }

    table {
        font-size: ${({ theme }) => theme.font.size.small};
        border-collapse: collapse;
        width: 100%;
    }
    th,
    td {
        padding: 1rem;
    }
`
