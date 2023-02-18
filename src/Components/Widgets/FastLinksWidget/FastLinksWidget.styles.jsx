import styled from 'styled-components';

export const FastLinksWidgetContainer = styled.div`
  background-color: ${({ theme }) => theme.color.background100};
  border-radius: 0.6rem;
  /* min-height: 200px; */
  padding: 2rem;
`;

export const AllLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;

  p {
    color: ${({ theme }) => theme.color.secondaryText};
  }
`;
export const Link = styled.a`
  all: unset;
  padding: 0.6rem 1rem;
  color: ${({ theme }) => theme.color.secondaryText};
  background-color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.font.size.small};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primaryText};
  }
`;
