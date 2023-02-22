import styled from 'styled-components'

export const WeatherWidgetContainer = styled.div`
    /* width: 100%; */
    background-color: ${({ theme }) => theme.color.background100};
    /* min-height: 200px; */
    /* max-height: 500px; */
    border-radius: 0.6rem;
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
`

export const Location = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    max-width: fit-content;

    span {
        font-size: 2rem;
        font-weight: 300;
        color: ${({ theme }) => theme.color.secondaryText};
    }
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
`

export const WeatherIconContainer = styled.div``

export const TempContainer = styled.div`
    max-width: fit-content;
    span {
        font-size: 4rem;
        font-weight: 200;
    }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`
export const RightContainer = styled.div`
    margin-right: 5rem;
`

export const ElementContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    max-width: fit-content;
    padding: 0.5rem 0;
    border-radius: 0.6rem;
    /* background-color: ${({ theme }) => theme.color.background200}; */

    span {
        font-size: ${({ theme }) => theme.font.size.small};
        font-weight: 200;
    }
`
