import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Highlight } from 'react-instantsearch-dom'
import { FiPhoneForwarded, FiPhoneIncoming, FiSmartphone } from 'react-icons/fi'

export const StyledHit = styled.div`
    /* background-color: ${({ theme }) => theme.color.background}; */
    border-radius: 0.6rem;
    padding: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: row;
    position: relative;
`
export const HitHighlight = styled(Highlight)`
    word-spacing: ${({ smallWordSpacing }) =>
        smallWordSpacing ? '-0.5rem' : 'unset'};

    .ais-Highlight-highlighted {
        background-color: ${({ theme }) => theme.color.accentSecondary};
        color: black;
        font-style: normal;
    }
`

export const TopBox = styled.div`
    margin-bottom: 1rem;
`

export const BottomBox = styled.div``

export const RowBox = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`

export const HeaderBox = styled(RowBox)`
    gap: 0rem;
    /* justify-content: space-between; */
    flex-direction: column;
`

export const NameBox = styled(RowBox)`
    gap: 0.4rem;
    font-weight: 500;
    /* font-size: ${({ theme }) => theme.font.size.h4}; */
    /* color: ${({ theme }) => theme.color.accent}; */
    flex-wrap: wrap;
`

export const NumbersBox = styled(RowBox)`
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items: center; */
    /* justify-content: center; */
    /* gap: 3rem; */
`

export const NumberBox = styled(RowBox)`
    /* background-color: ${({ theme }) => theme.color.background100}; */
    background-color: ${({ theme }) => theme.color.background200};
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
    /* height: 3rem; */
    align-items: center;
    width: fit-content;
    font-family: 'Fira Code', monospace;
    /* font-size: ${({ theme }) => theme.font.size.small}; */
    /* color: ${({ theme }) => theme.color.secondaryText}; */
    color: ${({ theme }) => theme.color.secondaryText};
    /* border: 1px solid ${({ theme }) => theme.color.dividerPrimary}; */
`

export const UnitNameBox = styled(RowBox)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
    display: flex;
    align-items: center;
`

export const SectionNameBox = styled.div`
    font-size: ${({ theme }) => theme.font.size.ultraSmall};
    color: ${({ theme }) => theme.color.secondaryText};
`

export const ExternalNumberBox = styled(RowBox)``

export const Hit = ({ hit }) => {
    const [collapse, setCollapse] = useState(false)

    console.log(collapse)
    return (
        <StyledHit onMouseEnter={() => setCollapse(true)}>
            {console.log(hit)}

            <div>
                <TopBox>
                    <HeaderBox>
                        <NameBox>
                            <HitHighlight
                                attribute="employeeFirstName"
                                hit={hit}
                            />{' '}
                            <HitHighlight
                                attribute="employeeLastName"
                                hit={hit}
                            />
                        </NameBox>
                        <UnitNameBox>
                            <HitHighlight
                                attribute={['unit', 'unitName']}
                                hit={hit}
                            />
                        </UnitNameBox>
                        {/* <SectionNameBox>
                            <HitHighlight
                                attribute={['section', 'sectionName']}
                                hit={hit}
                            />
                        </SectionNameBox> */}
                    </HeaderBox>
                </TopBox>
                <BottomBox>
                    <NumbersBox>
                        {hit.internalNumber && (
                            <NumberBox>
                                <FiPhoneForwarded size="1.6rem" />
                                <HitHighlight
                                    attribute="internalNumber"
                                    hit={hit}
                                    smallWordSpacing
                                />
                            </NumberBox>
                        )}
                        {hit.externalNumber && (
                            <NumberBox>
                                <FiPhoneIncoming size="1.6rem" />
                                <HitHighlight
                                    attribute="externalNumber"
                                    hit={hit}
                                    smallWordSpacing
                                />
                            </NumberBox>
                        )}

                        {hit.companyNumber && (
                            <NumbersBox>
                                <NumberBox>
                                    <FiSmartphone size="1.6rem" />
                                    <HitHighlight
                                        attribute="companyNumber"
                                        hit={hit}
                                        smallWordSpacing
                                    />
                                </NumberBox>
                            </NumbersBox>
                        )}
                    </NumbersBox>
                </BottomBox>
            </div>
            {/* <BottomBox>
                {hit.companyNumber && (
                    <NumbersBox>
                        <NumberBox>
                            <FiSmartphone size="1.6rem" />
                            <HitHighlight attribute="companyNumber" hit={hit} />
                        </NumberBox>
                    </NumbersBox>
                )}
              
            </BottomBox> */}

            {/* 
            <div>
                <HitHighlight attribute={['unit', 'unitName']} hit={hit} />
                <br></br>
                <HitHighlight
                    attribute={['section', 'sectionName']}
                    hit={hit}
                />
            </div>*/}
        </StyledHit>
    )
}
