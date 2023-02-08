import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '../../Hooks/useDebounce';

export const SearchBarContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
  position: sticky;
  top: 0;
  top: ${({ theme }) => theme.navBar.mobileHeight};
  background-color: ${({ theme }) => theme.color.background};
  left: 0;
  padding: 2rem;
  justify-content: center;

  ${({ theme }) => theme.mq.lg} {
    position: sticky;
    top: 0;
    left: 0;
    max-width: 100%;
    padding: 1.5rem 3rem;
    padding-left: 6rem;
    /* background-color: ${({ theme }) => theme.color.background100}; */
    border-bottom: 1px solid ${({ theme }) => theme.color.background100};
    justify-content: flex-start;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  border-radius: 0.5rem;

  /* padding: 1rem 1.5rem; */
  /* background-color: ${({ theme }) => theme.color.background300}; */

  ${({ theme }) => theme.mq.sm} {
    max-width: ${({ theme }) => theme.containerSize.sm};
  }
  ${({ theme }) => theme.mq.md} {
    max-width: ${({ theme }) => theme.containerSize.md};
  }

  ${({ theme }) => theme.mq.lg} {
    max-width: ${({ theme }) => theme.containerSize.md};
  }
`;

export const StyledSearchBar = styled.input`
  all: unset;
  width: 100%;
  padding: 1rem;
`;

export const SearchBar = ({ isOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchElements, setSearchElements] = useState([]);
  const debounceSearchQuery = useCallback(useDebounce(searchQuery, 600)).trim();

  useEffect(() => {
    if (debounceSearchQuery) {
      console.log(debounceSearchQuery);
    }
  }, [debounceSearchQuery]);

  return (
    <SearchBarContainer isOpen={isOpen}>
      <InputContainer>
        <MdSearch size="3rem" />
        <StyledSearchBar
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
          spellCheck="false"
        ></StyledSearchBar>
      </InputContainer>
    </SearchBarContainer>
  );
};
