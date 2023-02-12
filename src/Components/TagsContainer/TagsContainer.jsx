import styled from 'styled-components';
import { TbTags } from 'react-icons/tb';

export const StyledTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  padding: 1rem 0;
  width: 100%;
`;

export const StyledTagButton = styled.button`
  all: unset;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.color.accent};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StyledTagsItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const TagsIcon = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.color.secondaryText};
`;

export const TagsContainer = ({
  tags = [
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
    // {
    //   attributes: {
    //     tag_name: 'gasgaff',
    //   },
    // },
  ],
}) => {
  return (
    <StyledTagsContainer>
      <TagsIcon>
        <TbTags size={'3rem'} />
      </TagsIcon>
      <StyledTagsItemsContainer>
        {tags.map((tag, index) => {
          console.log(tag.attributes.tag_name);
          return (
            <StyledTagButton key={index}>
              #{tag.attributes.slug}
            </StyledTagButton>
          );
        })}
      </StyledTagsItemsContainer>
    </StyledTagsContainer>
  );
};
