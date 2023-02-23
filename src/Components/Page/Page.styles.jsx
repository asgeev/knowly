import styled from 'styled-components'

export const PageWrapper = styled.div``

export const PageTitle = styled.h1`
    font-size: ${({ theme }) => theme.font.size.h1};
    margin: 2.5rem 0;
    line-height: 1.3em;
    font-weight: 600;
`

export const PageHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`

export const PageHeaderAvatar = styled.img`
    height: 48px;
    width: 48px;
    background-size: contain;
`

export const PageHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
`

export const PageHeaderUpdatedBy = styled.span`
    font-weight: 500;
`

export const PageHeaderUpdatedAt = styled.span`
    font-weight: 300;
`
