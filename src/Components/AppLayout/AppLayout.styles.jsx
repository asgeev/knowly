import styled from 'styled-components'

export const AppLayoutWrapper = styled.div`
    width: 100%;
    min-height: 100dvh;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: auto;

    ${({ theme }) => theme.mq.lg} {
        position: relative;
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;

    ${({ theme }) => theme.mq.lg} {
        margin-left: ${({ theme }) => theme.navBar.desktopWidth};
    }
`

export const MainSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${({ theme }) => theme.mq.lg} {
        padding-left: 6rem;
    }
`

export const FlexContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 5rem;
    margin-top: 4rem;

    ${({ theme }) => theme.mq.sm} {
        padding: 0;
        max-width: ${({ theme }) => theme.containerSize.sm};
    }

    ${({ theme }) => theme.mq.md} {
        max-width: ${({ theme }) => theme.containerSize.md};
    }

    ${({ theme }) => theme.mq.lg} {
        max-width: calc(
            ${({ theme }) => theme.containerSize.lg} -
                ${({ theme }) => theme.navBar.desktopWidth}
        );
        margin-top: 8rem;
        padding-right: 6rem;
        flex-direction: row;
        justify-content: space-between;
    }

    ${({ theme }) => theme.mq.xl} {
        max-width: calc(
            ${({ theme }) => theme.containerSize.xl} -
                ${({ theme }) => theme.navBar.desktopWidth}
        );
        /* margin-right: 2rem; */
        flex-wrap: unset;
    }

    ${({ theme }) => theme.mq.xxl} {
        max-width: calc(
            ${({ theme }) => theme.containerSize.xxl} -
                ${({ theme }) => theme.navBar.desktopWidth}
        );
    }
`

export const WidgetsContainer = styled.div`
    margin-bottom: 5rem;
    width: 100%;

    white-space: nowrap;
    /* width: min-content; */

    ${({ theme }) => theme.mq.lg} {
        margin-top: 0;
        margin-bottom: 3rem;
        /* flex: 1 1 auto; */
        max-width: 280px;
    }
`

export const OutletConainer = styled.div`
    width: 100%;

    /* flex: 0 0 auto; */
    ${({ theme }) => theme.mq.lg} {
        margin-bottom: 8rem;
    }
`
