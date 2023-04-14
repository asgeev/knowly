import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Highlight } from 'react-instantsearch-dom'
import { FiPhoneForwarded, FiPhoneIncoming, FiSmartphone } from 'react-icons/fi'
import { FiPhone } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'
import { returnUnitSection } from '../../../Helpers/returnUnitSection'

export const StyledHit = styled.div`
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
        color: ${({ theme }) => theme.color.accent};
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
    flex-direction: column;
`

export const NameBox = styled(RowBox)`
    gap: 0.4rem;
    font-weight: 500;
    flex-wrap: wrap;
`

export const NumbersBox = styled(RowBox)`
    flex-direction: row;
    flex-wrap: wrap;
`

export const NumberBox = styled(RowBox)`
    background-color: ${({ theme }) => theme.color.background200};
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
    align-items: center;
    width: fit-content;
    font-family: 'Fira Code', monospace;
    color: ${({ theme }) => theme.color.secondaryText};
    margin-top: 1rem;
`

export const UnitSectionBox = styled(RowBox)`
    gap: 0;
`

export const UnitNameBox = styled(RowBox)`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-right: 1rem;
    margin-right: 1rem;
    border-right: 2px solid ${({ theme }) => theme.color.dividerPrimary};
`

export const SectionNameBox = styled.div`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.color.secondaryText};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: default;
`

export const PhoneIcon = styled.div`
    color: ${({ theme }) => theme.color.secondaryText};
    svg {
        margin-top: 0.9rem;
    }
`

// export const VerticalDivider = styled.div`
//     width: 10px;
//     color: ${({ theme }) => theme.color.dividerPrimary};
// `

export const Hit = ({ hit }) => {
    console.log(hit)
    return (
        <StyledHit>
            <PhoneIcon>
                <FiPhone size="2rem" />
            </PhoneIcon>
            <div>
                <HeaderBox>
                    <NameBox>
                        <HitHighlight attribute="employeeFirstName" hit={hit} />{' '}
                        {hit.employeeLastName && (
                            <HitHighlight
                                attribute="employeeLastName"
                                hit={hit}
                            />
                        )}
                    </NameBox>
                    <UnitSectionBox>
                        {hit.unit && (
                            <UnitNameBox>
                                <HitHighlight
                                    attribute={['unit', 'unitName']}
                                    hit={hit}
                                />
                            </UnitNameBox>
                        )}
                        {hit.section && (
                            <SectionNameBox>
                                <HitHighlight
                                    attribute={['section', 'sectionShortcut']}
                                    hit={hit}
                                />
                                <BsQuestionCircle
                                    title={returnUnitSection(
                                        hit.unit?.unitName,
                                        hit.section?.sectionName
                                    )}
                                />
                            </SectionNameBox>
                        )}
                    </UnitSectionBox>
                </HeaderBox>
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
            </div>
        </StyledHit>
    )
}
