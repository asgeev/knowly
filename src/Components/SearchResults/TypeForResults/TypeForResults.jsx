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
`
export const TextBoxWithBackground = styled.span`
    padding: 0 0.8rem;
    background-color: ${({ theme }) => theme.color.background200};
    color: ${({ theme }) => theme.color.secondaryText};
    border-radius: 0.3rem;
`
export const StyledP = styled.p`
    /* font-size: ${({ theme }) => theme.font.size.small}; */
    /* font-weight: 400; */
    margin: 3rem 0 2rem 1rem;
    color: ${({ theme }) => theme.color.secondaryText};
`

export const TypeForResults = ({ selectedSearchIndex }) => {
    return (
        <TypeForResultsContainer>
            <TipContainer>
                <TipBox>
                    <MdOutlineLightbulb size="1.8rem" />
                    <p>
                        Otwórz wyszukiwarkę szybciej naciskając klawisz{'  '}
                        <TextBoxWithBackground>s</TextBoxWithBackground>
                    </p>{' '}
                </TipBox>
            </TipContainer>
            <Divider />
            <StyledP>
                Wyszukujesz w kategorii:{' '}
                <TextBoxWithBackground>
                    {selectedSearchIndex.title}
                </TextBoxWithBackground>
            </StyledP>
        </TypeForResultsContainer>
    )
}
