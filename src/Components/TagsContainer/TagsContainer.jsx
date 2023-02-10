import styled from 'styled-components';

export const StyledTagsContainer = styled.div`
  margin-top: 1.5rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TagsContainer = ({ tags = [] }) => {
  return (
    <StyledTagsContainer>
      {tags.map((item) => {
        console.log(item.attributes.tag_name);
      })}
    </StyledTagsContainer>
  );
};
