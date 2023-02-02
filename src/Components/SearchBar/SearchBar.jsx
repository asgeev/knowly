import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '../../Hooks/useDebounce';

export const SearchBarContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'none' : 'inline-block')};
  position: sticky;
  top: 0;
  top: ${({ theme }) => theme.navBar.mobileHeight};
  background-color: ${({ theme }) => theme.color.background100};
  left: 0;
  width: 100%;
  padding: 2rem 0;

  ${({ theme }) => theme.mq.lg} {
    position: sticky;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.dividerPrimary};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 1rem;
  gap: 2rem;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.color.elementBackground};
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
