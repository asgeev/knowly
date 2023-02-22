import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    min-height: 1rem;
    border-top: 1px solid ${({ theme }) => theme.color.text};
    padding: 1rem 0 7rem 0;
    margin-top: 3rem;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <p>Wykonał: Adam Szymański</p>
            <p>Kontakt: adam.szymanski@nfz-lublin.pl</p>
        </FooterContainer>
    )
}
