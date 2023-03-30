import { MdOutlineLightbulb } from 'react-icons/md'
import styled from 'styled-components'
import { Divider } from '../../Divider/Divider'

export const TypeForResultsContainer = styled.div``

export const TipContainer = styled.div`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
    margin-bottom: 0.5rem;

    p {
        margin-left: 0.5rem;
    }
`
export const TipBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1rem;

    p {
        margin: 0;
        font-weight: ${({ theme }) => theme.font.weight.w500};
    }
`
export const TextBox = styled.span`
    padding: 0 0.8rem;
    background-color: ${({ theme }) => theme.color.background200};
    color: ${({ theme }) => theme.color.secondaryText};
    border-radius: 0.3rem;
`
export const StyledP = styled.p`
    font-size: ${({ theme }) => theme.font.size.small};
    margin: 4rem 0 4rem 1rem;
    color: ${({ theme }) => theme.color.secondaryText};
`

export const TypeForResults = ({ selectedSearchIndex }) => {
    return (
        <TypeForResultsContainer>
            <TipContainer>
                <TipBox>
                    <MdOutlineLightbulb size="1.8rem" />
                    <p>Podpowiedź</p>
                </TipBox>
                <p>
                    Otwórz wyszukiwarkę szybciej naciskając klawisz{'  '}
                    <TextBox>s</TextBox>
                </p>
            </TipContainer>
            <Divider />
            <StyledP>
                Wyszukujesz w kategorii:{' '}
                <TextBox>{selectedSearchIndex.title}</TextBox>
            </StyledP>
        </TypeForResultsContainer>
    )
}
