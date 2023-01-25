import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '../../Hooks/useDebounce';

export const SearchBarContainer = styled.div`
  padding: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 100rem;
`;

export const StyledSearchBar = styled.input`
  all: unset;
  width: 100%;
  padding: 1rem;
`;

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchElements, setSearchElements] = useState([]);
  const debounceSearchQuery = useCallback(useDebounce(searchQuery, 600));

  useEffect(() => {
    console.log(debounceSearchQuery);
  }, [debounceSearchQuery]);

  return (
    <SearchBarContainer>
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
