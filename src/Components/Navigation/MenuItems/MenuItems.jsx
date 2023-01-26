import styled from 'styled-components';

const MenuItem = styled.li`
  padding: 1rem 0;
  cursor: pointer;
`;

export const MenuItems = () => {
  return (
    <div>
      <ul>
        <MenuItem>Wydział Informatyki</MenuItem>
        <MenuItem>Wydział Świadczeń Opieki zdrowotnej</MenuItem>
        <MenuItem>Wydział Oragnizacyjny</MenuItem>
        <MenuItem>Wydział Finansowy</MenuItem>
        <MenuItem>el</MenuItem>
        <MenuItem>el</MenuItem>
        <MenuItem>el</MenuItem>
        <MenuItem>el</MenuItem>
        <MenuItem>el</MenuItem>
      </ul>
    </div>
  );
};
