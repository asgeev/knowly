import styled from 'styled-components';
import { TbBuildingCommunity } from 'react-icons/tb';
import Skeleton from 'react-loading-skeleton';

export const UnitNameContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.7rem;
`;

export const UnitNameIcon = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const UnitNameTiitle = styled.p`
  font-size: 1.3rem;
  margin-left: 1rem;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const UnitName = ({ unit }) => {
  const { unitName, unitShortcut } = unit?.attributes;

  return (
    <UnitNameContainer>
      <UnitNameIcon>
        <TbBuildingCommunity size={'3rem'} />
      </UnitNameIcon>
      <UnitNameTiitle>{unitName}</UnitNameTiitle>
    </UnitNameContainer>
  );
};
