import { useState } from 'react'
import styled from 'styled-components'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

export const Button = styled.button`
    color: ${({ theme }) => theme.color.secondaryText};
    background-color: unset;
    border: none;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`

export const Divider = styled.span`
    height: 50%;
    background-color: ${({ theme }) => theme.color.dividerPrimary};
    width: 2px;
    margin: 0 1rem;
`

export const OptionsContainer = styled.div`
    position: absolute;
    top: calc(100% + 1rem);
    right: 0;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    background-color: ${({ theme }) => theme.color.background100};
    padding: 1.6rem;
    border-radius: 0.6rem;
    transition: all 0.2s ease-in;
    display: flex;
    flex-direction: column;
    min-width: 12rem;
`

export const Option = styled.button`
    color: ${({ theme }) => theme.color.secondaryText};
    padding: 0.4rem;
    background-color: unset;
    border: none;
    text-align: left;

    :hover {
        color: ${({ theme }) => theme.color.accent};
        cursor: pointer;
    }
`

export const IndexDropdown = ({
    items = [],
    defaultValue,
    setSelectedSearchIndex,
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Divider />
            <Button
                onClick={() => setIsOpen((prev) => !prev)}
                onBlurCapture={() => setIsOpen(false)}
                isOpen={isOpen}
            >
                {defaultValue.title}
                {isOpen ? (
                    <HiChevronUp size="2rem" />
                ) : (
                    <HiChevronDown size="2rem" />
                )}
            </Button>

            <OptionsContainer isOpen={isOpen}>
                {items?.map((item, index) => {
                    return (
                        <Option
                            key={index}
                            onClick={() => {
                                setSelectedSearchIndex(item)
                            }}
                        >
                            {item.title}
                        </Option>
                    )
                })}
            </OptionsContainer>
        </>
    )
}
