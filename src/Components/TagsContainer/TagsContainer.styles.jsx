import styled from 'styled-components'

export const StyledTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.7rem;
    padding: 0.5rem 0;
    width: 100%;
`

export const StyledTagButton = styled.button`
    all: unset;
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.font.size.small};
    border-radius: 0.3rem;
    color: ${({ theme }) => theme.color.accent};

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

export const StyledTagsItemsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const TagsIcon = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 0.5rem 0;
    color: ${({ theme }) => theme.color.secondaryText};
`
