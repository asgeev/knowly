import styled from 'styled-components';

const MenuItem = styled.li`
  cursor: pointer;
  list-style: none;

  &:hover {
    color: red;
  }

  ${({ theme }) => theme.mq.lg} {
  }
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
